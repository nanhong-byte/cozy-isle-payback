// 全部音效與配樂都用 WebAudio 即時合成，不需要任何音檔
import { rand } from './state.js';

let ctx = null, master, sfx, music, noiseBuf;
const last = {};
export const A = { muted: false, tempo: 1, wail: true, hold: false };
let voices = 0;

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

// ── 慘叫版：鋸齒波過三個共振峰（「啊」的嘴型），聽起來像卡通人聲 ──
function voice(pts, dur, o = {}) {
  if (!ctx || voices >= 7) return;
  voices++; setTimeout(() => voices--, (dur + (o.delay || 0)) * 1000 + 80);
  const t = ctx.currentTime + (o.delay || 0), vol = o.vol || 0.5, f0 = o.f0, k = o.form || 1;
  const src = ctx.createOscillator(); src.type = 'sawtooth';
  src.frequency.setValueAtTime(f0 * pts[0][1], t);
  for (let i = 1; i < pts.length; i++) src.frequency.exponentialRampToValueAtTime(f0 * pts[i][1], t + dur * pts[i][0]);
  const l = ctx.createOscillator(), lg = ctx.createGain(); l.frequency.value = o.vib || 9;
  lg.gain.setValueAtTime(f0 * 0.01, t); lg.gain.linearRampToValueAtTime(f0 * (o.vibAmt === undefined ? 0.06 : o.vibAmt), t + dur);
  l.connect(lg); lg.connect(src.frequency);
  const out = ctx.createGain();
  out.gain.setValueAtTime(0.0001, t); out.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  out.gain.setValueAtTime(vol, t + dur * (o.hold || 0.7)); out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  [[850, 1.0, 5], [1350, 0.7, 7], [2800, 0.35, 8]].forEach(([f, g, q]) => {
    const b = ctx.createBiquadFilter(); b.type = 'bandpass'; b.frequency.value = f * k; b.Q.value = q;
    const bg = ctx.createGain(); bg.gain.value = g; src.connect(b); b.connect(bg); bg.connect(out);
  });
  const stop = [src, l];
  if (o.trem) { // 咕嚕咕嚕的斷氣聲
    const tg = ctx.createGain(); tg.gain.value = 0.55; const tl = ctx.createOscillator(); tl.type = 'square'; tl.frequency.value = o.trem;
    const tlg = ctx.createGain(); tlg.gain.value = 0.45; tl.connect(tlg); tlg.connect(tg.gain); out.connect(tg); tg.connect(sfx); tl.start(t); stop.push(tl);
  } else out.connect(sfx);
  src.start(t); l.start(t); stop.forEach((x) => x.stop(t + dur + 0.05));
  nz(dur * 0.8, vol * 0.22, 2500 * k, 1800 * k, 'bandpass', o.delay || 0, 1.5);
}
const WAILS = {
  yelp: () => [[[0, 1], [0.25, 1.7], [1, 1.2]], rand(0.22, 0.34), {}],
  long: () => [[[0, 1], [0.08, 1.8], [0.5, 1.65], [1, 1.25]], rand(1.0, 1.5), { vibAmt: 0.09, vib: 11 }],
  fall: () => [[[0, 1.2], [0.1, 2.0], [1, 0.55]], rand(1.3, 1.8), { vibAmt: 0.05 }],
  rise: () => [[[0, 0.9], [1, 2.6]], 1.1, { vibAmt: 0.1, vib: 14 }],
  cut: () => [[[0, 1.3], [0.5, 2.0], [1, 1.9]], 0.2, { hold: 0.95 }],
  gurgle: () => [[[0, 1.3], [0.2, 1.0], [1, 0.5]], rand(0.7, 1.0), { trem: 17, vibAmt: 0.02 }],
  squeak: () => [[[0, 2.2], [1, 3.2]], 0.09, { hold: 0.9 }],
  roar: () => [[[0, 0.8], [0.15, 1.3], [1, 0.6]], 2.2, { vibAmt: 0.12, vib: 7, vol: 0.75 }],
};
S.wail = (kind, pitch = 1, robot = false) => {
  if (!ctx || !ok('wl' + kind, kind === 'yelp' || kind === 'squeak' ? 60 : 110)) return;
  if (robot) { // 機器人：一串往下掉的嗶嗶聲
    const n = kind === 'yelp' || kind === 'squeak' || kind === 'cut' ? 2 : 6;
    for (let i = 0; i < n; i++) osc('square', (950 - i * 110) * rand(0.9, 1.1), 700 - i * 100, 0.07, 0.16, i * 0.075);
    nz(0.3, 0.2, 4000, 800, 'bandpass', 0, 6); return;
  }
  const w = (WAILS[kind] || WAILS.yelp)(), f0 = 520 * pitch * rand(0.92, 1.1), form = 0.8 + pitch * 0.35;
  voice(w[0], w[1], Object.assign({ f0, form }, w[2]));
  if (kind === 'cut') voice([[0, 1.2], [1, 0.5]], 0.6, { f0: f0 * 0.8, form, trem: 19, delay: 0.22, vol: 0.3 });
};
// 統一入口：慘叫版開著走新合成；關著走原本的短叫聲（legacy=false 表示原版這裡不叫）
S.cry = (kind, pitch = 1, robot = false, legacy = true) => { if (A.wail) S.wail(kind, pitch, robot); else if (legacy) S.scream(pitch, kind !== 'yelp'); };
S.thunder = (near = true) => {
  if (!ok('thun', 250)) return;
  if (near) { nz(0.2, 0.9, 7000, 1200, 'highpass'); osc('square', 1400, 90, 0.12, 0.4); }
  nz(2.6, near ? 0.9 : 0.45, 420, 40); osc('sine', 72, 22, 1.8, near ? 0.8 : 0.4); nz(1.6, 0.35, 220, 50, 'lowpass', 0.6);
};
S.zap = () => { if (!ok('zap', 50)) return; osc('sawtooth', 1900, 180, 0.12, 0.28); nz(0.14, 0.45, 7000, 3000, 'highpass'); };
S.pickup = () => { [0, 4, 7, 12, 16, 19].forEach((s, i) => osc('triangle', 587 * Math.pow(2, s / 12), 0, 0.16, 0.24, i * 0.055)); };
S.siren = () => { for (let i = 0; i < 6; i++) osc('sawtooth', 420, 860, 0.46, 0.22, i * 0.5); };
S.tick = () => { osc('square', 1200, 1200, 0.03, 0.12); };
S.honk = () => { if (!ok('honk', 200)) return; osc('square', 392, 392, 0.3, 0.2); osc('square', 494, 494, 0.3, 0.2); };
S.ice = () => { if (!ok('ice', 60)) return; osc('sine', 2600, 1700, 0.12, 0.2); osc('triangle', 3400, 2200, 0.16, 0.14, 0.03); nz(0.18, 0.3, 9000, 4000, 'highpass'); };
S.boing = () => { if (!ok('boing', 90)) return; osc('sine', 180, 520, 0.16, 0.4); };
S.cannon = (c = 0) => { osc('square', 900 - c * 400, 160, 0.14 + c * 0.2, 0.25 + c * 0.2); nz(0.12 + c * 0.3, 0.3 + c * 0.3, 3000, 400); };
S.beam = (d = 2.6) => { osc('sawtooth', 180, 720, d, 0.22); osc('sine', 90, 60, d, 0.5); nz(d, 0.5, 700, 3200, 'bandpass', 0, 0.8); };
S.rise = () => { osc('triangle', 220, 880, 0.5, 0.25); nz(0.5, 0.2, 400, 4000, 'bandpass', 0, 1); };

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
  rain(n) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1400;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 7500;
    const sg = ctx.createGain(); sg.gain.value = 0.05; s.connect(hp); hp.connect(lp); lp.connect(sg); sg.connect(n.g);
    s.start(); n.stop = [s]; n.set = (k) => { sg.gain.setTargetAtTime(0.04 + k * 0.3, ctx.currentTime, 0.3); };
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

