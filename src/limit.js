// 防沉迷（2026-11-17 南瓜）：連玩兩場還要開第三場 → 「Yo Bro, 發洩完了吧~ 你該回島上囉」，然後 30 分鐘不能開新局。
// 考績結算一局算一場；無限發洩每 3 分鐘算一場。兩局之間隔超過 15 分鐘就重新算。
// 記在這台電腦（localStorage）；從群島開的話也會通知群島，讓群島的「開始玩」按鈕一起倒數。
export const LIMIT = { rounds: 2, lockMs: 30 * 60e3, gapMs: 15 * 60e3, freeSec: 180 };
export const LIMIT_LINE = 'Yo Bro, 發洩完了吧~ 你該回島上囉';
const KEY = 'cozy-payback-limit';

function load() { try { return Object.assign({ streak: 0, lastEnd: 0, lock: 0 }, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return { streak: 0, lastEnd: 0, lock: 0 }; } }
function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* file:// 或無痕可能擋，擋了就不限制 */ } }

/** 還要鎖多久（毫秒），0＝可以玩 */
export function lockLeft(now = Date.now()) { const s = load(); return Math.max(0, s.lock - now); }

/** 要開新局：回傳 { ok:true } 或 { ok:false, until, fresh }（fresh＝這次才剛觸發，要講那句話） */
export function tryStart(now = Date.now()) {
  const s = load();
  if (s.lock > now) return { ok: false, until: s.lock, fresh: false };
  if (now - s.lastEnd > LIMIT.gapMs) s.streak = 0;
  if (s.streak >= LIMIT.rounds) { s.lock = now + LIMIT.lockMs; s.streak = 0; save(s); return { ok: false, until: s.lock, fresh: true }; }
  save(s); return { ok: true };
}
/** 一局結束（或離開無限發洩）：記一筆 */
export function endRound(mode, secs, now = Date.now()) {
  const s = load();
  if (now - s.lastEnd > LIMIT.gapMs + secs * 1000) s.streak = 0;
  s.streak += mode === 'free' ? Math.max(1, Math.floor(secs / LIMIT.freeSec)) : 1; s.lastEnd = now; save(s);
}
/** 無限發洩玩到等於兩場了沒（玩的當下檢查） */
export function freeOver(secs, now = Date.now()) {
  const s = load(), base = now - s.lastEnd > LIMIT.gapMs + secs * 1000 ? 0 : s.streak;
  return base + secs / LIMIT.freeSec >= LIMIT.rounds;
}
/** 無限發洩當場踢出：直接上鎖 */
export function lockNow(now = Date.now()) { const s = load(); s.lock = now + LIMIT.lockMs; s.streak = 0; s.lastEnd = now; save(s); return s.lock; }
export function resetLimit() { save({ streak: 0, lastEnd: 0, lock: 0 }); }
export const fmtLeft = (ms) => { const t = Math.ceil(ms / 1000); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
