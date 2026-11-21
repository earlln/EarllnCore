'use strict';

/* ───────────────── 운동 정의 (병원 유인물 기준) ───────────────── */
const FIG = {
  mckenzie: `<svg viewBox="0 0 200 100" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line class="floor" x1="8" y1="88" x2="192" y2="88" stroke-width="3"/>
    <path class="body" d="M22 84 L98 82" stroke-width="9"/>
    <path class="hi" d="M98 82 Q122 76 138 50" stroke-width="11"/>
    <path class="body" d="M138 54 L134 84 L168 84" stroke-width="7"/>
    <circle class="body" cx="148" cy="36" r="10" stroke-width="6"/>
  </svg>`,
  plank: `<svg viewBox="0 0 200 100" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line class="floor" x1="8" y1="88" x2="192" y2="88" stroke-width="3"/>
    <path class="hi" d="M26 82 L146 52" stroke-width="11"/>
    <path class="body" d="M146 54 L146 84 L174 84" stroke-width="7"/>
    <circle class="body" cx="162" cy="44" r="10" stroke-width="6"/>
  </svg>`,
  birddog: `<svg viewBox="0 0 200 100" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line class="floor" x1="8" y1="88" x2="192" y2="88" stroke-width="3"/>
    <path class="body" d="M74 52 L138 52" stroke-width="11"/>
    <path class="body" d="M74 54 L74 84 L50 84" stroke-width="7"/>
    <path class="body" d="M136 54 L136 84" stroke-width="7"/>
    <path class="hi" d="M140 54 L192 58" stroke-width="7"/>
    <path class="hi" d="M72 50 L18 46" stroke-width="7"/>
    <circle class="body" cx="152" cy="36" r="10" stroke-width="6"/>
  </svg>`,
};

const EXERCISES = [
  {
    id: 'mckenzie',
    name: '맥켄지 신전 운동',
    en: 'McKenzie Exercise',
    holdWord: '유지',
    restWord: '내리고 쉬기',
    prepCue: '엎드린 자세에서 팔꿈치를 어깨 바로 밑에 두세요.',
    holdSay: '천천히 상체를 올리세요',
    restSay: '천천히 내리세요',
    holdCue: '팔꿈치로 지탱하며 상체를 들어 올린 채 유지합니다. 골반은 바닥에 붙이고 허리 힘은 빼세요.',
    restCue: '천천히 내려와 잠시 쉽니다.',
    steps: [
      '엎드린 자세에서 팔꿈치를 어깨 바로 밑에 위치시킵니다.',
      '팔꿈치를 지탱하면서 상체를 들어 올립니다.',
      '이 자세를 몇 초간 유지한 후 다시 내려옵니다.',
    ],
    memo: '10회 반복 → 1세트 · 5~10초 유지 · 천천히(slow)',
    tips: [
      '골반과 다리는 바닥에 붙인 채로 둡니다.',
      '허리와 엉덩이에 힘을 빼고, 팔로만 상체를 받칩니다.',
      '숨을 참지 말고 편하게 내쉬세요.',
      '올라갈 때도, 내려올 때도 천천히 움직입니다.',
    ],
  },
  {
    id: 'plank',
    name: '플랭크',
    en: 'Plank Exercise',
    holdWord: '버티기',
    restWord: '휴식',
    prepCue: '팔꿈치를 어깨 바로 아래 90도로 대고, 발은 엉덩이 너비로 벌리세요.',
    holdSay: '몸을 일직선으로, 버티세요',
    restSay: '내려놓고 쉬세요',
    holdCue: '머리부터 발뒤꿈치까지 일직선. 엉덩이가 처지거나 들리지 않게 배에 힘을 주세요.',
    restCue: '무릎을 내려놓고 호흡을 고르세요.',
    steps: [
      '팔꿈치와 팔을 어깨 바로 아래에 위치시키고, 팔꿈치를 90도 굽혀 바닥에 대고 몸을 지지합니다.',
      '발끝은 바닥에 대고, 발은 엉덩이 너비로 벌립니다.',
      '처음에는 10초에서 30초 정도 유지하고 점점 시간을 늘릴 수 있습니다.',
    ],
    memo: '1분(1min) plank · 4회 — 앱 기본값은 20초부터 시작',
    tips: [
      '머리·등·엉덩이·발목이 한 줄이 되게 합니다.',
      '엉덩이가 아래로 처지면 허리에 부담이 갑니다.',
      '배꼽을 등 쪽으로 당기는 느낌으로 복부에 힘을 줍니다.',
      '숨을 참지 말고 짧게 계속 쉬세요.',
    ],
  },
  {
    id: 'birddog',
    name: '버드 독',
    en: 'Bird-dog Exercise',
    holdWord: '뻗고 멈추기',
    restWord: '제자리',
    prepCue: '네발 기기 자세로 엎드려 복부에 힘을 주세요.',
    holdSay: '',
    restSay: '제자리로',
    holdCue: '팔과 다리를 몸통 높이까지 뻗고 멈춥니다. 몸이 흔들리지 않게 중심을 잡으세요.',
    restCue: '팔과 다리를 제자리로 내립니다.',
    alternate: true,
    steps: [
      '엎드려 자세를 취한 후 복부에 힘을 줍니다.',
      '왼팔을 앞으로 들고 오른쪽 다리를 뻗어 올려 멈춥니다.',
      '반대쪽 팔과 다리를 들어 반복 운동을 하면서 몸이 너무 흔들리지 않게 중심을 잡아줍니다.',
    ],
    memo: '',
    tips: [
      '팔과 다리는 몸통 높이까지만 들어 허리가 꺾이지 않게 합니다.',
      '골반이 한쪽으로 기울지 않게 수평을 유지합니다.',
      '등 위에 물컵이 있다고 생각하고 흔들림 없이 움직입니다.',
    ],
  },
];
const EX = Object.fromEntries(EXERCISES.map(e => [e.id, e]));

