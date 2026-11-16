// 特效：血滴、血漬、肉塊、眼珠、骨頭、卡通煙火、衝擊波、彈道、畫面噴血、浮動文字
import * as THREE from 'three';
import { G, R_ISLAND, BLOOD, OIL, rand, pick, clamp } from './state.js';
import { S } from './audio.js';

const _d = new THREE.Object3D(), _c = new THREE.Color(), _v = new THREE.Vector3();
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
export const FX = {};

// ── 實體碎塊（InstancedMesh ＋ 簡易物理）──
class Debris {
  constructor(geo, mat, max, o = {}) {
    this.max = max; this.cur = 0;
    this.o = Object.assign({ g: 26, bounce: 0.45, drag: 0.15, die: false, onGround: null }, o);
    this.mesh = new THREE.InstancedMesh(geo, mat, max);
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let i = 0; i < max; i++) { this.mesh.setMatrixAt(i, ZERO); this.mesh.setColorAt(i, _c.set(0xffffff)); }
    this.p = new Float32Array(max * 3); this.v = new Float32Array(max * 3);
    this.r = new Float32Array(max * 3); this.av = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.size = new Float32Array(max); this.rest = new Uint8Array(max);
    G.scene.add(this.mesh);
  }
  spawn(x, y, z, vx, vy, vz, size, life, color) {
    const i = this.cur; this.cur = (this.cur + 1) % this.max; const j = i * 3;
    this.p[j] = x; this.p[j + 1] = y; this.p[j + 2] = z;
    this.v[j] = vx; this.v[j + 1] = vy; this.v[j + 2] = vz;
    this.r[j] = rand(6.28); this.r[j + 1] = rand(6.28); this.r[j + 2] = rand(6.28);
    this.av[j] = rand(-12, 12); this.av[j + 1] = rand(-12, 12); this.av[j + 2] = rand(-12, 12);
    this.life[i] = life; this.size[i] = size; this.rest[i] = 0;
    if (color !== undefined) { this.mesh.setColorAt(i, _c.set(color)); this.mesh.instanceColor.needsUpdate = true; }
    return i;
  }
  clear() { this.life.fill(0); for (let i = 0; i < this.max; i++) this.mesh.setMatrixAt(i, ZERO); this.mesh.instanceMatrix.needsUpdate = true; }
  update(dt) {
    const { p, v, r, av, life, size, rest, o, mesh } = this;
    let dirty = false;
    for (let i = 0; i < this.max; i++) {
      if (life[i] <= 0) continue;
      dirty = true;
      life[i] -= dt;
      if (life[i] <= 0) { mesh.setMatrixAt(i, ZERO); continue; }
      const j = i * 3, rad = size[i] * 0.5;
      if (!rest[i]) {
        v[j + 1] -= o.g * dt;
        const k = 1 - o.drag * dt; v[j] *= k; v[j + 2] *= k;
        p[j] += v[j] * dt; p[j + 1] += v[j + 1] * dt; p[j + 2] += v[j + 2] * dt;
        r[j] += av[j] * dt; r[j + 1] += av[j + 1] * dt; r[j + 2] += av[j + 2] * dt;
        if (p[j + 1] < rad) {
          p[j + 1] = rad;
          if (o.onGround) o.onGround(p[j], p[j + 2], v[j + 1], size[i], i, this);
          if (o.die) { life[i] = 0; mesh.setMatrixAt(i, ZERO); continue; }
          if (v[j + 1] < -2.5) {
            v[j + 1] = -v[j + 1] * o.bounce; v[j] *= 0.7; v[j + 2] *= 0.7;
            av[j] *= 0.6; av[j + 1] *= 0.6; av[j + 2] *= 0.6;
          } else {
            v[j + 1] = 0; v[j] *= 0.6; v[j + 2] *= 0.6;
            if (Math.abs(v[j]) + Math.abs(v[j + 2]) < 0.4) rest[i] = 1;
          }
        }
      } else if (life[i] > 0.4) continue;
      _d.position.set(p[j], p[j + 1], p[j + 2]);
      _d.rotation.set(r[j], r[j + 1], r[j + 2]);
      _d.scale.setScalar(size[i] * Math.min(1, life[i] / 0.4));
      _d.updateMatrix(); mesh.setMatrixAt(i, _d.matrix);
    }
    if (dirty) mesh.instanceMatrix.needsUpdate = true;
  }
}

