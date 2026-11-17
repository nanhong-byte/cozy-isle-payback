// 《暖島清算日》主程式：啟動、輸入、玩家、計分、生怪、主迴圈
import * as THREE from 'three';
import { G, R_ISLAND, rand, pick, lerp, V } from './state.js';
import { initAudio, S, A, setMuted, stopAllLoops } from './audio.js';
import { initFX, updateFX, resizeFX, clearFX, popup, shake } from './fx.js';
import { buildWorld, updateWorld } from './world.js';
import { loadAnimals, updateAnimals, spawnRandom, spawnBoss, clearAnimals, DEATH_TEXT } from './animals.js';
import { initWeapons, updateWeapons, selectWeapon, resetWeapons, WEAPONS, W } from './weapons.js';
import { UI } from './ui.js';
import { initWeather, updateWeather, resetWeather, setWeather, strike } from './weather.js';
import { initItems, updateItems, resetItems, placeHidden, give, itemOnKill } from './items.js';
import { initIsles, Isles, reportRound, reportLock, backToIsles } from './isles.js';
import { tryStart, endRound, freeOver, lockNow, lockLeft, resetLimit } from './limit.js';
import { titleFor } from './titles.js';

const canvas = document.getElementById('game');
const keys = {};
const debug = location.search.includes('debug');
G.input = { fire: false, firePressed: false, altPressed: false };
G.player = { pos: V(0, 0, 24), vel: V(), kvel: V(), yaw: 0, pitch: 0, onGround: true, bobT: 0, dash: null };
let last = 0, spawnT = 0, nextBoss = 25, menuAng = 0, muted = false, everLocked = false, noLock = false, bossCallT = 0, picking = false;
try { A.wail = localStorage.getItem('cozy-payback-wail') !== '0'; } catch (e) { /* 忽略 */ }

const ANN = { 3: '三連殺！', 5: '大開殺戒！', 8: '血流成河！', 12: '暖島屠夫！', 16: '績效超標！', 20: '人資看了都怕！', 25: '無情開單機器！', 30: '這不是加班是屠殺！', 40: '全島資遣！', 50: '神之清算！' };

async function boot() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(innerWidth, innerHeight);
  renderer.localClippingEnabled = true;
  G.renderer = renderer; G.scene = new THREE.Scene();
  G.camera = new THREE.PerspectiveCamera(78, innerWidth / innerHeight, 0.05, 900);
  G.camera.rotation.order = 'YXZ'; G.scene.add(G.camera);
  buildWorld(); initFX(); initWeapons(); initWeather(); initItems();
  UI.init({ start, resume, menu: toMenu, wail: toggleWail, pick: pickPower, isles: goIsles }); UI.wail(A.wail);
  initIsles(() => UI.board(Isles.board, localMe()));
  UI.board(null, localMe());
  setInterval(() => UI.lock(noLimit ? 0 : lockLeft()), 1000); UI.lock(noLimit ? 0 : lockLeft());
  G.onKill = onKill; G.onMulti = onMulti;
  bindInput();
  await loadAnimals(UI.loading);
  toMenu();
  requestAnimationFrame(frame);
}

