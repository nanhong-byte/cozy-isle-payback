// 武器庫：10 把武器＋踢擊、手持模型、投射物、爆炸
import * as THREE from 'three';
import { G, BLOOD, rand, pick, clamp, V, after } from './state.js';
import { FX, blood, dust, boomFX, sparks, ring, shake, tracer, popup, screenBlood, flashAt } from './fx.js';
import { damage, alarm } from './animals.js';
import { S, loop } from './audio.js';

export const WEAPONS = [
  { id: 'katana', name: '武士刀', icon: '🗡️', key: '1', tip: '連點・自動突進' },
  { id: 'hammer', name: '巨大槌子', icon: '🔨', key: '2', tip: '跳起來砸更大' },
  { id: 'bat', name: '狼牙棒', icon: '🏏', key: '3', tip: '全壘打' },
  { id: 'saw', name: '電鋸', icon: '⚙️', key: '4', tip: '按住' },
  { id: 'smg', name: '衝鋒槍', icon: '🔫', key: '5', tip: '按住掃射' },
  { id: 'shotgun', name: '霰彈槍', icon: '💥', key: '6', tip: '貼臉開' },
  { id: 'sling', name: '爆炸彈弓', icon: '🎃', key: '7', tip: '按住蓄力' },
  { id: 'missile', name: '追蹤飛彈', icon: '🚀', key: '8', tip: '自動鎖定 8 發' },
  { id: 'flame', name: '火焰噴射器', icon: '🔥', key: '9', tip: '按住・會傳染' },
  { id: 'hole', name: '黑洞砲', icon: '🕳️', key: '0', tip: '全吸進去' },
];
export const W = { cur: 0, next: -1, cd: 0, sw: 0, swDir: 1, rec: 0, switchT: 0, charge: 0, charging: false, missiles: 8, missT: 0, holeCd: 0, kickT: 0, kickCd: 0, pending: null, locks: [], cutting: false, firing: false };

const fwd = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3(), eye = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0), _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _d = new THREE.Vector3();
const projs = [];
let vm, models = [], boot, arc, bombGeo, bombMat, missGeo, missMat, slingPouch, holeRing, sawBar;

function basis() {
  G.camera.getWorldDirection(fwd); right.crossVectors(fwd, UP).normalize(); up.crossVectors(right, fwd); eye.copy(G.camera.position);
}

