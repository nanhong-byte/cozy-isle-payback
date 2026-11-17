// 介面：HUD、擊殺訊息、連殺喊話、選單、結算
import * as THREE from 'three';
import { G } from './state.js';
import { WEAPONS, W } from './weapons.js';
import { NAMES, level } from './titles.js';
import { CHANGELOG } from './changelog.js';
import { LIMIT_LINE, fmtLeft } from './limit.js';
const esc = (t) => String(t == null ? '' : t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const $ = (id) => document.getElementById(id);
const _v = new THREE.Vector3();
let lastCombo = 0, lastW = -1, lockEls = [], lastBuff = '', lastWx = -1;
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
  $('btn-wail').onclick = () => h.wail();
  $('pgrid').innerHTML = Object.values(G.itemDefs).map((it) => `<button data-id="${it.id}"><b>${it.icon}</b>${it.name}<small>${it.tip}</small></button>`).join('');
  $('pgrid').onclick = (e) => { const b = e.target.closest('button'); if (b) h.pick(b.dataset.id); };
  $('btn-pclose').onclick = () => h.pick(null);
  ['btn-isles-m', 'btn-isles-p', 'btn-isles-e', 'btn-isles-l'].forEach((id) => ($(id).onclick = () => h.isles()));
  $('btn-board').onclick = $('btn-board-e').onclick = () => UI.overlay('board');
  $('btn-news').onclick = () => UI.overlay('news');
  $('btn-board-close').onclick = $('btn-news-close').onclick = () => UI.show(back);
  $('btn-limit-menu').onclick = () => h.menu();
  $('news-list').innerHTML = CHANGELOG.map((c) => `<div class="news-v"><h3>${c.v}　${esc(c.title)}<small>${c.date}</small></h3><ul>${c.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
  $('power-n').textContent = Object.keys(G.itemDefs).length;
  UI.hiscore();
};
UI.hiscore = () => {
  let hs = 0; try { hs = +localStorage.getItem('cozy-payback-hi') || 0; } catch (e) { /* file:// 可能擋 */ }
  $('hiscore').textContent = hs ? `本機最高分：${hs.toLocaleString()}` : '';
  return hs;
};
UI.wail = (on) => { $('btn-wail').innerHTML = `😱 慘叫版：${on ? '開' : '關'}<small>${on ? '島民會叫得很慘' : '只有原本的小叫聲'}</small>`; $('btn-wail').classList.toggle('off', !on); };
UI.loading = (p) => { $('loadbar').firstElementChild.style.width = Math.round(p * 100) + '%'; };
let back = 'menu', cur = 'loading';
UI.overlay = (name) => { back = cur === 'board' || cur === 'news' ? back : cur; UI.show(name); };
UI.show = (name) => {
  cur = name;
  ['loading', 'menu', 'pause', 'end', 'picker', 'board', 'news', 'limit'].forEach((s) => $(s).classList.toggle('hidden', s !== name));
  $('hud').classList.toggle('hidden', !(name === 'hud' || name === 'pause' || name === 'picker'));
};
UI.reset = () => { $('feed').innerHTML = ''; $('announce').innerHTML = ''; $('locks').innerHTML = ''; lockEls = []; lastCombo = 0; lastW = -1; lastBuff = ''; lastWx = -1; $('buffs').innerHTML = ''; $('wx').classList.add('hidden'); $('combo').classList.add('hidden'); $('boss').classList.add('hidden'); };

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
  // 絕招槽
  const u = $('ult'); u.querySelector('i').style.width = G.ult * 100 + '%'; u.classList.toggle('ready', G.ult >= 1);
  u.querySelector('em').textContent = G.ult >= 1 ? '按 F 抽一招' : G.mode === 'free' ? 'Tab 可任選' : '殺敵累積';
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
  // 隱藏道具效果
  const bk = Object.keys(G.buff), bs = bk.join(','), bx = $('buffs');
  if (bs !== lastBuff) { lastBuff = bs; bx.innerHTML = bk.map((id) => `<div><b>${G.itemDefs[id].icon} ${G.itemDefs[id].name}</b><i></i></div>`).join(''); }
  for (let i = 0; i < bk.length && i < bx.children.length; i++) bx.children[i].lastElementChild.style.width = Math.max(0, Math.min(1, G.buff[bk[i]] / G.itemDefs[bk[i]].dur)) * 100 + '%';
  // 天氣
  const wx = G.wx.rain < 0.05 ? 0 : G.wx.storm > 0 ? 2 : 1;
  if (wx !== lastWx) { lastWx = wx; const e = $('wx'); e.classList.toggle('hidden', !wx); e.textContent = wx === 2 ? '⛈️ 雷雨' : '🌧️ 下雨'; }
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
  $('e-fav').textContent = NAMES[fav] || '-';
  let vic = '', vm = 0; for (const k in st.byVictim) if (st.byVictim[k] > vm) { vm = st.byVictim[k]; vic = k; }
  const hi = st.newHigh ? '　🏆 刷新本機紀錄！' : '';
  $('end-detail').innerHTML = `爆頭 ${st.head}　·　空中擊殺 ${st.air}　·　一石多鳥 ${st.multi} 次　·　巨大島民 ${st.boss}　·　隱藏道具 ${st.items || 0}<br>${vic ? `最常被清算的是 <b>${vic}</b>（${vm} 次）` : ''}${hi}`;
  UI.show('end');
};
UI.favOf = (st) => { let fav = '', fm = 0; for (const k in st.byWeapon) if (st.byWeapon[k] > fm) { fm = st.byWeapon[k]; fav = k; } return fav; };
UI.rankOf = (score) => RANKS.find((x) => score >= x[0])[1];
// 結算畫面上的「我的稱號」
UI.meCard = (t, tot) => {
  $('me-card').innerHTML = `<div class="lv"><small>LV</small>${t.level}</div><div><b>「${esc(t.title)}」</b><p>${esc(t.blurb)}</p><p>累計擊殺 ${tot.kills.toLocaleString()}　·　玩了 ${tot.plays} 場　·　考績最高 ${tot.best.toLocaleString()}</p></div>`;
};
// 排行榜：有從群島開＝全公司；沒有＝只有這台電腦
UI.board = (board, local) => {
  const rows = board ? board.rows : local ? [local] : [];
  $('board-sub').textContent = board ? (board.live ? '全公司（公司帳號登入）' : '示範島的排行榜（假資料）') : '只有這台電腦的紀錄｜從工單群島的放鬆小島打開，才會上全公司排行榜';
  const medal = (i) => ['🥇', '🥈', '🥉'][i] || i + 1;
  $('board-rows').innerHTML = rows.length ? rows.map((r, i) => `<tr class="${r.me ? 'me' : ''}"><td>${medal(i)}</td><td><span class="n">${esc(r.name)}</span> <small>LV ${level(r.kills)}</small><span class="t">「${esc(r.title || '新人殺手')}」</span><span class="d">${esc(r.blurb || '')}</span></td><td><b>${r.best.toLocaleString()}</b><span class="d">擊殺 ${r.kills.toLocaleString()}　·　${r.plays} 場</span></td></tr>`).join('')
    : '<tr><td colspan="3" style="text-align:center;border-radius:10px">還沒有人上榜。島民們暫時很安全。</td></tr>';
  $('board-me').innerHTML = '';
};
// 防沉迷：主選單的開始按鈕鎖住＋倒數
UI.lock = (ms) => {
  const on = ms > 0; $('btn-score').disabled = $('btn-free').disabled = on;
  const m = $('lockmsg'); m.classList.toggle('hidden', !on); if (on) m.textContent = `${LIMIT_LINE}　還要 ${fmtLeft(ms)} 才能再開`;
  $('limit-left').textContent = fmtLeft(ms);
};
