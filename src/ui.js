// 介面：HUD、擊殺訊息、連殺喊話、選單、結算
import * as THREE from 'three';
import { G } from './state.js';
import { WEAPONS, W } from './weapons.js';

const $ = (id) => document.getElementById(id);
const _v = new THREE.Vector3();
let lastCombo = 0, lastW = -1, lockEls = [];
export const UI = {};

UI.init = (h) => {
  $('weapons').innerHTML = WEAPONS.map((w, i) => `<div class="w" data-i="${i}"><span>${w.key}</span>${w.icon}</div>`).join('');
  $('wgrid').innerHTML = WEAPONS.map((w) => `<div><b>${w.icon}</b>${w.key}　${w.name}<small>${w.tip}</small></div>`).join('');
  $('btn-score').onclick = () => h.start('score');
  $('btn-free').onclick = () => h.start('free');
  $('btn-resume').onclick = () => h.resume();
  $('btn-quit').onclick = () => h.menu();
  $('btn-again').onclick = () => h.start(G.lastMode || 'score');
  $('btn-menu').onclick = () => h.menu();
  UI.hiscore();
};
UI.hiscore = () => {
  let hs = 0; try { hs = +localStorage.getItem('cozy-payback-hi') || 0; } catch (e) { /* file:// 可能擋 */ }
  $('hiscore').textContent = hs ? `本機最高分：${hs.toLocaleString()}` : '';
  return hs;
};
UI.loading = (p) => { $('loadbar').firstElementChild.style.width = Math.round(p * 100) + '%'; };
UI.show = (name) => {
  ['loading', 'menu', 'pause', 'end'].forEach((s) => $(s).classList.toggle('hidden', s !== name));
  $('hud').classList.toggle('hidden', !(name === 'hud' || name === 'pause'));
};
UI.reset = () => { $('feed').innerHTML = ''; $('announce').innerHTML = ''; $('locks').innerHTML = ''; lockEls = []; lastCombo = 0; lastW = -1; $('combo').classList.add('hidden'); $('boss').classList.add('hidden'); };

UI.feed = (html) => {
  const f = $('feed'), d = document.createElement('div'); d.innerHTML = html; f.appendChild(d);
  while (f.childElementCount > 6) f.firstChild.remove();
  setTimeout(() => d.classList.add('out'), 3600); setTimeout(() => d.remove(), 4000);
};
UI.announce = (text, sub = '', red = false) => {
  const a = $('announce'); a.innerHTML = `<div class="${red ? 'red' : ''}">${text}${sub ? `<small>${sub}</small>` : ''}</div>`;
};

