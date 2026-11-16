import * as THREE from 'three';

// 全域共享狀態：各模組都從這裡拿場景、玩家、島民清單
export const G = {
  scene: null, camera: null, renderer: null,
  t: 0, wdt: 0, slow: 1, hitstop: 0, slowmoT: 0, trauma: 0,
  mode: 'menu', paused: false,
  player: null, input: null,
  animals: [], obstacles: [], barrels: [], timers: [],
  score: 0, kills: 0, combo: 0, comboT: 0, bestCombo: 0,
  rage: 0, rageOn: 0, timeLeft: 0, elapsed: 0,
  boss: null, stats: null,
  onKill: null, onMulti: null,
};

export const R_ISLAND = 72;
export const BLOOD = [0xD7261E, 0xC21807, 0xB3120C, 0xE23B2E];
export const OIL = [0x1A1A16, 0x2A2A22, 0x111111];

export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const pick = (a) => a[(Math.random() * a.length) | 0];
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, k) => a + (b - a) * k;
export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
export const after = (t, fn) => G.timers.push({ t, fn });
