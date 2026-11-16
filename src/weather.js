// 天氣：打到後面會變天 → 下雨（地滑）→ 雷雨（雷會劈島民，算玩家的）
import * as THREE from 'three';
import { G, rand, pick, lerp, clamp, V, after } from './state.js';
import { FX, ring, shakeAt, sparks, flashAt, tracer } from './fx.js';
import { S, loop } from './audio.js';
import { damage } from './animals.js';
import { explodeBarrel } from './weapons.js';
import { UI } from './ui.js';

const N = 1500, BOX = 46, HGT = 26, SEG = 14;
const WX = G.wx;
const C_FOG0 = new THREE.Color(0xC7DDD0), C_FOG1 = new THREE.Color(0x66797E), C_SEA0 = new THREE.Color(0x7FC1CF), C_SEA1 = new THREE.Color(0x4C7C89);
const C_CL0 = new THREE.Color(0xFCF9F0), C_CL1 = new THREE.Color(0x6C787D), _r = new THREE.Vector3();
let rain, off, flashEl, lum = 0, boltT = 5, phase = 0, force = null, lastOp = '0';
const bolts = [];

export function initWeather() {
  off = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { off[i * 3] = rand(BOX); off[i * 3 + 1] = rand(HGT); off[i * 3 + 2] = rand(BOX); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 6), 3).setUsage(THREE.DynamicDrawUsage));
  rain = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0xE6F1F3, transparent: true, opacity: 0.5, fog: false, depthWrite: false }));
  rain.frustumCulled = false; rain.visible = false; G.scene.add(rain);
  // 閃電：面向鏡頭的鋸齒帶子
  const idx = [];
  for (let i = 0; i < SEG - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  for (let i = 0; i < 3; i++) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SEG * 6), 3).setUsage(THREE.DynamicDrawUsage)); g.setIndex(idx);
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xFFFBE0, fog: false, side: THREE.DoubleSide, transparent: true, depthWrite: false }));
    m.frustumCulled = false; m.visible = false; G.scene.add(m); bolts.push({ m, t: 0 });
  }
  flashEl = document.getElementById('flash');
}

export function resetWeather() {
  WX.rain = 0; WX.storm = 0; phase = 0; lum = 0; boltT = 5; force = null;
  if (rain) { rain.visible = false; bolts.forEach((b) => { b.t = 0; b.m.visible = false; }); applyEnv(0); }
  loop('rain', false);
}
export function setWeather(r, s) { force = r === null ? null : [r, s || 0]; if (force) WX.rain = r; }
export function skyFlash(v) { lum = Math.max(lum, v); }

function applyEnv(dt) {
  const e = G.env, k = WX.rain, d = k * 0.6 + WX.storm * 0.15, q = d / 0.75;
  lum = Math.max(0, lum - dt * 4.5);
  const b = 1 - d * 0.72 + lum * 0.5;
  e.sky.color.setRGB(b, b + d * 0.03, b + d * 0.08);
  G.scene.fog.color.copy(C_FOG0).lerp(C_FOG1, q).addScalar(lum * 0.2);
  G.scene.fog.near = lerp(110, 40, k); G.scene.fog.far = lerp(330, 160, k);
  e.hemi.intensity = 1.5 - d * 0.8 + lum * 1.6; e.sun.intensity = Math.max(0.2, 1.9 - d * 1.9);
  e.sea.color.copy(C_SEA0).lerp(C_SEA1, q);
  for (const c of G.clouds) { c.material.color.copy(C_CL0).lerp(C_CL1, q); c.scale.set(1 + k * 1.2, 0.5, 1 + k * 1.2); }
  const op = lum > 0.02 ? Math.min(0.42, lum * 0.33).toFixed(2) : '0';
  if (op !== lastOp) { lastOp = op; flashEl.style.opacity = op; }
}

// 一道雷：劈中的直接變焦炭，淋濕會導電所以還會往旁邊連鎖
export function strike(x, z, o = {}) {
  const pos = V(x, 0, z), cam = G.camera, dist = cam.position.distanceTo(pos);
  const b = bolts.find((q) => q.t <= 0) || bolts[0]; b.t = 0.2; b.m.visible = true;
  const tx = x + rand(-10, 10), tz = z + rand(-10, 10), w = clamp(dist * 0.014, 0.18, 1.3), arr = b.m.geometry.attributes.position.array;
  _r.setFromMatrixColumn(cam.matrixWorld, 0);
  for (let i = 0; i < SEG; i++) {
    const t = i / (SEG - 1), j = Math.sin(Math.PI * t) * 3.2, ww = w * (1.2 - 0.6 * t);
    const px = lerp(tx, x, t) + rand(-j, j), py = lerp(85, 0, t), pz = lerp(tz, z, t) + rand(-j, j), k = i * 6;
    arr[k] = px - _r.x * ww; arr[k + 1] = py; arr[k + 2] = pz - _r.z * ww; arr[k + 3] = px + _r.x * ww; arr[k + 4] = py; arr[k + 5] = pz + _r.z * ww;
  }
  b.m.geometry.attributes.position.needsUpdate = true;
  lum = Math.max(lum, o.small ? 0.5 : 1.3);
  ring(pos, 0.5, 7, 0.35, 0xFFF7C2); sparks(x, 0.4, z, 14); FX.decals.add(x, z, rand(1.3, 1.9), 0x24211A, true); flashAt(V(x, 2, z), 320);
  shakeAt(pos, o.small ? 0.3 : 0.6, 90); S.zap(); S.thunder(dist < 45);
  let kills = 0; const used = new Set();
  for (const a of G.animals.slice()) {
    const p = a.root.position, r = a.boss ? a.H * 0.4 : 2.6;
    if ((p.x - x) ** 2 + (p.z - z) ** 2 > r * r) continue;
    used.add(a); if (damage(a, a.boss ? 380 : 999, { mode: 'zap', weapon: 'thunder', bossCap: 380 })) kills++;
  }
  let cur = V(x, 1, z); const jumps = o.chain === undefined ? 5 : o.chain;
  for (let i = 0; i < jumps; i++) {
    let best = null, bd = 49;
    for (const a of G.animals) { if (used.has(a) || a.boss || a.state === 'drop') continue; const p = a.root.position, d = (p.x - cur.x) ** 2 + (p.z - cur.z) ** 2; if (d < bd) { bd = d; best = a; } }
    if (!best) break;
    used.add(best); const from = cur.clone(), to = best.root.position.clone(); to.y += best.H * 0.5; const tgt = best;
    after(0.07 * (i + 1), () => {
      if (tgt.dead) return;
      tracer(from, to, 0xFFF7C2, 0.12); sparks(to.x, to.y, to.z, 6); S.zap();
      if (damage(tgt, 999, { mode: 'zap', weapon: 'thunder', style: 'chain' })) kills++;
    });
    cur = to;
  }
  for (const br of G.barrels) if (br.alive && (br.x - x) ** 2 + (br.z - z) ** 2 < 9) explodeBarrel(br);
  after(0.6, () => { if (kills >= 3 && G.onMulti) G.onMulti(kills, pos, '連鎖電擊'); });
}