// ── 手持模型 ──
const mats = {};
const lm = (c) => mats[c] || (mats[c] = new THREE.MeshLambertMaterial({ color: c, flatShading: true }));
function bx(w, h, d, c, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), lm(c)); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); return m; }
function cy(r1, r2, h, c, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, seg = 10) { const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), lm(c)); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); return m; }
const grp = (...c) => { const g = new THREE.Group(); c.forEach((m) => g.add(m)); return g; };
const HP = Math.PI / 2;
const REST = {
  katana: [0.34, -0.34, -0.5, -0.55, 0, -0.3], hammer: [0.4, -0.62, -0.62, -0.2, 0, -0.3], bat: [0.36, -0.4, -0.52, -0.5, 0, -0.3],
  saw: [0.24, -0.26, -0.42, 0, 0, 0], smg: [0.2, -0.2, -0.4, 0, 0, 0], shotgun: [0.2, -0.21, -0.42, 0, 0, 0],
  sling: [0.16, -0.26, -0.48, 0, 0, 0], missile: [0.28, -0.24, -0.46, 0, 0, 0], flame: [0.24, -0.24, -0.42, 0, 0, 0], hole: [0.24, -0.23, -0.44, 0, 0, 0],
};
function buildModels() {
  const steel = 0xDDE2DA, dark = 0x2E2A1F, wood = 0x8A5A2B, gold = 0xF2C94C, green = 0x2D4321, clay = 0xD4A373;
  const B = {};
  B.katana = grp(cy(0.018, 0.018, 0.24, dark, 0, 0, 0), cy(0.05, 0.05, 0.014, gold, 0, 0.125, 0), bx(0.01, 0.82, 0.045, steel, 0, 0.54, 0), bx(0.012, 0.82, 0.012, 0xF7F7F0, 0, 0.54, -0.022));
  B.hammer = grp(cy(0.026, 0.03, 1.0, wood, 0, 0.3, 0), cy(0.19, 0.19, 0.42, 0x6B6455, 0, 0.85, 0, HP, 0, 0, 12), cy(0.2, 0.2, 0.05, gold, 0, 0.85, 0.19, HP, 0, 0, 12), cy(0.2, 0.2, 0.05, gold, 0, 0.85, -0.19, HP, 0, 0, 12));
  B.bat = grp(cy(0.02, 0.018, 0.3, dark, 0, 0, 0), cy(0.058, 0.03, 0.7, wood, 0, 0.5, 0));
  for (let i = 0; i < 14; i++) { const a = (i / 7) * 6.28 + (i > 6 ? 0.45 : 0), y = 0.55 + (i > 6 ? 0.2 : 0) + (i % 2) * 0.06; const s = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.07, 5), lm(steel)); s.position.set(Math.cos(a) * 0.07, y, Math.sin(a) * 0.07); s.rotation.set(Math.sin(a) * HP, 0, -Math.cos(a) * HP); B.bat.add(s); }
  sawBar = bx(0.022, 0.085, 0.6, steel, 0, 0, -0.42);
  B.saw = grp(bx(0.17, 0.15, 0.24, 0xE8742A, 0, 0, 0), bx(0.05, 0.05, 0.2, dark, 0, 0.11, 0.02), bx(0.17, 0.04, 0.1, dark, 0, -0.05, -0.14), sawBar);
  for (let i = 0; i < 10; i++) { B.saw.add(bx(0.026, 0.02, 0.03, dark, 0, 0.05, -0.16 - i * 0.055)); B.saw.add(bx(0.026, 0.02, 0.03, dark, 0, -0.05, -0.19 - i * 0.055)); }
  B.smg = grp(bx(0.06, 0.1, 0.34, dark, 0, 0, 0), cy(0.016, 0.016, 0.18, 0x6B6455, 0, 0.015, -0.26, HP), bx(0.04, 0.18, 0.055, 0x4A3B18, 0, -0.13, -0.03, 0.15), bx(0.045, 0.1, 0.05, 0x4A3B18, 0, -0.09, 0.12, -0.2), bx(0.03, 0.03, 0.06, gold, 0, 0.065, -0.1));
  B.shotgun = grp(cy(0.024, 0.024, 0.62, 0x6B6455, -0.026, 0.02, -0.3, HP), cy(0.024, 0.024, 0.62, 0x6B6455, 0.026, 0.02, -0.3, HP), bx(0.085, 0.085, 0.24, wood, 0, 0, 0.06), bx(0.06, 0.12, 0.06, wood, 0, -0.08, 0.16, -0.3), bx(0.09, 0.05, 0.2, 0x4A3B18, 0, -0.03, -0.22));
  slingPouch = grp(bx(0.07, 0.06, 0.02, 0x4A3B18, 0, 0, 0), new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), lm(0xE08A2E)));
  slingPouch.children[1].position.z = -0.03; slingPouch.position.set(0, 0.2, 0.02);
  B.sling = grp(cy(0.02, 0.022, 0.2, wood, 0, 0, 0), cy(0.016, 0.018, 0.2, wood, -0.06, 0.17, 0, 0, 0, 0.6), cy(0.016, 0.018, 0.2, wood, 0.06, 0.17, 0, 0, 0, -0.6), slingPouch);
  B.missile = grp(bx(0.24, 0.2, 0.5, green, 0, 0, 0), bx(0.26, 0.22, 0.04, gold, 0, 0, -0.2), bx(0.05, 0.12, 0.06, dark, 0, -0.15, 0.1));
  for (let i = 0; i < 8; i++) B.missile.add(cy(0.036, 0.036, 0.03, dark, -0.075 + (i % 4) * 0.05, 0.045 - Math.floor(i / 4) * 0.09, -0.25, HP));
  B.flame = grp(cy(0.07, 0.07, 0.3, 0xC8483A, 0, -0.02, 0.1, HP), cy(0.022, 0.022, 0.5, 0x6B6455, 0, 0.03, -0.26, HP), cy(0.04, 0.028, 0.08, dark, 0, 0.03, -0.52, HP), bx(0.04, 0.12, 0.05, dark, 0, -0.1, -0.05), bx(0.02, 0.05, 0.02, gold, 0, 0.0, -0.5));
  holeRing = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.014, 6, 20), lm(gold)); holeRing.position.set(0, 0.02, -0.3);
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), new THREE.MeshBasicMaterial({ color: 0x10140F })); orb.position.set(0, 0.02, -0.3);
  B.hole = grp(bx(0.1, 0.12, 0.36, 0x1C3D20, 0, 0, 0), bx(0.05, 0.12, 0.06, dark, 0, -0.11, 0.1), cy(0.05, 0.07, 0.1, clay, 0, 0.02, -0.2, HP), holeRing, orb);
  B.hammer.scale.setScalar(0.72); B.missile.scale.setScalar(0.72); B.hole.scale.setScalar(0.85); B.saw.scale.setScalar(0.9);
  return WEAPONS.map((w) => { const o = B[w.id]; o.visible = false; vm.add(o); return o; });
}

export function initWeapons() {
  vm = new THREE.Group(); G.camera.add(vm);
  models = buildModels();
  boot = grp(bx(0.13, 0.12, 0.34, 0x6B4E2A, 0, 0, 0), bx(0.14, 0.04, 0.38, 0x2E2A1F, 0, -0.07, -0.01), bx(0.12, 0.22, 0.13, 0x6B4E2A, 0, 0.14, 0.11)); boot.visible = false; vm.add(boot);
  arc = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.6, 24, 1, 0.3, 2.5), new THREE.MeshBasicMaterial({ color: 0xFCF9F0, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthTest: false })); arc.visible = false; arc.position.set(0, -0.12, -0.75); vm.add(arc);
  bombGeo = new THREE.SphereGeometry(0.22, 10, 8); bombMat = lm(0xE08A2E);
  missGeo = new THREE.CylinderGeometry(0.07, 0.1, 0.6, 8).rotateX(Math.PI / 2); missMat = lm(0xF7F1DC);
  models[0].visible = true;
}
export function resetWeapons() {
  for (const p of projs) if (p.kill) p.kill();
  projs.length = 0; W.cd = 0; W.sw = 0; W.charge = 0; W.charging = false; W.missiles = 8; W.holeCd = 0; W.pending = null; W.locks.length = 0; W.kickT = 0;
  loop('saw', false); loop('flame', false); loop('hole', false);
}
export function selectWeapon(i) {
  if (i === W.cur || i < 0 || i >= WEAPONS.length || W.next === i) return;
  W.next = i; W.switchT = 0.0001; W.charging = false; W.charge = 0; W.pending = null;
  loop('saw', false); loop('flame', false);
}

