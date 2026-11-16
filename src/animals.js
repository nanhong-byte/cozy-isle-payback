// 島民：載入、生成、AI、受傷，以及十幾種死法
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { G, R_ISLAND, BLOOD, rand, pick, clamp, V, after } from './state.js';
import { FX, blood, mist, dust, boomFX, sparks, ring, shake, shakeAt, popup, bubble, screenBlood } from './fx.js';
import { S, A } from './audio.js';

export const DEFS = {
  persi: { name: '小柿子', animal: '狐狸', role: 'PM', size: 1.6, walk: 2.2, run: 8.6, hp: 100, sense: 10.5, w: 14, pitch: 1.0, fur: 0xE8742A,
    lines: ['需求又改囉～', '這個很簡單吧？', '明天要，可以嗎？', '先上線再說！', '老闆說要再大氣一點'] },
  matcha: { name: '小抹茶', animal: '變色龍', role: '盤點', size: 1.45, walk: 1.8, run: 7.0, hp: 100, sense: 8.7, w: 11, pitch: 0.9, fur: 0x8BC34A, cloak: true,
    lines: ['我已讀了', '晚點回你', '檔案放哪我忘了', '應該在雲端吧？'] },
  cinna: { name: '小肉桂', animal: '小鹿', role: '美術', size: 1.7, walk: 2.4, run: 10.5, hp: 90, sense: 12.4, w: 11, pitch: 1.2, fur: 0xD98E4A,
    lines: ['感覺不對，再一版', 'Logo 可以放大嗎', '我要五彩斑斕的黑', '還是第一版好了'] },
  cocoa: { name: '小可可', animal: '貓頭鷹', role: '企劃', size: 1.6, walk: 1.5, run: 5.8, hp: 160, sense: 8.1, w: 10, pitch: 0.7, fur: 0x9A6A3A,
    lines: ['這個會開三小時', '我們先開個會', '會後再約個會', '先對齊一下顆粒度'] },
  kuri: { name: '小栗子', animal: '河狸', role: '工程', size: 1.45, walk: 2.0, run: 7.4, hp: 120, sense: 9.3, w: 11, pitch: 0.85, fur: 0xB5703A,
    lines: ['我電腦上是好的', '這個不能改喔', '要重構三個月', '那是上一手寫的'] },
  minto: { name: '小薄荷', animal: '蜂鳥', role: '排程', size: 1.25, walk: 3.0, run: 9.5, hp: 70, sense: 11.2, w: 8, pitch: 1.5, fur: 0x4AA3D9, fly: true,
    lines: ['臨時插個單～', '這個今天要', '急件！急件！', '行事曆我排滿囉'] },
  mochi: { name: '小麻糬', animal: '機器人', role: 'QA', size: 1.6, walk: 1.8, run: 6.6, hp: 220, sense: 8.7, w: 8, pitch: 0.55, fur: 0xE8E4D4, robot: true,
    lines: ['這不是 bug 是 feature', '無法重現', '已結案', '請附上重現步驟'] },
  wasabi: { name: '小芥末', animal: '青蛙', role: '研究', size: 1.5, walk: 2.0, run: 8.0, hp: 100, sense: 9.9, w: 11, pitch: 1.1, fur: 0x7CB342, hop: 1.1,
    lines: ['上線前想再改一下', '我有個新想法！', '數據說不行', '我們換個方向吧'] },
  shiro: { name: '小白', animal: '企鵝', role: '醫生', size: 1.5, walk: 1.6, run: 6.4, hp: 130, sense: 8.7, w: 9, pitch: 0.95, fur: 0x34383C,
    lines: ['多喝水就好', '你這是過勞', '請假單呢？', '回去多休息'] },
  lop: { name: 'Lop', animal: '兔子', role: '探險', size: 1.2, walk: 2.6, run: 9.2, hp: 60, sense: 10.5, w: 7, pitch: 1.4, fur: 0xE9DCC3, hop: 0.7, pack: 3,
    lines: ['+1', '收到', '了解', '好喔'] },
};
const PANIC = ['不要啊啊啊！', '我只是照流程走！', '有話好說！', '我下次不敢了！', '這不在我的職責範圍！', '我要報加班！', '我還有三張單沒結！', '救命啊人資！', '我明天請假！'];
export const DEATH_TEXT = {
  slice: '被一刀兩斷', flat: '被拍成肉餅', launch: '飛去當星星了', gib: '炸成絞肉', burn: '烤到全熟', headpop: '腦袋搬家',
  hole: '被黑洞回收', zap: '被雷公點名', wall: '黏在牆上', splat: '摔成一攤', drop: '永久下班', drown: '去餵鯊魚了', mega: '轟然倒下',
};

const T = {};          // 模型樣板
export const corpses = []; // 死後演出（每筆有 upd(dt) 回傳 true 表示結束）
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _c = new THREE.Color();
let shadowMesh; const _d = new THREE.Object3D();
let capMat, chuteGeo, chuteMat;
const MEAT = [0xC8483A, 0xE06A5A, 0xA83228, 0xEFA69A];
// 慘叫版：每種死法配一種叫聲
const WAIL = { slice: 'cut', flat: 'squeak', gib: 'yelp', headpop: 'cut', hole: 'rise', wall: 'yelp', splat: 'yelp', drown: 'gurgle', drop: 'gurgle', mega: 'roar', zap: 'cut' };
const AAA = ['啊啊啊啊！', '嗚哇啊啊！', '不～～～！', '媽呀！', '咿呀——！', '呃啊！', '救命啊！', '我的年終～'];
const cry = (a, kind, legacy = true) => S.cry(kind, a.def.pitch * (a.boss ? 0.45 : 1), a.def.robot, legacy);