function resetRun() {
  clearAnimals(); clearFX(); resetWeapons(); G.timers.length = 0;
  G.score = 0; G.kills = 0; G.combo = 0; G.comboT = 0; G.bestCombo = 0; G.rage = 0; G.rageOn = 0; G.elapsed = 0; G.timeLeft = 180;
  G.slow = 1; G.hitstop = 0; G.slowmoT = 0; G.trauma = 0; G.boss = null; A.tempo = 1;
  G.stats = { byWeapon: {}, byVictim: {}, head: 0, air: 0, multi: 0, boss: 0 };
  spawnT = 0; nextBoss = 25; bossCallT = 0; resetWeather(); resetItems();
}
function toggleWail() {
  A.wail = !A.wail; UI.wail(A.wail); initAudio(); if (A.wail) S.wail('long', 1.1); else S.ui();
  try { localStorage.setItem('cozy-payback-wail', A.wail ? '1' : '0'); } catch (e) { /* 忽略 */ }
  if (G.mode === 'score' || G.mode === 'free') UI.feed(`慘叫版 <b>${A.wail ? '開' : '關'}</b>`);
}
function toMenu() {
  leaveFree();
  resetRun(); stopAllLoops();
  G.mode = 'menu'; G.paused = false; G.player.pos.set(0, 0, 9999);
  picking = false;
  for (let i = 0; i < 26; i++) spawnRandom(false);
  G.camera.children.forEach((c) => (c.visible = false));
  if (document.pointerLockElement) document.exitPointerLock();
  UI.reset(); UI.hiscore(); UI.show('menu');
}
function start(mode) {
  initAudio(); S.ui();
  if (!noLimit) { const r = tryStart(); if (!r.ok) { if (r.fresh) reportLock(r.until); showLimit(); return; } }
  resetRun();
  G.mode = mode; G.lastMode = mode; G.paused = false;
  const P = G.player; P.pos.set(0, 0, 24); P.vel.set(0, 0, 0); P.kvel.set(0, 0, 0); P.yaw = 0; P.pitch = 0; P.onGround = true; P.dash = null;
  for (let i = 0; i < 20; i++) spawnRandom(false, [0, 6, 6, 30]);
  for (let i = 0; i < 12; i++) spawnRandom(true);
  placeHidden();
  G.camera.children.forEach((c) => (c.visible = true));
  UI.reset(); UI.show('hud');
  UI.announce('清算開始！', '今天他們一個都別想下班', true);
  lock();
}
function lock() { if (canvas.requestPointerLock && !debug) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* 忽略 */ } } }
function pause() { if (G.mode !== 'score' && G.mode !== 'free') return; G.paused = true; stopAllLoops(); G.input.fire = false; UI.show('pause'); }
function resume() { picking = false; G.paused = false; UI.show('hud'); lock(); }
// 無限發洩模式：按 Tab 開絕招選單，想玩哪招直接點
function openPicker() {
  if (G.mode !== 'free' || G.paused) return;
  picking = true; G.paused = true; stopAllLoops(); G.input.fire = false; UI.show('picker');
  if (document.pointerLockElement) document.exitPointerLock();
}
function pickPower(id) { resume(); if (id) give(id); }
function ult() { if (G.ult < 1) return; G.ult = 0; give(); }
function endGame() {
  const mode = G.mode; G.mode = 'end'; stopAllLoops(); G.input.fire = false;
  if (document.pointerLockElement) document.exitPointerLock();
  let hi = 0; try { hi = +localStorage.getItem('cozy-payback-hi') || 0; } catch (e) { /* 忽略 */ }
  G.stats.newHigh = mode === 'score' && G.score > hi;
  if (G.stats.newHigh) { try { localStorage.setItem('cozy-payback-hi', Math.floor(G.score)); } catch (e) { /* 忽略 */ } }
  G.camera.children.forEach((c) => (c.visible = false));
  S.end(); UI.end(G.stats);
  if (mode === 'score') { endRound('score', 180); finishRound('score'); }
}

