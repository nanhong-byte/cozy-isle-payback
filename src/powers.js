// 絕招：變身、跑車、氣功、劍陣、召喚物……由禮物箱／絕招槽（F）／無限模式的 Tab 選單觸發
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { G, R_ISLAND, rand, pick, clamp, V, after } from './state.js';
import { FX, ring, shake, sparks, dust, tracer } from './fx.js';
import { S, loop, stopAllLoops } from './audio.js';
import { damage, kill, makeBody, freeBody, randomKey, spawnRandom } from './animals.js';
import { UI } from './ui.js';
import { explode } from './weapons.js';
import { strike } from './weather.js';

export const POWERS = [
  { id: 'beast', icon: '🐲', name: '怪獸變身', tip: '左鍵揮爪，跳起來落地有震波', dur: 15, w: 2 },
  { id: 'car', icon: '🏎️', name: '公司跑車', tip: '自動往前衝，滑鼠轉向，撞就對了', dur: 14, w: 2 },
  { id: 'cannon', icon: '💪', name: '充能臂砲', tip: '按住左鍵蓄力，放開發射', dur: 14, w: 2 },
  { id: 'beam', icon: '👐', name: '怨念氣功波', tip: '按住左鍵集氣，放出 5 秒的巨大光柱', dur: 14, w: 2 },
  { id: 'disc', icon: '💗', name: '粉紅追魂斬', tip: '丟出去會自己追人，切穿一隻再找下一隻', dur: 13, w: 2 },
  { id: 'robot', icon: '🤖', name: '殺戮機器人', tip: '變身！按住左鍵雙管機槍左右狂掃，右鍵火箭', dur: 15, w: 2 },
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
  { id: 'ufo', icon: '👽', name: '大飛碟', tip: '光束把島民吸上去，順便雷射掃一輪', dur: 14, w: 2 },
  { id: 'crowd', icon: '📣', name: '全員到齊', tip: '再叫 20 個島民來島上（被你虐）', dur: 2, w: 1.6 },
  { id: 'tornado', icon: '🌪️', name: '人事異動龍捲風', tip: '捲起來轉一轉，再甩出去', dur: 12, w: 2 },
  { id: 'whale', icon: '🐋', name: '年終獎金鯨魚', tip: '準星那裡掉一隻鯨魚下來', dur: 3, w: 1.6 },
  { id: 'mines', icon: '💣', name: '績效地雷陣', tip: '身邊埋 16 顆，踩到就飛，時間到全部一起爆', dur: 16, w: 2 },
  { id: 'bowling', icon: '🎳', name: '巨型保齡球', tip: '往前滾一顆超大保齡球，全倒！', dur: 3, w: 2 },
  { id: 'firework', icon: '🎆', name: '下班煙火秀', tip: '附近 12 隻綁上沖天炮', dur: 4, w: 2 },
];
const OV = ['beast', 'car', 'cannon', 'beam', 'disc', 'ice', 'chain', 'robot']; // 會暫時取代手上武器的
const ents = [], vms = {};
const beamEnd = new THREE.Vector3();
const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _v = new THREE.Vector3(), _q = new THREE.Vector3();
let sweep = 0, rocketCd = 0, stepT = 0, ufoGeo = null;
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
  vms.disc = grp(mesh(box(0.14, 0.34, 0.14), skin, 0.42, -0.12, -0.6), mesh(cyl(0.3, 0.3, 0.02, 20), bas(0xFF6FB5), 0.42, 0.14, -0.6));
  const gun = (sx) => { const g = grp(mesh(box(0.34, 0.3, 0.7), lam(0x6B7378), 0, 0, 0), mesh(box(0.12, 0.05, 0.5), lam(0xC8483A), 0, 0.17, 0.05)); const bar = grp(); for (let i = 0; i < 3; i++) bar.add(mesh(cyl(0.035, 0.035, 0.6, 6), lam(0x2E2A1F), Math.cos(i * 2.09) * 0.07, Math.sin(i * 2.09) * 0.07, 0, Math.PI / 2)); bar.position.z = -0.6; g.add(bar); g.position.set(sx * 0.52, -0.5, -0.85); g.scale.setScalar(0.62); return g; };
  vms.robot = grp(gun(-1), gun(1));
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