export async function loadAnimals(onProgress) {
  const loader = new GLTFLoader(); const keys = Object.keys(DEFS); let n = 0;
  for (const k of keys) {
    const bin = atob(window.COZY_ASSETS[k]); const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    const gltf = await loader.parseAsync(u8.buffer, '');
    gltf.scene.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(gltf.scene);
    let map = null; gltf.scene.traverse((o) => { if (o.isMesh && o.material.map) map = o.material.map; });
    T[k] = { scene: gltf.scene, clips: gltf.animations, h: Math.max(0.3, bb.max.y - bb.min.y), map };
    onProgress(++n / keys.length);
    await new Promise((r) => setTimeout(r, 0));
  }
  window.COZY_ASSETS = null;
  shadowMesh = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 14).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x1D3314, transparent: true, opacity: 0.28, depthWrite: false }), 90);
  shadowMesh.frustumCulled = false; G.scene.add(shadowMesh);
  // 斷面貼圖：紅肉、粉邊、中間一根骨頭
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#A01A12'; x.beginPath(); x.arc(64, 64, 62, 0, 6.28); x.fill();
  x.fillStyle = '#D7392E'; x.beginPath(); x.arc(64, 64, 50, 0, 6.28); x.fill();
  x.fillStyle = '#EF8A7C'; x.beginPath(); x.arc(64, 64, 30, 0, 6.28); x.fill();
  x.fillStyle = '#F8F4E6'; x.beginPath(); x.arc(64, 64, 13, 0, 6.28); x.fill();
  x.fillStyle = '#C9B9A0'; x.beginPath(); x.arc(64, 64, 5, 0, 6.28); x.fill();
  const ct = new THREE.CanvasTexture(c); ct.colorSpace = THREE.SRGBColorSpace;
  capMat = new THREE.MeshBasicMaterial({ map: ct, alphaTest: 0.5, side: THREE.DoubleSide });
  chuteGeo = new THREE.SphereGeometry(1, 10, 6, 0, 6.28, 0, Math.PI / 2);
  chuteMat = new THREE.MeshLambertMaterial({ color: 0xF7F1DC, side: THREE.DoubleSide, flatShading: true });
}

function play(a, name, rate = 1) {
  a.animRate = rate;
  const act = a.acts[name] || a.acts.idle; if (!act || a.cur === act) return;
  act.reset().fadeIn(0.15).play(); if (a.cur) a.cur.fadeOut(0.15); a.cur = act;
}

export function spawnAnimal(key, x, z, o = {}) {
  const def = DEFS[key], tp = T[key];
  const H = def.size * (o.scale || 1);
  const model = SkeletonUtils.clone(tp.scene);
  model.scale.setScalar(H / tp.h);
  const mat = new THREE.MeshLambertMaterial({ map: tp.map, side: THREE.DoubleSide });
  const bones = {};
  model.traverse((c) => { if (c.isMesh) { c.material = mat; c.frustumCulled = false; } if (c.isBone) bones[c.name] = c; });
  const root = new THREE.Group(), tilt = new THREE.Group();
  tilt.position.y = H * 0.45; model.position.y = -H * 0.45;
  root.add(tilt); tilt.add(model); root.position.set(x, o.y || 0, z);
  G.scene.add(root);
  const mixer = new THREE.AnimationMixer(model), acts = {};
  for (const c of tp.clips) acts[c.name] = mixer.clipAction(c);
  const a = {
    key, def, root, tilt, model, mat, bones, mixer, acts, cur: null, animRate: 1, H,
    hp: def.hp * (o.hpMul || 1), maxHp: def.hp * (o.hpMul || 1), boss: !!o.boss,
    state: 'idle', timer: rand(0.5, 3), yaw: rand(6.28), vel: V(), spin: 0, tx: x, tz: z,
    seed: rand(100), jit: 0, hopT: rand(6), baseY: def.fly ? 2.2 : 0, heat: 0, flash: 0, dead: false, label: null, chute: null, talkT: rand(2, 10), dP: 99, scrT: rand(0.5, 2), hurtT: 0,
  };
  root.rotation.y = a.yaw;
  if (o.drop) {
    a.state = 'drop';
    const ch = new THREE.Mesh(chuteGeo, chuteMat); ch.scale.set(H * 0.8, H * 0.55, H * 0.8); ch.position.y = H * 1.25;
    ch.material = chuteMat; root.add(ch); a.chute = ch;
    play(a, 'talk', 1.6);
  } else if (a.boss) { a.state = 'boss'; play(a, 'walk', 0.8); } else play(a, 'idle');
  G.animals.push(a);
  return a;
}

function dispose(a) {
  G.scene.remove(a.root); a.mixer.stopAllAction(); a.mixer.uncacheRoot(a.model); a.mat.dispose();
  if (a.extra) a.extra.forEach((e) => { G.scene.remove(e.obj); if (e.mat) e.mat.dispose(); });
}
export function clearAnimals() {
  for (const a of G.animals) { a.dead = true; dispose(a); }
  G.animals.length = 0;
  for (const c of corpses) if (c.end) c.end();
  corpses.length = 0; G.boss = null;
}

// 讓範圍內的島民開始逃
export function alarm(x, z, r) {
  for (const a of G.animals) {
    if (a.state !== 'idle' && a.state !== 'wander') continue;
    const dx = a.root.position.x - x, dz = a.root.position.z - z;
    if (dx * dx + dz * dz < r * r) startFlee(a);
  }
}
function startFlee(a) {
  a.state = 'flee'; a.timer = rand(3, 5.5); a.jit = rand(-0.7, 0.7);
  play(a, 'walk', 2.4);
  if (Math.random() < 0.45 && a.dP < 40) bubble(a, pick(PANIC), 1.7);
  if (a.dP < 35) cry(a, Math.random() < 0.4 ? 'long' : 'yelp');
}
function cutChute(a) { if (a.chute) { a.root.remove(a.chute); a.chute = null; } }

function pushOut(p, rad) {
  for (const o of G.obstacles) {
    const dx = p.x - o.x, dz = p.z - o.z, rr = o.r + rad, d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && d2 > 1e-4) { const d = Math.sqrt(d2); p.x = o.x + (dx / d) * rr; p.z = o.z + (dz / d) * rr; }
  }
  const r = Math.hypot(p.x, p.z), lim = R_ISLAND - 1;
  if (r > lim) { p.x *= lim / r; p.z *= lim / r; }
}
function step(a, dirx, dirz, speed, dt) {
  const p = a.root.position;
  p.x += dirx * speed * dt; p.z += dirz * speed * dt;
  pushOut(p, a.H * 0.3);
  const want = Math.atan2(dirx, dirz);
  let dy = want - a.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  a.yaw += dy * Math.min(1, dt * 10); a.root.rotation.y = a.yaw;
  if (a.def.hop) { a.hopT += dt * speed * 1.1; p.y = Math.abs(Math.sin(a.hopT)) * a.def.hop * Math.min(1, speed / 6); }
}