// ── v1.3：成績回傳、稱號、防沉迷、回群島 ──
const noLimit = debug && !location.search.includes('limit');
function localMe() {
  let m = null; try { m = JSON.parse(localStorage.getItem('cozy-payback-me') || 'null'); } catch (e) { /* 忽略 */ }
  return m && m.plays ? Object.assign({ name: '你（這台電腦）', me: true }, m) : null;
}
// 一局算完：累計＋稱號 → 結算卡、存本機、送回群島
function finishRound(mode) {
  const st = G.stats, fav = UI.favOf(st), score = Math.floor(G.score);
  const r = { mode, score, kills: G.kills, combo: G.bestCombo, fav, rank: mode === 'score' ? UI.rankOf(score) : '', secs: Math.round(G.elapsed) };
  const b = Isles.board, mine = (b && b.rows.find((x) => x.me)) || localMe() || { kills: 0, plays: 0, best: 0, combo: 0 };
  const tot = { kills: mine.kills + r.kills, plays: mine.plays + 1, best: Math.max(mine.best, mode === 'score' ? score : 0), combo: Math.max(mine.combo, r.combo) };
  tot.top = !!b && b.rows.length > 1 && b.rows.every((x) => x.me || x.best < tot.best);
  const t = titleFor(r, tot); r.title = t.title; r.blurb = t.blurb;
  try { localStorage.setItem('cozy-payback-me', JSON.stringify(Object.assign({}, tot, { title: t.title, blurb: t.blurb, fav, rank: r.rank }))); } catch (e) { /* 忽略 */ }
  UI.meCard(t, tot);
  if (!reportRound(r)) UI.board(null, localMe());
  return t;
}
// 離開無限發洩（回選單、回群島、被踢）：也算一局
function leaveFree() {
  if (G.mode !== 'free' || G.elapsed < 10) return;
  endRound('free', G.elapsed); finishRound('free'); G.mode = 'menu';
}
function showLimit() {
  stopAllLoops(); G.input.fire = false;
  if (document.pointerLockElement) document.exitPointerLock();
  UI.lock(lockLeft()); UI.show('limit'); S.end();
}
// 無限發洩玩到等於兩場：當場請回島上
function kickFree() {
  finishRound('free'); const until = lockNow(); reportLock(until);
  G.mode = 'end'; G.camera.children.forEach((c) => (c.visible = false)); showLimit();
}
function goIsles() { leaveFree(); backToIsles(); }

// ── 計分 ──
function onKill(a, mode, info) {
  const st = G.stats, p = a.root.position;
  G.kills++; G.combo++; G.comboT = 3.2; if (G.combo > G.bestCombo) G.bestCombo = G.combo;
  const mult = 1 + Math.min(G.combo - 1, 40) * 0.1; let pts = a.boss ? 3000 : 100; const tags = [];
  if (info.head) { pts += 60; tags.push('爆頭'); st.head++; }
  if (info.air) { pts += 120; tags.push('空中擊殺'); st.air++; }
  if (mode === 'wall') { pts += 150; tags.push('撞牆'); }
  if (mode === 'launch') { pts += 50; tags.push('全壘打'); }
  if (mode === 'splat') { pts += 80; tags.push('自由落體'); }
  if (mode === 'drown') { pts += 150; tags.push('餵鯊魚'); }
  if (info.style === 'bowling') { pts += 200; tags.push('保齡球'); }
  if (info.style === 'spread') { pts += 80; tags.push('延燒'); }
  if (mode === 'zap') { pts += 100; tags.push(info.style === 'chain' ? '連鎖電擊' : '天打雷劈'); }
  if (a.gold) { pts += 1500; tags.push('金色島民'); }
  if (mode === 'ice') { pts += 80; tags.push('冰雕碎裂'); }
  pts = Math.round(pts * mult); G.score += pts;
  const w = info.weapon || 'kick'; st.byWeapon[w] = (st.byWeapon[w] || 0) + 1; st.byVictim[a.def.name] = (st.byVictim[a.def.name] || 0) + 1;
  if (a.boss) st.boss++;
  itemOnKill(a);
  popup(V(p.x, p.y + a.H + 0.3, p.z), '+' + pts, a.boss ? 'big' : '');
  if (tags.length) popup(V(p.x, p.y + a.H + 0.95, p.z), tags.join(' · '), 'bonus', 1.2, 1.2);
  UI.feed(`<b>${a.def.name}</b>（${a.def.role}）<em>${DEATH_TEXT[mode] || '下班了'}</em>`);
  if (!(G.rageOn > 0)) G.rage = Math.min(1, G.rage + (a.boss ? 0.5 : 0.04));
  G.ult = Math.min(1, G.ult + (a.boss ? 0.5 : G.mode === 'free' ? 0.125 : 0.084));
  let an = ANN[G.combo]; if (!an && G.combo > 50 && G.combo % 10 === 0) an = '停不下來！';
  if (an) { UI.announce(an, `${G.combo} 連殺`, G.combo >= 12); S.announce(G.combo / 3); }
}
function onMulti(n, pos, label) {
  G.score += n * 150; G.stats.multi++;
  popup(V(pos.x, Math.max(pos.y, 1) + 2.5, pos.z), `${label || '一石' + n + '鳥'}！ +${n * 150}`, 'big', 1.6, 1.2);
  if (n >= 5) UI.announce(`一次 ${n} 隻！`, '', true);
}
function rage() {
  if (G.rage < 1 || G.rageOn > 0) return;
  G.rage = 0; G.rageOn = 10; A.tempo = 1.3; S.rage(); shake(0.5);
  UI.announce('暴怒模式！', '全場慢動作 · 攻速加倍', true);
}

