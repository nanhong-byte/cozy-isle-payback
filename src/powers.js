// 絕招：變身、跑車、氣功、劍陣、召喚物……由禮物箱／絕招槽（F）／無限模式的 Tab 選單觸發
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { G, R_ISLAND, rand, pick, clamp, V, after } from './state.js';
import { FX, ring, shake, sparks, dust, tracer } from './fx.js';
import { S, loop, stopAllLoops } from './audio.js';
import { damage, kill, makeBody, freeBody, randomKey } from './animals.js';
import { explode } from './weapons.js';
import { strike } from './weather.js';

export const POWERS = [
  { id: 'beast', icon: '🐲', name: '怪獸變身', tip: '左鍵揮爪，跳起來落地有震波', dur: 15, w: 2 },
  { id: 'car', icon: '🏎️', name: '公司跑車', tip: '自動往前衝，滑鼠轉向，撞就對了', dur: 14, w: 2 },
  { id: 'cannon', icon: '💪', name: '充能臂砲', tip: '按住左鍵蓄力，放開發射', dur: 14, w: 2 },
  { id: 'beam', icon: '👐', name: '怨念氣功波', tip: '按住左鍵集氣，然後一路轟過去', dur: 12, w: 2 },
  { id: 'disc', icon: '💿', name: '圓鋸氣斬', tip: '左鍵丟出會穿透的氣斬', dur: 13, w: 2 },
  { id: 'ice', icon: '❄️', name: '寒冰劍', tip: '揮劍凍成冰雕，再敲就碎', dur: 14, w: 2 },
  { id: 'chain', icon: '🌩️', name: '連鎖閃電', tip: '按住左鍵，電會自己跳下一隻', dur: 12, w: 2 },
  { id: 'wolves', icon: '🐺', name: '召喚野獸', tip: '五隻狼幫你咬', dur: 14, w: 2 },
  { id: 'robodog', icon: '🐕', name: '機器狗', tip: '會咬人，背上還會發射飛彈', dur: 18, w: 2 },
  { id: 'zombie', icon: '🧟', name: '死屍復活', tip: '被咬到的也會變喪屍', dur: 16, w: 2 },
  { id: 'turret', icon: '🔧', name: '自動砲塔', tip: '原地架兩座', dur: 18, w: 2 },
  { id: 'drone', icon: '🛸', name: '無人機小隊', tip: '三台在頭上幫你轟', dur: 16, w: 2 },
  { id: 'thunder', icon: '⛈️', name: '落雷陣', tip: '附近的一隻一道雷', dur: 2, w: 2 },
  { id: 'speed', icon: '💨', name: '極速狂奔', tip: '快到撞誰誰兩半', dur: 12, w: 2 },
  { id: 'scythe', icon: '🌙', name: '護身鐮刀', tip: '三把鐮刀繞著你割', dur: 15, w: 2 },
  { id: 'swords', icon: '🗡️', name: '御劍術', tip: '六把飛劍自己找人砍', dur: 14, w: 2 },
  { id: 'myriad', icon: '⚔️', name: '萬劍歸一', tip: '滿天的劍一起落下', dur: 3, w: 1.5 },
  { id: 'bubble', icon: '🔵', name: '彈跳泡泡球', tip: '三顆大球滿場壓', dur: 12, w: 2 },
];
const OV = ['beast', 'car', 'cannon', 'beam', 'disc', 'ice', 'chain']; // 會暫時取代手上武器的
const ents = [], vms = {};
const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _v = new THREE.Vector3(), _q = new THREE.Vector3();
let ovm, cd = 0, swing = 0, side = 1, charge = 0, wasFire = false, beamOn = 0, beamT = 0, lastVy = 0, wasGround = true, zCount = 0, hs = 0;
let swordGeo, swordMat, scytheGeo, ballGeo, iceGeo, iceMat, discGeo, shotGeo, moonGeo;

const lam = (c, o) => new THREE.MeshLambertMaterial(Object.assign({ color: c, flatShading: true }, o));
const bas = (c, o) => new THREE.MeshBasicMaterial(Object.assign({ color: c }, o));
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (r1, r2, h, n = 8) => new THREE.CylinderGeometry(r1, r2, h, n);
function mesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); return m; }
const grp = (...c) => { const g = new THREE.Group(); c.forEach((x) => g.add(x)); return g; };
const centre = (a, out = new THREE.Vector3()) => out.set(a.root.position.x, a.root.position.y + a.H * 0.5, a.root.position.z);
const skyDrop = (a) => a.state === 'drop' && a.root.position.y > 5;

function eachNear(x, z, r, fn) {
  for (const a of G.animals.slice()) {
    if (skyDrop(a)) continue; const p = a.root.position, rr = r + (a.boss ? a.H * 0.35 : 0);
    if ((p.x - x) ** 2 + (p.z - z) ** 2 < rr * rr) fn(a);
  }
}
function nearestTo(x, z, maxD, skip, fuzz) {
  let best = null, bd = maxD * maxD;
  for (const a of G.animals) {
    if (skyDrop(a) || (skip && skip.has(a))) continue; const p = a.root.position;
    const d = ((p.x - x) ** 2 + (p.z - z) ** 2) * (fuzz ? rand(0.5, 1.5) : 1); if (d < bd) { bd = d; best = a; }
  }
  return best;
}
function aimed(maxD, minDot) {
  const cp = G.camera.position; let best = null, bd = minDot;
  for (const a of G.animals) { centre(a, _v).sub(cp); const d = _v.length(); if (d > maxD) continue; const dot = _v.dot(_f) / d; if (dot > bd) { bd = dot; best = a; } }
  return best;
}
// 統一的「打一下」：一般島民直接死，巨大島民扣血且有冷卻（避免貼著每格都扣）
function hit(a, weapon, mode, dir, o = {}) {
  const cap = o.boss || 200;
  if (a.boss) { if (G.t - (a.pcd || 0) < 0.3) return false; a.pcd = G.t; }
  return damage(a, a.boss ? cap : 999, Object.assign({ mode, dir: dir || V(0, 0, 1), weapon, bossCap: cap }, o));
}