// ── 命中判定 ──
function raySphere(o, d, cx, cy_, cz, r) {
  const ox = o.x - cx, oy = o.y - cy_, oz = o.z - cz, b = ox * d.x + oy * d.y + oz * d.z, c = ox * ox + oy * oy + oz * oz - r * r;
  if (c > 0 && b > 0) return null;
  const disc = b * b - c; if (disc < 0) return null;
  const t = -b - Math.sqrt(disc); return t < 0 ? 0 : t;
}
function rayAnimals(o, d, maxT) {
  let best = null, bt = maxT;
  for (const a of G.animals) {
    const p = a.root.position;
    const bh = G.buff.bighead > 0 && !a.boss ? 2.2 : 1;
    const th = raySphere(o, d, p.x, p.y + a.H * (bh > 1 ? 0.95 : 0.8), p.z, a.H * 0.3 * bh), tb = raySphere(o, d, p.x, p.y + a.H * 0.4, p.z, a.H * 0.42);
    if (th === null && tb === null) continue;
    const t = Math.min(th === null ? 1e9 : th, tb === null ? 1e9 : tb);
    if (t < bt) { bt = t; best = { a, head: th !== null, t }; }
  }
  return best;
}
function rayWorld(o, d, maxT) {
  let t = maxT, hit = null;
  if (d.y < -1e-4) { const tg = -o.y / d.y; if (tg < t) { t = tg; hit = { type: 'ground' }; } }
  const a = d.x * d.x + d.z * d.z;
  if (a > 1e-6) for (const ob of G.obstacles) {
    const ox = o.x - ob.x, oz = o.z - ob.z, b = ox * d.x + oz * d.z, c = ox * ox + oz * oz - ob.r * ob.r, disc = b * b - a * c;
    if (disc < 0) continue;
    const tt = (-b - Math.sqrt(disc)) / a;
    if (tt > 0 && tt < t) { const y = o.y + d.y * tt; if (y < ob.h && y >= 0) { t = tt; hit = { type: 'ob', ob }; } }
  }
  for (const br of G.barrels) { if (!br.alive) continue; const tt = raySphere(o, d, br.x, 0.7, br.z, 0.8); if (tt !== null && tt < t) { t = tt; hit = { type: 'barrel', br }; } }
  return { t, hit };
}
function coneTargets(range, cosA) {
  const out = [];
  for (const a of G.animals) {
    const p = a.root.position; _v.set(p.x - eye.x, p.y + a.H * 0.5 - eye.y, p.z - eye.z);
    const d = _v.length(), rr = range + a.H * 0.35;
    if (d > rr) continue;
    if (d > 1.4 + a.H * 0.3 && _v.dot(fwd) / d < cosA) continue;
    out.push({ a, d });
  }
  return out;
}
const center = (a, out) => out.set(a.root.position.x, a.root.position.y + a.H * 0.5, a.root.position.z);

export function explodeBarrel(br) {
  if (!br.alive) return; br.alive = false; br.m.visible = false; br.t = 22;
  explode(V(br.x, 0.8, br.z), 7.5, { weapon: 'barrel' });
}
export function explode(pos, R, o = {}) {
  const gibR = o.gibR === undefined ? R * 0.62 : o.gibR;
  boomFX(pos, R, o.loud || 1);
  let kills = 0;
  for (const a of G.animals.slice()) {
    const p = a.root.position; _v.set(p.x - pos.x, p.y + a.H * 0.5 - pos.y, p.z - pos.z);
    const d = Math.max(0.01, _v.length() - (a.boss ? a.H * 0.3 : 0));
    if (d > R) continue;
    _v.normalize();
    if (d < gibR) { if (damage(a, 999, { mode: 'gib', dir: _v.clone(), weapon: o.weapon, bossCap: 420 })) kills++; }
    else {
      const k = 1 - d / R, knock = V(_v.x * (8 + 12 * k), 8 + 9 * k, _v.z * (8 + 12 * k));
      if (damage(a, 30 + 70 * k, { mode: 'gib', dir: _v.clone(), knock, weapon: o.weapon })) kills++;
    }
  }
  for (const br of G.barrels) if (br.alive && (br.x - pos.x) ** 2 + (br.z - pos.z) ** 2 < (R + 1.5) ** 2) after(rand(0.08, 0.25), () => explodeBarrel(br));
  const P = G.player; _v.set(P.pos.x - pos.x, 0, P.pos.z - pos.z); const dp = _v.length();
  if (dp < R && Math.abs(P.pos.y + 1 - pos.y) < R) { // 玩家不會受傷，但會被炸飛（可以拿來火箭跳）
    const k = 1 - dp / R; _v.normalize(); P.kvel.x += _v.x * 16 * k; P.kvel.z += _v.z * 16 * k; P.vel.y = Math.max(P.vel.y, 5 + 9 * k); P.onGround = false;
  }
  if (kills >= 3 && G.onMulti) G.onMulti(kills, pos);
  alarm(pos.x, pos.z, R + 26);
  return kills;
}

// ── 射擊類共用 ──
function shoot(spread, dmg, weapon, pellets = 1) {
  basis();
  const muzzle = V().copy(eye).addScaledVector(fwd, 0.75).addScaledVector(right, 0.2).addScaledVector(up, -0.15);
  const hits = new Map();
  for (let i = 0; i < pellets; i++) {
    _d.copy(fwd).addScaledVector(right, rand(-spread, spread)).addScaledVector(up, rand(-spread, spread)).normalize();
    const w = rayWorld(eye, _d, 220), h = rayAnimals(eye, _d, w.t), end = V();
    if (h) {
      end.copy(eye).addScaledVector(_d, h.t);
      const e = hits.get(h.a) || { dmg: 0, head: false, dir: _d.clone(), d: h.t }; e.dmg += dmg * (h.head ? 2.5 : 1); e.head = e.head || h.head; hits.set(h.a, e);
      blood(end.x, end.y, end.z, _d.x, 0.2, _d.z, 3, 5, h.a.def.robot); if (h.a.def.robot) sparks(end.x, end.y, end.z, 3);
    } else {
      end.copy(eye).addScaledVector(_d, w.t);
      if (w.hit) { if (w.hit.type === 'barrel') explodeBarrel(w.hit.br); else FX.puffs.spawn(end.x, end.y + 0.05, end.z, 0, 1.5, 0, 0.15, 0.4, 0.25, 0xE8D9B5, 0xF7F1DC, 0, 2); }
    }
    tracer(muzzle, end);
  }
  FX.puffs.spawn(muzzle.x + fwd.x * 0.2, muzzle.y + fwd.y * 0.2, muzzle.z + fwd.z * 0.2, 0, 0, 0, 0.25, 0.1, 0.06, 0xFFF2B0, 0xF2C94C, 0, 0);
  if (hits.size) G.hitMark = 0.12;
  return hits;
}