// ── 地面血漬（硬邊卡通）──
function splatTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'); x.fillStyle = '#fff';
  x.beginPath();
  const n = 14;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2, rr = 62 + Math.sin(i * 2.7) * 14 + Math.random() * 16;
    const px = 128 + Math.cos(a) * rr, py = 128 + Math.sin(a) * rr;
    if (i === 0) x.moveTo(px, py); else x.quadraticCurveTo(128 + Math.cos(a - 0.22) * (rr + 22), 128 + Math.sin(a - 0.22) * (rr + 22), px, py);
  }
  x.fill();
  for (let i = 0; i < 16; i++) {
    const a = Math.random() * 6.28, d = 84 + Math.random() * 34, s = 3 + Math.random() * 10;
    x.beginPath(); x.arc(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, s, 0, 6.28); x.fill();
  }
  return new THREE.CanvasTexture(c);
}
class Decals {
  constructor(max) {
    this.max = max; this.cur = 0;
    const geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ map: splatTexture(), alphaTest: 0.5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    this.mesh = new THREE.InstancedMesh(geo, mat, max);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    for (let i = 0; i < max; i++) { this.mesh.setMatrixAt(i, ZERO); this.mesh.setColorAt(i, _c.set(0xffffff)); }
    this.d = new Float32Array(max * 5); // x,z,rot,size,target
    this.grow = new Set();
    G.scene.add(this.mesh);
  }
  add(x, z, size, color, instant) {
    if (x * x + z * z > (R_ISLAND + 7) * (R_ISLAND + 7)) return;
    const i = this.cur; this.cur = (this.cur + 1) % this.max; const j = i * 5;
    this.d[j] = x; this.d[j + 1] = z; this.d[j + 2] = rand(6.28); this.d[j + 3] = instant ? size : size * 0.25; this.d[j + 4] = size;
    this.mesh.setColorAt(i, _c.set(color)); this.mesh.instanceColor.needsUpdate = true;
    this.grow.add(i); this.set(i);
  }
  set(i) {
    const j = i * 5;
    _d.position.set(this.d[j], 0.03 + (i % 40) * 0.0006, this.d[j + 1]);
    _d.rotation.set(0, this.d[j + 2], 0); _d.scale.setScalar(this.d[j + 3]);
    _d.updateMatrix(); this.mesh.setMatrixAt(i, _d.matrix); this.mesh.instanceMatrix.needsUpdate = true;
  }
  clear() { this.grow.clear(); for (let i = 0; i < this.max; i++) this.mesh.setMatrixAt(i, ZERO); this.mesh.instanceMatrix.needsUpdate = true; }
  update(dt) {
    for (const i of this.grow) {
      const j = i * 5; this.d[j + 3] += (this.d[j + 4] - this.d[j + 3]) * Math.min(1, dt * 7);
      if (this.d[j + 4] - this.d[j + 3] < 0.02) this.grow.delete(i);
      this.set(i);
    }
  }
}

