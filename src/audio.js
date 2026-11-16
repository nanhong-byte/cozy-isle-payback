// 全部音效與配樂都用 WebAudio 即時合成，不需要任何音檔
import { rand } from './state.js';

let ctx = null, master, sfx, music, noiseBuf;
const last = {};
export const A = { muted: false, tempo: 1 };

export function initAudio() {
  if (ctx) { ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = 0.85;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -14; comp.ratio.value = 6;
  master.connect(comp); comp.connect(ctx.destination);
  sfx = ctx.createGain(); sfx.gain.value = 0.9; sfx.connect(master);
  music = ctx.createGain(); music.gain.value = 0.16; music.connect(master);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  startMusic();
}
export function setMuted(m) { A.muted = m; if (master) master.gain.value = m ? 0 : 0.85; }

const ok = (name, gap) => {
  if (!ctx) return false;
  const t = performance.now();
  if (last[name] && t - last[name] < gap) return false;
  last[name] = t; return true;
};

function osc(type, f0, f1, dur, vol, delay = 0, dest = sfx) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  if (f1) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
}
function nz(dur, vol, f0, f1, type = 'lowpass', delay = 0, q = 0.7, dest = sfx) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t);
  if (f1) f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(dest);
  s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
}

export const S = {
  smg() { nz(0.08, 0.32, 3800, 700); osc('square', 190, 60, 0.07, 0.16); },
  shotgun() { nz(0.4, 0.8, 2600, 180); osc('sine', 130, 32, 0.32, 0.7); nz(0.07, 0.22, 5000, 2500, 'highpass', 0.34); nz(0.07, 0.22, 4000, 2000, 'highpass', 0.46); },
  swing(big) { nz(big ? 0.3 : 0.16, big ? 0.35 : 0.22, big ? 300 : 700, big ? 1500 : 2800, 'bandpass', 0, 2); },
  slice() { nz(0.1, 0.35, 6000, 2000, 'highpass'); S.squish(0.02); },
  squish(delay = 0) { if (!ok('sq', 45)) return; nz(0.22, 0.5, 950, 140, 'lowpass', delay, 3); osc('sine', 170, 48, 0.18, 0.3, delay); },
  splat() { if (!ok('sp', 45)) return; nz(0.32, 0.6, 1300, 90, 'lowpass', 0, 2); osc('sine', 115, 38, 0.26, 0.5); },
  boom(v = 1) { if (!ok('boom', 60)) return; nz(1.0, 0.9 * v, 1900, 55); osc('sine', 95, 26, 0.75, 0.9 * v); nz(0.14, 0.35 * v, 8000, 2000, 'highpass'); },
  slam() { nz(0.5, 0.9, 700, 50); osc('sine', 70, 24, 0.55, 1.0); osc('triangle', 220, 60, 0.12, 0.4); },
  crack() { osc('square', 900, 200, 0.06, 0.5); nz(0.08, 0.6, 3000, 800, 'bandpass', 0, 1.5); osc('sine', 180, 60, 0.15, 0.5); },
  kick() { nz(0.12, 0.5, 500, 120); osc('sine', 150, 55, 0.14, 0.5); },
  thud() { if (!ok('thud', 60)) return; nz(0.14, 0.35, 380, 90); osc('sine', 110, 50, 0.12, 0.3); },
  clank() { if (!ok('clank', 50)) return; osc('square', rand(700, 1200), 300, 0.08, 0.22); osc('triangle', rand(1800, 2600), 900, 0.12, 0.16); nz(0.1, 0.3, 5000, 1500, 'bandpass', 0, 4); },
  pop() { osc('sine', 500, 1500, 0.07, 0.4); nz(0.1, 0.3, 2000, 500); },
  whoosh() { nz(0.5, 0.3, 500, 3500, 'bandpass', 0, 1.2); },
  missile() { if (!ok('mis', 40)) return; nz(0.6, 0.3, 900, 3000, 'bandpass', 0, 1.5); osc('sawtooth', 160, 420, 0.4, 0.12); },
  sling() { osc('triangle', 220, 700, 0.12, 0.35); nz(0.12, 0.2, 1500, 4000, 'bandpass', 0, 2); },
  stretch(c) { if (!ok('str', 90)) return; osc('triangle', 140 + c * 260, 150 + c * 280, 0.09, 0.08); },
  ding() { osc('sine', 1760, 1760, 0.5, 0.25); osc('sine', 2637, 2637, 0.6, 0.18, 0.06); },
  lock() { if (!ok('lock', 70)) return; osc('square', 1400, 1400, 0.04, 0.08); },
  hole() { osc('sine', 300, 30, 1.0, 0.6); nz(1.0, 0.3, 3000, 100); },
  ignite() { if (!ok('ign', 120)) return; nz(0.3, 0.3, 800, 3000, 'bandpass', 0, 1); },
  splash() { nz(0.5, 0.5, 3000, 500, 'bandpass', 0, 0.8); },
  ui() { osc('triangle', 660, 880, 0.08, 0.2); },
  rage() { osc('sawtooth', 110, 440, 0.5, 0.35); osc('sawtooth', 165, 660, 0.5, 0.25); nz(0.6, 0.3, 500, 6000, 'bandpass', 0, 1); },
  announce(level) {
    const base = 523 * Math.pow(1.06, Math.min(level, 12));
    [0, 4, 7, 12].forEach((s, i) => osc('square', base * Math.pow(2, s / 12), 0, 0.14, 0.13, i * 0.06));
  },
  end() { [0, 4, 7, 12, 16].forEach((s, i) => osc('triangle', 392 * Math.pow(2, s / 12), 0, 0.3, 0.25, i * 0.12)); },
  scream(pitch = 1, long = false) {
    if (!ok('scr', long ? 10 : 70)) return;
    const t = ctx.currentTime, d = long ? 1.5 : rand(0.25, 0.45), f = rand(850, 1300) * pitch;
    const o = ctx.createOscillator(), g = ctx.createGain(), l = ctx.createOscillator(), lg = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(f, t);
    o.frequency.linearRampToValueAtTime(f * 1.6, t + 0.07);
    o.frequency.exponentialRampToValueAtTime(f * (long ? 0.3 : 0.75), t + d);
    l.frequency.value = 26; lg.gain.value = f * 0.07; l.connect(lg); lg.connect(o.frequency);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(sfx); o.start(t); l.start(t); o.stop(t + d + 0.05); l.stop(t + d + 0.05);
  },
};

