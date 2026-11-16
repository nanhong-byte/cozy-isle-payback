// 隱藏道具：神秘禮物箱（九種隨機效果）、金色島民、南瓜神像彩蛋
import * as THREE from 'three';
import { G, R_ISLAND, rand, pick, V, after } from './state.js';
import { FX, ring, shake, sparks, popup, dust, bubble } from './fx.js';
import { S, A } from './audio.js';
import { kill, damage } from './animals.js';
import { explode, explodeBarrel } from './weapons.js';
import { strike, skyFlash } from './weather.js';
import { UI } from './ui.js';

export const ITEMS = [
  { id: 'giant', icon: '🍄', name: '升官蘑菇', tip: '變成巨人，用踩的', dur: 14, w: 3 },
  { id: 'zeus', icon: '⚡', name: '雷公遙控器', tip: '準星看誰就劈誰', dur: 10, w: 3 },
  { id: 'stop', icon: '⏱️', name: '下班打卡鐘', tip: '時間暫停，慢慢處理', dur: 6, w: 3 },
  { id: 'rapid', icon: '♾️', name: '無限火力', tip: '所有武器零冷卻', dur: 12, w: 3 },
  { id: 'meteor', icon: '☄️', name: '天降KPI', tip: '隕石雨', dur: 8, w: 3 },
  { id: 'magnet', icon: '📢', name: '開會通知', tip: '全員到你面前集合', dur: 8, w: 3 },
  { id: 'bighead', icon: '🤯', name: '大頭症', tip: '頭變超大，隨便打都爆頭', dur: 16, w: 3 },
  { id: 'balloon', icon: '🎈', name: '氦氣彈', tip: '全員升天，然後啵', dur: 6, w: 3 },
  { id: 'nuke', icon: '☢️', name: '全島資遣令', tip: '3 秒後生效', dur: 3, w: 1.2 },
];
G.itemDefs = {}; ITEMS.forEach((it) => (G.itemDefs[it.id] = it));

const crates = [], rocks = [], FAKE = { done: false };
const _f = new THREE.Vector3(), _v = new THREE.Vector3();
let crateGeo, crateMat, beamGeo, beamMat, rockGeo, rockMat, pumpGeo, pumpMat;
let dropT = 15, goldT = 18, zeusT = 0, metT = 0, stompT = 0, statueHits = 0, statueCd = 0, lastItem = '', tickN = 0;

export function initItems() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#E8D9B5'; x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#C8483A'; x.fillRect(52, 0, 24, 128); x.fillRect(0, 52, 128, 24);
  x.strokeStyle = '#2E2A1F'; x.lineWidth = 10; x.strokeRect(0, 0, 128, 128);
  x.fillStyle = '#F2C94C'; x.beginPath(); x.arc(64, 64, 30, 0, 6.28); x.fill(); x.lineWidth = 6; x.stroke();
  x.fillStyle = '#2E2A1F'; x.font = '800 44px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('?', 64, 67);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  crateGeo = new THREE.BoxGeometry(1.1, 1.1, 1.1); crateMat = new THREE.MeshLambertMaterial({ map: t });
  beamGeo = new THREE.CylinderGeometry(0.55, 0.55, 46, 10, 1, true);
  beamMat = new THREE.MeshBasicMaterial({ color: 0xF2C94C, transparent: true, opacity: 0.2, depthWrite: false, fog: false, side: THREE.DoubleSide });
  rockGeo = new THREE.IcosahedronGeometry(0.9, 0); rockMat = new THREE.MeshLambertMaterial({ color: 0x3A322A, emissive: 0xC24A12, flatShading: true });
  pumpGeo = new THREE.SphereGeometry(0.8, 10, 8).scale(1, 0.82, 1); pumpMat = new THREE.MeshLambertMaterial({ color: 0xE08A2E, flatShading: true });
}