// ── 卡通煙團（硬邊圓點，隨時間變色縮放）──
class Puffs {
  constructor(max) {
    this.max = max; this.cur = 0;
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    x.fillStyle = '#cfcfcf'; x.beginPath(); x.arc(32, 32, 31, 0, 6.28); x.fill();
    x.fillStyle = '#fff'; x.beginPath(); x.arc(30, 28, 27, 0, 6.28); x.fill();
    const tex = new THREE.CanvasTexture(c);
    this.geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.sz = new Float32Array(max);
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('col', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('size', new THREE.BufferAttribute(this.sz, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 500 }, maxPx: { value: 260 } },
      vertexShader: 'attribute float size; attribute vec3 col; varying vec3 vCol; uniform float scale; uniform float maxPx; void main(){ vCol=col; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=min(maxPx,size*scale/max(0.1,-mv.z)); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'uniform sampler2D map; varying vec3 vCol; void main(){ vec4 t=texture2D(map,gl_PointCoord); if(t.a<0.5) discard; gl_FragColor=vec4(vCol*t.rgb,1.0);\n#include <colorspace_fragment>\n}',
    });
    this.pts = new THREE.Points(this.geo, this.mat); this.pts.frustumCulled = false;
    this.v = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.s0 = new Float32Array(max); this.s1 = new Float32Array(max);
    this.c = new Float32Array(max * 6); this.rise = new Float32Array(max); this.drag = new Float32Array(max);
    G.scene.add(this.pts);
  }
  spawn(x, y, z, vx, vy, vz, s0, s1, life, c0, c1, rise = 0, drag = 2) {
    const i = this.cur; this.cur = (this.cur + 1) % this.max; const j = i * 3, k = i * 6;
    this.pos[j] = x; this.pos[j + 1] = y; this.pos[j + 2] = z;
    this.v[j] = vx; this.v[j + 1] = vy; this.v[j + 2] = vz;
    this.life[i] = this.maxLife[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.rise[i] = rise; this.drag[i] = drag;
    _c.set(c0); this.c[k] = _c.r; this.c[k + 1] = _c.g; this.c[k + 2] = _c.b;
    _c.set(c1 === undefined ? c0 : c1); this.c[k + 3] = _c.r; this.c[k + 4] = _c.g; this.c[k + 5] = _c.b;
  }
  clear() { this.life.fill(0); this.sz.fill(0); this.geo.attributes.size.needsUpdate = true; }
  update(dt) {
    const { pos, v, life, maxLife, s0, s1, c, col, sz } = this;
    for (let i = 0; i < this.max; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      if (life[i] <= 0) { sz[i] = 0; continue; }
      const j = i * 3, k = i * 6, t = 1 - life[i] / maxLife[i];
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      v[j] *= dr; v[j + 1] = v[j + 1] * dr + this.rise[i] * dt; v[j + 2] *= dr;
      pos[j] += v[j] * dt; pos[j + 1] += v[j + 1] * dt; pos[j + 2] += v[j + 2] * dt;
      const grow = Math.min(1, t / 0.25), fade = t > 0.6 ? 1 - (t - 0.6) / 0.4 : 1;
      sz[i] = (s0[i] + (s1[i] - s0[i]) * grow) * fade;
      col[j] = c[k] + (c[k + 3] - c[k]) * t; col[j + 1] = c[k + 1] + (c[k + 4] - c[k + 1]) * t; col[j + 2] = c[k + 2] + (c[k + 5] - c[k + 2]) * t;
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.col.needsUpdate = true; this.geo.attributes.size.needsUpdate = true;
  }
}

// ── 初始化 ──
const rings = [], tracers = [];
let flash, labelBox, goreBox;
const labels = [];

export function initFX() {
  const basic = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const lam = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
  FX.decals = new Decals(700);
  FX.blood = new Debris(new THREE.IcosahedronGeometry(0.5, 0), basic, 1400, {
    g: 24, drag: 0.4, die: true,
    onGround: (x, z, vy, size) => { if (Math.random() < 0.34) FX.decals.add(x, z, size * rand(3.5, 8), FX._bc || pick(BLOOD), true); },
  });
  FX.oil = new Debris(new THREE.IcosahedronGeometry(0.5, 0), basic, 300, {
    g: 24, drag: 0.4, die: true,
    onGround: (x, z, vy, size) => { if (Math.random() < 0.4) FX.decals.add(x, z, size * rand(3.5, 8), pick(OIL), true); },
  });
  FX.meat = new Debris(new THREE.IcosahedronGeometry(0.5, 0), lam, 320, {
    bounce: 0.42,
    onGround: (x, z, vy, size) => { if (vy < -3) { FX.decals.add(x, z, size * rand(2, 4), pick(BLOOD), true); S.squish(); } },
  });
  FX.scrap = new Debris(new THREE.BoxGeometry(1, 0.6, 0.8), lam, 260, { bounce: 0.5, onGround: (x, z, vy) => { if (vy < -6) S.clank(); } });
  FX.bone = new Debris(new THREE.CapsuleGeometry(0.22, 0.9, 2, 6), new THREE.MeshLambertMaterial({ color: 0xF4F1E8 }), 90, { bounce: 0.5 });
  // 眼珠：白球＋黑瞳孔貼圖
  const ec = document.createElement('canvas'); ec.width = 64; ec.height = 32; const ex = ec.getContext('2d');
  ex.fillStyle = '#F8F4E6'; ex.fillRect(0, 0, 64, 32);
  ex.fillStyle = '#1B1B14'; ex.beginPath(); ex.arc(32, 16, 8, 0, 6.28); ex.fill();
  ex.fillStyle = '#F8F4E6'; ex.beginPath(); ex.arc(35, 13, 2.4, 0, 6.28); ex.fill();
  const et = new THREE.CanvasTexture(ec); et.colorSpace = THREE.SRGBColorSpace;
  FX.eye = new Debris(new THREE.SphereGeometry(0.5, 12, 8), new THREE.MeshBasicMaterial({ map: et }), 80, { bounce: 0.72, drag: 0.05 });
  FX.puffs = new Puffs(1500);

  for (let i = 0; i < 14; i++) {
    const m = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
    m.visible = false; G.scene.add(m); rings.push({ m, t: 0, life: 0, r0: 0, r1: 1 });
  }
  const tg = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 48; i++) {
    const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xFFE58A }));
    m.visible = false; G.scene.add(m); tracers.push({ m, life: 0 });
  }
  flash = new THREE.PointLight(0xFFC060, 0, 40, 1.4); G.scene.add(flash);
  labelBox = document.getElementById('labels'); goreBox = document.getElementById('gore');
  resizeFX();
}
export function resizeFX() {
  if (!FX.puffs) return;
  const h = G.renderer.domElement.height;
  FX.puffs.mat.uniforms.scale.value = h / (2 * Math.tan((G.camera.fov * Math.PI) / 360));
  FX.puffs.mat.uniforms.maxPx.value = h * 0.26;
}
export function clearFX() {
  ['blood', 'oil', 'meat', 'scrap', 'bone', 'eye', 'puffs', 'decals'].forEach((k) => FX[k].clear());
  labels.forEach((l) => l.el.remove()); labels.length = 0;
  goreBox.innerHTML = '';
}