// ── 投射物 ──
function throwBomb(pos, vel, mini) {
  const m = new THREE.Mesh(bombGeo, bombMat); if (mini) m.scale.setScalar(0.55); G.scene.add(m);
  let life = mini ? rand(0.55, 1.15) : 6;
  projs.push({
    kill() { G.scene.remove(m); },
    upd(dt) {
      vel.y -= 20 * dt; pos.addScaledVector(vel, dt); m.position.copy(pos); m.rotation.x += 9 * dt; life -= dt;
      let hit = life <= 0;
      if (pos.y < 0.22) { if (mini) { pos.y = 0.22; vel.y = Math.abs(vel.y) * 0.5; vel.x *= 0.7; vel.z *= 0.7; } else hit = true; }
      if (!hit) for (const a of G.animals) { const p = a.root.position; if ((p.x - pos.x) ** 2 + (p.y + a.H * 0.5 - pos.y) ** 2 + (p.z - pos.z) ** 2 < (a.H * 0.5 + 0.25) ** 2) { hit = true; break; } }
      if (!hit) for (const o of G.obstacles) if (pos.y < o.h && (pos.x - o.x) ** 2 + (pos.z - o.z) ** 2 < (o.r + 0.2) ** 2) { hit = true; break; }
      if (!mini && Math.random() < dt * 30) FX.puffs.spawn(pos.x, pos.y, pos.z, 0, 0, 0, 0.3, 0.1, 0.3, 0xFCF9F0, 0xDDDAD1, 0, 1);
      if (!hit) return false;
      G.scene.remove(m);
      explode(pos.clone(), mini ? 4.6 : 7, { weapon: 'sling', loud: mini ? 0.6 : 1 });
      if (!mini) for (let k = 0; k < 5; k++) { const a = (k / 5) * 6.28 + rand(0.5); throwBomb(V(pos.x, Math.max(0.5, pos.y), pos.z), V(Math.cos(a) * rand(4, 8), rand(7, 11), Math.sin(a) * rand(4, 8)), true); }
      return true;
    },
  });
}
function nearest(pos, maxD) {
  let best = null, bd = maxD * maxD;
  for (const a of G.animals) { const p = a.root.position, d = (p.x - pos.x) ** 2 + (p.y - pos.y) ** 2 + (p.z - pos.z) ** 2; if (d < bd) { bd = d; best = a; } }
  return best;
}
function fireMissile(target, idx, n) {
  basis();
  const pos = V().copy(eye).addScaledVector(fwd, 0.7).addScaledVector(right, 0.3).addScaledVector(up, -0.15);
  const dir = V().copy(fwd).addScaledVector(up, 0.45 + rand(0.2)).addScaledVector(right, (idx - (n - 1) / 2) * 0.22).normalize();
  const m = new THREE.Mesh(missGeo, missMat); G.scene.add(m);
  let life = 0, speed = 14, puffT = 0; const Z = V(0, 0, -1);
  S.missile();
  projs.push({
    kill() { G.scene.remove(m); },
    upd(dt) {
      life += dt; speed = Math.min(62, speed + 75 * dt);
      if (target && target.dead) target = nearest(pos, 45);
      let dT = 99;
      if (target) { center(target, _v2).sub(pos); dT = _v2.length(); if (life > 0.16) dir.lerp(_v2.normalize(), Math.min(1, dt * (5 + life * 14))).normalize(); }
      pos.addScaledVector(dir, speed * dt); m.position.copy(pos); m.quaternion.setFromUnitVectors(Z, dir);
      puffT -= dt;
      if (puffT <= 0 && life > 0.14) { puffT = 0.02; FX.puffs.spawn(pos.x - dir.x * 0.4, pos.y - dir.y * 0.4, pos.z - dir.z * 0.4, rand(-0.5, 0.5), rand(-0.5, 0.5), rand(-0.5, 0.5), 0.3, 0.6, 0.45, 0xFFF2B0, 0xDDDAD1, 0.6, 1.5); }
      let hit = life > 5 || pos.y < 0.15 || (target && dT < target.H * 0.5 + 0.6);
      if (!hit && life > 0.2) for (const o of G.obstacles) if (pos.y < o.h && (pos.x - o.x) ** 2 + (pos.z - o.z) ** 2 < o.r * o.r) { hit = true; break; }
      if (!hit) return false;
      G.scene.remove(m); explode(pos.clone(), 4.6, { gibR: 3.3, weapon: 'missile', loud: 0.75 });
      return true;
    },
  });
}
function fireHole() {
  basis();
  const pos = V().copy(eye).addScaledVector(fwd, 1), dir = fwd.clone();
  const g = new THREE.Group();
  const orb = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshBasicMaterial({ color: 0x0C100B }));
  const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.09, 6, 32), new THREE.MeshBasicMaterial({ color: 0xF2C94C }));
  const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.05, 6, 32), new THREE.MeshBasicMaterial({ color: 0xFCF9F0 }));
  g.add(orb, r1, r2); g.scale.setScalar(0.35); G.scene.add(g);
  const hole = { done: false }; let t = 0, phase = 0, eaten = [], tick = 0;
  projs.push({
    kill() { G.scene.remove(g); hole.done = true; loop('hole', false); },
    upd(dt) {
      t += dt; r1.rotation.x += dt * 5; r1.rotation.y += dt * 3; r2.rotation.y -= dt * 4; r2.rotation.z += dt * 2.5;
      if (phase === 0) {
        pos.addScaledVector(dir, 24 * dt); g.position.copy(pos);
        let stop = t > 0.9 || pos.y < 1.2;
        if (!stop) for (const o of G.obstacles) if (pos.y < o.h && (pos.x - o.x) ** 2 + (pos.z - o.z) ** 2 < (o.r + 0.5) ** 2) { stop = true; break; }
        if (!stop) for (const a of G.animals) { center(a, _v); if (_v.distanceToSquared(pos) < 4) { stop = true; break; } }
        if (stop) { phase = 1; t = 0; pos.y = Math.max(pos.y, 2.6); g.position.copy(pos); loop('hole', true); ring(pos.clone().setY(0.1), 14, 1, 0.5, 0x10240F); }
        return false;
      }
      const dur = 3.6, k = Math.min(1, t / 0.4);
      g.scale.setScalar(0.35 + 1.0 * k + Math.sin(t * 18) * 0.05 + eaten.length * 0.03);
      tick -= dt;
      if (tick <= 0) { // 吸入的碎屑
        tick = 0.03; const a = rand(6.28), d = rand(6, 16);
        FX.puffs.spawn(pos.x + Math.cos(a) * d, rand(0.2, 5), pos.z + Math.sin(a) * d, -Math.cos(a) * d * 2.2 - Math.sin(a) * 6, 2, -Math.sin(a) * d * 2.2 + Math.cos(a) * 6, 0.25, 0.12, 0.45, 0x2D4321, 0x10240F, 0, 0);
      }
      for (const a of G.animals.slice()) {
        const p = a.root.position; center(a, _v); _v2.copy(pos).sub(_v); const d = _v2.length();
        if (a.boss) { if (d < 22) damage(a, 260 * dt, { weapon: 'hole', mode: 'gib', bossCap: 999 }); continue; }
        if (d > 24) continue;
        if (a.state !== 'sucked') { if (a.chute) { a.root.remove(a.chute); a.chute = null; } a.state = 'sucked'; a.hole = hole; a.mixer.timeScale = 3; if (Math.random() < 0.45) S.cry('rise', a.def.pitch, a.def.robot); }
        if (a.hole !== hole) a.hole = hole;
        _v2.multiplyScalar(1 / d); const sp = Math.min(42, 5 + 240 / (d + 2));
        p.x += (_v2.x * sp + -_v2.z * sp * 0.55) * dt; p.y += _v2.y * sp * dt; p.z += (_v2.z * sp + _v2.x * sp * 0.55) * dt;
        a.tilt.rotation.x += 13 * dt; a.tilt.rotation.z += 9 * dt; a.tilt.scale.setScalar(clamp(d / 7, 0.18, 1));
        if (d < 1.4) { eaten.push({ fur: a.def.fur, robot: a.def.robot }); damage(a, 9999, { mode: 'hole', weapon: 'hole' }); S.pop(); }
      }
      if (t < dur) return false;
      // 收縮後爆開：吃多少噴多少
      hole.done = true; loop('hole', false); G.scene.remove(g);
      boomFX(pos, 8, 1.1); ring(pos.clone().setY(0.1), 1, 22, 0.6, 0xC8483A);
      const n = eaten.length;
      for (let i = 0; i < Math.min(160, n * 12 + 8); i++) {
        const a = rand(6.28), e = rand(0.1, 1.45), s = rand(8, 22), e_ = eaten[i % Math.max(1, n)];
        const vx = Math.cos(a) * Math.cos(e) * s, vy = Math.sin(e) * s, vz = Math.sin(a) * Math.cos(e) * s;
        if (!n) break;
        if (e_.robot) FX.scrap.spawn(pos.x, pos.y, pos.z, vx, vy, vz, rand(0.15, 0.3), rand(5, 9), 0xE8E4D4);
        else FX.meat.spawn(pos.x, pos.y, pos.z, vx, vy, vz, rand(0.14, 0.34), rand(5, 9), Math.random() < 0.4 ? e_.fur : pick([0xC8483A, 0xE06A5A, 0xA83228]));
      }
      if (n) { blood(pos.x, pos.y, pos.z, 0, 0.8, 0, Math.min(260, n * 30), 16, false, 0.9); for (let i = 0; i < Math.min(16, n * 2); i++) FX.eye.spawn(pos.x, pos.y, pos.z, rand(-9, 9), rand(6, 16), rand(-9, 9), 0.2, rand(7, 11)); screenBlood(Math.min(5, n)); }
      if (n >= 3 && G.onMulti) G.onMulti(n, pos, '黑洞回收');
      shake(0.9);
      return true;
    },
  });
}