// 持續音（電鋸、噴火、黑洞）
const loops = {};
const LOOPDEF = {
  saw(n) {
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 58;
    const l = ctx.createOscillator(); l.frequency.value = 23; const lg = ctx.createGain(); lg.gain.value = 14;
    l.connect(lg); lg.connect(o.frequency);
    const og = ctx.createGain(); og.gain.value = 0.3; o.connect(og); og.connect(n.g);
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1700; f.Q.value = 1.2;
    const sg = ctx.createGain(); sg.gain.value = 0.1; s.connect(f); f.connect(sg); sg.connect(n.g);
    o.start(); l.start(); s.start();
    n.stop = [o, l, s];
    n.set = (k) => { o.frequency.setTargetAtTime(58 + k * 55, ctx.currentTime, 0.05); sg.gain.setTargetAtTime(0.1 + k * 0.35, ctx.currentTime, 0.05); };
  },
  flame(n) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 600; f.Q.value = 0.4;
    const sg = ctx.createGain(); sg.gain.value = 0.5; s.connect(f); f.connect(sg); sg.connect(n.g);
    s.start(); n.stop = [s]; n.set = () => {};
  },
  hole(n) {
    const a = ctx.createOscillator(), b = ctx.createOscillator(); a.frequency.value = 48; b.frequency.value = 52.5; b.type = 'triangle';
    const og = ctx.createGain(); og.gain.value = 0.55; a.connect(og); b.connect(og); og.connect(n.g);
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 300; f.Q.value = 3;
    const sg = ctx.createGain(); sg.gain.value = 0.25; s.connect(f); f.connect(sg); sg.connect(n.g);
    a.start(); b.start(); s.start(); n.stop = [a, b, s]; n.set = () => {};
  },
};
export function loop(name, on, k = 0) {
  if (!ctx) return;
  let n = loops[name];
  if (on && !n) {
    n = loops[name] = { g: ctx.createGain() };
    n.g.gain.value = 0.0001; n.g.connect(sfx);
    n.g.gain.setTargetAtTime(1, ctx.currentTime, 0.03);
    LOOPDEF[name](n);
  }
  if (on && n) n.set(k);
  if (!on && n) {
    n.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.04);
    const st = n.stop, g = n.g;
    setTimeout(() => { st.forEach((x) => { try { x.stop(); } catch (e) { /* 已停止 */ } }); g.disconnect(); }, 250);
    loops[name] = null;
  }
}
export function stopAllLoops() { Object.keys(loops).forEach((k) => loop(k, false)); }

// ── 配樂：歡樂小調（反差萌的重點）──
const CHORDS = [[48, 60, 64, 67], [53, 65, 69, 72], [55, 67, 71, 74], [48, 60, 64, 67], [45, 57, 60, 64], [53, 65, 69, 72], [55, 67, 71, 74], [48, 60, 64, 67]];
const MEL = [
  76, 79, 76, 72, 74, 76, 0, 0, 77, 81, 77, 72, 74, 77, 0, 0,
  79, 83, 79, 74, 77, 79, 0, 0, 76, 79, 84, 79, 76, 72, 0, 0,
  76, 81, 76, 72, 69, 72, 0, 0, 77, 81, 84, 81, 77, 72, 0, 0,
  79, 77, 74, 71, 74, 79, 0, 0, 72, 76, 79, 84, 0, 84, 0, 0,
];
const mf = (m) => 440 * Math.pow(2, (m - 69) / 12);
let step = 0, nextT = 0;
function note(type, m, t, dur, vol) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = mf(m);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(music); o.start(t); o.stop(t + dur + 0.03);
}
function startMusic() {
  nextT = ctx.currentTime + 0.1;
  setInterval(() => {
    if (!ctx || ctx.state !== 'running') return;
    if (nextT < ctx.currentTime) nextT = ctx.currentTime + 0.05;
    while (nextT < ctx.currentTime + 0.25) {
      const e = 60 / (132 * A.tempo) / 2; // 八分音符長度
      const bar = (step >> 3) % 8, s8 = step % 8, ch = CHORDS[bar], t = nextT;
      if (s8 % 2 === 0) { // 正拍：低音＋大鼓
        note('triangle', s8 % 4 === 0 ? ch[0] : ch[0] + 7, t, e * 1.6, 0.9);
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.1);
        g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
        o.connect(g); g.connect(music); o.start(t); o.stop(t + 0.15);
      } else { // 反拍：烏克麗麗刷和弦＋鈸
        for (let i = 1; i < 4; i++) note('triangle', ch[i] + 12, t + i * 0.008, e * 0.7, 0.28);
        nz(0.04, 0.25, 8000, 6000, 'highpass', t - ctx.currentTime, 0.7, music);
      }
      const m = MEL[step % 64];
      if (m) note('sine', m + 12, t, e * 1.7, 0.5);
      step++; nextT += e;
    }
  }, 60);
}