// ── 輸入 ──
function bindInput() {
  addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Tab') e.preventDefault();
    if (e.repeat) return; keys[e.code] = true;
    if (G.mode !== 'score' && G.mode !== 'free') return;
    if (e.code === 'Tab') { if (picking) resume(); else openPicker(); return; }
    if (G.paused) { if (e.code === 'KeyP' && !picking) resume(); return; }
    if (e.code.startsWith('Digit')) selectWeapon((+e.code.slice(5) + 9) % 10);
    else if (e.code === 'KeyQ') rage();
    else if (e.code === 'KeyF') ult();
    else if (e.code === 'KeyM') { muted = !muted; setMuted(muted); }
    else if (e.code === 'KeyC') toggleWail();
    else if (e.code === 'KeyB' && !G.boss && !G.paused && bossCallT <= 0) { bossCallT = 20; const b = spawnBoss(); UI.announce('你把老闆叫出來了', `巨大化的${b.def.name}`, true); } // 彩蛋
    else if (e.code === 'KeyP') { if (document.pointerLockElement) document.exitPointerLock(); pause(); }
    else if (e.code === 'KeyH') goIsles();
    else if (e.code === 'KeyT' && G.mode === 'score' && debug) G.timeLeft = 3;
  });
  addEventListener('keyup', (e) => { keys[e.code] = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; G.input.fire = false; });
  canvas.addEventListener('mousedown', (e) => {
    if (G.mode !== 'score' && G.mode !== 'free' || G.paused) return;
    if (!document.pointerLockElement && !debug && !noLock) { lock(); return; }
    if (e.button === 0) { G.input.fire = true; G.input.firePressed = true; } else if (e.button === 2) G.input.altPressed = true;
  });
  addEventListener('mouseup', (e) => { if (e.button === 0) G.input.fire = false; });
  addEventListener('contextmenu', (e) => e.preventDefault());
  addEventListener('mousemove', (e) => {
    if ((document.pointerLockElement !== canvas && !noLock) || G.paused || (G.mode !== 'score' && G.mode !== 'free')) return;
    const P = G.player; P.yaw -= e.movementX * 0.0022; P.pitch = Math.max(-1.5, Math.min(1.5, P.pitch - e.movementY * 0.0022));
  });
  addEventListener('wheel', (e) => {
    if (G.mode !== 'score' && G.mode !== 'free' || G.paused) return;
    const c = W.next >= 0 ? W.next : W.cur; selectWeapon((c + (e.deltaY > 0 ? 1 : -1) + WEAPONS.length) % WEAPONS.length);
  }, { passive: true });
  document.addEventListener('pointerlockchange', () => { if (document.pointerLockElement) everLocked = true; else if (!debug && !picking) pause(); });
  // 有些內嵌瀏覽器不給鎖滑鼠：退回「不鎖定也能轉視角」
  document.addEventListener('pointerlockerror', () => { if (!everLocked) noLock = true; });
  addEventListener('resize', () => { G.renderer.setSize(innerWidth, innerHeight); G.camera.aspect = innerWidth / innerHeight; G.camera.updateProjectionMatrix(); resizeFX(); });
}