const FEATURES = [
  { key: 'timer', label: '순서 가이드 + 타이머', desc: '끄면 자동으로 넘어가지 않고, 한 번 할 때마다 직접 눌러 넘깁니다.' },
  { key: 'sound', label: '음성/소리 안내', desc: '끄면 음성과 효과음 없이 화면으로만 안내합니다.' },
  { key: 'log', label: '매일 기록/달력', desc: '끄면 기록 탭과 연속 일수가 숨겨지고 새 기록을 저장하지 않습니다. (기존 기록은 보관)' },
  { key: 'guide', label: '자세 설명/주의사항', desc: '끄면 ⓘ 설명 버튼과 운동 중 자세 안내 문구가 숨겨집니다.' },
  { key: 'music', label: '배경음악', desc: '운동하는 동안 잔잔한 음악을 깔아줍니다. 음성 안내가 나올 때는 자동으로 작아집니다.' },
];

const DEFAULTS = {
  features: { timer: true, sound: true, log: true, guide: true, music: true },
  musicStyle: 'pad',
  musicVol: 40,
  prep: 10,
  voice: true,
  count: true,
  beep: true,
  rate: 1,
  ex: {
    mckenzie: { on: true, hold: 7, reps: 10, sets: 1, rest: 3, setRest: 30, video: '' },
    plank:    { on: true, hold: 20, reps: 4, sets: 1, rest: 30, setRest: 30, video: '' },
    birddog:  { on: true, hold: 5, reps: 10, sets: 1, rest: 3, setRest: 30, video: '' },
  },
};

const LIMITS = {
  hold:    { min: 3, max: 180, step: 1, unit: '초', label: '유지 시간' },
  reps:    { min: 1, max: 30, step: 1, unit: '회', label: '반복 횟수' },
  sets:    { min: 1, max: 5, step: 1, unit: '세트', label: '세트 수' },
  rest:    { min: 2, max: 120, step: 1, unit: '초', label: '반복 사이 휴식' },
  setRest: { min: 5, max: 180, step: 5, unit: '초', label: '세트 사이 휴식' },
  prep:    { min: 3, max: 30, step: 1, unit: '초' },
};

/* ───────────────── 저장소 ───────────────── */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* 저장 불가 환경 */ }
  },
};

const clone = o => JSON.parse(JSON.stringify(o));
function loadSettings() {
  const saved = store.get('cf.settings', {});
  const s = { ...clone(DEFAULTS), ...saved, ex: clone(DEFAULTS.ex) };
  s.features = { ...DEFAULTS.features, ...(saved.features || {}) };
  for (const id of Object.keys(DEFAULTS.ex)) s.ex[id] = { ...DEFAULTS.ex[id], ...(saved.ex?.[id] || {}) };
  return s;
}
let settings = loadSettings();
let log = store.get('cf.log', {});
const saveSettings = () => store.set('cf.settings', settings);
const saveLog = () => store.set('cf.log', log);
const on = key => settings.features[key];

/* ───────────────── 날짜 도우미 ───────────────── */
const pad = n => String(n).padStart(2, '0');
const dateKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayKey = () => dateKey(new Date());
const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