export function updateAnimals(dt) {
  const P = G.player.pos; let si = 0;
  for (let i = G.animals.length - 1; i >= 0; i--) {
    const a = G.animals[i], p = a.root.position, def = a.def;
    a.mixer.update(dt * a.animRate);
    if (a.flash > 0) { a.flash -= dt; a.mat.emissive.setRGB(a.flash > 0 ? 0.55 : 0, 0, 0); }
    const dx = p.x - P.x, dz = p.z - P.z, dP = Math.hypot(dx, dz); a.dP = dP;
    if (def.cloak) { const tgt = dP > 20 && a.state !== 'flee' ? 0.3 : 1; if (Math.abs(a.mat.opacity - tgt) > 0.01) { a.mat.transparent = true; a.mat.opacity += (tgt - a.mat.opacity) * Math.min(1, dt * 3); } }
    if (def.fly && a.state !== 'air' && a.state !== 'drop' && a.state !== 'sucked') {
      a.baseY += ((a.state === 'flee' ? 3.3 : 2.1) - a.baseY) * Math.min(1, dt * 2);
      p.y = a.baseY + Math.sin(G.t * 3 + a.seed) * 0.3;
    }
    switch (a.state) {
      case 'drop':
        p.y -= 8.5 * dt; a.root.rotation.z = Math.sin(G.t * 2.5 + a.seed) * 0.12;
        if (p.y <= a.baseY) {
          p.y = a.baseY; a.root.rotation.z = 0; cutChute(a); dust(p.x, 0, p.z, 5, 0.7);
          a.state = 'idle'; a.timer = rand(0.3, 1.5); play(a, 'idle');
        }
        break;
      case 'idle':
        a.timer -= dt; a.talkT -= dt;
        if (dP < def.sense) { startFlee(a); break; }
        if (a.talkT <= 0) { a.talkT = rand(7, 18); if (dP < 45) { bubble(a, pick(def.lines), 2.4); play(a, 'talk'); } }
        if (a.timer <= 0) {
          const ang = rand(6.28), d = rand(4, 16);
          a.tx = clamp(p.x + Math.cos(ang) * d, -R_ISLAND + 6, R_ISLAND - 6); a.tz = clamp(p.z + Math.sin(ang) * d, -R_ISLAND + 6, R_ISLAND - 6);
          a.state = 'wander'; a.timer = rand(3, 7); play(a, 'walk', 1);
        }
        break;
      case 'wander': {
        a.timer -= dt;
        if (dP < def.sense) { startFlee(a); break; }
        const tx = a.tx - p.x, tz = a.tz - p.z, d = Math.hypot(tx, tz);
        if (d < 0.6 || a.timer <= 0) { a.state = 'idle'; a.timer = rand(1, 4.5); play(a, Math.random() < 0.3 ? 'talk' : 'idle'); if (!def.fly) p.y = 0; break; }
        step(a, tx / d, tz / d, def.walk, dt);
        break;
      }
      case 'flee': {
        a.timer -= dt;
        let ang = Math.atan2(dx, dz) + a.jit + Math.sin(G.t * 2.2 + a.seed) * 0.45;
        let fx = Math.sin(ang), fz = Math.cos(ang);
        const rr = Math.hypot(p.x, p.z), edge = R_ISLAND - 11;
        if (rr > edge) { // 靠近海邊：沿著岸邊繞開，別卡死
          const k = clamp((rr - edge) / 9, 0, 1), ix = -p.x / rr, iz = -p.z / rr;
          let tx = -iz, tz = ix; if (tx * fx + tz * fz < 0) { tx = -tx; tz = -tz; }
          fx = fx * (1 - k) + (tx * 0.85 + ix * 0.5) * k; fz = fz * (1 - k) + (tz * 0.85 + iz * 0.5) * k;
          const l = Math.hypot(fx, fz) || 1; fx /= l; fz /= l;
        }
        if (A.wail && dP < 22) { a.scrT -= dt; if (a.scrT <= 0) { a.scrT = rand(1.2, 3); cry(a, 'long', false); } }
        if (G.wx.rain > 0.4 && !def.fly && p.y < 0.3 && Math.random() < dt * 0.09 * G.wx.rain) { // 雨天地滑
          a.vel.set(fx * def.run * 0.9, 4.5, fz * def.run * 0.9); a.state = 'air'; a.spin = rand(4, 8);
          if (dP < 30) bubble(a, pick(['地好滑！', '哇啊！', '誰沒拖地！']), 1.2); cry(a, 'yelp', false); break;
        }
        step(a, fx, fz, def.run, dt);
        if (a.timer <= 0 && dP > def.sense * 1.5) { a.state = 'idle'; a.timer = rand(1, 3); play(a, 'idle'); if (!def.fly) p.y = 0; }
        break;
      }
      case 'air': {
        a.vel.y -= 24 * dt; p.addScaledVector(a.vel, dt);
        a.tilt.rotation.x += a.spin * dt; a.tilt.rotation.z += a.spin * 0.6 * dt;
        const sp = Math.hypot(a.vel.x, a.vel.z);
        let done = false;
        if (sp > 11) {
          for (const o of G.obstacles) {
            if (p.y > o.h) continue; const ox = p.x - o.x, oz = p.z - o.z;
            if (ox * ox + oz * oz < (o.r + 0.6) * (o.r + 0.6)) { kill(a, { mode: 'wall', dir: a.vel.clone().normalize(), weapon: a.lastWeapon }); done = true; break; }
          }
        }
        if (done) break;
        if (p.y <= 0 && a.vel.y < 0) {
          if (Math.hypot(p.x, p.z) > R_ISLAND + 9) { kill(a, { mode: 'drown', weapon: a.lastWeapon }); break; }
          if (a.vel.y < -17) { p.y = 0; kill(a, { mode: 'splat', weapon: a.lastWeapon }); break; }
          p.y = 0; a.state = 'stun'; a.timer = 0.9; a.mixer.timeScale = 0;
          a.tilt.rotation.set(-Math.PI / 2, 0, rand(-0.5, 0.5)); a.tilt.position.y = a.H * 0.2;
          S.thud(); dust(p.x, 0, p.z, 4, 0.6);
        }
        break;
      }
      case 'stun':
        a.timer -= dt;
        if (a.timer <= 0) {
          a.tilt.rotation.set(0, 0, 0); a.tilt.position.y = a.H * 0.45; a.mixer.timeScale = 1;
          if (Math.hypot(p.x, p.z) > R_ISLAND - 1) pushOut(p, 0.5);
          a.state = 'idle'; a.dP = 0; startFlee(a);
        }
        break;
      case 'sucked':
        if (!a.hole || a.hole.done) { a.hole = null; a.tilt.scale.setScalar(1); a.state = 'air'; a.spin = rand(5, 10); }
        break;
      case 'boss': {
        a.timer -= dt;
        const d = dP || 1;
        if (d > a.H * 0.42) step(a, -dx / d, -dz / d, 4.8, dt);
        if (d < a.H * 0.42 + 1.2 && a.timer <= 0) {
          a.timer = 1.6; const pl = G.player;
          pl.kvel.set((-dx / d) * 26, 0, (-dz / d) * 26); pl.vel.y = 11; pl.onGround = false;
          shake(0.8); S.slam(); bubble(a, pick(['這個需求很簡單', '我只是提個小建議', '下班前給我']), 2);
        }
        if (Math.random() < dt * 0.25) bubble(a, pick(def.lines), 2.2);
        break;
      }
    }
    // 圓影
    if (si < 90) { _d.position.set(p.x, 0.025, p.z); _d.scale.setScalar(a.H * 0.33 * clamp(1 - p.y / 14, 0.25, 1)); _d.updateMatrix(); shadowMesh.setMatrixAt(si++, _d.matrix); }
  }
  shadowMesh.count = si; shadowMesh.instanceMatrix.needsUpdate = true;
  for (let i = corpses.length - 1; i >= 0; i--) { if (corpses[i].upd(dt)) { if (corpses[i].end) corpses[i].end(); corpses.splice(i, 1); } }
  // 屍體太多時提早收掉最舊的
  if (corpses.length > 34) { const c = corpses.shift(); if (c.end) c.end(); }
}