export function updateFX(wdt, dt) {
  FX.blood.update(wdt); FX.oil.update(wdt); FX.meat.update(wdt); FX.scrap.update(wdt); FX.bone.update(wdt); FX.eye.update(wdt);
  FX.puffs.update(wdt); FX.decals.update(wdt);
  for (const r of rings) {
    if (r.life <= 0) continue;
    r.t += wdt; const k = r.t / r.life;
    if (k >= 1) { r.life = 0; r.m.visible = false; continue; }
    const e = 1 - (1 - k) * (1 - k); r.m.scale.setScalar(r.r0 + (r.r1 - r.r0) * e); r.m.material.opacity = 1 - k;
  }
  for (const t of tracers) { if (t.life > 0) { t.life -= dt; if (t.life <= 0) t.m.visible = false; } }
  if (flash.intensity > 0) flash.intensity = Math.max(0, flash.intensity - dt * 900);
  G.trauma = Math.max(0, G.trauma - dt * 1.7);
  updateLabels(dt);
}

// ── 對外小工具 ──
export function shake(a) { G.trauma = Math.min(1, G.trauma + a); }
export function shakeAt(pos, a, range = 45) {
  const d = _v.copy(pos).sub(G.camera.position).length();
  if (d < range) shake(a * (1 - d / range));
}
export function ring(pos, r0, r1, life, color = 0xFCF9F0) {
  const r = rings.find((x) => x.life <= 0) || rings[0];
  r.m.position.set(pos.x, Math.max(0.08, pos.y), pos.z); r.m.material.color.set(color);
  r.m.visible = true; r.t = 0; r.life = life; r.r0 = r0; r.r1 = r1; r.m.scale.setScalar(r0);
}
export function tracer(a, b, color = 0xFFE58A, w = 0.035, life = 0.055) {
  const t = tracers.find((x) => x.life <= 0) || tracers[0];
  const len = a.distanceTo(b);
  t.m.position.copy(a).add(b).multiplyScalar(0.5); t.m.lookAt(b); t.m.scale.set(w, w, len);
  t.m.material.color.set(color); t.m.visible = true; t.life = life;
}
// 噴血：方向 (dx,dy,dz)×speed，再加上隨機散射
export function blood(x, y, z, dx, dy, dz, n, speed, oil = false, spread = 0.65) {
  const pool = oil ? FX.oil : FX.blood, cols = oil ? OIL : BLOOD;
  for (let i = 0; i < n; i++) {
    const s = speed * rand(0.35, 1.1);
    pool.spawn(x + rand(-0.15, 0.15), y + rand(-0.15, 0.15), z + rand(-0.15, 0.15),
      dx * s + rand(-1, 1) * speed * spread, dy * s + rand(-0.4, 1) * speed * spread, dz * s + rand(-1, 1) * speed * spread,
      rand(0.07, 0.2), rand(1.5, 3), pick(cols));
  }
}
export function mist(x, y, z, n = 6, oil = false) {
  for (let i = 0; i < n; i++) FX.puffs.spawn(x + rand(-0.3, 0.3), y + rand(-0.3, 0.3), z + rand(-0.3, 0.3), rand(-2.5, 2.5), rand(0, 3), rand(-2.5, 2.5), 0.3, rand(0.7, 1.5), rand(0.3, 0.6), oil ? 0x3a3a30 : 0xE23B2E, oil ? 0x151512 : 0x8E120C, 0, 3);
}
export function dust(x, y, z, n = 8, size = 1, col = 0xE8D9B5) {
  for (let i = 0; i < n; i++) { const a = rand(6.28), s = rand(1.5, 5) * size; FX.puffs.spawn(x, y + 0.2, z, Math.cos(a) * s, rand(0.5, 2.5), Math.sin(a) * s, 0.3 * size, rand(0.8, 1.6) * size, rand(0.4, 0.8), col, 0xF7F1DC, 0.5, 3); }
}
export function boomFX(pos, R = 6, loud = 1) {
  const x = pos.x, y = Math.max(0.4, pos.y), z = pos.z, k = R / 6;
  for (let i = 0; i < 16; i++) { const a = rand(6.28), e = rand(-0.2, 1.2), s = rand(2, 9) * k; FX.puffs.spawn(x, y, z, Math.cos(a) * Math.cos(e) * s, Math.sin(e) * s + 2, Math.sin(a) * Math.cos(e) * s, 0.8 * k, rand(1.8, 3.4) * k, rand(0.35, 0.65), 0xFFF2B0, 0xE8742A, 1, 2.5); }
  for (let i = 0; i < 10; i++) { const a = rand(6.28), s = rand(1, 5) * k; FX.puffs.spawn(x, y + 0.5, z, Math.cos(a) * s, rand(2, 6) * k, Math.sin(a) * s, 0.8 * k, rand(2, 3.6) * k, rand(0.8, 1.5), 0x6B6455, 0x2E2A1F, 1.5, 1.6); }
  for (let i = 0; i < 12; i++) { const a = rand(6.28), e = rand(0.1, 1.3), s = rand(10, 22) * k; FX.puffs.spawn(x, y, z, Math.cos(a) * Math.cos(e) * s, Math.sin(e) * s, Math.sin(a) * Math.cos(e) * s, 0.25, 0.3, rand(0.3, 0.6), 0xFFF2B0, 0xF2C94C, -14, 0.5); }
  for (let i = 0; i < 6; i++) { const a = rand(6.28); FX.scrap.spawn(x, y, z, Math.cos(a) * rand(4, 10), rand(6, 12), Math.sin(a) * rand(4, 10), rand(0.12, 0.25), rand(2, 4), pick([0x4A3B18, 0x2E2A1F, 0x6B6455])); }
  ring(pos, 0.5, R * 1.25, 0.4);
  FX.decals.add(x, z, R * rand(0.9, 1.2), 0x24211A, true);
  flash.position.set(x, y + 1.5, z); flash.intensity = 260 * k;
  shakeAt(pos, 0.75 * loud, 60); S.boom(loud);
}
export function sparks(x, y, z, n = 6) {
  for (let i = 0; i < n; i++) FX.puffs.spawn(x, y, z, rand(-6, 6), rand(1, 8), rand(-6, 6), 0.14, 0.18, rand(0.2, 0.45), 0xFFF2B0, 0xF2C94C, -16, 0.5);
}
export function flashAt(pos, power = 80) { flash.position.copy(pos); flash.intensity = power; }