function streak() {
  const d = new Date();
  if (log[dateKey(d)]?.status !== 'done') d.setDate(d.getDate() - 1);
  let n = 0;
  while (log[dateKey(d)]?.status === 'done') { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ───────────────── 소리 & 음성 ───────────────── */
let audioCtx;
function getCtx() {
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function beep(freq = 880, ms = 120, vol = 0.25) {
  if (!on('sound') || !settings.beep) return;
  try {
    getCtx();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = freq; o.type = 'sine';
    g.gain.setValueAtTime(vol, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + ms / 1000);
    o.connect(g).connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + ms / 1000);
  } catch { /* 오디오 미지원 */ }
}

/* ───────────────── 배경음악 (코드로 만드는 음악, 음원 파일 없음) ───────────────── */
const MUSIC_STYLES = { pad: '잔잔한 화음', musicbox: '오르골', waves: '파도 소리' };
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
const PAD_CHORDS = [[48, 55, 60, 64, 67], [45, 52, 57, 60, 64], [41, 48, 53, 57, 64], [43, 50, 55, 59, 62]];
const PENTA = [72, 74, 76, 79, 81, 84, 86, 88];

const music = {
  playing: false, timer: null, nodes: null, next: 0, step: 0, waveNext: 0, style: null,

  start() {
    if (this.playing) return;
    let ctx;
    try { ctx = getCtx(); } catch { return; }
    const master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor(); // 음량을 올려도 소리가 깨지지 않게
    comp.threshold.value = -18; comp.ratio.value = 4;
    master.connect(comp).connect(ctx.destination);
    // 간단한 울림(딜레이 피드백)
    const bus = ctx.createGain();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
    const delay = ctx.createDelay(2); delay.delayTime.value = 0.42;
    const fb = ctx.createGain(); fb.gain.value = 0.38;
    const wet = ctx.createGain(); wet.gain.value = 0.35;
    bus.connect(lp).connect(master);
    lp.connect(delay); delay.connect(fb).connect(delay); delay.connect(wet).connect(master);
    this.nodes = { ctx, master, bus };
    this.style = settings.musicStyle;
    this.next = this.waveNext = ctx.currentTime + 0.1;
    this.step = 0;
    if (this.style === 'waves') this.startNoise();
    this.playing = true;
    this.tick();
    this.timer = setInterval(() => this.tick(), 250);
  },

  stop(fade = 1.2) {
    if (!this.playing) return;
    this.playing = false;
    clearInterval(this.timer);
    const { ctx, master } = this.nodes;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(0, ctx.currentTime, fade / 4);
    const nodes = this.nodes;
    setTimeout(() => { try { nodes.noise?.stop(); nodes.master.disconnect(); } catch { /* 이미 정리됨 */ } }, fade * 1000 + 300);
    this.nodes = null;
  },

  restart() { if (this.playing) { this.stop(0.4); setTimeout(() => this.start(), 450); } },

  level() {
    const base = (settings.musicVol / 100) * 0.9;
    const speaking = 'speechSynthesis' in window && speechSynthesis.speaking;
    return speaking ? base * 0.3 : base;
  },

  tick() {
    if (!this.playing) return;
    const { ctx, master } = this.nodes;
    master.gain.setTargetAtTime(this.level(), ctx.currentTime, 0.35);
    const ahead = ctx.currentTime + 1.5;
    while (this.next < ahead) this[this.style === 'musicbox' ? 'boxNote' : this.style === 'waves' ? 'drone' : 'chord']();
    if (this.style === 'waves') while (this.waveNext < ahead) this.wave();
  },

  tone(freq, t, dur, { type = 'sine', vol = 0.1, attack = 2, release = 3 } = {}) {
    const { ctx, bus } = this.nodes;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.setValueAtTime(vol, t + Math.max(attack, dur - release));
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus);
    o.start(t); o.stop(t + dur + 0.1);
  },

  chord() { // 잔잔한 화음: 8초마다 천천히 바뀌는 패드
    const t = this.next, notes = PAD_CHORDS[this.step++ % PAD_CHORDS.length];
    notes.forEach((m, i) => {
      this.tone(mtof(m), t, 10, { type: i ? 'sine' : 'triangle', vol: 0.05, attack: 3, release: 4 });
      this.tone(mtof(m) * 1.003, t, 10, { vol: 0.03, attack: 3.5, release: 4 });
    });
    this.next += 8;
  },

  boxNote() { // 오르골: 5음계 음을 여유 있게 하나씩
    const t = this.next;
    if (this.step % 16 === 0) {
      const root = PAD_CHORDS[(this.step / 16) % PAD_CHORDS.length][0];
      this.tone(mtof(root), t, 14, { vol: 0.05, attack: 3, release: 5 });
      this.tone(mtof(root + 7), t, 14, { vol: 0.03, attack: 3, release: 5 });
    }
    const m = PENTA[Math.floor(Math.random() * PENTA.length)];
    this.tone(mtof(m), t, 2.6, { vol: 0.09, attack: 0.01, release: 2.55 });
    this.tone(mtof(m) * 2, t, 1.2, { vol: 0.02, attack: 0.01, release: 1.15 });
    this.step++;
    this.next += [0.75, 0.75, 1.5, 1.5, 2.25][Math.floor(Math.random() * 5)];
  },

  drone() { // 파도 소리 아래에 깔리는 낮은 음
    const t = this.next, root = PAD_CHORDS[this.step++ % PAD_CHORDS.length][0];
    this.tone(mtof(root), t, 18, { vol: 0.045, attack: 5, release: 6 });
    this.tone(mtof(root + 12), t, 18, { vol: 0.02, attack: 6, release: 6 });
    this.next += 16;
  },

  startNoise() {
    const { ctx, bus } = this.nodes;
    const len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = ctx.createGain(); g.gain.value = 0.05;
    src.connect(lp).connect(g).connect(bus);
    src.start();
    Object.assign(this.nodes, { noise: src, waveGain: g });
  },

  wave() { // 6~10초 주기로 밀려왔다 빠지는 파도
    const g = this.nodes.waveGain.gain, t = this.waveNext, d = 6 + Math.random() * 4;
    g.setValueAtTime(0.05, t);
    g.linearRampToValueAtTime(0.4 + Math.random() * 0.25, t + d * 0.4);
    g.linearRampToValueAtTime(0.05, t + d);
    this.waveNext += d;
  },
};

let koVoice = null;
function pickVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  koVoice = voices.find(v => v.lang === 'ko-KR') || voices.find(v => v.lang?.startsWith('ko')) || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function say(text, { interrupt = true } = {}) {
  if (!on('sound') || !settings.voice || !text || !('speechSynthesis' in window)) return;
  if (interrupt) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  if (koVoice) u.voice = koVoice;
  u.rate = Number(settings.rate) || 1;
  speechSynthesis.speak(u);
}

/* ───────────────── 화면 꺼짐 방지 ───────────────── */
let wakeLock = null;
async function keepAwake(on) {
  try {
    if (on && 'wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen');
    else if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
  } catch { /* 미지원 */ }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && runner.active) keepAwake(true);
});