// ── 受傷與擊殺 ──
export function damage(a, amt, info = {}) {
  if (a.dead) return false;
  if (a.boss) amt = Math.min(amt, info.bossCap || 300);
  a.hp -= amt; a.flash = 0.1; if (info.weapon) a.lastWeapon = info.weapon;
  if (a.hp <= 0) { kill(a, info); return true; }
  if (a.boss) { if (A.wail && G.t - a.hurtT > 1.2) { a.hurtT = G.t; cry(a, 'yelp', false); } return false; }
  if (info.knock) {
    cutChute(a); a.root.rotation.z = 0; a.vel.copy(info.knock); a.state = 'air'; a.spin = rand(6, 13);
    if (a.root.position.y < 0.1) a.root.position.y = 0.1;
    cry(a, A.wail ? 'fall' : 'yelp');
  } else if (a.state === 'drop') { cutChute(a); a.root.rotation.z = 0; a.vel.set(0, -3, 0); a.state = 'air'; a.spin = rand(3, 6); cry(a, 'fall'); }
  else if (a.state === 'idle' || a.state === 'wander') startFlee(a);
  else if (A.wail && G.t - a.hurtT > (a.boss ? 1.2 : 0.5)) { a.hurtT = G.t; cry(a, 'yelp', false); }
  return false;
}

export function kill(a, info = {}) {
  if (a.dead) return;
  a.dead = true;
  const i = G.animals.indexOf(a); if (i >= 0) G.animals.splice(i, 1);
  cutChute(a); a.root.rotation.z = 0;
  let mode = info.mode || 'drop';
  if (a.boss) mode = 'mega';
  const p = a.root.position;
  info.air = !a.def.fly && p.y > 1.3;
  if (G.onKill) G.onKill(a, mode, info);
  if (A.wail) {
    if (WAIL[mode]) cry(a, WAIL[mode], false);
    if (a.dP < 30 && Math.random() < 0.3) popup(V(p.x, p.y + a.H + 0.5, p.z), pick(AAA), 'scream', 0.9, 2.4);
  }
  alarm(p.x, p.z, 24);
  if (a.state === 'sucked') a.tilt.scale.setScalar(1);
  DEATH[mode](a, info);
}

// 肉塊大放送
function gibs(a, n = 1, dir) {
  const p = a.root.position, cy = p.y + a.H * 0.5, robot = a.def.robot, k = a.H / 1.5;
  const dx = dir ? dir.x : 0, dz = dir ? dir.z : 0;
  blood(p.x, cy, p.z, dx * 0.5, 0.6, dz * 0.5, Math.round(42 * n), 9 * Math.sqrt(k), robot);
  const cnt = Math.round(12 * n);
  for (let i = 0; i < cnt; i++) {
    const vx = rand(-7, 7) * k + dx * 7, vy = rand(4, 13) * Math.sqrt(k), vz = rand(-7, 7) * k + dz * 7;
    if (robot) FX.scrap.spawn(p.x, cy + rand(-0.3, 0.3), p.z, vx, vy, vz, rand(0.15, 0.36) * k, rand(5, 9), pick([0xE8E4D4, 0x9A9684, 0x62B149, 0x2E2A1F]));
    else FX.meat.spawn(p.x + rand(-0.3, 0.3), cy + rand(-0.3, 0.3), p.z + rand(-0.3, 0.3), vx, vy, vz, rand(0.14, 0.34) * k, rand(5, 9), Math.random() < 0.4 ? a.def.fur : pick(MEAT));
  }
  if (!robot) {
    for (let i = 0; i < Math.round(3 * n); i++) FX.bone.spawn(p.x, cy, p.z, rand(-6, 6) + dx * 5, rand(5, 11), rand(-6, 6) + dz * 5, rand(0.25, 0.4) * k, rand(6, 10));
    for (let i = 0; i < 2; i++) FX.eye.spawn(p.x, p.y + a.H * 0.8, p.z, rand(-5, 5) + dx * 4, rand(6, 12), rand(-5, 5) + dz * 4, 0.2 * k, rand(7, 11));
    mist(p.x, cy, p.z, Math.round(7 * n));
  } else { sparks(p.x, cy, p.z, 14); mist(p.x, cy, p.z, 5, true); S.clank(); }
  FX.decals.add(p.x, p.z, rand(2.6, 4.2) * k, robot ? 0x1A1A16 : pick(BLOOD));
  S.splat();
  const dc = _v.set(p.x, cy, p.z).distanceTo(G.camera.position);
  if (dc < 5) screenBlood(dc < 3 ? 3 : 1, robot);
}
function fountain(a, x, y, z, n, up = 7) {
  blood(x, y, z, 0, 1, 0, n, up, a.def.robot, 0.28);
}
// 複製一份目前姿勢（切兩半用）
function poseClone(src) {
  const c = SkeletonUtils.clone(src); const s = [], d = [];
  src.traverse((o) => s.push(o)); c.traverse((o) => d.push(o));
  for (let i = 0; i < s.length && i < d.length; i++) { d[i].position.copy(s[i].position); d[i].quaternion.copy(s[i].quaternion); d[i].scale.copy(s[i].scale); }
  return c;
}
function fadeOut(obj, t, T0, T1) { // T0 開始縮、T1 消失
  if (t > T0) obj.scale.setScalar(Math.max(0.001, 1 - (t - T0) / (T1 - T0)));
  return t > T1;
}