export function initPowers() {
  swordGeo = mergeGeometries([box(0.09, 0.02, 1.3).translate(0, 0, 0.35), box(0.34, 0.05, 0.07).translate(0, 0, -0.3), box(0.05, 0.05, 0.3).translate(0, 0, -0.45)]);
  swordMat = lam(0xDDE8EC, { emissive: 0x3A5560 });
  scytheGeo = mergeGeometries([box(1.9, 0.07, 0.07).translate(2.5, 0, 0), box(0.14, 0.04, 1.2).translate(3.4, 0, 0.5), box(0.1, 0.04, 0.5).translate(3.32, 0, 1.2)]);
  ballGeo = new THREE.SphereGeometry(1, 16, 12); iceGeo = box(1, 1, 1); iceMat = lam(0xBFEAFF, { transparent: true, opacity: 0.45, flatShading: false });
  discGeo = cyl(1, 1, 0.05, 24); shotGeo = new THREE.SphereGeometry(1, 12, 8); moonGeo = new THREE.TorusGeometry(1.6, 0.13, 6, 14, Math.PI);

  // 第一人稱的手／車頭
  ovm = new THREE.Group(); ovm.visible = false; G.camera.add(ovm);
  const claw = (sx) => { const g = grp(mesh(box(0.2, 0.2, 0.7), lam(0x3F6A2C), 0, 0, 0)); for (let i = -1; i <= 1; i++) g.add(mesh(new THREE.ConeGeometry(0.035, 0.24, 5), lam(0xF7F1DC), i * 0.07, 0, -0.45, -Math.PI / 2)); g.position.set(sx * 0.5, -0.5, -0.75); g.scale.setScalar(0.8); return g; };
  vms.beast = grp(claw(-1), claw(1));
  vms.car = grp(mesh(box(1.9, 0.1, 1.5), lam(0xC8483A), 0, -0.8, -1.55, 0.05), mesh(box(0.3, 0.02, 1.5), lam(0xF7F1DC), 0, -0.74, -1.55, 0.05),
    mesh(box(1.9, 0.28, 0.3), lam(0x2E2A1F), 0, -0.74, -0.74), mesh(new THREE.TorusGeometry(0.2, 0.035, 6, 14), lam(0x2E2A1F), 0, -0.52, -0.62, -0.5));
  vms.cannon = grp(mesh(cyl(0.12, 0.14, 0.7, 10), lam(0x3FA7B5), 0.34, -0.3, -0.75, Math.PI / 2), mesh(new THREE.TorusGeometry(0.13, 0.03, 6, 12), lam(0xF2C94C), 0.34, -0.3, -1.08),
    mesh(shotGeo, bas(0xBFF3FF), 0.34, -0.3, -1.15));
  const skin = lam(0xEFC0AE);
  const beamIn = mesh(cyl(0.4, 0.4, 1, 12).rotateX(Math.PI / 2).translate(0, 0, -0.5), bas(0xFFFFFF, { fog: false }), 0, -0.95, -2.5);
  const beamOut = mesh(cyl(0.8, 0.8, 1, 14).rotateX(Math.PI / 2).translate(0, 0, -0.5), bas(0x7FD8FF, { fog: false, transparent: true, opacity: 0.55, depthWrite: false }), 0, -0.95, -2.5);
  vms.beam = grp(mesh(box(0.16, 0.2, 0.3), skin, -0.15, -0.4, -0.6), mesh(box(0.16, 0.2, 0.3), skin, 0.15, -0.4, -0.6), mesh(shotGeo, bas(0xBFF3FF), 0, -0.36, -0.9), beamIn, beamOut);
  vms.disc = grp(mesh(box(0.14, 0.34, 0.14), skin, 0.42, -0.12, -0.6), mesh(cyl(0.3, 0.3, 0.02, 20), bas(0xFFE58A), 0.42, 0.14, -0.6));
  vms.ice = grp(mesh(box(0.06, 1.0, 0.14), lam(0xBFEAFF, { emissive: 0x2A6C8C }), 0, 0.5, 0), mesh(box(0.3, 0.06, 0.1), lam(0x3FA7B5), 0, 0, 0), mesh(box(0.06, 0.24, 0.06), lam(0x2E2A1F), 0, -0.14, 0));
  vms.chain = grp(mesh(box(0.14, 0.16, 0.34), skin, 0.36, -0.34, -0.62), mesh(shotGeo, bas(0xFFF7C2), 0.36, -0.3, -0.86));
  vms.chain.children[1].scale.setScalar(0.07);
  for (const k in vms) { vms[k].visible = false; ovm.add(vms[k]); }
}

function setOverride(id) {
  G.override = id; ovm.visible = !!id;
  for (const k in vms) vms[k].visible = k === id;
  G.camera.children.forEach((c) => { if (c !== ovm) c.visible = !id; });
  vms.beam.children[3].visible = vms.beam.children[4].visible = false;
  charge = 0; beamOn = 0; cd = 0.25; swing = 0; stopAllLoops();
}
export function resetPowers() {
  ents.forEach((e) => e.end()); ents.length = 0; zCount = 0;
  G.override = null; G.spMul = 1; G.fovAdd = 0;
  if (ovm) { ovm.visible = false; for (const k in vms) vms[k].visible = false; }
}