/* ───────────────── 공통 ───────────────── */
const $ = sel => document.querySelector(sel);
const fig = id => `<div class="fig">${FIG[id]}</div>`;
const fmtSec = s => s >= 60 ? `${Math.floor(s / 60)}분${s % 60 ? ` ${s % 60}초` : ''}` : `${s}초`;
function summary(id) {
  const c = settings.ex[id];
  const side = EX[id].alternate ? ' (좌우 번갈아)' : '';
  if (!on('timer')) return `${c.reps}회${side}${c.sets > 1 ? ` × ${c.sets}세트` : ''} · 직접 넘기기`;
  return `${fmtSec(c.hold)} 유지 × ${c.reps}회${side}${c.sets > 1 ? ` × ${c.sets}세트` : ''}`;
}
function exDuration(id) {
  const c = settings.ex[id];
  return settings.prep + c.sets * (c.reps * c.hold + (c.reps - 1) * c.rest) + (c.sets - 1) * c.setRest;
}
function birdSide(rep) {
  return rep % 2 === 1 ? '왼팔 + 오른다리' : '오른팔 + 왼다리';
}

/* ───────────────── 홈 ───────────────── */
function renderHome() {
  const now = new Date();
  $('#today-label').textContent = `${now.getMonth() + 1}월 ${now.getDate()}일 ${WEEK[now.getDay()]}요일`;
  const st = streak();
  $('#streak-badge').textContent = st ? `🔥 ${st}일 연속` : '🌱 오늘부터 시작';
  $('#streak-badge').hidden = !on('log');

  const entry = on('log') ? log[todayKey()] : null;
  const active = EXERCISES.filter(e => settings.ex[e.id].on);
  const total = active.reduce((a, e) => a + exDuration(e.id), 0);
  const tc = $('#today-card');
  if (entry?.status === 'done') {
    tc.innerHTML = `<div class="big-icon">✅</div><div><strong>오늘 운동을 마쳤어요!</strong><span class="muted small">${entry.time || ''} 완료 · 한 번 더 해도 좋아요</span></div>`;
    $('#start-btn').textContent = '▶ 다시 하기';
  } else {
    tc.innerHTML = `<div class="big-icon">☀️</div><div><strong>좋은 아침입니다</strong><span class="muted small">${active.length}가지 운동${on('timer') ? ` · 약 ${Math.ceil(total / 60)}분` : ' · 직접 넘기기'}</span></div>`;
    $('#start-btn').textContent = '▶ 운동 시작';
  }
  $('#start-btn').disabled = active.length === 0;
  $('#start-note').textContent = [
    on('timer') ? '시작하면 화면이 꺼지지 않고' : '한 번 할 때마다 직접 눌러 넘기고',
    on('sound') ? '음성으로 안내해 드립니다.' : '화면으로 안내해 드립니다.',
  ].join(', ');

  $('#ex-list').innerHTML = EXERCISES.map(e => `
    <li class="ex-item ${settings.ex[e.id].on ? '' : 'off'}">
      ${fig(e.id)}
      <div class="info"><strong>${e.name}</strong><span>${settings.ex[e.id].on ? summary(e.id) : '꺼짐 (설정에서 켜기)'}</span></div>
      ${on('guide') ? `<button class="icon-btn" data-guide="${e.id}" aria-label="${e.name} 자세 설명">ⓘ</button>` : ''}
    </li>`).join('');
}