// ── 各武器動作 ──
function katanaHit(ts) {
  basis(); ts = ts || coneTargets(4.0, 0.3);
  for (const { a } of ts) {
    center(a, _v); blood(_v.x, _v.y, _v.z, -fwd.x * 0.3, 0.5, -fwd.z * 0.3, 8, 7, a.def.robot);
    damage(a, 170, { mode: 'slice', cut: W.swDir > 0 ? 'h' : 'd', dir: fwd.clone(), weapon: 'katana', bossCap: 170 });
  }
  if (ts.length) { G.hitstop = 0.045; shake(0.25); S.slice(); G.hitMark = 0.12; }
}
function slam(big) {
  basis(); const P = G.player, fl = Math.hypot(fwd.x, fwd.z) || 1, k = big ? 1.75 : 1;
  const pos = V(P.pos.x + (fwd.x / fl) * 2.5, 0, P.pos.z + (fwd.z / fl) * 2.5);
  S.slam(); shake(big ? 1 : 0.7); ring(pos, 0.5, 6.5 * k, 0.35); ring(pos, 0.3, 4 * k, 0.5, 0xE8D9B5);
  dust(pos.x, 0, pos.z, 12, 1.1 * k); FX.decals.add(pos.x, pos.z, 3.4 * k, 0x3A3524, true); G.hitstop = 0.05;
  let n = 0;
  for (const a of G.animals.slice()) {
    const q = a.root.position, d = Math.hypot(q.x - pos.x, q.z - pos.z);
    if (q.y > 4.5 * k) continue;
    if (d < 2.6 * k + (a.boss ? a.H * 0.3 : 0)) { if (damage(a, 999, { mode: 'flat', weapon: 'hammer', bossCap: 340 })) n++; if (a.boss) { center(a, _v); blood(_v.x, _v.y, _v.z, 0, 1, 0, 30, 9); } }
    else if (d < 6.5 * k) { const kk = 1 - d / (6.5 * k); if (damage(a, 30, { mode: 'splat', weapon: 'hammer', knock: V(((q.x - pos.x) / d) * 5, 9 + 7 * kk, ((q.z - pos.z) / d) * 5) })) n++; }
  }
  for (const br of G.barrels) if (br.alive && (br.x - pos.x) ** 2 + (br.z - pos.z) ** 2 < (4 * k) ** 2) explodeBarrel(br);
  if (big) popup(pos.clone().setY(2.2), '天降正義！', 'big');
  if (n >= 3 && G.onMulti) G.onMulti(n, pos);
  alarm(pos.x, pos.z, 26);
}
function batHit() {
  basis(); const ts = coneTargets(4.1, 0.35);
  for (const { a } of ts) {
    const dir = fwd.clone(); dir.y = Math.max(dir.y, 0.28); dir.normalize();
    if (a.boss) { center(a, _v); blood(_v.x, _v.y, _v.z, dir.x, 0.5, dir.z, 20, 9); damage(a, 260, { weapon: 'bat' }); } else damage(a, 999, { mode: 'launch', dir, weapon: 'bat' });
  }
  if (ts.length) { G.hitstop = 0.07; shake(0.5); G.hitMark = 0.12; if (ts[0].a.boss) S.crack(); }
}
function kick() {
  basis(); W.kickCd = 0.5; W.kickT = 0.3; S.swing();
  after(0.08, () => {
    basis(); const ts = coneTargets(3.2, 0.45); const fl = Math.hypot(fwd.x, fwd.z) || 1;
    for (const { a } of ts) {
      if (a.boss) { damage(a, 60, { weapon: 'kick' }); continue; }
      damage(a, 25, { mode: 'splat', weapon: 'kick', knock: V((fwd.x / fl) * 22, 8.5, (fwd.z / fl) * 22) });
    }
    for (const br of G.barrels) if (br.alive && (br.x - eye.x) ** 2 + (br.z - eye.z) ** 2 < 6) explodeBarrel(br);
    if (ts.length) { S.kick(); shake(0.3); G.hitstop = 0.04; G.hitMark = 0.12; }
  });
}