// ── 召喚物 ──
function quad(body, accent, s, robot) {
  const mb = lam(body), ma = lam(accent), g = grp(mesh(box(0.42, 0.45, 1.1), mb, 0, 0.62, 0), mesh(box(0.36, 0.36, 0.42), mb, 0, 0.84, 0.68), mesh(box(0.2, 0.18, 0.26), ma, 0, 0.76, 0.95),
    mesh(box(0.08, 0.08, 0.45), ma, 0, 0.8, -0.72, 0.6), mesh(box(0.06, 0.06, 0.04), bas(0xE8523F), -0.1, 0.9, 0.9), mesh(box(0.06, 0.06, 0.04), bas(0xE8523F), 0.1, 0.9, 0.9));
  if (robot) g.add(mesh(box(0.2, 0.16, 0.44), ma, 0, 0.95, -0.1)); else { g.add(mesh(new THREE.ConeGeometry(0.07, 0.2, 4), ma, -0.12, 1.1, 0.6)); g.add(mesh(new THREE.ConeGeometry(0.07, 0.2, 4), ma, 0.12, 1.1, 0.6)); }
  const legs = [];
  for (let i = 0; i < 4; i++) { const l = grp(mesh(box(0.12, 0.5, 0.12), ma, 0, -0.25, 0)); l.position.set(i % 2 ? 0.15 : -0.15, 0.45, i < 2 ? 0.4 : -0.4); g.add(l); legs.push(l); }
  g.userData.legs = legs; g.scale.setScalar(s); return g;
}
function pet(kind, x, z, life) {
  const robot = kind === 'robodog', g = quad(robot ? 0xF2C94C : 0x4A4A4A, robot ? 0x6B6455 : 0x2E2A1F, robot ? 1.3 : 1.1, robot), sp = robot ? 24 : 17;
  g.position.set(x, 0, z); G.scene.add(g); dust(x, 0, z, 5, 0.8);
  let t = 0, bite = 0, shot = rand(0.5, 1.5), tgt = null;
  ents.push({
    upd(dt, wdt) {
      t += dt; const p = g.position;
      if (t > life) { dust(p.x, 0, p.z, 6, 0.9); return true; }
      bite -= wdt; if (tgt && tgt.dead) tgt = null;
      if (!tgt) tgt = nearestTo(p.x, p.z, 90, null, true);
      const pp = G.player.pos, tx = tgt ? tgt.root.position.x : pp.x + 2, tz = tgt ? tgt.root.position.z : pp.z + 2;
      const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz) || 1;
      if (d > (tgt ? 1.3 + (tgt.boss ? tgt.H * 0.3 : 0) : 3)) {
        p.x += (dx / d) * sp * wdt; p.z += (dz / d) * sp * wdt; g.rotation.y = Math.atan2(dx, dz);
        g.userData.legs.forEach((l, i) => (l.rotation.x = Math.sin(t * 24 + (i % 3 ? Math.PI : 0)) * 0.9)); p.y = Math.abs(Math.sin(t * 12)) * 0.15;
      } else if (tgt && bite <= 0) {
        bite = 0.3; const a = tgt; if (!a.boss) tgt = null;
        hit(a, kind, robot ? 'gib' : pick(['headpop', 'gib', 'drop']), V(dx / d, 0.3, dz / d), { boss: 140, power: 5 });
      }
      if (robot) {
        shot -= wdt;
        if (shot <= 0) {
          shot = 1.5; const b = nearestTo(p.x, p.z, 40, tgt ? new Set([tgt]) : null, true);
          if (b && b.dP > 6) { const to = centre(b); tracer(V(p.x, 1.3, p.z), to, 0xFF8A5C, 0.1, 0.12); S.missile(); explode(V(to.x, 0.6, to.z), 3.2, { weapon: 'robodog', loud: 0.5 }); }
        }
      }
      return false;
    },
    end() { G.scene.remove(g); },
  });
}
function zombie(key, x, z) {
  const b = makeBody(key, 0x86A86B); b.root.position.set(x, -b.H, z); G.scene.add(b.root); dust(x, 0, z, 5, 0.7); zCount++;
  let t = rand(6), bite = 0, tgt = null;
  ents.push({
    upd(dt, wdt) {
      t += wdt; b.mixer.update(wdt * 0.9); const p = b.root.position;
      if (!(G.buff.zombie > 0)) { for (let i = 0; i < 8; i++) FX.puffs.spawn(p.x, rand(0.2, b.H), p.z, rand(-2, 2), rand(0, 3), rand(-2, 2), 0.3, rand(0.6, 1.1), rand(0.4, 0.8), 0x86A86B, 0x2E2A1F, 0, 2); return true; }
      if (p.y < 0) { p.y = Math.min(0, p.y + (b.H / 0.8) * wdt); return false; } // 從土裡爬出來
      b.root.rotation.z = Math.sin(t * 6) * 0.12;
      if (tgt && tgt.dead) tgt = null;
      if (!tgt) tgt = nearestTo(p.x, p.z, 90, null, true);
      if (!tgt) return false;
      const q = tgt.root.position, dx = q.x - p.x, dz = q.z - p.z, d = Math.hypot(dx, dz) || 1;
      if (d > 1.2 + (tgt.boss ? tgt.H * 0.3 : 0)) { p.x += (dx / d) * 11.5 * wdt; p.z += (dz / d) * 11.5 * wdt; b.root.rotation.y = Math.atan2(dx, dz); } else {
        bite -= wdt;
        if (bite <= 0) {
          bite = 0.5; const a = tgt, k = a.key, vx = q.x, vz = q.z, boss = a.boss; tgt = null;
          if (hit(a, 'zombie', 'headpop', V(dx / d, 0, dz / d), { boss: 150 }) && !boss && zCount < 18) after(1.2, () => { if (G.buff.zombie > 1.5) zombie(k, vx, vz); });
        }
      }
      return false;
    },
    end() { zCount--; freeBody(b); },
  });
}
function turret(x, z, life) {
  const head = grp(mesh(box(0.5, 0.4, 0.6), lam(0x2D4321)), mesh(cyl(0.07, 0.07, 0.8, 6), lam(0x2E2A1F), 0.13, 0, 0.6, Math.PI / 2), mesh(cyl(0.07, 0.07, 0.8, 6), lam(0x2E2A1F), -0.13, 0, 0.6, Math.PI / 2));
  head.position.y = 0.85; const g = grp(mesh(cyl(0.3, 0.5, 0.6, 8), lam(0x6B6455), 0, 0.3, 0), head); g.position.set(x, 0, z); G.scene.add(g); dust(x, 0, z, 5, 0.8); S.clank();
  let t = 0, c = 0, n = 0;
  ents.push({
    upd(dt, wdt) {
      t += dt; if (t > life) { dust(x, 0, z, 6, 0.9); return true; }
      c -= wdt; const a = nearestTo(x, z, 40); if (!a) return false;
      const to = centre(a); head.rotation.y = Math.atan2(to.x - x, to.z - z);
      if (c <= 0) {
        c = 0.09; const from = V(x, 0.85, z), dir = to.clone().sub(from).normalize(); from.addScaledVector(dir, 0.9);
        tracer(from, to, 0xFFE58A, 0.04); if (n++ % 2 === 0) S.smg();
        damage(a, 42, { mode: Math.random() < 0.3 ? 'headpop' : 'drop', dir, power: 4, weapon: 'turret', bossCap: 42 });
      }
      return false;
    },
    end() { G.scene.remove(g); },
  });
}
function drone(i, life) {
  const g = grp(mesh(box(0.6, 0.15, 0.6), lam(0x2E2A1F)), mesh(box(0.12, 0.08, 0.12), bas(0xE8523F), 0, -0.1, 0.2));
  for (let k = 0; k < 4; k++) g.add(mesh(cyl(0.22, 0.22, 0.02, 10), lam(0xE8D9B5), k % 2 ? 0.36 : -0.36, 0.1, k < 2 ? 0.36 : -0.36));
  G.scene.add(g); let t = 0, shot = 0.4 + i * 0.3;
  ents.push({
    upd(dt, wdt) {
      t += dt; if (t > life) { sparks(g.position.x, g.position.y, g.position.z, 8); return true; }
      const pp = G.player.pos, an = G.t * 1.2 + i * 2.094;
      g.position.set(pp.x + Math.cos(an) * 5, pp.y + 6.5 + Math.sin(G.t * 2 + i) * 0.4, pp.z + Math.sin(an) * 5); g.rotation.y += dt * 3;
      shot -= wdt;
      if (shot <= 0) {
        shot = 0.85; const c = G.animals.filter((a) => a.dP < 45 && a.dP > 5 && !skyDrop(a));
        if (c.length) { const to = centre(pick(c)); tracer(g.position, to, 0xE8523F, 0.08, 0.12); explode(V(to.x, 0.6, to.z), 2.8, { weapon: 'drone', loud: 0.45 }); }
      }
      return false;
    },
    end() { G.scene.remove(g); },
  });
}
function scythes() {
  const mat = lam(0xDDE8EC, { emissive: 0x30424A }), g = grp(); for (let i = 0; i < 3; i++) g.add(mesh(scytheGeo, mat, 0, 0, 0, 0, i * 2.094, 0));
  G.scene.add(g);
  ents.push({
    upd(dt, wdt) {
      if (!(G.buff.scythe > 0)) return true;
      const pp = G.player.pos; g.position.set(pp.x, pp.y + 1.0, pp.z); g.rotation.y -= wdt * 9;
      eachNear(pp.x, pp.z, 4.2, (a) => { const q = a.root.position; if (q.y - pp.y > 3.5) return; hit(a, 'scythe', 'slice', V(q.z - pp.z, 0, pp.x - q.x).normalize(), { cut: 'h', boss: 220 }); });
      return false;
    },
    end() { G.scene.remove(g); mat.dispose(); },
  });
}
function flySword(i) {
  const g = mesh(swordGeo, swordMat); g.position.copy(G.player.pos).setY(3); G.scene.add(g); let tgt = null;
  ents.push({
    upd(dt, wdt) {
      const P = G.player, pos = g.position;
      if (!(G.buff.swords > 0)) { sparks(pos.x, pos.y, pos.z, 5); return true; }
      if (tgt && tgt.dead) tgt = null;
      if (!tgt) { tgt = nearestTo(P.pos.x, P.pos.z, 55, null, true); if (tgt && G.t - (tgt.swordT || -9) < 0.6) tgt = null; else if (tgt) tgt.swordT = G.t; }
      if (tgt) centre(tgt, _q); else { const sy = Math.sin(P.yaw), cy = Math.cos(P.yaw), o = (i - 2.5) * 0.6; _q.set(P.pos.x + sy * 2 + cy * o, P.pos.y + 2.6 + (i % 2) * 0.5, P.pos.z + cy * 2 - sy * o); }
      _v.copy(_q).sub(pos); const d = _v.length(), sp = tgt ? 55 : Math.min(40, d * 6);
      if (d > 0.01) { pos.addScaledVector(_v, Math.min(1, (sp * wdt) / d)); if (tgt || d > 0.6) g.lookAt(_q); else g.rotation.set(-Math.PI / 2, 0, 0); }
      if (tgt && d < 1.2 + (tgt.boss ? tgt.H * 0.3 : 0)) { const a = tgt; tgt = null; hit(a, 'sword', 'slice', _v.normalize().clone(), { cut: pick(['v', 'd']), boss: 200 }); }
      return false;
    },
    end() { G.scene.remove(g); },
  });
}
function myriad() {
  const P = G.player, pp = P.pos.clone(), list = G.animals.filter((a) => a.dP < 70 && !skyDrop(a)).sort((a, b) => a.dP - b.dP), N = 54;
  S.rise();
  for (let i = 0; i < N; i++) {
    const an = rand(6.28), r = rand(3, 20), g = mesh(swordGeo, swordMat), a = list.length ? list[i % list.length] : null;
    const home = V(pp.x + Math.cos(an) * r, rand(13, 22), pp.z + Math.sin(an) * r), ground = V(home.x + rand(-6, 6), 0, home.z + rand(-6, 6));
    g.position.copy(home); g.scale.setScalar(0.01); g.lookAt(home.x, 0, home.z); G.scene.add(g);
    let t = -i * 0.012; const launch = 1.0 + rand(0, 0.5);
    ents.push({
      upd(dt, wdt) {
        t += wdt; if (t < 0) return false;
        const live = a && !a.dead, dest = live ? centre(a, _q) : _q.copy(ground);
        if (t < launch) { g.scale.setScalar(Math.min(1.6, t * 6)); g.position.y = home.y + Math.sin(t * 9 + i) * 0.15; g.lookAt(dest); return false; }
        _v.copy(dest).sub(g.position); const d = _v.length(); g.lookAt(dest);
        if (d < 1.4 || g.position.y < 0.3) { if (live) hit(a, 'sword', 'slice', _v.normalize().clone(), { cut: 'v', boss: 120 }); else sparks(g.position.x, 0.2, g.position.z, 3); return true; }
        g.position.addScaledVector(_v, Math.min(1, (85 * wdt) / d)); return false;
      },
      end() { G.scene.remove(g); },
    });
  }
  // 最後一把巨劍
  const c = V(pp.x - Math.sin(P.yaw) * 14, 0, pp.z - Math.cos(P.yaw) * 14), big = mesh(swordGeo, swordMat); big.scale.setScalar(16); big.position.set(c.x, 70, c.z); big.rotation.x = Math.PI / 2; big.visible = false; G.scene.add(big);
  let t = 0, landed = false;
  ents.push({
    upd(dt, wdt) {
      t += wdt; if (t < 1.9) return false; big.visible = true;
      if (!landed) { big.position.y -= 130 * wdt; if (big.position.y <= 9) { big.position.y = 9; landed = true; t = 10; explode(c.clone().setY(0.6), 13, { weapon: 'sword', loud: 1.3 }); ring(c, 1, 30, 0.7, 0xDDE8EC); shake(1); } return false; }
      return t > 11.5;
    },
    end() { G.scene.remove(big); },
  });
}
function ball(i) {
  const R = 2.2, mat = new THREE.MeshLambertMaterial({ color: [0x7FC1CF, 0xEFC0AE, 0xF2C94C][i % 3], transparent: true, opacity: 0.6 }), m = mesh(ballGeo, mat);
  const an = G.player.yaw + (i - 1) * 0.6, v = V(-Math.sin(an) * 21, 9, -Math.cos(an) * 21), pp = G.player.pos; m.position.set(pp.x + v.x * 0.15, 3, pp.z + v.z * 0.15); m.scale.setScalar(R); G.scene.add(m);
  ents.push({
    upd(dt, wdt) {
      const p = m.position;
      if (!(G.buff.bubble > 0)) { for (let k = 0; k < 10; k++) FX.puffs.spawn(p.x, p.y, p.z, rand(-5, 5), rand(-2, 5), rand(-5, 5), 0.4, 1, rand(0.3, 0.6), 0xF4FAFA, mat.color.getHex(), 0, 2); S.pop(); return true; }
      v.y -= 30 * wdt;
      const a = nearestTo(p.x, p.z, 45); if (a) { const q = a.root.position, dx = q.x - p.x, dz = q.z - p.z, d = Math.hypot(dx, dz) || 1; v.x += (dx / d) * 26 * wdt; v.z += (dz / d) * 26 * wdt; }
      const h = Math.hypot(v.x, v.z) || 1; v.x *= 21 / h; v.z *= 21 / h; p.addScaledVector(v, wdt);
      if (p.y < R) { p.y = R; v.y = Math.max(11, -v.y * 0.9); S.boing(); m.scale.set(R * 1.2, R * 0.75, R * 1.2); }
      m.scale.x += (R - m.scale.x) * Math.min(1, dt * 8); m.scale.y += (R - m.scale.y) * Math.min(1, dt * 8); m.scale.z = m.scale.x;
      const r = Math.hypot(p.x, p.z); if (r > R_ISLAND - 3) { const nx = p.x / r, nz = p.z / r, dot = v.x * nx + v.z * nz; if (dot > 0) { v.x -= 2 * dot * nx; v.z -= 2 * dot * nz; } }
      for (const o of G.obstacles) {
        if (o.r < 2 || p.y > o.h + R) continue; const dx = p.x - o.x, dz = p.z - o.z, d = Math.hypot(dx, dz);
        if (d < o.r + R && d > 0.01) { const dot = (v.x * dx + v.z * dz) / d; if (dot < 0) { v.x -= (2 * dot * dx) / d; v.z -= (2 * dot * dz) / d; } }
      }
      m.rotation.x += wdt * 4;
      eachNear(p.x, p.z, R + 0.5, (b) => { if (Math.abs(b.root.position.y + b.H * 0.5 - p.y) < R + b.H * 0.6) hit(b, 'bubble', 'flat', null, { boss: 220 }); });
      return false;
    },
    end() { G.scene.remove(m); mat.dispose(); },
  });
}
function freeze(a) {
  if (a.dead || a.ice > 0 || skyDrop(a)) return;
  if (a.boss) { hit(a, 'ice', 'gib', null, { boss: 180 }); return; }
  a.ice = rand(4, 6); a.state = 'frozen'; a.hole = null; a.balloon = null; a.tilt.scale.setScalar(1); a.mixer.timeScale = 0; a.mat.color.set(0x9FD8F0); a.mat.transparent = false; a.mat.opacity = 1;
  const b = mesh(iceGeo, iceMat, 0, a.H * 0.55, 0); b.scale.set(a.H * 0.85, a.H * 1.15, a.H * 0.85); a.root.add(b); S.ice();
}