const DEATH = {
  gib(a, info) { gibs(a, 1, info.dir); dispose(a); },
  wall(a, info) {
    gibs(a, 1.2, info.dir); const p = a.root.position;
    FX.decals.add(p.x, p.z, 5, pick(BLOOD)); popup(p.clone().setY(p.y + 1.5), '啪嘰！', 'big'); shakeAt(p, 0.4); dispose(a);
  },
  splat(a) {
    const p = a.root.position; gibs(a, 0.8);
    for (let i = 0; i < 26; i++) { const an = rand(6.28), s = rand(4, 10); FX.blood.spawn(p.x, 0.2, p.z, Math.cos(an) * s, rand(1, 3), Math.sin(an) * s, rand(0.08, 0.2), 2, pick(BLOOD)); }
    dispose(a);
  },
  drown(a) {
    const p = a.root.position;
    for (let i = 0; i < 14; i++) FX.puffs.spawn(p.x, -0.3, p.z, rand(-3, 3), rand(5, 11), rand(-3, 3), 0.4, rand(0.8, 1.5), rand(0.5, 0.9), 0xFCF9F0, 0x8FC7D4, -16, 0.5);
    S.splash(); dispose(a);
  },
  mega(a, info) {
    const p = a.root.position;
    gibs(a, 5, info.dir); boomFX(p.clone().setY(a.H * 0.5), 12, 1.2); ring(p, 1, 26, 0.7, 0xC8483A);
    for (let i = 0; i < 70; i++) { const an = rand(6.28), d = rand(0, 16); after(rand(0.2, 1.6), () => FX.meat.spawn(p.x + Math.cos(an) * d, rand(14, 24), p.z + Math.sin(an) * d, rand(-2, 2), rand(-4, 2), rand(-2, 2), rand(0.2, 0.5), rand(5, 9), Math.random() < 0.4 ? a.def.fur : pick(MEAT))); }
    for (let i = 0; i < 14; i++) FX.decals.add(p.x + rand(-9, 9), p.z + rand(-9, 9), rand(3, 7), pick(BLOOD));
    G.hitstop = 0.14; G.slowmoT = 1.4; shake(1); screenBlood(5); G.boss = null; dispose(a);
  },
  hole(a) { dispose(a); },
  drop(a, info) {
    const p = a.root.position, dir = info.dir || V(0, 0, 1), kb = info.power || 4;
    let vx = dir.x * kb, vz = dir.z * kb, t = 0, pooled = false;
    a.mixer.timeScale = 0; a.yaw = Math.atan2(-dir.x, -dir.z); a.root.rotation.y = a.yaw;
    blood(p.x, p.y + a.H * 0.55, p.z, dir.x, 0.3, dir.z, 16, 6, a.def.robot);
    if (a.def.robot) { sparks(p.x, p.y + a.H * 0.6, p.z, 8); S.clank(); } else S.squish();
    const y0 = p.y;
    corpses.push({
      upd(dt) {
        t += dt; const k = Math.min(1, t / 0.28);
        a.tilt.rotation.x = -k * Math.PI / 2 - (k >= 1 ? Math.max(0, Math.sin((t - 0.28) * 18) * 0.12 * Math.exp(-(t - 0.28) * 6)) : 0);
        a.tilt.position.y = a.H * (0.45 - 0.27 * k); p.y = y0 * (1 - k);
        p.x += vx * dt; p.z += vz * dt; const f = Math.exp(-5 * dt); vx *= f; vz *= f;
        if (k >= 1 && !pooled) { pooled = true; FX.decals.add(p.x - dir.x * 0.2, p.z - dir.z * 0.2, rand(2, 3.2), a.def.robot ? 0x1A1A16 : pick(BLOOD)); dust(p.x, 0, p.z, 3, 0.5); }
        if (t > 0.3 && t < 1.6 && Math.random() < dt * 14) fountain(a, p.x, 0.35, p.z, 2, 4);
        return fadeOut(a.tilt, t, 6, 6.6);
      },
      end() { dispose(a); },
    });
  },
  headpop(a, info) {
    const p = a.root.position, hy = p.y + a.H * 0.8, robot = a.def.robot;
    if (a.bones.head) a.bones.head.scale.setScalar(0.001);
    blood(p.x, hy, p.z, 0, 1, 0, 26, 8, robot);
    for (let i = 0; i < 5; i++) (robot ? FX.scrap : FX.meat).spawn(p.x, hy, p.z, rand(-5, 5), rand(4, 10), rand(-5, 5), rand(0.12, 0.26), rand(5, 8), robot ? 0xE8E4D4 : (Math.random() < 0.5 ? a.def.fur : pick(MEAT)));
    if (!robot) for (let i = 0; i < 2; i++) FX.eye.spawn(p.x, hy, p.z, rand(-5, 5), rand(7, 12), rand(-5, 5), 0.2, rand(7, 11));
    S.pop(); S.squish(0.03);
    let t = 0, heading = a.yaw, turn = pick([-1, 1]) * rand(3, 5.5), fell = false; const run = rand(1.1, 1.9);
    play(a, 'walk', 2.6); p.y = a.def.fly ? p.y : 0;
    corpses.push({
      upd(dt) {
        t += dt;
        if (t < run) {
          a.mixer.update(dt * 2.6); heading += turn * dt;
          p.x += Math.sin(heading) * 6.5 * dt; p.z += Math.cos(heading) * 6.5 * dt; pushOut(p, 0.4); a.root.rotation.y = heading;
          if (p.y > 0) p.y = Math.max(0, p.y - 6 * dt);
          fountain(a, p.x, p.y + a.H * 0.72, p.z, 2, 8);
        } else {
          if (!fell) { fell = true; FX.decals.add(p.x, p.z, rand(2.2, 3.4), robot ? 0x1A1A16 : pick(BLOOD)); S.thud(); }
          const k = Math.min(1, (t - run) / 0.3);
          a.tilt.rotation.x = k * Math.PI / 2; a.tilt.position.y = a.H * (0.45 - 0.27 * k);
          if (t < run + 1 && Math.random() < dt * 12) fountain(a, p.x + Math.sin(heading) * a.H * 0.6, 0.3, p.z + Math.cos(heading) * a.H * 0.6, 2, 3);
        }
        return fadeOut(a.tilt, t, 6.5, 7.1);
      },
      end() { dispose(a); },
    });
  },
  flat(a) {
    const p = a.root.position, robot = a.def.robot; p.y = 0; a.mixer.timeScale = 0; a.tilt.rotation.set(0, 0, 0);
    for (let i = 0; i < 34; i++) { const an = rand(6.28), s = rand(4, 11); (robot ? FX.oil : FX.blood).spawn(p.x, 0.25, p.z, Math.cos(an) * s, rand(1, 4.5), Math.sin(an) * s, rand(0.08, 0.2), 2, robot ? 0x1A1A16 : pick(BLOOD)); }
    FX.decals.add(p.x, p.z, rand(3.4, 4.6) * a.H / 1.5, robot ? 0x1A1A16 : pick(BLOOD));
    if (!robot) for (let i = 0; i < 2; i++) FX.eye.spawn(p.x, 0.3, p.z, rand(-3, 3), rand(9, 14), rand(-3, 3), 0.2, rand(7, 11));
    else sparks(p.x, 0.3, p.z, 12);
    S.splat();
    let t = 0;
    corpses.push({
      upd(dt) {
        t += dt; const k = Math.min(1, t / 0.07), sy = 1 - 0.95 * k;
        if (t < 7.5) { a.tilt.scale.set(1 + 0.8 * k, sy, 1 + 0.8 * k); a.tilt.position.y = a.H * 0.45 * sy; return false; }
        const f = Math.max(0.001, 1 - (t - 7.5) / 0.5); a.tilt.scale.set(1.8 * f, 0.05, 1.8 * f);
        return t > 8;
      },
      end() { dispose(a); },
    });
  },
  launch(a, info) {
    const p = a.root.position, v = info.dir.clone().multiplyScalar(46); v.y = Math.max(v.y, 12) + 9;
    S.crack(); cry(a, 'fall'); a.mixer.timeScale = 3;
    blood(p.x, p.y + a.H * 0.5, p.z, info.dir.x, 0.5, info.dir.z, 12, 7, a.def.robot);
    let t = 0;
    corpses.push({
      upd(dt) {
        t += dt; v.y -= 8 * dt; p.addScaledVector(v, dt); a.tilt.rotation.x += 24 * dt; a.mixer.update(dt * 3);
        if (Math.random() < dt * 40) FX.puffs.spawn(p.x, p.y + a.H * 0.5, p.z, 0, 0, 0, 0.5, 0.2, 0.4, 0xFCF9F0, 0xDDDAD1, 0, 1);
        for (const b of G.animals.slice()) { // 保齡球：撞到誰誰爆
          if (b.boss) { const q = b.root.position; if (Math.hypot(q.x - p.x, q.z - p.z) < b.H * 0.35 && p.y < b.H) { damage(b, 220, { mode: 'gib', weapon: info.weapon }); gibs(a, 1, v.clone().normalize()); return true; } continue; }
          const q = b.root.position;
          if ((q.x - p.x) ** 2 + (q.y - p.y) ** 2 + (q.z - p.z) ** 2 < 2.6) damage(b, 999, { mode: 'gib', dir: _v2.copy(v).normalize().clone(), weapon: info.weapon, style: 'bowling' });
        }
        for (const o of G.obstacles) {
          if (p.y > o.h) continue;
          if ((p.x - o.x) ** 2 + (p.z - o.z) ** 2 < (o.r + 0.6) ** 2) { gibs(a, 1.2, v.clone().normalize()); FX.decals.add(p.x, p.z, 5, pick(BLOOD)); popup(p.clone().setY(p.y + 1.5), '啪嘰！', 'big'); shakeAt(p, 0.4); return true; }
        }
        if (p.y < 0.1 && v.y < 0) { p.y = 0; gibs(a, 0.9); return true; }
        if (t > 1.5) { popup(p, '✦', 'star', 1.3, 0); S.ding(); return true; }
        return false;
      },
      end() { dispose(a); },
    });
  },
  burn(a) {
    const p = a.root.position; let t = 0, heading = a.yaw, charred = false, spreadT = 0, wt = rand(0.5, 0.9); const run = rand(1.8, 2.6);
    play(a, 'walk', 3.2); cry(a, 'long'); a.mat.transparent = false; a.mat.opacity = 1;
    if (Math.random() < 0.6) bubble({ root: a.root, H: a.H, dead: false, label: null }, pick(['燙燙燙燙！', '我著火了！', '誰來滅火！', '啊啊啊啊啊！']), 1.6);
    corpses.push({
      upd(dt) {
        t += dt;
        if (t < run) {
          a.mixer.update(dt * 3.2); heading += rand(-7, 7) * dt + Math.sin(t * 9) * 3 * dt;
          p.x += Math.sin(heading) * 9 * dt; p.z += Math.cos(heading) * 9 * dt; pushOut(p, 0.4); a.root.rotation.y = heading;
          if (!a.def.fly && p.y > 0) p.y = Math.max(0, p.y - 8 * dt);
          a.mat.color.lerp(_c.set(0x1a1612), dt * 1.1);
          if (A.wail) { wt -= dt; if (wt <= 0) { wt = rand(0.5, 0.9); cry(a, 'long', false); } }
          for (let i = 0; i < 2; i++) FX.puffs.spawn(p.x + rand(-0.4, 0.4), p.y + rand(0.2, a.H), p.z + rand(-0.4, 0.4), rand(-1, 1), rand(1, 3), rand(-1, 1), 0.3, rand(0.5, 0.9), rand(0.25, 0.5), 0xFFF2B0, 0xE8742A, 5, 2);
          spreadT -= dt;
          if (spreadT <= 0) { // 火會傳染
            spreadT = 0.12;
            for (const b of G.animals.slice()) { const q = b.root.position; if ((q.x - p.x) ** 2 + (q.z - p.z) ** 2 < 4.4 && Math.abs(q.y - p.y) < 2.5) damage(b, b.boss ? 40 : 999, { mode: 'burn', weapon: 'flame', style: 'spread' }); }
            if (Math.random() < 0.3) FX.decals.add(p.x, p.z, rand(0.8, 1.5), 0x24211A, true);
          }
        } else if (!charred) {
          charred = true; a.mat.color.set(0x15120f); a.mixer.timeScale = 0;
          for (let i = 0; i < 6; i++) FX.puffs.spawn(p.x, p.y + rand(0.3, a.H), p.z, rand(-1, 1), rand(1, 3), rand(-1, 1), 0.4, 1, rand(0.6, 1), 0x6B6455, 0x2E2A1F, 2, 2);
        } else if (t > run + 0.7) {
          for (let i = 0; i < 14; i++) FX.puffs.spawn(p.x + rand(-0.3, 0.3), p.y + rand(0.1, a.H), p.z + rand(-0.3, 0.3), rand(-3, 3), rand(0, 4), rand(-3, 3), 0.3, rand(0.6, 1.1), rand(0.5, 0.9), 0x2E2A1F, 0x6B6455, -3, 2);
          for (let i = 0; i < 9; i++) FX.scrap.spawn(p.x, p.y + rand(0.2, a.H), p.z, rand(-3, 3), rand(1, 5), rand(-3, 3), rand(0.12, 0.28), rand(4, 7), pick([0x15120f, 0x24211A]));
          FX.decals.add(p.x, p.z, rand(1.8, 2.6), 0x24211A); S.thud();
          return true;
        }
        return false;
      },
      end() { dispose(a); },
    });
  },
  zap(a) { // 雷劈：僵直狂閃 → 焦炭 → 碎成灰
    const p = a.root.position; let t = 0, ash = false;
    a.mixer.timeScale = 0; a.mat.transparent = false; a.mat.opacity = 1; a.tilt.rotation.set(0, 0, 0);
    if (!a.def.fly && p.y < 0.3) p.y = 0;
    corpses.push({
      upd(dt) {
        t += dt;
        if (t < 0.55) {
          const on = Math.floor(t * 30) % 2;
          a.mat.emissive.setRGB(on, on, on * 0.8); a.mat.color.set(on ? 0xffffff : 0x111111);
          a.tilt.position.x = rand(-0.08, 0.08); a.tilt.scale.set(1 + rand(-0.06, 0.06), 1 + rand(0, 0.14), 1 + rand(-0.06, 0.06));
          if (Math.random() < dt * 30) sparks(p.x, p.y + rand(0.2, a.H), p.z, 2);
          return false;
        }
        if (!ash) {
          ash = true; a.mat.emissive.setRGB(0, 0, 0); a.mat.color.set(0x15120f); a.tilt.position.x = 0; a.tilt.scale.setScalar(1);
          for (let i = 0; i < 6; i++) FX.puffs.spawn(p.x, p.y + rand(0.3, a.H), p.z, rand(-1, 1), rand(1, 3), rand(-1, 1), 0.4, 1, rand(0.6, 1), 0x6B6455, 0x2E2A1F, 2, 2);
        }
        if (p.y > 0) p.y = Math.max(0, p.y - 14 * dt);
        if (t > 1.5) {
          for (let i = 0; i < 12; i++) FX.puffs.spawn(p.x + rand(-0.3, 0.3), p.y + rand(0.1, a.H), p.z + rand(-0.3, 0.3), rand(-3, 3), rand(0, 4), rand(-3, 3), 0.3, rand(0.6, 1.1), rand(0.5, 0.9), 0x2E2A1F, 0x6B6455, -3, 2);
          for (let i = 0; i < 8; i++) FX.scrap.spawn(p.x, p.y + rand(0.2, a.H), p.z, rand(-3, 3), rand(1, 5), rand(-3, 3), rand(0.12, 0.28), rand(4, 7), pick([0x15120f, 0x24211A]));
          FX.decals.add(p.x, p.z, rand(1.8, 2.6), 0x24211A); S.thud();
          return true;
        }
        return false;
      },
      end() { dispose(a); },
    });
  },
  slice(a, info) {
    const kind = info.cut || pick(['h', 'd']), H = a.H, p = a.root.position, robot = a.def.robot;
    let n, pt;
    if (kind === 'v') { n = V(1, 0, 0); pt = V(0, H * 0.5, 0); } else if (kind === 'd') { n = V(0.55 * pick([-1, 1]), 0.83, 0).normalize(); pt = V(0, H * 0.5, 0); } else { n = V(0, 1, 0); pt = V(0, H * 0.45, 0); }
    a.tilt.rotation.set(0, 0, 0); a.tilt.position.y = H * 0.45; a.tilt.scale.setScalar(1);
    if (!a.def.fly && kind !== 'v') p.y = Math.max(0, p.y);
    // 上半：另一份模型，原點放在切點
    const top = new THREE.Group(); top.rotation.y = a.root.rotation.y;
    top.position.copy(pt).applyAxisAngle(_v.set(0, 1, 0), a.root.rotation.y).add(p);
    const cl = poseClone(a.model); cl.position.set(-pt.x, -pt.y, -pt.z);
    const matTop = a.mat.clone(), planeTop = new THREE.Plane(), planeBot = new THREE.Plane();
    matTop.clippingPlanes = [planeTop]; a.mat.clippingPlanes = [planeBot]; a.mat.needsUpdate = true; a.mat.transparent = false; a.mat.opacity = 1; matTop.transparent = false; matTop.opacity = 1;
    cl.traverse((c) => { if (c.isMesh) { c.material = matTop; c.frustumCulled = false; } });
    top.add(cl); G.scene.add(top);
    const localTop = new THREE.Plane(n.clone(), 0);
    const localBot = new THREE.Plane().setFromNormalAndCoplanarPoint(n.clone().negate(), pt.clone().sub(a.tilt.position));
    const mkCap = (parent, pos, flip) => {
      const m = new THREE.Mesh(new THREE.CircleGeometry(1, 18), robot ? new THREE.MeshBasicMaterial({ color: 0x2E2A1F, side: THREE.DoubleSide }) : capMat);
      m.scale.set(H * 0.3, kind === 'v' ? H * 0.47 : H * 0.3, 1);
      m.quaternion.setFromUnitVectors(_v.set(0, 0, 1), n); m.position.copy(pos).addScaledVector(n, flip * 0.01); parent.add(m);
    };
    mkCap(top, V(0, 0, 0), 1); mkCap(a.tilt, pt.clone().sub(a.tilt.position), -1);
    a.extra = [{ obj: top, mat: matTop }];
    const side = _v2.set(n.x, 0, n.z).applyAxisAngle(_v.set(0, 1, 0), a.root.rotation.y).clone();
    const d = info.dir || V(0, 0, 0);
    const vt = kind === 'v' ? V(side.x * 2.6, 2.2, side.z * 2.6) : V(d.x * 3 + side.x * 3.5 + rand(-1, 1), rand(4.5, 6.5), d.z * 3 + side.z * 3.5 + rand(-1, 1));
    const av = kind === 'v' ? V(0, 0, -5) : V(rand(-7, 7), rand(-4, 4), rand(-7, 7));
    blood(top.position.x, top.position.y, top.position.z, 0, 0.6, 0, 30, 7, robot);
    if (robot) { sparks(top.position.x, top.position.y, top.position.z, 12); S.clank(); }
    S.slice();
    let t = 0, restTop = false, heading = a.yaw; const run = kind === 'v' ? 0 : rand(0.45, 0.85);
    if (run) play(a, 'walk', 2.6);
    else a.mixer.timeScale = 0;
    const restY = H * 0.2, y0 = p.y;
    corpses.push({
      upd(dt) {
        t += dt;
        // 上半身飛出去
        if (!restTop) {
          vt.y -= 22 * dt; top.position.addScaledVector(vt, dt);
          top.rotation.x += av.x * dt; top.rotation.z += av.z * dt; top.rotation.y += av.y * dt;
          if (kind === 'v' && top.rotation.z < -Math.PI / 2) { top.rotation.z = -Math.PI / 2; av.z = 0; }
          if (top.position.y < restY) { top.position.y = restY; restTop = true; FX.decals.add(top.position.x, top.position.z, rand(1.6, 2.6), robot ? 0x1A1A16 : pick(BLOOD)); S.thud(); if (kind !== 'v') top.rotation.set(Math.PI / 2 * pick([-1, 1]), top.rotation.y, 0); }
        }
        // 下半身：先繼續跑，再倒下
        if (t < run) {
          a.mixer.update(dt * 2.6); p.x += Math.sin(heading) * 5 * dt; p.z += Math.cos(heading) * 5 * dt; pushOut(p, 0.4);
          fountain(a, p.x, p.y + pt.y, p.z, 2, 7);
        } else {
          const k = Math.min(1, (t - run) / 0.32);
          if (kind === 'v') { a.tilt.rotation.z = k * Math.PI / 2; p.y = y0 * (1 - k); } else a.tilt.rotation.x = k * Math.PI / 2;
          a.tilt.position.y = H * (0.45 - 0.25 * k);
          if (t < run + 0.9 && Math.random() < dt * 16) fountain(a, p.x, 0.4, p.z, 2, 4);
          if (k >= 1 && !a._pool) { a._pool = true; FX.decals.add(p.x, p.z, rand(2.2, 3.2), robot ? 0x1A1A16 : pick(BLOOD)); }
        }
        top.updateMatrixWorld(true); a.root.updateMatrixWorld(true);
        planeTop.copy(localTop).applyMatrix4(top.matrixWorld);
        planeBot.copy(localBot).applyMatrix4(a.tilt.matrixWorld);
        if (t > 6.2) { const f = Math.max(0.001, 1 - (t - 6.2) / 0.6); top.scale.setScalar(f); a.tilt.scale.setScalar(f); }
        return t > 6.8;
      },
      end() { dispose(a); },
    });
  },
};