export function updateWeapons(dt, wdt) {
  const I = G.input, id = WEAPONS[W.cur].id, rage = G.rageOn > 0, rapid = G.buff.rapid > 0, rate = (rage ? 0.5 : 1) * (rapid ? 0.3 : 1), P = G.player;
  W.cd -= dt; W.kickCd -= dt; W.holeCd -= dt * (rage ? 2 : 1) * (rapid ? 8 : 1); W.rec = Math.max(0, W.rec - dt * 9);
  if (W.kickT > 0) W.kickT -= dt;
  if (W.missiles < 8) { W.missT += dt * (rage ? 2.5 : 1) * (rapid ? 8 : 1); if (W.missT > 0.5) { W.missT = 0; W.missiles++; } }
  // 換武器
  if (W.switchT > 0) {
    W.switchT += dt / 0.2;
    if (W.next >= 0 && W.switchT >= 0.5) { models[W.cur].visible = false; W.cur = W.next; W.next = -1; models[W.cur].visible = true; W.sw = 0; S.ui(); }
    if (W.switchT >= 1) W.switchT = 0;
  }
  if (W.pending) {
    const pd = W.pending;
    if (pd.land) { if (P.onGround) { W.pending = null; slam(true); } }
    else { pd.t -= dt; if (pd.t <= 0) { W.pending = null; pd.fn(); } }
  }
  const can = W.switchT === 0 && W.cd <= 0;
  W.firing = false; W.cutting = false;
  if (I.altPressed && W.kickCd <= 0) kick();
  basis();
  if (id === 'katana') {
    if (I.fire && can) {
      W.cd = 0.26 * rate; W.sw = 0.001; W.swDir *= -1; S.swing();
      const ts = coneTargets(3.8, 0.4);
      if (!ts.length) {
        let best = null, bd = 0.9, bdist = 0;
        for (const a of G.animals) { center(a, _v).sub(eye); const d = _v.length(); if (d > 13 || d < 3) continue; const dot = _v.dot(fwd) / d; if (dot > bd) { bd = dot; best = a; bdist = d; } }
        if (best) { // 居合：瞬間貼上去
          const q = best.root.position, dx = q.x - P.pos.x, dz = q.z - P.pos.z, l = Math.hypot(dx, dz) || 1;
          P.dash = { x: dx / l, z: dz / l, t: 0.11, speed: Math.max(0, l - 2.3) / 0.11 }; S.whoosh();
          W.pending = { t: 0.11, fn: () => katanaHit() };
        } else katanaHit(ts);
      } else katanaHit(ts);
    }
  } else if (id === 'hammer') {
    if (I.fire && can && !W.pending) {
      W.cd = 0.9 * rate; W.sw = 0.001; S.swing(true);
      if (!P.onGround && P.pos.y > 0.8) { P.vel.y = -36; W.pending = { land: true }; } else W.pending = { t: 0.22 * rate, fn: () => slam(false) };
    }
  } else if (id === 'bat') {
    if (I.fire && can) { W.cd = 0.46 * rate; W.sw = 0.001; W.swDir *= -1; S.swing(true); W.pending = { t: 0.09, fn: batHit }; }
  } else if (id === 'saw') {
    const on = I.fire && W.switchT === 0; W.firing = on;
    if (on) {
      const ts = coneTargets(3.2, 0.55); W.cutting = ts.length > 0;
      for (const { a } of ts) {
        center(a, _v); blood(_v.x, _v.y, _v.z, -fwd.x, 0.5, -fwd.z, 2, 9, a.def.robot); if (a.def.robot) sparks(_v.x, _v.y, _v.z, 2);
        damage(a, 560 * dt * (rage ? 2 : 1), { mode: 'slice', cut: 'v', dir: fwd.clone(), weapon: 'saw', bossCap: 999 });
      }
      if (W.cutting) { if (G.trauma < 0.3) shake(0.08); if (Math.random() < dt * 5) screenBlood(1); G.hitMark = 0.05; }
    }
    loop('saw', on, W.cutting ? 1 : 0);
  } else if (id === 'smg') {
    if (I.fire && can) {
      W.cd = 0.056 * rate; W.rec = 0.6; S.smg();
      const hits = shoot(0.022, 27, 'smg');
      for (const [a, e] of hits) damage(a, e.dmg, { mode: e.head ? 'headpop' : 'drop', dir: e.dir, power: 3.5, weapon: 'smg', head: e.head });
      FX.scrap.spawn(eye.x + fwd.x * 0.5 + right.x * 0.25, eye.y - 0.15, eye.z + fwd.z * 0.5 + right.z * 0.25, right.x * 3 + rand(-1, 1), rand(2, 4), right.z * 3 + rand(-1, 1), 0.05, 1.5, 0xF2C94C);
      if (G.trauma < 0.15) shake(0.05);
    }
  } else if (id === 'shotgun') {
    if (I.fire && can) {
      W.cd = 0.72 * rate; W.rec = 1.6; S.shotgun(); shake(0.4);
      const hits = shoot(0.085, 21, 'shotgun', 12);
      for (const [a, e] of hits) {
        const kn = V(e.dir.x * 13, 6, e.dir.z * 13);
        damage(a, e.dmg, { mode: e.d < 11 ? 'gib' : (e.head ? 'headpop' : 'drop'), dir: e.dir, power: 13, knock: e.d < 16 ? kn : null, weapon: 'shotgun', head: e.head, bossCap: 420 });
      }
      P.kvel.x -= fwd.x * 4; P.kvel.z -= fwd.z * 4; flashAt(eye, 60);
    }
  } else if (id === 'sling') {
    if (I.fire && W.switchT === 0) { if (W.cd <= 0) { W.charging = true; W.charge = Math.min(1, W.charge + dt / (0.75 * rate)); S.stretch(W.charge); } }
    else if (W.charging) {
      W.charging = false; const sp = 16 + 36 * W.charge;
      throwBomb(V().copy(eye).addScaledVector(fwd, 0.8).addScaledVector(up, -0.1), V().copy(fwd).multiplyScalar(sp).addScaledVector(UP, 3.5), false);
      W.charge = 0; W.cd = 0.3 * rate; W.rec = 1; S.sling();
    }
  } else if (id === 'missile') {
    // 鎖定：準星附近最多 8 隻
    const cand = [];
    for (const a of G.animals) { center(a, _v).sub(eye); const d = _v.length(); if (d > 95 || d < 2) continue; const dot = _v.dot(fwd) / d; if (dot > 0.72) cand.push({ a, dot }); }
    cand.sort((x, y) => y.dot - x.dot);
    const prev = W.locks.length; W.locks = cand.slice(0, Math.max(1, W.missiles)).map((c) => c.a); if (!W.missiles) W.locks.length = 0;
    if (W.locks.length > prev) S.lock();
    if (I.firePressed && can && W.missiles > 0) {
      const tg = W.locks.slice(), n = tg.length || Math.min(2, W.missiles);
      for (let i = 0; i < n; i++) after(i * 0.045, () => fireMissile(tg[i] || null, i, n));
      W.missiles -= n; W.cd = 0.45; W.rec = 1.4; shake(0.3);
    }
  } else if (id === 'flame') {
    const on = I.fire && W.switchT === 0; W.firing = on;
    if (on) {
      const mx = eye.x + fwd.x * 0.9 + right.x * 0.22 - up.x * 0.14, my = eye.y + fwd.y * 0.9 - up.y * 0.14, mz = eye.z + fwd.z * 0.9 + right.z * 0.22 - up.z * 0.14;
      for (let i = 0; i < 3; i++) { const s = rand(17, 25); FX.puffs.spawn(mx, my, mz, fwd.x * s + rand(-2.2, 2.2), fwd.y * s + rand(-2.2, 2.2), fwd.z * s + rand(-2.2, 2.2), 0.2, rand(1.0, 1.8), rand(0.32, 0.5), 0xFFD23F, 0xE0421A, 3, 1.4); }
      for (const a of G.animals.slice()) {
        center(a, _v).sub(eye); const d = _v.length(); if (d > 11 + a.H * 0.3) continue;
        if (d > 2 && _v.dot(fwd) / d < 0.86) continue;
        if (a.boss) { damage(a, 280 * dt, { weapon: 'flame', mode: 'burn', bossCap: 999 }); continue; }
        a.heat += dt * (rage ? 2 : 1); if (a.heat > 0.2) { damage(a, 999, { mode: 'burn', weapon: 'flame' }); S.ignite(); }
      }
      for (const br of G.barrels) if (br.alive) { _v.set(br.x - eye.x, 0.7 - eye.y, br.z - eye.z); const d = _v.length(); if (d < 10 && _v.dot(fwd) / d > 0.9) explodeBarrel(br); }
      if (Math.random() < dt * 4) { const w = rayWorld(eye, fwd, 10); if (w.hit && w.hit.type === 'ground') FX.decals.add(eye.x + fwd.x * w.t, eye.z + fwd.z * w.t, rand(1, 2), 0x2A251C, true); }
    }
    loop('flame', on);
  } else if (id === 'hole') {
    if (I.firePressed && can && W.holeCd <= 0) { W.holeCd = 7; W.rec = 1.6; W.cd = 0.5; S.hole(); fireHole(); shake(0.3); }
  }
  if (id !== 'missile' && W.locks.length) W.locks.length = 0;

  for (let i = projs.length - 1; i >= 0; i--) if (projs[i].upd(wdt)) projs.splice(i, 1);
  pose(dt, id);
}