/* ───────────────── 자세 설명 ───────────────── */
function openGuide(id) {
  const e = EX[id];
  const video = settings.ex[id].video;
  $('#guide-body').innerHTML = `
    <h2>${e.name}</h2><p class="muted small">${e.en}</p>
    ${fig(id)}
    <h3>방법 (병원 유인물)</h3>
    <ol>${e.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    ${e.memo ? `<h3>메모</h3><div class="memo">✍️ ${e.memo}</div>` : ''}
    <h3>자세 포인트</h3>
    <ul>${e.tips.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="caution">⚠️ 허리 통증이 엉덩이나 다리로 퍼지거나, 저림이 심해지면 바로 멈추고 담당 의료진과 상의하세요.</div>
    ${video ? `<a class="btn primary" href="${encodeURI(video)}" target="_blank" rel="noopener">▶ 동영상 보기</a>`
            : `<p class="small muted">유인물의 QR코드 동영상 주소를 설정 화면에 넣으면 여기서 바로 볼 수 있습니다.</p>`}`;
  $('#guide').showModal();
}
$('#guide-close').onclick = () => $('#guide').close();
$('#guide').addEventListener('click', ev => { if (ev.target.id === 'guide') $('#guide').close(); });
document.addEventListener('click', ev => {
  const g = ev.target.closest('[data-guide]');
  if (g) openGuide(g.dataset.guide);
});

/* ───────────────── 기록 / 달력 ───────────────── */
let calMonth = new Date(); calMonth.setDate(1);
function renderLog() {
  const y = calMonth.getFullYear(), m = calMonth.getMonth();
  $('#cal-title').textContent = `${y}년 ${m + 1}월`;
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const tk = todayKey();
  let html = '';
  for (let i = 0; i < first; i++) html += '<span class="cal-day empty"></span>';
  let monthDone = 0;
  for (let d = 1; d <= days; d++) {
    const k = `${y}-${pad(m + 1)}-${pad(d)}`;
    const st = log[k]?.status;
    if (st === 'done') monthDone++;
    const cls = ['cal-day', st || '', k === tk ? 'today' : '', k > tk ? 'future' : ''].join(' ');
    html += `<button class="${cls}" data-day="${k}" ${k > tk ? 'disabled' : ''}>${d}</button>`;
  }
  $('#cal-grid').innerHTML = html;
  const totalDone = Object.values(log).filter(v => v.status === 'done').length;
  $('#stats').innerHTML = `
    <div class="stat"><b>${streak()}</b><span>연속 일수</span></div>
    <div class="stat"><b>${monthDone}</b><span>이번 달</span></div>
    <div class="stat"><b>${totalDone}</b><span>전체</span></div>`;
}
$('#cal-prev').onclick = () => { calMonth.setMonth(calMonth.getMonth() - 1); renderLog(); };
$('#cal-next').onclick = () => { calMonth.setMonth(calMonth.getMonth() + 1); renderLog(); };
$('#cal-grid').addEventListener('click', ev => {
  const b = ev.target.closest('[data-day]');
  if (!b) return;
  const k = b.dataset.day;
  const [, mm, dd] = k.split('-').map(Number);
  if (log[k]) {
    if (confirm(`${mm}월 ${dd}일 기록을 지울까요?`)) { delete log[k]; saveLog(); }
  } else if (confirm(`${mm}월 ${dd}일을 '운동 완료'로 표시할까요?`)) {
    log[k] = { status: 'done', manual: true };
    saveLog();
  }
  renderLog(); renderHome();
});

