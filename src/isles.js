// 跟「南瓜工單群島」連線：回群島、成績回傳、排行榜（2026-11-17）
// 遊戲是從群島的放鬆小島用 window.open 開的，所以 window.opener 就是群島分頁。
// 有群島 → 成績送回群島存（公司帳號、全公司排行榜）；沒有群島（直接開網址）→ 只記在這台電腦。
export const ISLES_URL = 'https://isles.pumpkinvrarai.com/app/';
// 資安（docs/資安_ISO27001.md 第 10 節）：本機開發的群島網址只在本機開遊戲時才收
const ISLES_ORIGINS = ['https://isles.pumpkinvrarai.com'].concat(/^(localhost|127.0.0.1)$/.test(location.hostname) ? ['http://localhost:5180', 'http://127.0.0.1:5180', 'http://localhost:5173'] : []);

const listeners = [];
export const Isles = { board: null, linked: false };

function opener() { try { return window.opener && !window.opener.closed ? window.opener : null; } catch (e) { return null; } }
function send(msg) {
  const o = opener(); if (!o) return false;
  for (const origin of ISLES_ORIGINS) { try { o.postMessage(Object.assign({ src: 'cozy-payback' }, msg), origin); } catch (e) { /* 對方不是這個網域就丟掉 */ } }
  return true;
}

export function initIsles(onBoard) {
  if (onBoard) listeners.push(onBoard);
  addEventListener('message', (e) => {
    if (!ISLES_ORIGINS.includes(e.origin)) return;
    const d = e.data; if (!d || d.src !== 'pumpkin-isles' || d.type !== 'board' || !Array.isArray(d.rows)) return;
    Isles.linked = true;
    Isles.board = { live: !!d.live, me: d.me && typeof d.me.name === 'string' ? { name: d.me.name.slice(0, 30) } : null, rows: d.rows.slice(0, 20).map(cleanRow) };
    listeners.forEach((fn) => fn(Isles.board));
  });
  send({ type: 'hello' });
}
const num = (v, max) => Math.max(0, Math.min(max, Math.floor(+v || 0)));
const str = (v, n) => String(v == null ? '' : v).slice(0, n);
function cleanRow(r) {
  return { name: str(r.name, 30) || '島民', best: num(r.best, 5e6), kills: num(r.kills, 1e7), plays: num(r.plays, 1e5), combo: num(r.combo, 5000),
    title: str(r.title, 30), blurb: str(r.blurb, 80), fav: str(r.fav, 20), rank: str(r.rank, 4), me: !!r.me };
}

/** 一局結束：送回群島（有開群島的話） */
export function reportRound(round) { return send({ type: 'round', round }); }
export function reportLock(until) { return send({ type: 'lock', until }); }

/** 回到群島：從群島開的就關掉這頁、把群島叫到前面；不然直接換頁過去 */
export function backToIsles() {
  const o = opener();
  if (o) { try { o.focus(); } catch (e) { /* 忽略 */ } window.close(); }
  setTimeout(() => { location.href = ISLES_URL; }, o ? 250 : 0); // 關不掉（瀏覽器擋）就直接換頁
}