// ── 手持模型姿勢 ──
const ease = (t) => 1 - (1 - t) * (1 - t);
function pose(dt, id) {
  const o = models[W.cur], r = REST[id], P = G.player;
  const SW = { katana: 0.2, hammer: 0.55, bat: 0.3 }[id] || 0.2;
  if (W.sw > 0) { W.sw += dt / SW; if (W.sw >= 1) W.sw = 0; }
  const mv = P.onGround ? Math.min(1, Math.hypot(P.vel.x, P.vel.z) / 9) : 0;
  const bobX = Math.cos(P.bobT * 0.5) * 0.014 * mv, bobY = Math.abs(Math.sin(P.bobT * 0.5)) * 0.016 * mv;
  const sk = W.switchT > 0 ? Math.sin(W.switchT * Math.PI) : 0;
  o.position.set(r[0] + bobX, r[1] - bobY - sk * 0.45, r[2] + W.rec * 0.045);
  o.rotation.set(r[3] + W.rec * 0.09, r[4], r[5]);
  arc.visible = false;
  const s = W.sw;
  if (id === 'katana' || id === 'bat') {
    if (s > 0) {
      const e = ease(s), dir = W.swDir;
      o.position.set(dir * (0.42 - 0.84 * e), r[1] + 0.16 + Math.sin(e * Math.PI) * 0.05, r[2] - 0.05);
      o.rotation.set(-1.25, 0, dir * (-1.35 + 2.7 * e));
      if (s > 0.1 && s < 0.8) { arc.visible = true; arc.material.opacity = 0.85 * (1 - s); arc.scale.set(dir * (id === 'bat' ? 1.25 : 1), 1, 1); arc.rotation.z = (id === 'katana' && dir < 0 ? 0.5 : 0.1) * dir; arc.rotation.x = -1.2; }
    }
  } else if (id === 'hammer') {
    if (s > 0) {
      let ang;
      if (s < 0.3) ang = (s / 0.3) * 0.9; else if (s < 0.45) ang = 0.9 - ((s - 0.3) / 0.15) * 2.4; else ang = -1.5 + ((s - 0.45) / 0.55) * 1.5;
      o.rotation.x = r[3] + ang; o.position.y = r[1] + Math.max(0, ang) * 0.25; o.position.z = r[2] - (ang < 0 ? -ang * 0.12 : 0);
    } else if (W.pending && W.pending.land) { o.rotation.x = r[3] + 0.9; o.position.y = r[1] + 0.22; }
  } else if (id === 'saw') {
    if (W.firing) { o.position.x += rand(-0.004, 0.004); o.position.y += rand(-0.004, 0.004); o.position.z -= 0.04; if (W.cutting) { o.position.x += rand(-0.008, 0.008); o.rotation.z = rand(-0.03, 0.03); } }
    sawBar.position.y = W.firing ? rand(-0.003, 0.003) : 0;
  } else if (id === 'sling') {
    slingPouch.position.z = 0.02 + W.charge * 0.24; o.rotation.x = r[3] + W.charge * 0.12; if (W.charge > 0.95) o.position.x += rand(-0.003, 0.003);
  } else if (id === 'hole') {
    holeRing.rotation.x += dt * 6; holeRing.rotation.y += dt * 4; const rdy = W.holeCd <= 0 ? 1 : 0.4; holeRing.scale.setScalar(rdy);
  } else if (id === 'flame') { if (W.firing) { o.position.x += rand(-0.003, 0.003); o.position.y += rand(-0.003, 0.003); } }
  if (W.kickT > 0) { const t = 1 - W.kickT / 0.3, k = Math.sin(t * Math.PI); boot.visible = true; boot.position.set(0.05, -0.75 + k * 0.4, -0.35 - k * 0.55); boot.rotation.x = 0.5 - k * 0.5; } else boot.visible = false;
}