function spawnCrate(x, z, o = {}) {
  const g = new THREE.Group(); g.add(new THREE.Mesh(crateGeo, crateMat));
  if (o.beam) { const b = new THREE.Mesh(beamGeo, beamMat); b.position.y = 22; g.add(b); }
  G.scene.add(g);
  crates.push({ g, x, z, y: o.sky ? 34 : 0, fall: !!o.sky, t: rand(6) });
}
function removeCrate(i) { G.scene.remove(crates[i].g); crates.splice(i, 1); }
function clearSpot(minD, maxD) {
  const P = G.player.pos;
  for (let i = 0; i < 30; i++) {
    const an = rand(6.28), d = rand(minD, maxD), x = P.x + Math.cos(an) * d, z = P.z + Math.sin(an) * d;
    if (Math.hypot(x, z) > R_ISLAND - 8) continue;
    if (G.obstacles.every((o) => (o.x - x) ** 2 + (o.z - z) ** 2 > (o.r + 1.5) ** 2)) return [x, z];
  }
  return [rand(-15, 15), rand(-15, 15)];
}

export function resetItems() {
  while (crates.length) removeCrate(0);
  rocks.forEach((r) => G.scene.remove(r.m)); rocks.length = 0;
  for (const k in G.buff) delete G.buff[k];
  G.eyeK = 1; dropT = 15; goldT = 18; zeusT = 0; metT = 0; stompT = 0; statueHits = 0; statueCd = 0; lastItem = '';
  document.getElementById('vignette').classList.remove('frozen');
}
// 開局：在三間房子的背面各藏一箱（沒有光柱，要自己繞過去找）
export function placeHidden() {
  const hs = G.obstacles.filter((o) => o.h === 5.5).sort(() => Math.random() - 0.5).slice(0, 3);
  for (const o of hs) { const d = Math.hypot(o.x, o.z), k = (d + 6) / d; spawnCrate(o.x * k, o.z * k); }
}

export function give(id) {
  let it = G.itemDefs[id];
  if (!it) {
    const pool = ITEMS.filter((x) => x.id !== lastItem && !(G.buff[x.id] > 0)); let r = rand(pool.reduce((s, x) => s + x.w, 0));
    it = pool[0]; for (const x of pool) { r -= x.w; if (r <= 0) { it = x; break; } }
  }
  lastItem = it.id; G.buff[it.id] = it.dur; S.pickup();
  UI.announce(`${it.icon} ${it.name}`, it.tip, it.id === 'nuke');
  UI.feed(`撿到隱藏道具 <b>${it.icon} ${it.name}</b>`);
  if (G.stats) G.stats.items = (G.stats.items || 0) + 1;
  if (it.id === 'nuke') { S.siren(); tickN = 99; }
  if (it.id === 'balloon') {
    for (const a of G.animals) {
      if (a.boss || a.state === 'drop' || a.state === 'sucked' || a.dP > 55) continue;
      a.state = 'sucked'; a.hole = FAKE; a.balloon = { t: 0, pop: rand(3.2, 5.8) }; a.mixer.timeScale = 2.5;
    }
    S.whoosh();
  }
  if (it.id === 'stop') { A.tempo = 0.55; document.getElementById('vignette').classList.add('frozen'); }
  return it;
}
function endBuff(id) {
  if (id === 'nuke') nuke();
  else if (id === 'stop') { A.tempo = G.rageOn > 0 ? 1.3 : 1; document.getElementById('vignette').classList.remove('frozen'); UI.announce('時間恢復', '剛剛砍的現在一起倒'); S.rage(); }
  else if (id === 'bighead') { for (const a of G.animals) if (a.bones.head) a.bones.head.scale.setScalar(1); }
}

// 從天上掉下來會爆炸的東西（隕石／南瓜神的南瓜）
function fallRock(x, z, pumpkin) {
  const m = new THREE.Mesh(pumpkin ? pumpGeo : rockGeo, pumpkin ? pumpMat : rockMat);
  const r = { m, x, z, sx: x + rand(8, 16), sz: z + rand(4, 10), t: 0, T: rand(0.65, 0.85), pumpkin };
  m.position.set(r.sx, 46, r.sz); G.scene.add(m); rocks.push(r);
}
function rainTarget() {
  const P = G.player.pos, c = G.animals.filter((a) => a.dP < 62 && a.dP > 7 && a.state !== 'drop');
  if (c.length && Math.random() < 0.8) { const p = pick(c).root.position; return [p.x + rand(-1.5, 1.5), p.z + rand(-1.5, 1.5)]; }
  const an = rand(6.28), d = rand(12, 42); return [P.x + Math.cos(an) * d, P.z + Math.sin(an) * d];
}