// ── v1.3 新招（2026-11-17） ──
const FIRE_COLS = [0xF2C94C, 0xE8523F, 0x81BD49, 0x7FC1CF, 0xFF6FB5, 0xFCF9F0];
function groundAim(maxD = 60) { // 準星對到的地面點
  const cp = G.camera.position; let t = maxD;
  if (_f.y < -0.03) t = Math.min(maxD, (cp.y - 0.2) / -_f.y);
  return V(cp.x + _f.x * t, 0, cp.z + _f.z * t);
}
function burst(x, y, z, n = 40) { // 煙火爆開
  const c1 = pick(FIRE_COLS), c2 = pick(FIRE_COLS);
  for (let i = 0; i < n; i++) { const a = rand(6.28), b = rand(-1.4, 1.4), s = rand(8, 15); FX.puffs.spawn(x, y, z, Math.cos(a) * Math.cos(b) * s, Math.sin(b) * s, Math.sin(a) * Math.cos(b) * s, 0.25, rand(0.8, 1.3), rand(0.35, 0.6), c1, c2, 0.3, 1); }
}
// 怪獸爪痕：揮爪時眼前閃三道白紅爪印
function clawMarks(cp, sd) {
  for (let i = 0; i < 3; i++) {
    const m = mesh(moonGeo, bas(i === 1 ? 0xFFFFFF : 0xE8523F, { fog: false, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }));
    m.scale.setScalar(0.9); m.position.copy(cp).addScaledVector(_f, 2.6).addScaledVector(_r, (i - 1) * 0.42); m.position.y -= 0.15;
    m.lookAt(cp); m.rotateZ(sd * 0.9); G.scene.add(m); let t = 0;
    ents.push({ upd(dt) { t += dt; m.material.opacity = 0.9 * (1 - t / 0.18); m.scale.setScalar(0.9 + t * 3); return t > 0.18; }, end() { G.scene.remove(m); m.material.dispose(); } });
  }
}
// 大飛碟：光束吸人上去攪碎，順便雷射
function ufo() {
  const body = lam(0xA9B4B6), g = grp(mesh(cyl(7, 3.6, 1.2, 28), body), mesh(cyl(3.4, 7, 0.6, 28), lam(0x6B7378), 0, -0.85, 0),
    mesh(new THREE.SphereGeometry(3, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), lam(0xBFF3FF, { transparent: true, opacity: 0.85 }), 0, 0.55, 0));
  const lights = grp(); for (let i = 0; i < 12; i++) { const a = (i / 12) * 6.28; lights.add(mesh(shotGeo, bas(i % 2 ? 0xF2C94C : 0xE8523F, { fog: false }), Math.cos(a) * 6.4, -0.2, Math.sin(a) * 6.4)); }
  lights.children.forEach((l) => l.scale.setScalar(0.32)); g.add(lights);
  const beam = mesh(new THREE.CylinderGeometry(2, 5.5, 20, 18, 1, true), bas(0xC9FFB8, { transparent: true, opacity: 0.25, depthWrite: false, side: THREE.DoubleSide, fog: false }), 0, -10.6, 0); g.add(beam);
  const P = G.player, c = groundAim(30); g.position.set(c.x, 80, c.z); G.scene.add(g); S.rise();
  const hole = { done: false }, up = []; let t = 0, laser = 1.2;
  UI.feed('👽 <b>大飛碟</b>降臨，<em>外星人要帶幾個回去研究</em>');
  ents.push({
    upd(dt, wdt) {
      t += dt; const p = g.position, live = G.buff.ufo > 0;
      g.rotation.y += dt * 1.6; lights.children.forEach((l, i) => (l.visible = Math.sin(G.t * 12 + i) > -0.2));
      if (!live) { hole.done = true; p.y += 60 * dt; beam.visible = false; return p.y > 90; }
      p.y += (19 - p.y) * Math.min(1, dt * 2.5);
      const to = groundAim(40), sy = Math.sin(P.yaw), cy = Math.cos(P.yaw); to.x -= sy * 6; to.z -= cy * 6;
      const dx = to.x - p.x, dz = to.z - p.z, d = Math.hypot(dx, dz); if (d > 0.5) { const sp = Math.min(d, 14 * wdt); p.x += (dx / d) * sp; p.z += (dz / d) * sp; }
      beam.material.opacity = 0.2 + Math.sin(G.t * 9) * 0.06;
      if (p.y < 25) for (const a of G.animals) {
        if (a.dead || a.boss || a.state === 'sucked' || skyDrop(a) || up.length > 14) continue; const q = a.root.position;
        if ((q.x - p.x) ** 2 + (q.z - p.z) ** 2 < 30) { if (a.chute) { a.root.remove(a.chute); a.chute = null; } a.state = 'sucked'; a.hole = hole; a.mixer.timeScale = 3; up.push(a); S.cry('rise', a.def.pitch, a.def.robot); }
      }
      for (let i = up.length - 1; i >= 0; i--) {
        const a = up[i], q = a.root.position; if (a.dead || a.hole !== hole) { up.splice(i, 1); continue; }
        q.y += (4 + q.y * 0.5) * wdt; q.x += (p.x - q.x) * Math.min(1, wdt * 2); q.z += (p.z - q.z) * Math.min(1, wdt * 2); a.tilt.rotation.x += 9 * wdt; a.tilt.rotation.z += 6 * wdt;
        if (q.y > p.y - 2.5) { up.splice(i, 1); S.pop(); kill(a, { mode: 'gib', weapon: 'ufo', dir: V(rand(-1, 1), -1, rand(-1, 1)) }); }
      }
      eachNear(p.x, p.z, 6, (a) => { if (a.boss) hit(a, 'ufo', 'gib', V(0, 1, 0), { boss: 120 }); });
      laser -= wdt;
      if (laser <= 0) {
        laser = 0.55; const c2 = G.animals.filter((a) => !skyDrop(a) && a.state !== 'sucked' && (a.root.position.x - p.x) ** 2 + (a.root.position.z - p.z) ** 2 < 900);
        if (c2.length) { const a = pick(c2), q = centre(a); tracer(V(p.x, p.y - 1, p.z), q, 0xE8523F, 0.22, 0.14); S.zap(); explode(V(q.x, 0.6, q.z), 4, { weapon: 'ufo', loud: 0.5 }); }
      }
      return false;
    },
    end() { hole.done = true; G.scene.remove(g); beam.material.dispose(); },
  });
}
// 全員到齊：再叫 20 個島民空降
function crowd() {
  const pp = G.player.pos; let n = 0;
  for (let i = 0; i < 40 && n < 20; i++) n += spawnRandom(true, [pp.x, pp.z, 7, 26]);
  UI.feed(`📣 <b>全員到齊</b>：又來了 ${n} 個島民，<em>說是來開會的</em>`); S.siren();
}
// 人事異動龍捲風：自己找人群，捲上去轉幾圈再甩出去
function tornado() {
  const mat = lam(0xE8E4D4, { transparent: true, opacity: 0.5 }), g = grp();
  for (let i = 0; i < 7; i++) g.add(mesh(new THREE.CylinderGeometry(1.2 + (i + 1) * 0.75, 0.9 + i * 0.75, 2.2, 12, 1, true), mat, 0, 1.1 + i * 2.1, 0));
  const P = G.player, sy = Math.sin(P.yaw), cy = Math.cos(P.yaw); g.position.set(P.pos.x - sy * 12, 0, P.pos.z - cy * 12); G.scene.add(g); S.whoosh();
  const hole = { done: false }, caught = []; let wob = 0;
  ents.push({
    upd(dt, wdt) {
      const p = g.position; if (!(G.buff.tornado > 0)) { hole.done = true; dust(p.x, 0, p.z, 10, 2); return true; }
      g.rotation.y += wdt * 7; g.children.forEach((r, i) => (r.position.x = Math.sin(G.t * 3 + i * 0.7) * i * 0.18)); wob -= wdt;
      const tg = nearestTo(p.x, p.z, 80, null, true); if (tg && wob <= 0) { wob = 0.6; g.userData.tx = tg.root.position.x; g.userData.tz = tg.root.position.z; }
      if (g.userData.tx !== undefined) { const dx = g.userData.tx - p.x, dz = g.userData.tz - p.z, d = Math.hypot(dx, dz) || 1; p.x += (dx / d) * 13 * wdt; p.z += (dz / d) * 13 * wdt; }
      eachNear(p.x, p.z, 14, (a) => { if (a.boss || a.state === 'sucked') return; const q = a.root.position, ex = p.x - q.x, ez = p.z - q.z, e = Math.hypot(ex, ez) || 1; q.x += (ex / e) * 7 * wdt; q.z += (ez / e) * 7 * wdt; });
      const r = Math.hypot(p.x, p.z); if (r > R_ISLAND - 4) { p.x *= (R_ISLAND - 4) / r; p.z *= (R_ISLAND - 4) / r; }
      if (Math.random() < dt * 30) dust(p.x + rand(-3, 3), 0, p.z + rand(-3, 3), 1, 1.4);
      eachNear(p.x, p.z, 6, (a) => {
        if (a.boss) { hit(a, 'tornado', 'gib', V(0, 1, 0), { boss: 90 }); return; }
        if (a.state === 'sucked' || caught.length > 22) return;
        if (a.chute) { a.root.remove(a.chute); a.chute = null; } a.state = 'sucked'; a.hole = hole; a.mixer.timeScale = 3; caught.push({ a, ang: rand(6.28), h: a.root.position.y + 0.3 }); S.cry('long', a.def.pitch, a.def.robot);
      });
      for (let i = caught.length - 1; i >= 0; i--) {
        const c = caught[i], a = c.a; if (a.dead || a.hole !== hole) { caught.splice(i, 1); continue; }
        c.ang += wdt * 9; c.h += wdt * 6.5; const rr = 1.6 + c.h * 0.4, q = a.root.position;
        q.set(p.x + Math.cos(c.ang) * rr, c.h, p.z + Math.sin(c.ang) * rr); a.tilt.rotation.z += wdt * 10;
        if (c.h > 12) { caught.splice(i, 1); kill(a, { mode: 'launch', weapon: 'tornado', dir: V(Math.cos(c.ang), 0.7, Math.sin(c.ang)).normalize() }); }
      }
      return false;
    },
    end() { hole.done = true; G.scene.remove(g); mat.dispose(); },
  });
}
// 年終獎金鯨魚：從天而降壓扁一片
function whale() {
  const c = groundAim(55), body = lam(0x4F7FA8), g = grp(
    mesh(new THREE.SphereGeometry(1, 18, 12), body), mesh(new THREE.SphereGeometry(1, 16, 10), lam(0xE8E4D4), 0, -0.35, 0.1),
    mesh(box(0.6, 0.15, 2.4), body, 0, 0.2, -1.05), mesh(box(3.2, 0.12, 1.1), body, 0, 0.2, -1.55),
    mesh(box(1.8, 0.1, 0.7), body, 1.1, -0.2, 0.2, 0, 0, -0.5), mesh(box(1.8, 0.1, 0.7), body, -1.1, -0.2, 0.2, 0, 0, 0.5),
    mesh(shotGeo, bas(0x111111), 0.75, 0.15, 0.62), mesh(shotGeo, bas(0x111111), -0.75, 0.15, 0.62));
  g.children[0].scale.set(1.6, 1.25, 3.2); g.children[1].scale.set(1.35, 0.8, 2.7); g.children[6].scale.setScalar(0.13); g.children[7].scale.setScalar(0.13);
  g.scale.setScalar(2.6); g.position.set(c.x, 90, c.z); g.rotation.set(0.25, rand(6.28), 0.15); G.scene.add(g);
  UI.announce('年終獎金來了！', '請抬頭', true); S.whoosh();
  let v = 10, t = 0, landed = false, warn = 0;
  ents.push({
    upd(dt, wdt) {
      t += wdt; const p = g.position;
      if (!landed) {
        warn -= wdt; if (warn <= 0) { warn = 0.25; ring(V(c.x, 0.15, c.z), 1, 11, 0.25, 0xE8523F); }
        v += 70 * wdt; p.y -= v * wdt; g.rotation.x += wdt * 0.4;
        if (p.y <= 3.2) {
          p.y = 3.2; landed = true; t = 0; g.rotation.x = 0.1; shake(1); S.slam(); S.boom(1.4); G.hitstop = 0.08;
          ring(V(c.x, 0.2, c.z), 2, 26, 0.6, 0x7FC1CF); dust(c.x, 0, c.z, 24, 3); FX.decals.add(c.x, c.z, 13, 0x8A1A12, true);
          let n = 0; eachNear(c.x, c.z, 10.5, (a) => { if (hit(a, 'whale', 'flat', V(0, -1, 0), { boss: 1200 })) n++; });
          for (let i = 0; i < 60; i++) { const a = rand(6.28), s = rand(5, 16); FX.blood.spawn(c.x, 0.4, c.z, Math.cos(a) * s, rand(2, 7), Math.sin(a) * s, rand(0.1, 0.24), 2.4, 0xC21807); }
          if (n >= 3 && G.onMulti) G.onMulti(n, c, '鯨喜！一次 ' + n + ' 隻');
          else UI.announce('鯨喜！', n ? `壓扁 ${n} 隻` : '可惜沒壓到人');
        }
        return false;
      }
      if (t > 2.2) { p.y -= wdt * 5; g.scale.multiplyScalar(1 - wdt * 0.6); }
      return t > 3.6;
    },
    end() { G.scene.remove(g); },
  });
}
// 績效地雷陣：身邊埋一圈，踩到就炸；時間到剩下的連環爆
function mines() {
  const pp = G.player.pos, list = [], base = lam(0x2E2A1F), top = mesh(cyl(0.45, 0.5, 0.2, 10), base);
  for (let i = 0; i < 16; i++) {
    const near = i % 2 ? nearestTo(pp.x + rand(-25, 25), pp.z + rand(-25, 25), 30, null, true) : null;
    const a = (i / 16) * 6.28 + rand(-0.15, 0.15), d = rand(6, 24);
    const x = near ? near.root.position.x + rand(-2, 2) : pp.x + Math.cos(a) * d, z = near ? near.root.position.z + rand(-2, 2) : pp.z + Math.sin(a) * d;
    if (Math.hypot(x, z) > R_ISLAND - 4) continue;
    const g = grp(top.clone(), mesh(shotGeo, bas(0xE8523F, { fog: false }), 0, 0.14, 0)); g.children[1].scale.setScalar(0.12); g.position.set(x, 0.05, z); G.scene.add(g); dust(x, 0, z, 2, 0.6);
    list.push({ g, x, z, on: true });
  }
  S.clank(); UI.feed('💣 埋了 <b>' + list.length + ' 顆地雷</b>，<em>績效不好的自己會踩到</em>');
  let t = 0, chain = false;
  const boom = (m) => { if (!m.on) return; m.on = false; m.g.visible = false; explode(V(m.x, 0.6, m.z), 6.5, { weapon: 'mine', loud: 0.8 }); };
  ents.push({
    upd(dt, wdt) {
      t += wdt; for (const m of list) if (m.on) m.g.children[1].visible = Math.sin(t * 10 + m.x) > 0;
      if (!(G.buff.mines > 0) && !chain) { chain = true; list.filter((m) => m.on).forEach((m, i) => after(i * 0.12, () => boom(m))); }
      for (const m of list) {
        if (!m.on) continue;
        for (const a of G.animals) { if (skyDrop(a)) continue; const q = a.root.position; if (q.y < 1.2 && (q.x - m.x) ** 2 + (q.z - m.z) ** 2 < 5 + (a.boss ? a.H : 0)) { boom(m); break; } }
      }
      return chain && list.every((m) => !m.on) && t > 0.5;
    },
    end() { list.forEach((m) => G.scene.remove(m.g)); },
  });
}
// 巨型保齡球：一路往前滾，全倒！
function bowling() {
  const R = 3.2, P = G.player, dir = V(-Math.sin(P.yaw), 0, -Math.cos(P.yaw)), pos = V(P.pos.x + dir.x * 4, R, P.pos.z + dir.z * 4);
  const g = grp(mesh(ballGeo, lam(0x2D2A4A, { flatShading: false }))); g.children[0].scale.setScalar(R);
  for (let i = 0; i < 3; i++) g.add(mesh(shotGeo, bas(0x0A0A0A), Math.cos(i * 0.5) * 0.7 - 0.4, R * 0.94, Math.sin(i * 0.5) * 0.7 - 0.3));
  g.children.slice(1).forEach((h) => h.scale.setScalar(0.32)); g.position.copy(pos); G.scene.add(g);
  S.whoosh(); let far = 0, n = 0, rum = 0;
  ents.push({
    upd(dt, wdt) {
      const tg = nearestTo(pos.x + dir.x * 14, pos.z + dir.z * 14, 14); if (tg) { _v.set(tg.root.position.x - pos.x, 0, tg.root.position.z - pos.z).normalize(); if (_v.dot(dir) > 0.6) dir.lerp(_v, Math.min(1, wdt * 1.5)).normalize(); }
      const st = 30 * wdt; pos.addScaledVector(dir, st); far += st; g.position.copy(pos); g.rotation.x += (st / R) * (dir.z > 0 ? 1 : -1); g.rotation.z -= (st / R) * dir.x;
      rum -= wdt; if (rum <= 0) { rum = 0.18; S.thud(); dust(pos.x, 0, pos.z, 2, 1); }
      eachNear(pos.x, pos.z, R + 0.7, (a) => { if (hit(a, 'bowling', 'launch', V(dir.x + rand(-0.6, 0.6), 0.9, dir.z + rand(-0.6, 0.6)).normalize(), { style: 'bowling', boss: 450 })) n++; });
      const out = far > 150 || Math.hypot(pos.x, pos.z) > R_ISLAND + 6;
      if (out) { if (n >= 3 && G.onMulti) G.onMulti(n, pos, n >= 10 ? '全倒！STRIKE！' : '一顆 ' + n + ' 隻'); splashOut(pos); }
      return out;
    },
    end() { G.scene.remove(g); },
  });
}
function splashOut(p) { for (let i = 0; i < 20; i++) FX.puffs.spawn(p.x, 0.5, p.z, rand(-4, 4), rand(5, 10), rand(-4, 4), 0.4, 1, rand(0.4, 0.8), 0xF4FAFA, 0x7FC1CF, 1, 2); S.splash(); }
// 下班煙火秀：附近的島民綁上沖天炮，升天變煙火
function fireworks() {
  const pp = G.player.pos, list = G.animals.filter((a) => !a.boss && !skyDrop(a) && a.state !== 'sucked' && a.dP < 55).sort((a, b) => a.dP - b.dP).slice(0, 12);
  const hole = { done: false }; UI.announce('下班煙火秀！', '今天辛苦了（他們）', true);
  list.forEach((a, i) => after(i * 0.15, () => {
    if (a.dead || a.state === 'sucked') return;
    if (a.chute) { a.root.remove(a.chute); a.chute = null; } a.state = 'sucked'; a.hole = hole; a.mixer.timeScale = 3; S.cry('rise', a.def.pitch, a.def.robot); S.missile();
    let v = 2, t = 0; const T = rand(1.3, 2.1);
    ents.push({
      upd(dt, wdt) {
        if (a.dead || a.hole !== hole) return true;
        t += wdt; v += 22 * wdt; const q = a.root.position; q.y += v * wdt; a.root.rotation.y += wdt * 6;
        FX.puffs.spawn(q.x + rand(-0.2, 0.2), q.y - 0.2, q.z + rand(-0.2, 0.2), 0, -3, 0, 0.3, 0.5, 0.35, 0xFFF2B0, 0xE8742A, 0, 1);
        if (t > T) { burst(q.x, q.y, q.z); S.boom(0.5); S.pop(); kill(a, { mode: 'gib', weapon: 'firework', dir: V(0, 1, 0) }); return true; }
        return false;
      },
      end() {},
    });
  }));
  after(list.length * 0.15 + 2.6, () => (hole.done = true));
  if (!list.length) UI.feed('附近沒人可以綁沖天炮，<em>他們都躲起來了</em>');
  void pp;
}