/* ───────────────── 설정 ───────────────── */
function stepperHTML(value, key) {
  const L = LIMITS[key];
  return `<button type="button" data-d="-1" aria-label="줄이기">−</button><output>${value}${L.unit}</output><button type="button" data-d="1" aria-label="늘리기">+</button>`;
}
function renderSettings() {
  $('#settings-features').innerHTML = FEATURES.map(f => `
    <label class="row feat"><span><b>${f.label}</b><small class="muted">${f.desc}</small></span>
      <input type="checkbox" class="switch" data-feature="${f.key}" ${on(f.key) ? 'checked' : ''}></label>`).join('');
  $('#sound-card').hidden = !on('sound');
  $('#sound-title').hidden = !on('sound');
  $('#prep-card').hidden = !on('timer');
  $('#music-card').hidden = !on('music');
  $('#music-title').hidden = !on('music');
  $('#opt-music-style').value = settings.musicStyle;
  $('#opt-music-vol').value = settings.musicVol;
  $('#music-vol-text').textContent = `${settings.musicVol}%`;
  $('#prep-title').hidden = !on('timer');
  $('#settings-ex').innerHTML = EXERCISES.map(e => {
    const c = settings.ex[e.id];
    const fields = on('timer') ? ['hold', 'reps', 'sets', 'rest'].concat(c.sets > 1 ? ['setRest'] : []) : ['reps', 'sets'];
    return `<div class="card ex-set">
      <h3>${e.name}<input type="checkbox" class="switch" data-on="${e.id}" ${c.on ? 'checked' : ''} aria-label="${e.name} 켜기"></h3>
      ${e.memo && on('guide') ? `<p class="hint small muted">✍️ ${e.memo}</p>` : ''}
      ${e.alternate ? `<p class="hint small muted">좌우를 번갈아 1회씩 셉니다 (10회 = 한쪽 5회씩)</p>` : ''}
      ${fields.map(f => `<div class="row"><span>${LIMITS[f].label}</span>
        <div class="stepper" data-ex="${e.id}" data-key="${f}">${stepperHTML(c[f], f)}</div></div>`).join('')}
      ${on('guide') ? `<div class="row" style="display:block"><span class="small muted">동영상 주소 (유인물 QR코드, 선택)</span>
        <input type="url" data-video="${e.id}" placeholder="https://" value="${c.video ? c.video.replace(/"/g, '&quot;') : ''}"></div>` : ''}
    </div>`;
  }).join('');
  const ps = document.querySelector('[data-global="prep"]');
  ps.innerHTML = stepperHTML(settings.prep, 'prep');
  $('#opt-voice').checked = settings.voice;
  $('#opt-count').checked = settings.count;
  $('#opt-beep').checked = settings.beep;
  $('#opt-rate').value = String(settings.rate);
}
$('#view-settings').addEventListener('click', ev => {
  const btn = ev.target.closest('.stepper button');
  if (!btn) return;
  const box = btn.parentElement;
  const key = box.dataset.key || box.dataset.global;
  const L = LIMITS[key];
  const obj = box.dataset.ex ? settings.ex[box.dataset.ex] : settings;
  obj[key] = Math.min(L.max, Math.max(L.min, obj[key] + Number(btn.dataset.d) * L.step));
  saveSettings();
  if (key === 'sets') renderSettings();
  else box.querySelector('output').textContent = obj[key] + L.unit;
  renderHome();
});
$('#view-settings').addEventListener('change', ev => {
  const t = ev.target;
  if (t.dataset.feature) {
    settings.features[t.dataset.feature] = t.checked;
    if (t.dataset.feature === 'music' && !t.checked) stopPreview();
    saveSettings(); applyFeatures(); renderAll();
    return;
  }
  if (t.dataset.on) settings.ex[t.dataset.on].on = t.checked;
  else if (t.dataset.video) settings.ex[t.dataset.video].video = /^https?:\/\//i.test(t.value.trim()) ? t.value.trim() : '';
  else if (t.id === 'opt-voice') settings.voice = t.checked;
  else if (t.id === 'opt-count') settings.count = t.checked;
  else if (t.id === 'opt-beep') settings.beep = t.checked;
  else if (t.id === 'opt-rate') settings.rate = Number(t.value);
  else if (t.id === 'opt-music-style') { settings.musicStyle = t.value; music.restart(); }
  else if (t.id === 'opt-music-vol') settings.musicVol = Number(t.value);
  else return;
  saveSettings(); renderHome();
});
$('#opt-music-vol').addEventListener('input', ev => {
  settings.musicVol = Number(ev.target.value);
  $('#music-vol-text').textContent = `${settings.musicVol}%`;
});
let previewTimer = null;
function stopPreview() {
  if (!previewTimer) return;
  clearTimeout(previewTimer); previewTimer = null;
  music.stop();
  $('#music-preview').textContent = '▶ 미리 듣기';
}
$('#music-preview').onclick = () => {
  if (previewTimer) return stopPreview();
  music.start();
  $('#music-preview').textContent = '■ 멈추기';
  previewTimer = setTimeout(stopPreview, 20000);
};

$('#test-voice').onclick = () => {
  const was = settings.voice; settings.voice = true;
  speechSynthesis?.getVoices && pickVoice();
  say('좋은 아침입니다. 오늘도 코어 운동을 시작해 볼까요?');
  settings.voice = was; beep();
  if (!('speechSynthesis' in window)) alert('이 브라우저는 음성 안내를 지원하지 않습니다. 크롬이나 삼성 인터넷을 사용해 주세요.');
};
$('#reset-settings').onclick = () => {
  if (!confirm('운동 설정을 기본값으로 되돌릴까요? (기록은 그대로 남습니다)')) return;
  const features = settings.features;
  settings = clone(DEFAULTS); settings.features = features; saveSettings(); renderSettings(); renderHome();
};
$('#export-btn').onclick = () => {
  const blob = new Blob([JSON.stringify({ app: 'core-fit', settings, log }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `코어운동-백업-${todayKey()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};
$('#import-btn').onclick = () => $('#import-file').click();
$('#import-file').onchange = async ev => {
  const file = ev.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (data.app !== 'core-fit') throw new Error();
    if (!confirm('백업을 불러오면 지금 기록과 설정이 백업 내용으로 바뀝니다. 계속할까요?')) return;
    store.set('cf.settings', data.settings || {}); settings = loadSettings();
    log = data.log || {}; saveLog();
    applyFeatures(); renderAll(); alert('백업을 불러왔습니다.');
  } catch { alert('올바른 백업 파일이 아닙니다.'); }
  ev.target.value = '';
};