// ── 公司跑車專用曲（原創，150 BPM 熱血飆車風，約 24 秒，最後 4 秒淡出）──
// 拿到跑車就蓋掉原本配樂；暫停時停住、繼續時接著放；跑車結束或回主選單就收掉。
const DR_BPM = 150, DR_BARS = 15, DR_FADE = 2.5; // 15 小節 × 1.6 秒 = 24 秒；最後 2.5 小節（4 秒）淡出
const DR_ROOT = [45, 41, 43, 48, 45, 41, 43, 40]; // Am F G C Am F G E
const DR_CH = [[57, 60, 64], [53, 57, 60], [55, 59, 62], [55, 60, 64], [57, 60, 64], [53, 57, 60], [55, 59, 62], [56, 59, 64]];
const DR_MEL = [
  81, 0, 79, 81, 84, 81, 79, 76, 77, 0, 76, 77, 81, 77, 76, 72,
  79, 0, 77, 79, 83, 79, 77, 74, 76, 79, 84, 0, 83, 0, 79, 0,
  81, 81, 84, 81, 88, 0, 86, 84, 81, 0, 84, 0, 89, 88, 86, 84,
  83, 0, 86, 0, 91, 0, 86, 83, 80, 0, 83, 0, 88, 0, 86, 83,
];
let drive = null, dTimer = 0;
function dNote(type, m, t, dur, vol, dest, det = 0) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = mf(m); o.detune.value = det;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.03);
}
export function carSong(on) {
  if (!ctx) return;
  if (!on) {
    if (!drive) return;
    clearInterval(dTimer); const d = drive; drive = null; A.hold = false;
    d.out.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.15); setTimeout(() => d.out.disconnect(), 1500);
    music.gain.setTargetAtTime(0.16, ctx.currentTime, 0.4); return;
  }
  carSong(false);
  const out = ctx.createGain(); out.gain.value = 0.5; out.connect(master);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 4; lp.connect(out); // 貝斯
  drive = { out, lp, step: 0, next: ctx.currentTime + 0.05 };
  music.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08);
  const total = DR_BARS * 16, fadeFrom = (DR_BARS - DR_FADE) * 16, s16 = 60 / DR_BPM / 4;
  dTimer = setInterval(() => {
    const d = drive; if (!d || ctx.state !== 'running') return;
    if (A.hold) { d.next = ctx.currentTime + 0.05; return; }
    if (d.next < ctx.currentTime) d.next = ctx.currentTime + 0.03;
    while (d.next < ctx.currentTime + 0.2) {
      const i = d.step, t = d.next;
      if (i >= total) { const dd = drive; drive = null; clearInterval(dTimer); setTimeout(() => dd.out.disconnect(), 800); music.gain.setTargetAtTime(0.16, ctx.currentTime, 0.6); return; }
      const k = i < fadeFrom ? 1 : Math.max(0.0005, 1 - (i - fadeFrom) / (total - fadeFrom)) ** 1.5; // 淡出
      const intro = i < 16; // 第一小節：只有鼓跟往上衝的音，像踩油門
      const bar = intro ? 0 : ((i >> 4) - 1) % 8, s = i % 16, ch = DR_CH[bar];
      if (s % 4 === 0) { // 大鼓四拍
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
        g.gain.setValueAtTime(0.9 * k, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
        o.connect(g); g.connect(d.out); o.start(t); o.stop(t + 0.18);
      }
      if (s === 4 || s === 12) nz(0.14, 0.5 * k, 2600, 900, 'bandpass', t - ctx.currentTime, 0.8, d.out); // 小鼓
      if (s % 2 === 1) nz(0.03, 0.22 * k, 9000, 7000, 'highpass', t - ctx.currentTime, 0.7, d.out); // 開放鈸
      if (intro) {
        if (s === 0) { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sawtooth';
          o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(880, t + s16 * 16);
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + s16 * 15); g.gain.exponentialRampToValueAtTime(0.0001, t + s16 * 16);
          o.connect(g); g.connect(d.out); o.start(t); o.stop(t + s16 * 16 + 0.05); }
      } else {
        const r = DR_ROOT[bar] - 12 + (s % 2 ? 12 : 0); // 八度跳躍貝斯（飆車曲的招牌）
        dNote('sawtooth', r, t, s16 * 0.9, 0.55 * k, d.lp);
        if (s === 2 || s === 6 || s === 10 || s === 14) for (const m of ch) { dNote('sawtooth', m, t, s16 * 1.4, 0.07 * k, d.out, -8); dNote('sawtooth', m, t, s16 * 1.4, 0.07 * k, d.out, 8); }
        if (s % 2 === 0) { const m = DR_MEL[bar * 8 + (s >> 1)]; if (m) { dNote('square', m, t, s16 * 1.8, 0.13 * k, d.out, -6); dNote('sawtooth', m, t, s16 * 1.8, 0.1 * k, d.out, 7); } }
      }
      d.step++; d.next += s16;
    }
  }, 50);
}