function nuke() {
  const P = G.player, sy = Math.sin(P.yaw), cy = Math.cos(P.yaw), c = V(P.pos.x - sy * 16, 0.5, P.pos.z - cy * 16);
  skyFlash(2.2); S.boom(1.6); S.thunder(true); shake(1); G.slowmoT = 1.6; G.hitstop = 0.12;
  P.kvel.set(sy * 14, 0, cy * 14); P.vel.y = 13; P.onGround = false;
  for (let i = 0; i < 3; i++) after(i * 0.12, () => ring(c, 2, 95, 1.1 + i * 0.2, i === 1 ? 0xF2C94C : 0xFCF9F0));
  for (let i = 0; i < 46; i++) { const an = rand(6.28), r = rand(0, 3); FX.puffs.spawn(c.x + Math.cos(an) * r, rand(0, 22), c.z + Math.sin(an) * r, rand(-1, 1), rand(4, 9), rand(-1, 1), 2, rand(4, 7), rand(1.6, 2.8), 0xFFF2B0, 0x6B6455, 1, 1); }
  for (let i = 0; i < 40; i++) { const an = rand(6.28), s = rand(4, 14); FX.puffs.spawn(c.x, 24, c.z, Math.cos(an) * s, rand(1, 5), Math.sin(an) * s, 3, rand(6, 10), rand(2, 3.2), 0xFFD23F, 0x2E2A1F, 0.5, 1.2); }
  FX.decals.add(c.x, c.z, 14, 0x24211A, true);
  let n = 0;
  for (const a of G.animals.slice()) {
    const p = a.root.position, d = Math.hypot(p.x - c.x, p.z - c.z), dir = V(p.x - c.x, 0.6, p.z - c.z).normalize();
    after(d / 75, () => { if (!a.dead && damage(a, 99999, { mode: 'gib', dir, weapon: 'nuke', bossCap: 1500 })) n++; });
  }
  for (const br of G.barrels) if (br.alive) after(Math.hypot(br.x - c.x, br.z - c.z) / 75, () => explodeBarrel(br));
  after(2.2, () => { if (n >= 3 && G.onMulti) G.onMulti(n, c, '全島資遣'); });
}

function gild(a) {
  a.gold = true; a.def = Object.assign({}, a.def, { name: '金色' + a.def.name, run: a.def.run * 1.3, sense: 17 });
  a.hp = a.maxHp = a.hp * 2; a.mat.color.set(0xFFD23F);
  const p = a.root.position; popup(V(p.x, p.y + a.H + 0.6, p.z), '✨', 'star', 1.4, 0.6); S.ding();
  UI.feed('✨ <b>金色島民</b>出現了，<em>打死有大獎</em>');
}
// 金色島民或巨大島民死掉：原地掉一箱
export function itemOnKill(a) {
  if (!a.gold && !a.boss) return;
  const p = a.root.position, r = Math.hypot(p.x, p.z), k = r > R_ISLAND - 6 ? (R_ISLAND - 6) / r : 1;
  spawnCrate(p.x * k, p.z * k, { beam: true }); if (a.gold) S.ding();
}