UI.update = () => {
  $('score').textContent = Math.floor(G.score).toLocaleString();
  $('kills').textContent = G.kills; $('best').textContent = G.bestCombo;
  const tm = $('timer');
  if (G.mode === 'score') {
    const t = Math.max(0, Math.ceil(G.timeLeft)); tm.textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
    tm.classList.toggle('low', t <= 15);
  } else { const t = Math.floor(G.elapsed); tm.textContent = `∞ ${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; tm.classList.remove('low'); }
  // 連殺
  const c = $('combo');
  if (G.combo >= 2) {
    c.classList.remove('hidden');
    if (G.combo !== lastCombo) { $('combo-n').innerHTML = `${G.combo}<small>連殺</small>`; $('combo-x').textContent = `分數 ×${(1 + Math.min(G.combo - 1, 40) * 0.1).toFixed(1)}`; c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump'); }
    $('combo-bar').firstElementChild.style.width = Math.max(0, (G.comboT / 3.2) * 100) + '%';
  } else c.classList.add('hidden');
  lastCombo = G.combo;
  // 暴怒
  const r = $('rage'), on = G.rageOn > 0;
  r.querySelector('i').style.width = (on ? (G.rageOn / 10) * 100 : G.rage * 100) + '%';
  r.classList.toggle('ready', !on && G.rage >= 1);
  r.querySelector('em').textContent = on ? '暴怒中！' : G.rage >= 1 ? '按 Q 發動' : '殺越多集越快';
  $('vignette').classList.toggle('rage', on);
  // 武器
  if (W.cur !== lastW) {
    lastW = W.cur; const w = WEAPONS[W.cur];
    document.querySelectorAll('#weapons .w').forEach((e, i) => e.classList.toggle('on', i === W.cur));
    $('wname').innerHTML = `<b>${w.icon} ${w.name}</b><small>${w.tip}</small>`;
  }
  const am = $('ammo'), id = WEAPONS[W.cur].id;
  if (id === 'missile') { am.classList.remove('hidden'); am.innerHTML = `飛彈 <b>${W.missiles}</b> / 8<div class="bar"><i style="width:${(W.missiles / 8) * 100}%"></i></div>`; }
  else if (id === 'hole') { am.classList.remove('hidden'); const k = Math.max(0, 1 - Math.max(0, W.holeCd) / 7); am.innerHTML = `${k >= 1 ? '<b>黑洞就緒</b>' : '黑洞充能中'}<div class="bar"><i style="width:${k * 100}%"></i></div>`; }
  else if (id === 'sling') { am.classList.remove('hidden'); am.innerHTML = `蓄力<div class="bar"><i style="width:${W.charge * 100}%"></i></div>`; }
  else am.classList.add('hidden');
  // 準星命中
  if (G.hitMark > 0) G.hitMark -= 0.016;
  $('crosshair').classList.toggle('hit', G.hitMark > 0);
  // 巨大島民血條
  const b = $('boss');
  if (G.boss && !G.boss.dead) { b.classList.remove('hidden'); $('boss-name').textContent = `⚠ 巨大化的${G.boss.def.name}（${G.boss.def.role}）`; b.querySelector('i').style.width = Math.max(0, (G.boss.hp / G.boss.maxHp) * 100) + '%'; }
  else b.classList.add('hidden');
  // 飛彈鎖定框
  const box = $('locks'), n = W.locks.length;
  while (lockEls.length < n) { const e = document.createElement('i'); box.appendChild(e); lockEls.push(e); }
  for (let i = 0; i < lockEls.length; i++) {
    const e = lockEls[i];
    if (i >= n) { e.style.display = 'none'; continue; }
    const a = W.locks[i]; _v.set(a.root.position.x, a.root.position.y + a.H * 0.5, a.root.position.z).project(G.camera);
    if (_v.z > 1) { e.style.display = 'none'; continue; }
    e.style.display = ''; e.style.left = ((_v.x + 1) / 2) * innerWidth + 'px'; e.style.top = ((1 - _v.y) / 2) * innerHeight + 'px';
  }
};

const RANKS = [[60000, 'SSS', '人資看了都怕'], [42000, 'SS', '暖島屠夫'], [28000, 'S', '清算大師'], [18000, 'A', '火氣不小'], [10000, 'B', '有在發洩'], [4000, 'C', '還在暖身'], [0, 'D', '你是不是太善良了']];
UI.end = (st) => {
  const r = RANKS.find((x) => G.score >= x[0]);
  $('rank').textContent = r[1]; $('rank-t').textContent = r[2];
  $('e-score').textContent = Math.floor(G.score).toLocaleString(); $('e-kills').textContent = G.kills; $('e-combo').textContent = G.bestCombo;
  let fav = '-', fm = 0; for (const k in st.byWeapon) if (st.byWeapon[k] > fm) { fm = st.byWeapon[k]; fav = k; }
  const names = { barrel: '瓦斯桶', kick: '踢飛' }; WEAPONS.forEach((w) => (names[w.id] = w.name));
  $('e-fav').textContent = names[fav] || '-';
  let vic = '', vm = 0; for (const k in st.byVictim) if (st.byVictim[k] > vm) { vm = st.byVictim[k]; vic = k; }
  const hi = st.newHigh ? '　🏆 刷新本機紀錄！' : '';
  $('end-detail').innerHTML = `爆頭 ${st.head}　·　空中擊殺 ${st.air}　·　一石多鳥 ${st.multi} 次　·　巨大島民 ${st.boss}<br>${vic ? `最常被清算的是 <b>${vic}</b>（${vm} 次）` : ''}${hi}`;
  UI.show('end');
};