// ── 玩家 ──
function updatePlayer(dt) {
  const P = G.player, cam = G.camera, sy = Math.sin(P.yaw), cy = Math.cos(P.yaw);
  const car = G.override === 'car'; // 跑車：自動往前衝，S 煞車，不能橫移
  const mx = car ? 0 : (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0), mz = car ? (keys.KeyS ? 0 : 1) : (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0);
  let wx = -sy * mz + cy * mx, wz = -cy * mz - sy * mx; const l = Math.hypot(wx, wz); if (l > 0) { wx /= l; wz /= l; }
  const sprint = keys.ShiftLeft || keys.ShiftRight;
  let sp = sprint ? 13.5 : 9.5; if (G.rageOn > 0) sp *= 1.25; if (G.buff.giant > 0) sp *= 1.3; sp *= G.spMul; if (W.firing && WEAPONS[W.cur].id === 'saw') sp *= 1.12;
  const k = 1 - Math.exp(-(P.onGround ? 14 : 3.5) * dt);
  P.vel.x += (wx * sp - P.vel.x) * k; P.vel.z += (wz * sp - P.vel.z) * k;
  if (P.dash) { P.vel.x = P.dash.x * P.dash.speed; P.vel.z = P.dash.z * P.dash.speed; P.dash.t -= dt; if (P.dash.t <= 0) { P.dash = null; P.vel.x *= 0.2; P.vel.z *= 0.2; } }
  if (keys.Space && P.onGround) { P.vel.y = 10.5; P.onGround = false; }
  P.vel.y -= 28 * dt;
  P.pos.x += (P.vel.x + P.kvel.x) * dt; P.pos.z += (P.vel.z + P.kvel.z) * dt; P.pos.y += P.vel.y * dt;
  P.kvel.multiplyScalar(Math.exp(-3.5 * dt));
  if (P.pos.y <= 0) { if (!P.onGround && P.vel.y < -16) { shake(0.2); S.thud(); } P.pos.y = 0; P.vel.y = 0; P.onGround = true; }
  for (const o of G.obstacles) {
    if (P.pos.y > o.h) continue;
    const dx = P.pos.x - o.x, dz = P.pos.z - o.z, rr = o.r + 0.5, d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && d2 > 1e-4) { const d = Math.sqrt(d2); P.pos.x = o.x + (dx / d) * rr; P.pos.z = o.z + (dz / d) * rr; }
  }
  const r = Math.hypot(P.pos.x, P.pos.z), lim = R_ISLAND + 1.5; if (r > lim) { P.pos.x *= lim / r; P.pos.z *= lim / r; }
  const hs = Math.hypot(P.vel.x, P.vel.z);
  if (P.onGround && l > 0) P.bobT += dt * hs * 1.5;
  const bob = P.onGround ? Math.sin(P.bobT) * 0.045 * Math.min(1, hs / 9) : 0;
  cam.position.set(P.pos.x, P.pos.y + (1.72 + bob) * G.eyeK, P.pos.z);
  const s = G.trauma * G.trauma;
  cam.rotation.set(P.pitch + rand(-1, 1) * 0.05 * s, P.yaw + rand(-1, 1) * 0.05 * s, rand(-1, 1) * 0.04 * s);
  const fov = 78 + (sprint && l > 0 ? 5 : 0) + (G.rageOn > 0 ? 9 : 0) + (P.dash ? 14 : 0) + G.fovAdd;
  if (Math.abs(cam.fov - fov) > 0.05) { cam.fov = lerp(cam.fov, fov, Math.min(1, dt * 10)); cam.updateProjectionMatrix(); }
}

