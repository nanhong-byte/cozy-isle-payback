// 暖島場景：色票照「南瓜暖島美學」，全部程式生成低面數
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { G, R_ISLAND, rand, pick } from './state.js';

const PAL = {
  grass: '#8FBF5A', sand: 0xE8D9B5, water: 0x7FC1CF, skyHi: 0x8FC7D4, skyLo: 0xC7DDD0,
  leaf: [0x2D4321, 0x3F6A2C, 0x62B149, 0x81BD49], trunk: 0x6B4E2A,
  paper: 0xF7F1DC, clay: 0xD4A373, brick: 0xC8483A, wood: 0xB99A6B, bark: 0x4A3B18, ink: 0x2E2A1F,
};
const E = new THREE.Euler(), Q = new THREE.Quaternion();
const M = (x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) =>
  new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), Q.setFromEuler(E.set(rx, ry, rz)).clone(), new THREE.Vector3(sx, sy, sz));
function part(geo, color, m) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  g.deleteAttribute('uv');
  if (m) g.applyMatrix4(m);
  const c = new THREE.Color(color), n = g.attributes.position.count, arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}
const box = (w, h, d, c, m) => part(new THREE.BoxGeometry(w, h, d), c, m);
let vmat;

function groundTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 1024; const x = c.getContext('2d');
  x.fillStyle = PAL.grass; x.fillRect(0, 0, 1024, 1024);
  const blot = ['#84B552', '#9AC765', '#7FAE4C', '#A3CC6E', '#8ABA57'];
  for (let i = 0; i < 520; i++) {
    x.globalAlpha = rand(0.12, 0.3); x.fillStyle = pick(blot);
    x.beginPath(); x.ellipse(rand(1024), rand(1024), rand(14, 70), rand(10, 46), rand(3.14), 0, 6.28); x.fill();
  }
  // 小土路：從中心放射到四周
  x.globalAlpha = 0.85; x.strokeStyle = '#DCC9A0'; x.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * 6.28 + 0.3; x.lineWidth = rand(16, 24);
    x.beginPath(); x.moveTo(512, 512);
    x.quadraticCurveTo(512 + Math.cos(a + 0.5) * 220, 512 + Math.sin(a + 0.5) * 220, 512 + Math.cos(a) * 430, 512 + Math.sin(a) * 430); x.stroke();
  }
  x.fillStyle = '#DCC9A0'; x.beginPath(); x.arc(512, 512, 64, 0, 6.28); x.fill();
  x.globalAlpha = 1;
  for (let i = 0; i < 2600; i++) { x.fillStyle = pick(['#6FA043', '#A9D275', '#79A84A']); x.fillRect(rand(1024), rand(1024), 2, rand(3, 6)); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function free(x, z, r) {
  for (const o of G.obstacles) { const dx = o.x - x, dz = o.z - z; if (dx * dx + dz * dz < (o.r + r) * (o.r + r)) return false; }
  return true;
}
function instanced(geo, list, tint) {
  const m = new THREE.InstancedMesh(geo, vmat, list.length), d = new THREE.Object3D(), c = new THREE.Color();
  list.forEach((p, i) => {
    d.position.set(p.x, p.y || 0, p.z); d.rotation.set(0, p.rot || 0, 0); d.scale.setScalar(p.s || 1); d.updateMatrix();
    m.setMatrixAt(i, d.matrix);
    if (tint) m.setColorAt(i, c.set(p.tint || 0xffffff));
  });
  G.scene.add(m); return m;
}

export function buildWorld() {
  const sc = G.scene;
  vmat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });

  // 天空：唯一合法的漸層
  const sg = new THREE.SphereGeometry(420, 24, 14), hi = new THREE.Color(PAL.skyHi), lo = new THREE.Color(PAL.skyLo), cc = new THREE.Color();
  const sp = sg.attributes.position, sa = new Float32Array(sp.count * 3);
  for (let i = 0; i < sp.count; i++) { const k = Math.max(0, Math.min(1, sp.getY(i) / 260)); cc.copy(lo).lerp(hi, Math.pow(k, 0.7)); sa.set([cc.r, cc.g, cc.b], i * 3); }
  sg.setAttribute('color', new THREE.BufferAttribute(sa, 3));
  const skyMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false });
  sc.add(new THREE.Mesh(sg, skyMat));
  sc.fog = new THREE.Fog(PAL.skyLo, 110, 330);

  const hemi = new THREE.HemisphereLight(0xFFF8E4, 0x7FA65A, 1.5); sc.add(hemi);
  const sun = new THREE.DirectionalLight(0xFFF1D0, 1.9); sun.position.set(40, 80, 30); sc.add(sun);
  G.env = { sky: skyMat, hemi, sun, sea: null };

  // 海、沙灘、草地
  const sea = new THREE.Mesh(new THREE.CircleGeometry(700, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: PAL.water })); sea.position.y = -0.7; sc.add(sea); G.env.sea = sea.material;
  const foam = new THREE.Mesh(new THREE.RingGeometry(R_ISLAND + 9.5, R_ISLAND + 11.5, 64).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xFCF9F0, transparent: true, opacity: 0.7 })); foam.position.y = -0.66; sc.add(foam); G.foam = foam;
  const sand = new THREE.Mesh(new THREE.CylinderGeometry(R_ISLAND + 9, R_ISLAND + 12, 0.8, 56), new THREE.MeshLambertMaterial({ color: PAL.sand })); sand.position.y = -0.46; sc.add(sand);
  const grass = new THREE.Mesh(new THREE.CircleGeometry(R_ISLAND + 3, 64).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ map: groundTexture() })); sc.add(grass);

  // 中央南瓜雕像
  const pk = [];
  for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.28; pk.push(part(new THREE.SphereGeometry(1, 10, 8), i % 2 ? 0xE08A2E : 0xD97A22, M(Math.cos(a) * 1.1, 1.75, Math.sin(a) * 1.1, 0, 0, 0, 1.25, 1.75, 1.25))); }
  pk.push(part(new THREE.CylinderGeometry(0.22, 0.34, 1.0, 6), 0x3F6A2C, M(0, 3.9, 0, 0, 0, 0.2)));
  pk.push(part(new THREE.CylinderGeometry(3.1, 3.4, 0.5, 10), 0xDDDAD1, M(0, 0.25, 0)));
  sc.add(new THREE.Mesh(mergeGeometries(pk), vmat));
  G.obstacles.push({ x: 0, z: 0, r: 3.2, h: 4.2 });

  // 房子
  const roofs = [PAL.brick, PAL.clay, 0x62B149, PAL.brick, PAL.clay, 0x898B63, PAL.brick];
  roofs.forEach((rc, i) => {
    const a = (i / roofs.length) * 6.28 + 0.45, d = rand(38, 54), x = Math.cos(a) * d, z = Math.sin(a) * d, rot = -a + Math.PI / 2;
    const g = mergeGeometries([
      box(5.4, 3.2, 4.6, PAL.paper, M(0, 1.6, 0)),
      part(new THREE.ConeGeometry(4.5, 2.6, 4), rc, M(0, 4.5, 0, 0, Math.PI / 4, 0, 1.05, 1, 0.92)),
      box(1.1, 1.9, 0.14, PAL.bark, M(0, 0.95, 2.34)),
      box(1.0, 0.9, 0.12, PAL.skyHi, M(-1.7, 1.9, 2.34)), box(1.0, 0.9, 0.12, PAL.skyHi, M(1.7, 1.9, 2.34)),
      box(0.7, 1.4, 0.7, PAL.clay, M(1.5, 5.0, -0.8)),
      box(5.7, 0.3, 4.9, PAL.wood, M(0, 0.15, 0)),
    ]);
    const m = new THREE.Mesh(g, vmat); m.position.set(x, 0, z); m.rotation.y = rot; sc.add(m);
    G.obstacles.push({ x, z, r: 3.5, h: 5.5 });
  });

  // 辦公桌（島民的工位）
  const deskGeo = mergeGeometries([
    box(1.9, 0.12, 1.0, PAL.wood, M(0, 0.82, 0)),
    box(0.1, 0.8, 0.1, PAL.bark, M(-0.85, 0.4, -0.4)), box(0.1, 0.8, 0.1, PAL.bark, M(0.85, 0.4, -0.4)),
    box(0.1, 0.8, 0.1, PAL.bark, M(-0.85, 0.4, 0.4)), box(0.1, 0.8, 0.1, PAL.bark, M(0.85, 0.4, 0.4)),
    box(0.8, 0.5, 0.06, PAL.ink, M(0, 1.28, -0.25)), box(0.7, 0.4, 0.02, 0x9AD0B0, M(0, 1.28, -0.21)),
    box(0.1, 0.2, 0.1, PAL.ink, M(0, 0.98, -0.25)),
    part(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 8), PAL.paper, M(0.6, 0.95, 0.2)),
    box(0.3, 0.1, 0.22, 0x62B149, M(-0.55, 0.93, 0.15)),
    box(0.7, 0.12, 0.7, 0x2D4321, M(0, 0.5, 0.95)), box(0.7, 0.7, 0.1, 0x2D4321, M(0, 0.9, 1.3)),
    part(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 6), PAL.ink, M(0, 0.25, 0.95)),
  ]);
  const desks = [];
  for (let i = 0; i < 400 && desks.length < 18; i++) {
    const a = rand(6.28), d = rand(9, 60), x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (!free(x, z, 3)) continue;
    desks.push({ x, z, rot: rand(6.28) }); G.obstacles.push({ x, z, r: 1.0, h: 1.5 });
  }
  instanced(deskGeo, desks);

  // 樹
  const trunkGeo = part(new THREE.CylinderGeometry(0.22, 0.34, 2.2, 6), PAL.trunk, M(0, 1.1, 0));
  const treeGeo = mergeGeometries([
    part(new THREE.IcosahedronGeometry(1.5, 0), 0xffffff, M(0, 3.0, 0)),
    part(new THREE.IcosahedronGeometry(1.15, 0), 0xE6F2D8, M(0.5, 4.1, 0.2, 0.4, 0.3, 0)),
    part(new THREE.IcosahedronGeometry(0.95, 0), 0xD2E8C0, M(-0.6, 3.7, -0.4, 0.2, 1.0, 0.5)),
  ]);
  // 樹幹不該被葉色染到：把樹幹頂點色預先除掉會太麻煩，改成葉色用實例色、樹幹用深色（乘起來仍是深棕）
  const trees = [];
  for (let i = 0; i < 900 && trees.length < 64; i++) {
    const a = rand(6.28), d = 10 + Math.sqrt(Math.random()) * 60, x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (!free(x, z, 3.2)) continue;
    const s = rand(0.85, 1.5);
    trees.push({ x, z, rot: rand(6.28), s, tint: pick(PAL.leaf) }); G.obstacles.push({ x, z, r: 0.5 * s, h: 5 * s, tree: true });
  }
  instanced(treeGeo, trees, true);
  instanced(trunkGeo, trees);
  G.treeShadows = trees;

  // 樹的圓影
  const sh = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 16).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x1D3314, transparent: true, opacity: 0.22, depthWrite: false }), trees.length);
  const d = new THREE.Object3D();
  trees.forEach((t, i) => { d.position.set(t.x + 0.5, 0.02, t.z + 0.3); d.scale.setScalar(1.9 * t.s); d.updateMatrix(); sh.setMatrixAt(i, d.matrix); });
  sc.add(sh);

  // 花、石頭（純裝飾）
  const fl = [], rk = [];
  for (let i = 0; i < 420; i++) { const a = rand(6.28), dd = Math.sqrt(Math.random()) * (R_ISLAND + 1); fl.push({ x: Math.cos(a) * dd, z: Math.sin(a) * dd, y: 0.12, s: rand(0.1, 0.2), tint: pick([0xF2C94C, 0xFCF9F0, 0xEFC0AE, 0xD4A373]) }); }
  for (let i = 0; i < 46; i++) { const a = rand(6.28), dd = rand(8, R_ISLAND + 8); rk.push({ x: Math.cos(a) * dd, z: Math.sin(a) * dd, y: 0.1, s: rand(0.25, 0.6), rot: rand(6.28), tint: pick([0xDDDAD1, 0xB9B5A6, 0x9A9684]) }); }
  instanced(part(new THREE.IcosahedronGeometry(1, 0), 0xffffff), fl, true);
  instanced(part(new THREE.IcosahedronGeometry(1, 0), 0xffffff, M(0, 0, 0, 0, 0, 0, 1, 0.6, 0.8)), rk, true);

  // 雲
  G.clouds = [];
  for (let i = 0; i < 9; i++) {
    const parts = [];
    for (let k = 0; k < 5; k++) parts.push(new THREE.SphereGeometry(rand(5, 10), 8, 6).translate(k * 7 - 14, rand(-1.5, 1.5), rand(-3, 3)));
    const m = new THREE.Mesh(mergeGeometries(parts), new THREE.MeshBasicMaterial({ color: 0xFCF9F0, fog: false }));
    m.position.set(rand(-300, 300), rand(70, 120), rand(-300, 300)); m.scale.y = 0.5; sc.add(m); G.clouds.push(m);
  }

  // 瓦斯桶
  const bg = mergeGeometries([
    part(new THREE.CylinderGeometry(0.55, 0.55, 1.3, 12), PAL.brick, M(0, 0.65, 0)),
    part(new THREE.CylinderGeometry(0.58, 0.58, 0.16, 12), 0xF2C94C, M(0, 0.75, 0)),
    part(new THREE.CylinderGeometry(0.2, 0.3, 0.2, 8), PAL.ink, M(0, 1.4, 0)),
  ]);
  for (let i = 0; i < 600 && G.barrels.length < 14; i++) {
    const a = rand(6.28), dd = rand(12, 62), x = Math.cos(a) * dd, z = Math.sin(a) * dd;
    if (!free(x, z, 4) || Math.hypot(x, z - 24) < 9) continue;
    const m = new THREE.Mesh(bg, vmat); m.position.set(x, 0, z); sc.add(m);
    G.barrels.push({ m, x, z, alive: true, t: 0 });
  }
}

export function updateWorld(dt) {
  for (const c of G.clouds) { c.position.x += dt * 2.2; if (c.position.x > 330) c.position.x = -330; }
  const s = 1 + Math.sin(G.t * 0.8) * 0.012; G.foam.scale.set(s, 1, s);
  for (const b of G.barrels) { if (!b.alive) { b.t -= dt; if (b.t <= 0) { b.alive = true; b.m.visible = true; } } }
}