export function updateItems(dt, wdt) {
  const P = G.player, B = G.buff, pp = P.pos;
  for (const id in B) { B[id] -= dt; if (B[id] <= 0) { delete B[id]; endBuff(id); } }
  G.eyeK += ((B.giant > 0 ? 2.3 : 1) - G.eyeK) * Math.min(1, dt * 5);
  if (B.nuke > 0) { const n = Math.ceil(B.nuke * 2); if (n !== tickN) { tickN = n; S.tick(); } }

  // 禮物箱：定時空投＋撿取
  dropT -= wdt;
  if (dropT <= 0) { dropT = rand(20, 28); if (crates.length < 5) { const [x, z] = clearSpot(10, 38); spawnCrate(x, z, { sky: true, beam: true }); UI.feed('🎁 <b>神秘禮物箱</b>空投中，跟著光柱走'); } }
  for (let i = crates.length - 1; i >= 0; i--) {
    const c = crates[i]; c.t += dt;
    if (c.fall) { c.y -= 11 * wdt; if (c.y <= 0) { c.y = 0; c.fall = false; dust(c.x, 0, c.z, 6, 0.8); S.thud(); } }
    c.g.position.set(c.x, c.y + 0.75 + (c.fall ? 0 : Math.sin(c.t * 2.5) * 0.12), c.z); c.g.rotation.y = c.t * 1.2;
    if (!c.fall && (pp.x - c.x) ** 2 + (pp.z - c.z) ** 2 < 4.4 && pp.y < 3) {
      ring(V(c.x, 0.2, c.z), 0.5, 5, 0.4, 0xF2C94C); sparks(c.x, 1, c.z, 14); removeCrate(i); give();
    }
  }

  // 升官蘑菇：踩過去就是肉餅
  if (B.giant > 0 && pp.y < 0.6) {
    let n = 0; stompT -= dt;
    for (const a of G.animals.slice()) {
      if (a.state === 'drop') continue;
      const p = a.root.position, d2 = (p.x - pp.x) ** 2 + (p.z - pp.z) ** 2;
      if (a.boss) { if (d2 < (a.H * 0.4 + 2) ** 2 && stompT <= 0) { stompT = 0.4; damage(a, 260, { mode: 'gib', weapon: 'stomp' }); shake(0.3); S.slam(); } continue; }
      if (d2 < 7.3 && p.y < 3.5) { kill(a, { mode: 'flat', weapon: 'stomp' }); n++; }
    }
    if (n) { shake(0.3); S.slam(); ring(V(pp.x, 0.1, pp.z), 0.5, 5, 0.3); if (n >= 3 && G.onMulti) G.onMulti(n, pp, `一腳 ${n} 隻`); }
  }
  // 雷公遙控器：準星附近的自動被劈
  if (B.zeus > 0) {
    zeusT -= dt;
    if (zeusT <= 0) {
      const cam = G.camera; cam.getWorldDirection(_f); let best = null, bd = 0.93;
      for (const a of G.animals) {
        const p = a.root.position; _v.set(p.x - cam.position.x, p.y + a.H * 0.5 - cam.position.y, p.z - cam.position.z);
        const d = _v.length(); if (d > 75) continue; const dot = _v.dot(_f) / d; if (dot > bd) { bd = dot; best = a; }
      }
      if (best) { zeusT = 0.42; strike(best.root.position.x, best.root.position.z, { small: true, chain: 3 }); } else zeusT = 0.1;
    }
  }
  // 天降KPI
  if (B.meteor > 0) { metT -= wdt; if (metT <= 0) { metT = 0.28; const [x, z] = rainTarget(); fallRock(x, z, false); } }
  for (let i = rocks.length - 1; i >= 0; i--) {
    const r = rocks[i]; r.t += wdt; const k = Math.min(1, r.t / r.T), m = r.m;
    m.position.set(r.sx + (r.x - r.sx) * k, 46 * (1 - k) + 0.5, r.sz + (r.z - r.sz) * k); m.rotation.x += wdt * 7; m.rotation.z += wdt * 5;
    if (wdt > 0) FX.puffs.spawn(m.position.x, m.position.y, m.position.z, rand(-1, 1), rand(0, 2), rand(-1, 1), 0.5, r.pumpkin ? 0.7 : 1.2, rand(0.25, 0.45), r.pumpkin ? 0xF2C94C : 0xFFF2B0, r.pumpkin ? 0xE08A2E : 0xE8742A, 2, 2);
    if (k >= 1) { G.scene.remove(m); rocks.splice(i, 1); explode(V(r.x, 0.6, r.z), r.pumpkin ? 5.5 : 6.5, { weapon: r.pumpkin ? 'pumpkin' : 'meteor' }); }
  }
  // 開會通知：全員被拖到面前
  if (B.magnet > 0) {
    for (const a of G.animals) {
      if (a.boss || a.state === 'drop' || a.state === 'air' || a.state === 'sucked') continue;
      const p = a.root.position, dx = pp.x - p.x, dz = pp.z - p.z, d = Math.hypot(dx, dz);
      if (d > 70 || d < 3.4) continue;
      const sp = Math.min(22, 8 + d * 0.5) * wdt; p.x += (dx / d) * sp; p.z += (dz / d) * sp;
      if (d < 30 && Math.random() < dt * 0.06) bubble(a, pick(['又要開會？！', '我不想去～', '這場我可以不用到吧', '會議室在哪']), 1.5);
    }
  }
  // 大頭症
  if (B.bighead > 0) for (const a of G.animals) if (!a.boss && a.bones.head) a.bones.head.scale.setScalar(2.4);
  // 氦氣彈：越飄越高、越脹越大，然後啵
  for (const a of G.animals.slice()) {
    const b = a.balloon; if (!b) continue;
    if (a.hole !== FAKE || a.state !== 'sucked') { a.balloon = null; continue; } // 被黑洞搶走
    b.t += wdt; const p = a.root.position;
    p.y = Math.min(15, p.y + (1.5 + b.t * 1.3) * wdt); a.tilt.scale.setScalar(1 + Math.min(1, b.t / 2.5) * 0.9);
    a.root.rotation.y += wdt * 1.5; a.tilt.rotation.z = Math.sin(G.t * 3 + a.seed) * 0.25;
    if (b.t > b.pop) { a.balloon = null; a.tilt.rotation.z = 0; S.pop(); kill(a, { mode: 'gib', weapon: 'balloon', dir: V(0, 1, 0) }); }
  }
  // 金色島民：偶爾有一隻變金色，跑超快
  goldT -= wdt;
  if (goldT <= 0) {
    goldT = rand(22, 32);
    if (!G.animals.some((a) => a.gold)) { const c = G.animals.filter((a) => !a.boss && a.dP > 22 && a.dP < 60 && (a.state === 'idle' || a.state === 'wander')); if (c.length) gild(pick(c)); }
  }
  for (const a of G.animals) {
    if (!a.gold || Math.random() > dt * 14) continue; const p = a.root.position;
    FX.puffs.spawn(p.x + rand(-0.5, 0.5), p.y + rand(0.2, a.H), p.z + rand(-0.5, 0.5), 0, 1.2, 0, 0.1, 0.22, 0.45, 0xFFF7C2, 0xF2C94C, 0, 1);
  }
  // 彩蛋：對著中央南瓜神像連踢三腳
  statueCd -= dt;
  if (G.input.altPressed) {
    const d = Math.hypot(pp.x, pp.z);
    if (d < 6.4 && d > 0.1 && (Math.sin(P.yaw) * pp.x + Math.cos(P.yaw) * pp.z) / d > 0.5) {
      if (statueCd > 0) popup(V(0, 4.6, 0), '（南瓜神還在氣頭上）', 'bonus', 1.2, 0.5);
      else {
        statueHits++; popup(V(0, 4.6, 0), ['咚！', '咚咚！', '……！'][statueHits - 1], 'big', 0.9, 1); sparks(pp.x * 0.5, 1.6, pp.z * 0.5, 8); S.clank();
        if (statueHits >= 3) {
          statueHits = 0; statueCd = 45; UI.announce('南瓜神生氣了！', '天上掉南瓜囉', true); S.rage(); shake(0.5);
          for (let i = 0; i < 26; i++) after(0.5 + i * 0.25, () => { const [x, z] = rainTarget(); fallRock(x, z, true); });
        }
      }
    }
  }
}