// ── 主迴圈 ──
function update(dt) {
  G.t += dt; G.elapsed += dt;
  if (G.rageOn > 0) { G.rageOn -= dt; if (G.rageOn <= 0) A.tempo = 1; }
  let slow = G.rageOn > 0 ? 0.35 : 1; if (G.slowmoT > 0) { G.slowmoT -= dt; slow = Math.min(slow, 0.3); }
  G.slow = lerp(G.slow, slow, Math.min(1, dt * 10));
  let wdt = dt * G.slow; if (G.hitstop > 0) { G.hitstop -= dt; wdt = 0; }
  G.wdt = wdt;
  bossCallT -= dt;
  updatePlayer(dt); if (G.override) W.firing = false; else updateWeapons(dt, wdt);
  updateAnimals(G.buff.stop > 0 ? 0 : wdt); updateItems(dt, wdt); updateWeather(dt, wdt);
  for (let i = G.timers.length - 1; i >= 0; i--) { const tm = G.timers[i]; tm.t -= wdt; if (tm.t <= 0) { G.timers.splice(i, 1); tm.fn(); } }
  updateFX(wdt, dt); updateWorld(wdt);
  // 補島民：隨時間越來越多
  spawnT -= wdt; const P = G.player.pos, target = Math.min(72, 40 + Math.floor(G.elapsed / 4));
  if (spawnT <= 0 && G.animals.length < target) { spawnT = G.animals.length < target * 0.6 ? 0.08 : 0.25; spawnRandom(true, Math.random() < 0.65 ? [P.x, P.z, 9, 34] : null); }
  if (G.kills >= nextBoss && !G.boss) { nextBoss = G.kills + 30; const b = spawnBoss(); UI.announce(`巨大化的${b.def.name}！`, `「${pick(b.def.lines)}」`, true); }
  if (G.combo > 0) { G.comboT -= dt; if (G.comboT <= 0) G.combo = 0; }
  UI.update();
  if (G.mode === 'score') { G.timeLeft -= dt; if (G.timeLeft <= 0) endGame(); }
  else if (G.mode === 'free' && !noLimit && (G.elapsed % 1) < dt && freeOver(G.elapsed)) kickFree();
}
function tick(dt) {
  if (G.mode === 'menu' || G.mode === 'end') {
    const k = G.mode === 'end' ? 0.3 : 1; G.t += dt; G.wdt = dt * k;
    if (G.mode === 'menu') { menuAng += dt * 0.1; G.camera.position.set(Math.cos(menuAng) * 44, 13, Math.sin(menuAng) * 44); G.camera.lookAt(0, 2.5, 0); }
    updateAnimals(dt * k); updateFX(dt * k, dt); updateWorld(dt); if (G.mode === 'end') updateWeather(dt, dt * k, true);
    for (let i = G.timers.length - 1; i >= 0; i--) { const tm = G.timers[i]; tm.t -= dt * k; if (tm.t <= 0) { G.timers.splice(i, 1); tm.fn(); } }
  } else if (!G.paused) update(dt);
  G.renderer.render(G.scene, G.camera);
  G.input.firePressed = false; G.input.altPressed = false;
}
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
  tick(dt);
}

// 除錯／自動測試用
window.GAME = {
  G, W, start, tick, endGame, toMenu, select: selectWeapon, rage,
  step(n = 60, dt = 1 / 60) { for (let i = 0; i < n; i++) tick(dt); },
  fire(on) { G.input.fire = on; if (on) G.input.firePressed = true; },
  aim(a) { const P = G.player, c = a.root.position, dx = c.x - P.pos.x, dy = c.y + a.H * 0.5 - (P.pos.y + 1.72), dz = c.z - P.pos.z; P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(dy, Math.hypot(dx, dz)); },
  give, strike, weather: setWeather, A, openPicker, pickPower, ult, resetLimit, Isles, finishRound, kickFree,
  near() { const P = G.player.pos; let b = null, bd = 1e9; for (const a of G.animals) { const d = a.root.position.distanceToSquared(P); if (d < bd) { bd = d; b = a; } } return b; },
};

boot().catch((e) => { console.error(e); document.getElementById('loadtxt').textContent = '載入失敗：' + e.message; });