// ── 啟動／結束 ──
export function startPower(id) {
  const P = G.player, pp = P.pos, sy = Math.sin(P.yaw), cy = Math.cos(P.yaw);
  if (OV.includes(id)) {
    for (const o of OV) if (o !== id) delete G.buff[o];
    setOverride(id);
    if (id === 'beast') { S.wail('roar', 0.4); shake(0.5); ring(pp, 0.5, 8, 0.4, 0x81BD49); } else if (id === 'car') S.honk(); else S.rise();
    return;
  }
  if (id === 'wolves') for (let i = 0; i < 5; i++) { const an = rand(6.28); pet('wolf', pp.x + Math.cos(an) * 3, pp.z + Math.sin(an) * 3, 14); }
  else if (id === 'robodog') pet('robodog', pp.x - sy * 2.5, pp.z - cy * 2.5, 18);
  else if (id === 'zombie') { for (let i = 0; i < 8; i++) { const an = rand(6.28), d = rand(5, 18); zombie(randomKey(), pp.x + Math.cos(an) * d, pp.z + Math.sin(an) * d); } S.wail('gurgle', 0.5); }
  else if (id === 'turret') { turret(pp.x - sy * 2.5 + cy * 2, pp.z - cy * 2.5 - sy * 2, 18); turret(pp.x - sy * 2.5 - cy * 2, pp.z - cy * 2.5 + sy * 2, 18); }
  else if (id === 'drone') for (let i = 0; i < 3; i++) drone(i, 16);
  else if (id === 'thunder') { G.animals.filter((a) => a.dP < 60 && !skyDrop(a)).sort((a, b) => a.dP - b.dP).slice(0, 14).forEach((a, i) => after(i * 0.11, () => { if (!a.dead) strike(a.root.position.x, a.root.position.z, { small: i > 0, chain: 2 }); })); }
  else if (id === 'scythe') scythes();
  else if (id === 'swords') for (let i = 0; i < 6; i++) flySword(i);
  else if (id === 'myriad') myriad();
  else if (id === 'bubble') for (let i = 0; i < 3; i++) ball(i);
  else if (id === 'speed') S.whoosh();
}
export function endPower(id) { if (G.override === id) setOverride(null); }