// ── 浮動文字與對話泡泡（DOM，投影到螢幕）──
export function popup(pos, text, cls = '', life = 1.1, rise = 1.8) {
  if (labels.length > 46) { const o = labels.shift(); o.el.remove(); }
  const el = document.createElement('div'); el.className = 'pop ' + cls; el.textContent = text;
  labelBox.appendChild(el);
  const l = { el, pos: pos.clone(), life, max: life, rise, follow: null };
  labels.push(l); return l;
}
export function bubble(a, text, life = 2) {
  if (a.label) { a.label.life = 0; }
  const l = popup(a.root.position, text, 'bubble', life, 0);
  l.follow = a; a.label = l; return l;
}
function updateLabels(dt) {
  const w = innerWidth, h = innerHeight, cam = G.camera;
  for (let i = labels.length - 1; i >= 0; i--) {
    const l = labels[i]; l.life -= dt;
    if (l.life <= 0 || (l.follow && l.follow.dead)) { l.el.remove(); if (l.follow && l.follow.label === l) l.follow.label = null; labels.splice(i, 1); continue; }
    if (l.follow) { l.pos.copy(l.follow.root.position); l.pos.y += l.follow.H + 0.45; } else l.pos.y += l.rise * dt;
    _v.copy(l.pos).project(cam);
    const dist = l.pos.distanceTo(cam.position);
    if (_v.z > 1 || Math.abs(_v.x) > 1.2 || Math.abs(_v.y) > 1.2 || (l.follow && dist > 45)) { l.el.style.display = 'none'; continue; }
    const s = clamp(11 / dist, 0.5, 1.25);
    l.el.style.display = '';
    l.el.style.opacity = Math.min(1, l.life / 0.25);
    l.el.style.transform = `translate(-50%,-50%) translate(${((_v.x + 1) / 2) * w}px,${((1 - _v.y) / 2) * h}px) scale(${s.toFixed(2)})`;
  }
}

// ── 畫面噴血 ──
export function screenBlood(n = 2, oil = false) {
  for (let i = 0; i < n; i++) {
    if (goreBox.childElementCount > 16) goreBox.firstChild.remove();
    const el = document.createElement('i');
    const edge = Math.random() < 0.7, s = edge ? rand(90, 240) : rand(40, 110);
    const x = edge ? pick([rand(-3, 18), rand(80, 98)]) : rand(15, 85), y = rand(5, 85);
    el.style.cssText = `left:${x}%;top:${y}%;width:${s}px;height:${s * rand(0.8, 1.3)}px;border-radius:${rand(40, 60)}% ${rand(40, 60)}% ${rand(40, 60)}% ${rand(40, 60)}%;transform:rotate(${rand(360)}deg);background:${oil ? '#1e1e19' : pick(['#C21807', '#B3120C', '#D7261E'])}`;
    goreBox.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }
}