/* ───────────────── 운동 진행 ───────────────── */
function buildSteps() {
  const steps = [];
  for (const e of EXERCISES) {
    const c = settings.ex[e.id];
    if (!c.on) continue;
    steps.push({ type: 'prep', ex: e.id, dur: settings.prep });
    for (let s = 1; s <= c.sets; s++) {
      for (let r = 1; r <= c.reps; r++) {
        steps.push({ type: 'hold', ex: e.id, set: s, rep: r, dur: c.hold });
        if (r < c.reps && on('timer')) steps.push({ type: 'rest', ex: e.id, set: s, rep: r, dur: c.rest });
      }
      if (s < c.sets && on('timer')) steps.push({ type: 'rest', ex: e.id, set: s, rep: c.reps, dur: c.setRest, setBreak: true });
    }
    steps.push({ type: 'exdone', ex: e.id, dur: 0 });
  }
  return steps;
}

const runner = {
  active: false, steps: [], i: 0, endAt: 0, remainMs: 0, paused: false, timer: null,
  lastSec: null, completed: new Set(), startedAt: null,
};

function startWorkout() {
  runner.steps = buildSteps();
  if (!runner.steps.length) return;
  runner.active = true; runner.i = 0; runner.paused = false;
  runner.completed = new Set(); runner.startedAt = new Date();
  $('#workout').hidden = false;
  document.body.style.overflow = 'hidden';
  keepAwake(true);
  beep(660, 80, 0.01); // 오디오 잠금 해제
  if (previewTimer) { clearTimeout(previewTimer); previewTimer = null; $('#music-preview').textContent = '▶ 미리 듣기'; music.stop(0.3); }
  if (on('music')) setTimeout(() => music.start(), previewTimer === null ? 400 : 0);
  enterStep();
  runner.timer = setInterval(tick, 100);
}

function enterStep() {
  // 완료 표시 단계는 건너뛰며 기록
  while (runner.steps[runner.i]?.type === 'exdone') {
    runner.completed.add(runner.steps[runner.i].ex);
    runner.i++;
  }
  const st = runner.steps[runner.i];
  if (!st) return finishWorkout(true);
  runner.remainMs = st.dur * 1000;
  runner.endAt = performance.now() + runner.remainMs;
  runner.lastSec = null;
  const e = EX[st.ex], c = settings.ex[st.ex];

  const W = $('#workout');
  W.dataset.phase = st.type;
  W.classList.toggle('manual', !on('timer'));
  $('#wo-ex').textContent = e.name;
  $('#wo-figure').innerHTML = fig(st.ex);
  let phase, cue, count = '', speech;
  if (st.type === 'prep') {
    phase = '준비';
    cue = e.prepCue;
    count = summary(st.ex);
    speech = on('guide') ? `${e.name}. ${e.prepCue}` : `${e.name}. 준비하세요`;
  } else if (st.type === 'hold') {
    phase = e.holdWord;
    cue = e.holdCue;
    count = `${st.rep} / ${c.reps}회${c.sets > 1 ? ` · ${st.set}세트` : ''}`;
    if (e.alternate) {
      const side = birdSide(st.rep);
      phase = side;
      speech = `${st.rep}회. ${side.replace(' + ', '과 ')}을 뻗으세요`;
    } else {
      speech = `${st.rep}회. ${e.holdSay}`;
    }
    beep(988, 160);
  } else {
    phase = st.setBreak ? '세트 휴식' : e.restWord;
    cue = st.setBreak ? `${st.set}세트 끝! 잠시 쉬고 다음 세트를 합니다.` : e.restCue;
    count = `${st.rep} / ${c.reps}회 완료`;
    speech = st.setBreak ? `${st.set}세트 끝. 쉬세요` : e.restSay;
    beep(523, 160);
  }
  $('#wo-phase').textContent = phase;
  $('#wo-cue').textContent = cue;
  $('#wo-cue').hidden = !on('guide');
  if (!on('timer')) {
    $('#wo-time').textContent = st.type === 'prep' ? '▶' : st.rep;
    $('#wo-ring').style.strokeDashoffset = st.type === 'prep' ? '0'
      : String(326.73 * (1 - st.rep / settings.ex[st.ex].reps));
    $('#wo-pause').textContent = st.type === 'prep' ? '▶ 시작' : `✓ ${st.rep}회 완료`;
  }
  $('#wo-count').textContent = count;
  say(speech);
  updateProgress();
  tick();
}