// ── 生成 ──
export function randomKey() {
  let tot = 0; for (const k in DEFS) tot += DEFS[k].w;
  let r = Math.random() * tot;
  for (const k in DEFS) { r -= DEFS[k].w; if (r <= 0) return k; }
  return 'persi';
}
function freeSpot(minR, maxR, cx = 0, cz = 0) {
  for (let i = 0; i < 30; i++) {
    const a = rand(6.28), d = rand(minR, maxR), x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
    if (Math.hypot(x, z) > R_ISLAND - 4) continue;
    let ok = true; for (const o of G.obstacles) if ((o.x - x) ** 2 + (o.z - z) ** 2 < (o.r + 1) ** 2) { ok = false; break; }
    if (ok) return [x, z];
  }
  return [rand(-20, 20), rand(-20, 20)];
}
export function spawnRandom(drop = true, near) {
  const key = randomKey(), def = DEFS[key], n = def.pack || 1;
  const [x, z] = near ? freeSpot(near[2], near[3], near[0], near[1]) : freeSpot(6, R_ISLAND - 8);
  for (let i = 0; i < n; i++) spawnAnimal(key, x + (i ? rand(-2, 2) : 0), z + (i ? rand(-2, 2) : 0), drop ? { drop: true, y: rand(26, 40) } : {});
  return n;
}
export function spawnBoss() {
  const key = pick(['persi', 'cocoa', 'kuri', 'wasabi', 'shiro', 'mochi', 'cinna']), P = G.player.pos;
  const [x, z] = freeSpot(26, 36, P.x, P.z);
  const a = spawnAnimal(key, x, z, { scale: 4.4, hpMul: 1, boss: true });
  a.hp = a.maxHp = 2200; G.boss = a;
  dust(x, 0, z, 18, 3); ring(a.root.position, 1, 16, 0.6, 0xF2C94C); shake(0.6); S.slam();
  return a;
}