// ── 啟動／結束 ──
export function startPower(id) {
  const P = G.player, pp = P.pos, sy = Math.sin(P.yaw), cy = Math.cos(P.yaw);
  if (OV.includes(id)) {
    for (const o of OV) if (o !== id) delete G.buff[o];
    setOverride(id);
    if (id === 'beast') { S.wail('roar', 0.4); shake(0.5); ring(pp, 0.5, 8, 0.4, 0x81BD49); UI.announce('變身！', '野性解放，人性下班', true); }
    else if (id === 'robot') { S.slam(); S.clank(); shake(0.6); ring(pp, 0.5, 8, 0.4, 0xA9B4B6); UI.announce('殺戮機器人，啟動', '人類已經不需要了', true); }
    else if (id === 'car') S.honk(); else S.rise();
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
  else if (id === 'ufo') ufo();
  else if (id === 'crowd') crowd();
  else if (id === 'tornado') tornado();
  else if (id === 'whale') whale();
  else if (id === 'mines') mines();
  else if (id === 'bowling') bowling();
  else if (id === 'firework') fireworks();
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
      clawMarks(cp, side);
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
      beamOn -= dt; beamT -= wdt; let len = 110; const ox = cp.x + _f.x, oy = cp.y - 0.35 + _f.y, oz = cp.z + _f.z;
      if (_f.y < -0.02) { const t = -(oy - 0.4) / _f.y; if (t < len) len = Math.max(2, t); }
      beamEnd.set(ox + _f.x * len, Math.max(0.6, oy + _f.y * len), oz + _f.z * len);
      if (beamT <= 0) { beamT = 0.12; explode(beamEnd.clone(), 7, { weapon: 'beam', loud: 0.6 }); }
      const fl = 1 + Math.sin(G.t * 60) * 0.15; bi.visible = bo.visible = true; bi.scale.set(fl * 2.1, fl * 2.1, len); bo.scale.set(fl * 2.6, fl * 2.6, len);
      for (let k = 0; k < 3; k++) { const t = rand(2, len); FX.puffs.spawn(ox + _f.x * t + rand(-2, 2), oy + _f.y * t + rand(-2, 2), oz + _f.z * t + rand(-2, 2), _f.x * 20, _f.y * 20, _f.z * 20, 0.6, 0.9, 0.3, 0xFFFFFF, 0x7FD8FF, 0, 1); }
      for (const a of G.animals.slice()) {
        centre(a, _v); _v.x -= ox; _v.y -= oy; _v.z -= oz; const t = _v.dot(_f); if (t < 0 || t > len + 4) continue;
        const R = 4.6 + (a.boss ? a.H * 0.3 : 0); if (_v.lengthSq() - t * t < R * R) hit(a, 'beam', 'gib', _f.clone(), { boss: 500 });
      }
      if (G.trauma < 0.5) shake(0.1); P.kvel.x -= _f.x * 26 * dt; P.kvel.z -= _f.z * 26 * dt; G.fovAdd = 12;
      if (beamOn <= 0) { bi.visible = bo.visible = false; cd = 0.8; explode(beamEnd.clone(), 13, { weapon: 'beam', loud: 1.4 }); ring(beamEnd.clone().setY(0.3), 1, 22, 0.6, 0x7FD8FF); shake(0.8); }
    } else if (I.fire && cd <= 0) {
      charge += dt / 1.0; S.stretch(charge);
      if (Math.random() < 0.7) { const a = rand(6.28), r = rand(1.5, 3); FX.puffs.spawn(cp.x + _f.x * 1.2 + Math.cos(a) * r, cp.y - 0.4 + Math.sin(a) * r, cp.z + _f.z * 1.2, -Math.cos(a) * r * 3, -Math.sin(a) * r * 3, 0, 0.2, 0.3, 0.25, 0xFFFFFF, 0x7FD8FF, 0, 1); }
      if (charge >= 1) { charge = 0; beamOn = 5; beamT = 0; S.beam(5); shake(0.6); UI.announce('波——！', '', true); }
    } else charge = Math.max(0, charge - dt * 2);
    glow.scale.setScalar(beamOn > 0 ? 0.3 : 0.03 + charge * 0.42);
  } else if (id === 'disc') {
    vm.children[1].rotation.y += dt * 30; vm.children[1].visible = cd < 0.2;
    if (I.fire && cd <= 0) {
      cd = 0.3; S.swing(); S.slice();
      const dir = V(_f.x, clamp(_f.y, -0.12, 0.3), _f.z).normalize(), pos = cp.clone().addScaledVector(dir, 1.6); pos.y = Math.max(0.9, pos.y - 0.3);
      const m = grp(mesh(discGeo, bas(0xFF6FB5, { fog: false })), mesh(discGeo, bas(0xFFE3F1, { fog: false }), 0, 0.01, 0)); m.children[0].scale.set(1.5, 1, 1.5); m.children[1].scale.set(0.8, 1, 0.8); m.position.copy(pos); G.scene.add(m);
      let life = 0, n = 0, tgt = aimed(80, 0.75); const done = new Set();
      ents.push({
        upd(dt2, w) {
          life += w;
          if (tgt && (tgt.dead || done.has(tgt))) tgt = null;
          if (!tgt) tgt = nearestTo(pos.x, pos.z, 70, done);
          if (tgt) { centre(tgt, _q); _v.copy(_q).sub(pos).normalize(); dir.lerp(_v, Math.min(1, w * 8)).normalize(); }
          pos.addScaledVector(dir, 48 * w); if (pos.y < 0.6) pos.y = 0.6; m.position.copy(pos); m.rotation.y += w * 34;
          if (Math.random() < 0.8) FX.puffs.spawn(pos.x, pos.y, pos.z, 0, 0, 0, 0.5, 0.5, 0.3, 0xFFB3DA, 0xFF6FB5, 0, 1);
          eachNear(pos.x, pos.z, 2.1, (a) => {
            if (done.has(a) || Math.abs(a.root.position.y + a.H * 0.5 - pos.y) > 1.8 + a.H * 0.4) return;
            if (hit(a, 'disc', 'slice', dir.clone(), { cut: pick(['h', 'v', 'd']), boss: 380 })) { done.add(a); n++; }
          });
          const over = life > 6 || n >= 30;
          if (over && n >= 3 && G.onMulti) G.onMulti(n, pos, '粉紅追魂 ' + n + ' 隻');
          return over;
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
  } else if (id === 'robot') {
    G.spMul = 0.95; sweep += dt * 4.5; rocketCd -= dt; const off = Math.sin(sweep) * 0.75;
    if (P.onGround && hs > 3) { stepT -= dt; if (stepT <= 0) { stepT = 0.42; shake(0.08); S.thud(); } }
    if (I.fire) {
      vm.children.forEach((g) => (g.children[2].rotation.z += dt * 40));
      if (cd <= 0) {
        cd = 0.04; side = -side; if (side > 0) S.smg();
        const yaw = Math.atan2(_f.x, _f.z) + off, dx = Math.sin(yaw), dz = Math.cos(yaw), line = [];
        for (const a of G.animals) {
          if (skyDrop(a)) continue; const q = a.root.position, vx = q.x - pp.x, vz = q.z - pp.z, t = vx * dx + vz * dz;
          if (t < 1 || t > 75) continue; if (Math.abs(vx * dz - vz * dx) < 2.4 + (a.boss ? a.H * 0.3 : 0)) line.push([t, a]);
        }
        line.sort((p, q) => p[0] - q[0]); let best = line.length ? line[0][1] : null;
        if (!best && Math.random() < 0.5) { const c = G.animals.filter((b) => !skyDrop(b) && b.dP < 60 && centre(b, _v).sub(cp).normalize().dot(_f) > 0.55); if (c.length) best = pick(c); } // 掃不到就隨便掃一隻前方的
        if (line[1]) hit(line[1][1], 'robot', 'drop', V(dx, 0.25, dz), { boss: 40, power: 6 }); // 子彈穿透第二隻
        const from = cp.clone().addScaledVector(_r, side * 0.48).addScaledVector(_f, 1.2); from.y -= 0.4;
        const to = best ? centre(best) : V(pp.x + dx * 60, cp.y + _f.y * 60, pp.z + dz * 60);
        tracer(from, to, 0xFFE58A, 0.07, 0.06);
        if (best) { hit(best, 'robot', Math.random() < 0.35 ? 'headpop' : pick(['drop', 'gib']), V(dx, 0.25, dz), { boss: 40, power: 6 }); G.hitMark = 0.06; }
      }
    }
    if (I.altPressed && rocketCd <= 0) {
      rocketCd = 0.7; S.missile(); const a = aimed(90, 0.9), to = a ? centre(a) : cp.clone().addScaledVector(_f, 40);
      tracer(cp.clone().addScaledVector(_f, 1).setY(cp.y - 0.2), to, 0xFF8A5C, 0.16, 0.18); explode(V(to.x, Math.max(0.6, to.y), to.z), 5.5, { weapon: 'robot' });
    }
    vm.children[0].position.y = vm.children[1].position.y = -0.5 + (I.fire ? rand(-0.015, 0.015) : 0);
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