function tick() {
  if (!runner.active || !on('timer')) return;
  const st = runner.steps[runner.i];
  if (!st) return;
  const remain = runner.paused ? runner.remainMs : Math.max(0, runner.endAt - performance.now());
  const sec = Math.ceil(remain / 1000);
  $('#wo-time').textContent = sec;
  const frac = st.dur ? remain / (st.dur * 1000) : 0;
  $('#wo-ring').style.strokeDashoffset = String(326.73 * (1 - frac));

  if (!runner.paused && sec !== runner.lastSec) {
    runner.lastSec = sec;
    if (sec > 0 && sec <= 3 && st.dur >= 5) {
      // 플랭크처럼 긴 유지에는 중간 안내
      if (settings.count && settings.voice) say(['', '하나', '둘', '셋'][sec]);
      else beep(740, 90, 0.18);
    } else if (st.type === 'hold' && st.dur >= 20 && sec === Math.floor(st.dur / 2) && sec > 5) {
      say(`${sec}초 남았습니다. 호흡하세요`);
    }
  }
  if (!runner.paused && remain <= 0) {
    runner.i++;
    enterStep();
  }
}

function updateProgress() {
  const total = runner.steps.length;
  $('#wo-progress-bar').style.width = `${(runner.i / total) * 100}%`;
  const exIds = [...new Set(runner.steps.map(s => s.ex))];
  const cur = runner.steps[runner.i]?.ex;
  $('#wo-progress-text').textContent = cur ? `${exIds.indexOf(cur) + 1}/${exIds.length}` : '';
}

function togglePause() {
  if (!runner.active) return;
  if (!on('timer')) { beep(988, 120); runner.i++; return enterStep(); }
  if (runner.paused) {
    runner.paused = false;
    runner.endAt = performance.now() + runner.remainMs;
    $('#wo-pause').textContent = '⏸ 일시정지';
    $('#workout').classList.remove('paused');
    if (on('music')) music.start();
    say('다시 시작합니다');
  } else {
    runner.paused = true;
    runner.remainMs = Math.max(0, runner.endAt - performance.now());
    $('#wo-pause').textContent = '▶ 계속하기';
    $('#workout').classList.add('paused');
    music.stop(0.6);
    say('일시정지');
  }
}
function jump(dir) {
  if (!runner.active) return;
  let i = runner.i + dir;
  if (dir < 0) {
    while (i > 0 && runner.steps[i].type === 'exdone') i--;
    if (i < 0) i = 0;
  }
  runner.i = Math.max(0, i);
  if (runner.paused && on('timer')) togglePause();
  enterStep();
}

function stopRunner() {
  runner.active = false;
  music.stop(2);
  clearInterval(runner.timer);
  keepAwake(false);
  $('#workout').hidden = true;
  $('#workout').classList.remove('paused');
  $('#wo-pause').textContent = '⏸ 일시정지';
  document.body.style.overflow = '';
}

function finishWorkout(complete) {
  stopRunner();
  const k = todayKey();
  const now = new Date();
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const done = [...runner.completed];
  if (!on('log')) {
    if (complete) {
      say('오늘 운동을 모두 마쳤습니다. 수고하셨습니다!');
      $('#done-text').textContent = `${done.map(id => EX[id].name).join(', ')} 완료`;
      $('#done').hidden = false;
    }
    return renderAll();
  }
  if (complete) {
    log[k] = { status: 'done', time, items: done, minutes: Math.round((now - runner.startedAt) / 60000) };
    saveLog();
    say('오늘 운동을 모두 마쳤습니다. 수고하셨습니다!');
    beep(1047, 300);
    const st = streak();
    $('#done-text').textContent = `${done.map(id => EX[id].name).join(', ')} 완료${st > 1 ? ` · 🔥 ${st}일 연속!` : ''}`;
    $('#done').hidden = false;
  } else if (done.length && log[k]?.status !== 'done') {
    log[k] = { status: 'partial', time, items: done };
    saveLog();
  }
  renderAll();
}

$('#start-btn').onclick = startWorkout;
$('#wo-pause').onclick = togglePause;
$('#wo-next').onclick = () => jump(1);
$('#wo-prev').onclick = () => jump(-1);
$('#wo-close').onclick = () => {
  const wasPaused = runner.paused;
  const manual = !on('timer');
  if (!wasPaused && !manual) togglePause();
  if (confirm('운동을 끝낼까요? 끝까지 마친 운동은 기록에 남습니다.')) {
    speechSynthesis?.cancel();
    finishWorkout(false);
  } else if (!wasPaused && !manual) togglePause();
};
$('#done-ok').onclick = () => { $('#done').hidden = true; showView(on('log') ? 'log' : 'home'); };

/* ───────────────── 탭 이동 ───────────────── */
function showView(name) {
  if (name !== 'settings') stopPreview();
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === `view-${name}`));
  document.querySelectorAll('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  if (name === 'log') { calMonth = new Date(); calMonth.setDate(1); renderLog(); }
  window.scrollTo(0, 0);
}
document.querySelectorAll('.tabbar button').forEach(b => b.onclick = () => showView(b.dataset.view));

function applyFeatures() {
  document.querySelector('.tabbar [data-view="log"]').hidden = !on('log');
  if (!on('log') && $('#view-log').classList.contains('active')) showView('home');
}
function renderAll() { renderHome(); renderLog(); renderSettings(); }
applyFeatures();
renderAll();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