function stormStrike() {
  const P = G.player.pos, r = Math.random();
  if (r < 0.2) { const bs = G.barrels.filter((b) => b.alive && Math.hypot(b.x - P.x, b.z - P.z) < 50); if (bs.length) { const b = pick(bs); strike(b.x, b.z); return; } }
  const near = G.animals.filter((a) => a.dP < 55 && a.state !== 'drop');
  if (r < 0.85 && near.length) { const a = pick(near); strike(a.root.position.x, a.root.position.z); return; }
  const an = rand(6.28), d = rand(12, 45); strike(P.x + Math.cos(an) * d, P.z + Math.sin(an) * d);
}

export function updateWeather(dt, wdt, idle = false) {
  if (!idle) {
    const T = G.mode === 'score' ? G.elapsed : G.elapsed % 300;
    let tr = T > 60 ? Math.min(1, (T - 60) / 25) : 0, ts = T > 120 ? Math.min(1, (T - 120) / 8) : 0;
    if (G.mode === 'free' && T > 240) { tr = Math.max(0, 1 - (T - 240) / 30); if (tr < 0.6) ts = 0; }
    if (force) { tr = force[0]; ts = force[1]; }
    WX.rain += (tr - WX.rain) * Math.min(1, dt * 0.9); WX.storm = ts;
    const ph = ts > 0 ? 2 : tr > 0 ? 1 : 0;
    if (ph !== phase) {
      if (ph === 1 && phase === 0) UI.announce('變天了…', '地板濕滑，島民會自己跌倒');
      else if (ph === 2) { UI.announce('雷雨交加！', '被雷劈到的都算你的', true); boltT = 1.5; }
      else if (ph === 0) UI.announce('放晴了', '下一場雨很快就來');
      phase = ph;
    }
    if (ph === 2) { boltT -= wdt; if (boltT <= 0) { boltT = rand(3.5, 7); stormStrike(); } }
    loop('rain', WX.rain > 0.03, WX.rain);
  }
  applyEnv(dt);
  for (const b of bolts) { if (b.t > 0) { b.t -= dt; b.m.material.opacity = Math.random() < 0.3 ? 0.35 : 1; if (b.t <= 0) b.m.visible = false; } }
  const n = Math.floor(N * WX.rain); rain.visible = n > 0;
  if (!n) return;
  const cam = G.camera.position, a = rain.geometry.attributes.position.array, y0 = Math.max(0, cam.y - 9), sp = 36, wx = 5, wz = 2, L = 0.036;
  for (let i = 0; i < n; i++) {
    const j = i * 3, k = i * 6;
    off[j + 1] -= sp * wdt; off[j] += wx * wdt; off[j + 2] += wz * wdt;
    if (off[j + 1] < 0) { off[j + 1] += HGT; off[j] = rand(BOX); off[j + 2] = rand(BOX); }
    const x = cam.x + ((off[j] - cam.x + BOX / 2) % BOX + BOX) % BOX - BOX / 2, z = cam.z + ((off[j + 2] - cam.z + BOX / 2) % BOX + BOX) % BOX - BOX / 2, y = y0 + off[j + 1];
    a[k] = x; a[k + 1] = y; a[k + 2] = z; a[k + 3] = x - wx * L; a[k + 4] = y + sp * L; a[k + 5] = z - wz * L;
  }
  rain.geometry.setDrawRange(0, n * 2); rain.geometry.attributes.position.needsUpdate = true;
  rain.material.opacity = 0.3 + 0.3 * WX.rain;
  // 地面水花
  const P = G.player.pos; let c = WX.rain * 100 * wdt;
  while (c > 0) {
    if (c >= 1 || Math.random() < c) { const an = rand(6.28), r = Math.sqrt(Math.random()) * 20; FX.puffs.spawn(P.x + Math.cos(an) * r, 0.06, P.z + Math.sin(an) * r, 0, 0.5, 0, 0.05, 0.22, 0.16, 0xF4FAFA, 0xC4D8DB, 0, 1); }
    c -= 1;
  }
}