// ── 取代武器的那幾招 ──
function override(id, dt, wdt) {
  const I = G.input, P = G.player, pp = P.pos, cam = G.camera, cp = cam.position, vm = vms[id];
  cd -= dt; swing = Math.max(0, swing - dt * 5);
  if (id === 'beast') {
    G.spMul = 1.35;
    if (I.fire && cd <= 0) {
      cd = 0.3; swing = 1; side = -side; S.swing(true); let n = 0;
      for (const a of G.animals.slice()) {
        if (skyDrop(a)) continue; const q = a.root.position; _v.set(q.x - cp.x, 0, q.z - cp.z);
        const d = _v.length() - (a.boss ? a.H * 0.35 : 0); if (d > 6.5 || q.y > 6) continue; _v.normalize();
        if (_v.x * _f.x + _v.z * _f.z < 0.25 && d > 1.5) continue;
        if (hit(a, 'beast', pick(['slice', 'launch', 'gib']), V(_v.x, 0.25, _v.z).normalize(), { boss: 320, cut: 'h' })) n++;
      }
      if (n) { shake(0.25); G.hitMark = 0.1; if (Math.random() < 0.3) S.wail('roar', 0.4); }
      if (n >= 3 && G.onMulti) G.onMulti(n, pp, `一爪 ${n} 隻`);
    }
    if (!wasGround && P.onGround && lastVy < -9) { ring(pp, 0.5, 8, 0.4); shake(0.5); S.slam(); dust(pp.x, 0, pp.z, 8, 1.2); eachNear(pp.x, pp.z, 6, (a) => { if (a.root.position.y < 3) hit(a, 'beast', 'flat', null, { boss: 300 }); }); }
    vm.children[0].rotation.x = side < 0 ? swing * 1.0 : 0; vm.children[1].rotation.x = side > 0 ? swing * 1.0 : 0;
    vm.children[0].position.z = -0.75 - (side < 0 ? swing * 0.3 : 0); vm.children[1].position.z = -0.75 - (side > 0 ? swing * 0.3 : 0);
  } else if (id === 'car') {
    G.spMul = 3.4; G.fovAdd = 12; loop('saw', true, 0.25 + hs / 80);
    if (hs > 8) {
      const dx = P.vel.x / hs, dz = P.vel.z / hs;
      eachNear(pp.x + dx * 1.2, pp.z + dz * 1.2, 2.5, (a) => { if (a.root.position.y < 3 && hit(a, 'car', 'launch', V(dx, 0.35, dz).normalize(), { boss: 350 })) shake(0.2); });
      if (Math.random() < dt * 24) FX.puffs.spawn(pp.x - dx * 1.5 + rand(-0.8, 0.8), 0.2, pp.z - dz * 1.5 + rand(-0.8, 0.8), 0, 1, 0, 0.4, 1.1, 0.5, 0xF7F1DC, 0xDDDAD1, 0.5, 2);
    }
    if (I.firePressed) S.honk();
    vm.position.y = Math.sin(G.t * 31) * 0.004 * Math.min(1, hs / 20);
  } else if (id === 'cannon') {
    const glow = vm.children[2];
    if (I.fire) { charge = Math.min(1, charge + dt / 1.1); if (charge > 0.15) S.stretch(charge); }
    else if (wasFire && cd <= 0) {
      const c = charge, rad = 0.25 + c * 1.1, big = c > 0.35, dir = _f.clone(), pos = cp.clone().addScaledVector(_f, 1).addScaledVector(_r, 0.3); pos.y -= 0.25;
      charge = 0; cd = 0.14; S.cannon(c); if (big) shake(0.2 + c * 0.3);
      const m = mesh(shotGeo, bas(big ? 0x8FE9FF : 0xBFF3FF)); m.scale.setScalar(rad); m.position.copy(pos); G.scene.add(m); let far = 0;
      ents.push({
        upd(dt2, w) {
          const st = 90 * w; pos.addScaledVector(dir, st); m.position.copy(pos); far += st; let done = far > 85 || pos.y < rad * 0.6;
          if (Math.random() < 0.6) FX.puffs.spawn(pos.x, pos.y, pos.z, 0, 0, 0, rad * 0.8, rad * 0.3, 0.25, 0xBFF3FF, 0x3FA7B5, 0, 1);
          for (const o of G.obstacles) if (pos.y < o.h && (pos.x - o.x) ** 2 + (pos.z - o.z) ** 2 < (o.r + rad * 0.5) ** 2) done = true;
          for (const a of G.animals.slice()) {
            if (centre(a, _q).distanceTo(pos) > rad + a.H * 0.45 + (a.boss ? a.H * 0.2 : 0)) continue;
            if (big) { hit(a, 'cannon', 'gib', dir.clone(), { boss: 350 }); if (a.boss) done = true; } else { hit(a, 'cannon', Math.random() < 0.4 ? 'headpop' : 'drop', dir.clone(), { power: 7, boss: 120 }); done = true; break; }
          }
          if (done) { if (big) explode(pos.clone().setY(Math.max(0.6, pos.y)), 3 + c * 5.5, { weapon: 'cannon' }); else sparks(pos.x, pos.y, pos.z, 6); }
          return done;
        },
        end() { G.scene.remove(m); m.material.dispose(); },
      });
    } else if (!I.fire) charge = 0;
    glow.scale.setScalar(0.04 + charge * 0.3);
  } else if (id === 'beam') {
    const glow = vm.children[2], bi = vm.children[3], bo = vm.children[4];
    if (beamOn > 0) {
      beamOn -= dt; beamT -= wdt; let len = 90; const ox = cp.x + _f.x, oy = cp.y - 0.35 + _f.y, oz = cp.z + _f.z;
      if (_f.y < -0.02) { const t = -(oy - 0.4) / _f.y; if (t < len) { len = Math.max(2, t); if (beamT <= 0) { beamT = 0.18; explode(V(ox + _f.x * t, 0.6, oz + _f.z * t), 4.5, { weapon: 'beam', loud: 0.6 }); } } }
      const fl = 1 + Math.sin(G.t * 60) * 0.12; bi.visible = bo.visible = true; bi.scale.set(fl, fl, len); bo.scale.set(fl, fl, len);
      for (const a of G.animals.slice()) {
        centre(a, _v); _v.x -= ox; _v.y -= oy; _v.z -= oz; const t = _v.dot(_f); if (t < 0 || t > len + 2) continue;
        const R = 2.2 + (a.boss ? a.H * 0.3 : 0); if (_v.lengthSq() - t * t < R * R) hit(a, 'beam', 'gib', _f.clone(), { boss: 500 });
      }
      if (G.trauma < 0.4) shake(0.06); P.kvel.x -= _f.x * 20 * dt; P.kvel.z -= _f.z * 20 * dt; G.fovAdd = 8;
      if (beamOn <= 0) { bi.visible = bo.visible = false; cd = 0.6; }
    } else if (I.fire && cd <= 0) { charge += dt / 0.7; S.stretch(charge); if (charge >= 1) { charge = 0; beamOn = 2.6; beamT = 0; S.beam(); shake(0.4); } } else charge = Math.max(0, charge - dt * 2);
    glow.scale.setScalar(beamOn > 0 ? 0.14 : 0.03 + charge * 0.2);
  } else if (id === 'disc') {
    vm.children[1].rotation.y += dt * 30; vm.children[1].visible = cd < 0.2;
    if (I.fire && cd <= 0) {
      cd = 0.42; S.swing(); S.slice();
      const dir = V(_f.x, clamp(_f.y, -0.12, 0.3), _f.z).normalize(), pos = cp.clone().addScaledVector(dir, 1.6); pos.y = Math.max(0.9, pos.y - 0.3);
      const m = grp(mesh(discGeo, bas(0xFFE58A, { fog: false })), mesh(discGeo, bas(0xFFFFFF, { fog: false }), 0, 0.01, 0)); m.children[0].scale.set(1.4, 1, 1.4); m.children[1].scale.set(0.8, 1, 0.8); m.position.copy(pos); G.scene.add(m); let far = 0;
      ents.push({
        upd(dt2, w) {
          const st = 40 * w; pos.addScaledVector(dir, st); far += st; if (pos.y < 0.6) pos.y = 0.6; m.position.copy(pos); m.rotation.y += w * 30;
          if (Math.random() < 0.5) sparks(pos.x, pos.y, pos.z, 1);
          eachNear(pos.x, pos.z, 1.9, (a) => { if (Math.abs(a.root.position.y + a.H * 0.5 - pos.y) < 1.6 + a.H * 0.4) hit(a, 'disc', 'slice', dir.clone(), { cut: 'h', boss: 380 }); });
          return far > 75;
        },
        end() { G.scene.remove(m); },
      });
    }
  } else if (id === 'ice') {
    vm.position.set(0.4, -0.55, -0.7); vm.rotation.set(-0.35 - swing * 1.3, 0, -0.3 + swing * 0.5);
    if (I.fire && cd <= 0) {
      cd = 0.4; swing = 1; S.swing(); S.ice();
      for (const a of G.animals.slice()) { // 近身：沒凍的凍住、已凍的敲碎
        centre(a, _v).sub(cp); const d = _v.length() - (a.boss ? a.H * 0.35 : 0); if (d > 4.8) continue; if (_v.dot(_f) / (_v.length() || 1) < 0.3) continue;
        if (a.ice > 0) hit(a, 'ice', 'ice', _f.clone()); else freeze(a);
      }
      const dir = V(_f.x, 0, _f.z).normalize(), pos = V(cp.x + dir.x * 2, 1.1, cp.z + dir.z * 2);
      const m = mesh(moonGeo, bas(0xBFEAFF, { fog: false, side: THREE.DoubleSide })); m.position.copy(pos); m.rotation.set(-Math.PI / 2, 0, Math.atan2(dir.x, dir.z) + Math.PI); G.scene.add(m); let far = 0;
      ents.push({
        upd(dt2, w) {
          const st = 34 * w; pos.addScaledVector(dir, st); far += st; m.position.copy(pos);
          if (Math.random() < 0.7) FX.puffs.spawn(pos.x + rand(-1.5, 1.5), rand(0.2, 1.6), pos.z + rand(-1.5, 1.5), 0, 0.5, 0, 0.2, 0.5, 0.35, 0xF4FAFA, 0xBFEAFF, 0, 2);
          eachNear(pos.x, pos.z, 2.7, (a) => { if (a.root.position.y < 4.5) freeze(a); });
          return far > 34;
        },
        end() { G.scene.remove(m); m.material.dispose(); },
      });
    }
  } else if (id === 'chain') {
    vm.children[1].scale.setScalar(0.06 + Math.random() * 0.04);
    if (I.fire && cd <= 0) {
      cd = 0.24; S.zap();
      let from = cp.clone().addScaledVector(_f, 0.9).addScaledVector(_r, 0.34); from.y -= 0.3;
      let cur = aimed(45, 0.9) || nearestTo(pp.x, pp.z, 12); const used = new Set(); let n = 0, kills = 0;
      if (!cur) tracer(from, from.clone().addScaledVector(_f, 22).add(V(rand(-2, 2), rand(-1, 2), rand(-2, 2))), 0xFFF7C2, 0.06, 0.1);
      while (cur && n < 10) {
        used.add(cur); const to = centre(cur), mid = from.clone().lerp(to, 0.5).add(V(rand(-0.8, 0.8), rand(-0.5, 0.9), rand(-0.8, 0.8)));
        tracer(from, mid, 0xFFF7C2, 0.09, 0.1); tracer(mid, to, 0xFFF7C2, 0.09, 0.1); sparks(to.x, to.y, to.z, 4);
        if (hit(cur, 'chain', 'zap', null, { style: n ? 'chain' : undefined, boss: 160 })) kills++;
        from = to; cur = nearestTo(to.x, to.z, 9, used); n++;
      }
      if (kills >= 3 && G.onMulti) G.onMulti(kills, from, '連鎖閃電');
      if (n) G.hitMark = 0.08;
    }
  }
}

