// 稱號、等級、好笑的個人描述（2026-11-17 南瓜：越好笑越好）
// 每局結束用「這一局＋累計」算一次，連同成績送回群島，排行榜就顯示最新一局算出來的。

// 武器／絕招的中文名（結算「最愛武器」、排行榜都用這份）
export const NAMES = {
  katana: '武士刀', hammer: '巨大槌子', bat: '狼牙棒', saw: '電鋸', smg: '衝鋒槍', shotgun: '霰彈槍', sling: '爆炸彈弓', missile: '追蹤飛彈', flame: '火焰噴射器', hole: '黑洞砲',
  kick: '踢飛', beast: '怪獸爪', robot: '機器人', car: '跑車', cannon: '充能臂砲', beam: '怨念氣功波', disc: '粉紅追魂斬', ice: '寒冰劍', chain: '連鎖閃電',
  wolf: '野獸', robodog: '機器狗', zombie: '喪屍', turret: '砲塔', drone: '無人機', speed: '極速', scythe: '鐮刀', sword: '飛劍', bubble: '泡泡球', barrel: '瓦斯桶',
  thunder: '雷劈', stomp: '巨人腳', nuke: '全島資遣令', meteor: '隕石雨', balloon: '氦氣彈', pumpkin: '南瓜神', ufo: '大飛碟', tornado: '龍捲風', whale: '鯨魚',
  mine: '地雷', bowling: '保齡球', firework: '煙火',
};

// 最愛武器 → 一句自我介紹（排行榜上的描述）
const BLURB = {
  katana: ['天啊，這不就是個拿刀捅人的瘋子嗎', '武士道精神：先砍再說', '刀光一閃，KPI 全滿'],
  hammer: ['一槌一個，物理上的說服力', '我不是暴力，我只是比較會敲'],
  bat: ['全壘打王，島民都是我的球', '揮棒落空？不存在的'],
  saw: ['我是電鋸控，鮮血就是我的潤滑油', '嗡嗡嗡～下一個是誰'],
  smg: ['衝鋒槍才是考驗人性啊～～', '子彈不用錢，掃就對了'],
  shotgun: ['貼臉輸出，溝通零距離', '近一點，我有話跟你說（砰）'],
  sling: ['彈弓才是王道，簡單輕巧，屠島就是這麼簡單', '童年玩具，成年用途'],
  missile: ['自動鎖定，連瞄準都懶', '科技始終來自於人性（的黑暗面）'],
  flame: ['全熟才是對食物的尊重', '我不是在殺人，是在烤肉'],
  hole: ['宇宙大法師，黑洞就是拿來這樣玩的', '全部吸走，連 Bug 一起'],
  kick: ['用腳解決問題的人', '一腳一個，綠色環保'],
  beast: ['變身之後就不認人了', '野性解放，人性下班'],
  robot: ['人類已經不需要了，交給機器', '鋼鐵之軀，零情緒輸出'],
  car: ['公司跑車借我開一下而已', '撞人不用駕照'],
  beam: ['集氣三秒，島嶼歸零', '這招我從小練到大'],
  disc: ['粉紅色的才可怕', '丟出去就不用管了，它會自己找人'],
  ufo: ['外星人說要帶幾個回去研究', '我只是打開了飛碟的開關'],
  whale: ['年終獎金從天而降，壓死一片', '鯨喜！'],
  zombie: ['一個咬一個，團隊合作', '死了還要加班'],
};
const GENERIC = ['只是來紓壓的，真的', '島民看到我都會自動請假', '把怨氣留在島上，帶著笑容回去上班'];

const pick = (a, seed) => a[Math.abs(seed | 0) % a.length];

export const level = (kills) => 1 + Math.floor(Math.sqrt(Math.max(0, kills) / 12));

/**
 * 算稱號與描述。
 * r：這一局 { mode, score, kills, combo, fav, rank }
 * tot：累計（含這一局）{ kills, plays, best, combo, top }，top＝是不是排行榜第一
 */
export function titleFor(r, tot) {
  const lv = level(tot.kills), fav = r.fav;
  let title = '新人殺手';
  if (tot.top && tot.plays >= 2) title = '究極殺人王';
  else if (r.rank === 'SSS' || tot.best >= 60000) title = 'AKA SSS 殺人魔';
  else if (r.score >= 90000 || r.kills >= 300) title = '不是人';
  else if (lv >= 12) title = '魔王';
  else if (fav === 'car') title = '賽車高手';
  else if (fav === 'beam' || fav === 'cannon') title = '超級賽亞人';
  else if (['ice', 'zombie', 'balloon', 'flame', 'firework'].includes(fav)) title = '折磨大師';
  else if (['missile', 'robodog', 'drone', 'turret', 'robot', 'ufo'].includes(fav)) title = '智能殺手';
  else if (r.combo >= 30 || tot.combo >= 40) title = '冷血殺手';
  else if (['katana', 'saw', 'hammer', 'bat', 'beast'].includes(fav) && tot.kills >= 150) title = '屠夫';
  else if (tot.plays >= 8) title = '變態';
  else if (lv <= 2 && r.kills >= 60) title = '變態新手';
  const seed = Math.floor(r.score) + r.kills * 7 + tot.plays;
  const blurb = pick(BLURB[fav] || GENERIC, seed);
  return { title, blurb, level: lv };
}