export function updatePowers(dt, wdt) {
  const P = G.player, pp = P.pos, B = G.buff;
  G.spMul = 1; G.fovAdd = 0; hs = Math.hypot(P.vel.x, P.vel.z);
  G.camera.getWorldDirection(_f); _r.setFromMatrixColumn(G.camera.matrixWorld, 0);
  if (G.override) override(G.override, dt, wdt);
  if (B.speed > 0) { // 極速：撞到誰誰兩半
    G.spMul *= 2.5; G.fovAdd += 14;
    if (hs > 14) {
      const dx = P.vel.x / hs, dz = P.vel.z / hs;
      eachNear(pp.x, pp.z, 2, (a) => { if (a.root.position.y - pp.y < 3) hit(a, 'speed', 'slice', V(dx, 0, dz), { cut: 'h', boss: 200 }); });
      if (Math.random() < dt * 30) FX.puffs.spawn(pp.x - dx + rand(-0.5, 0.5), pp.y + rand(0.2, 1.6), pp.z - dz + rand(-0.5, 0.5), 0, 0, 0, 0.5, 0.2, 0.3, 0xFCF9F0, 0xBFEAFF, 0, 1);
    }
  }
  for (const a of G.animals.slice()) { // 冰雕：時間到自己碎
    if (!(a.ice > 0)) continue; a.ice -= wdt; const q = a.root.position;
    if (!a.def.fly && q.y > 0) q.y = Math.max(0, q.y - 20 * wdt);
    if (a.ice <= 0) { a.ice = 0.01; kill(a, { mode: 'ice', weapon: 'ice' }); }
  }
  for (let i = ents.length - 1; i >= 0; i--) if (ents[i].upd(dt, wdt)) { ents[i].end(); ents.splice(i, 1); }
  lastVy = P.vel.y; wasGround = P.onGround; wasFire = G.input.fire;
}
