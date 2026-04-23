const STRINGS = {
  en: {
    language: "Language",
    donate: "Donate",
    landingTitle: "Welcome to Maratb",
    landingSub: "Play with your friends in English or Arabic.",
    start: "Start Playing",
    how: "How to Play",
    howText:
      "1) Start game  2) Select mode/category/rounds  3) Set team names  4) Host reveals answers while teams see hidden boxes.",
    back: "Back",
    modeTitle: "Choose Game Mode",
    randomMode: "Random playlist by category",
    manualMode: "Select question manually",
    category: "Category",
    rounds: "Number of rounds",
    next: "Next",
    teamsTitle: "Team Setup",
    teamA: "Team 1 name",
    teamB: "Team 2 name",
    generate: "Generate Game Board",
    hostTitle: "Host Screen",
    teamTitle: "Team Screen",
    hostHint: "Host controls reveal and scoring",
    teamHint: "Teams only see hidden answers until host reveals them",
    qrTitle: "Scan QR to open host controls",
    question: "Question",
    points: "Points",
    reveal: "Reveal",
    revealed: "Revealed",
    addTo: "Add points to",
    nextRound: "Next Round",
    chooseQuestion: "Choose question",
    roleHost: "Host Mode",
    roleTeam: "Team Mode",
    round: "Round",
    noMoreRounds: "No more rounds. Restart from landing page."
  },
  ar: {
    language: "اللغة",
    donate: "تبرع",
    landingTitle: "مرحبًا بك في لعبة مراتب",
    landingSub: "العب مع أصدقائك بالعربية أو الإنجليزية.",
    start: "ابدأ اللعب",
    how: "طريقة اللعب",
    howText:
      "1) ابدأ اللعبة  2) اختر الوضع/الفئة/الجولات  3) أدخل أسماء الفرق  4) المضيف يكشف الإجابات بينما الفرق ترى الصناديق المخفية.",
    back: "رجوع",
    modeTitle: "اختر وضع اللعب",
    randomMode: "قائمة عشوائية حسب الفئة",
    manualMode: "اختر السؤال يدويًا",
    category: "الفئة",
    rounds: "عدد الجولات",
    next: "التالي",
    teamsTitle: "إعداد الفرق",
    teamA: "اسم الفريق 1",
    teamB: "اسم الفريق 2",
    generate: "إنشاء لوحة اللعبة",
    hostTitle: "شاشة المضيف",
    teamTitle: "شاشة الفرق",
    hostHint: "المضيف يتحكم في كشف الإجابات واحتساب النقاط",
    teamHint: "الفرق ترى الإجابات مخفية حتى يكشفها المضيف",
    qrTitle: "امسح QR لفتح تحكم المضيف",
    question: "السؤال",
    points: "النقاط",
    reveal: "كشف",
    revealed: "تم الكشف",
    addTo: "إضافة النقاط إلى",
    nextRound: "الجولة التالية",
    chooseQuestion: "اختر السؤال",
    roleHost: "وضع المضيف",
    roleTeam: "وضع الفرق",
    round: "جولة",
    noMoreRounds: "لا توجد جولات إضافية. أعد التشغيل من الصفحة الرئيسية."
  }
};

const QUESTION_BANK = {
  food: [
    {
      en: "Name a popular breakfast food.",
      ar: "اذكر طعامًا مشهورًا للإفطار.",
      answers: [
        { en: "Eggs", ar: "بيض", points: 32 },
        { en: "Bread", ar: "خبز", points: 24 },
        { en: "Cereal", ar: "حبوب إفطار", points: 18 },
        { en: "Cheese", ar: "جبن", points: 14 }
      ]
    },
    {
      en: "Name something people drink in the morning.",
      ar: "اذكر شيئًا يشربه الناس في الصباح.",
      answers: [
        { en: "Coffee", ar: "قهوة", points: 40 },
        { en: "Tea", ar: "شاي", points: 27 },
        { en: "Water", ar: "ماء", points: 15 },
        { en: "Juice", ar: "عصير", points: 12 }
      ]
    }
  ],
  travel: [
    {
      en: "Name something you pack before travel.",
      ar: "اذكر شيئًا تقوم بتجهيزه قبل السفر.",
      answers: [
        { en: "Clothes", ar: "ملابس", points: 34 },
        { en: "Passport", ar: "جواز السفر", points: 28 },
        { en: "Toothbrush", ar: "فرشاة أسنان", points: 16 },
        { en: "Phone charger", ar: "شاحن الهاتف", points: 14 }
      ]
    },
    {
      en: "Name a place people visit on vacation.",
      ar: "اذكر مكانًا يزوره الناس في الإجازة.",
      answers: [
        { en: "Beach", ar: "الشاطئ", points: 38 },
        { en: "Mountains", ar: "الجبال", points: 22 },
        { en: "Hotel", ar: "فندق", points: 20 },
        { en: "Museum", ar: "متحف", points: 10 }
      ]
    }
  ]
};

const CATEGORY_LABELS = {
  en: { food: "Food", travel: "Travel" },
  ar: { food: "الطعام", travel: "السفر" }
};

const state = {
  lang: "en",
  step: "landing",
  mode: "random",
  category: "food",
  rounds: 1,
  manualQuestionIndex: 0,
  teams: ["Team A", "Team B"],
  scores: [0, 0],
  currentRound: 0,
  selectedQuestions: [],
  revealMap: {},
  role: "team"
};

const app = document.getElementById("app");
const langSelect = document.getElementById("langSelect");
const langLabel = document.getElementById("langLabel");
const donateBtn = document.getElementById("donateBtn");

langSelect.addEventListener("change", (e) => {
  state.lang = e.target.value;
  updateLanguageLayout();
  render();
});

donateBtn.addEventListener("click", () => {
  window.open("https://www.buymeacoffee.com/", "_blank");
});

window.addEventListener("hashchange", () => {
  state.role = window.location.hash === "#host" ? "host" : "team";
  render();
});

function t(key) {
  return STRINGS[state.lang][key] || key;
}

function getCategories() {
  return Object.keys(QUESTION_BANK);
}

function updateLanguageLayout() {
  const isArabic = state.lang === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  langLabel.textContent = t("language");
  donateBtn.textContent = t("donate");
}

function shuffle(arr) {
  const copied = [...arr];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function getCurrentQuestion() {
  return state.selectedQuestions[state.currentRound];
}

function startSelection() {
  const pool = QUESTION_BANK[state.category];
  if (state.mode === "manual") {
    state.selectedQuestions = [pool[state.manualQuestionIndex]];
    state.rounds = 1;
  } else {
    state.selectedQuestions = shuffle(pool).slice(0, Math.min(state.rounds, pool.length));
    state.rounds = state.selectedQuestions.length;
  }
  state.currentRound = 0;
  state.revealMap = {};
  state.scores = [0, 0];
}

function goNextRound() {
  if (state.currentRound + 1 >= state.rounds) {
    alert(t("noMoreRounds"));
    state.step = "landing";
    return;
  }
  state.currentRound += 1;
  render();
}

function revealAnswer(answerIndex, points) {
  const key = `${state.currentRound}-${answerIndex}`;
  state.revealMap[key] = true;
  render();

  const teamInput = prompt(
    `${t("addTo")}:\n1) ${state.teams[0]}\n2) ${state.teams[1]}`,
    "1"
  );
  const teamId = Number(teamInput) - 1;
  if (teamId === 0 || teamId === 1) {
    state.scores[teamId] += points;
  }
  render();
}

function renderLanding() {
  app.innerHTML = `
    <section class="panel landing">
      <h2>${t("landingTitle")}</h2>
      <p class="small">${t("landingSub")}</p>
      <div class="button-row">
        <button id="startBtn" class="primary">${t("start")}</button>
        <button id="howBtn">${t("how")}</button>
      </div>
      <p id="howText" class="small" hidden>${t("howText")}</p>
    </section>
  `;

  document.getElementById("startBtn").onclick = () => {
    state.step = "mode";
    render();
  };
  document.getElementById("howBtn").onclick = () => {
    const el = document.getElementById("howText");
    el.hidden = !el.hidden;
  };
}

function renderModeStep() {
  const categoryOptions = getCategories()
    .map((c) => `<option value="${c}">${CATEGORY_LABELS[state.lang][c]}</option>`)
    .join("");

  const manualOptions = QUESTION_BANK[state.category]
    .map(
      (q, i) =>
        `<option value="${i}">${i + 1}. ${q[state.lang]}</option>`
    )
    .join("");

  app.innerHTML = `
    <section class="panel grid">
      <h2>${t("modeTitle")}</h2>
      <div class="grid two">
        <label class="form-group">
          <span>${t("category")}</span>
          <select id="categorySelect">${categoryOptions}</select>
        </label>
        <label class="form-group">
          <span>${t("rounds")}</span>
          <input id="roundsInput" type="number" min="1" max="10" value="${state.rounds}" />
        </label>
      </div>
      <div class="button-row">
        <button id="randomModeBtn" class="${state.mode === "random" ? "primary" : ""}">${t(
    "randomMode"
  )}</button>
        <button id="manualModeBtn" class="${state.mode === "manual" ? "primary" : ""}">${t(
    "manualMode"
  )}</button>
      </div>
      <label class="form-group" id="manualQuestionGroup" ${
        state.mode === "manual" ? "" : "hidden"
      }>
        <span>${t("chooseQuestion")}</span>
        <select id="manualQuestionSelect">${manualOptions}</select>
      </label>
      <div class="button-row">
        <button id="backBtn">${t("back")}</button>
        <button id="nextBtn" class="primary">${t("next")}</button>
      </div>
    </section>
  `;

  const categorySelect = document.getElementById("categorySelect");
  categorySelect.value = state.category;
  categorySelect.onchange = (e) => {
    state.category = e.target.value;
    state.manualQuestionIndex = 0;
    renderModeStep();
  };

  const roundsInput = document.getElementById("roundsInput");
  roundsInput.onchange = (e) => {
    state.rounds = Math.max(1, Number(e.target.value || 1));
  };

  document.getElementById("randomModeBtn").onclick = () => {
    state.mode = "random";
    renderModeStep();
  };
  document.getElementById("manualModeBtn").onclick = () => {
    state.mode = "manual";
    renderModeStep();
  };

  const manualSelect = document.getElementById("manualQuestionSelect");
  if (manualSelect) {
    manualSelect.value = String(state.manualQuestionIndex);
    manualSelect.onchange = (e) => {
      state.manualQuestionIndex = Number(e.target.value);
    };
  }

  document.getElementById("backBtn").onclick = () => {
    state.step = "landing";
    render();
  };
  document.getElementById("nextBtn").onclick = () => {
    state.step = "teams";
    render();
  };
}

function renderTeamsStep() {
  app.innerHTML = `
    <section class="panel grid">
      <h2>${t("teamsTitle")}</h2>
      <div class="grid two">
        <label class="form-group">
          <span>${t("teamA")}</span>
          <input id="team1" value="${state.teams[0]}" />
        </label>
        <label class="form-group">
          <span>${t("teamB")}</span>
          <input id="team2" value="${state.teams[1]}" />
        </label>
      </div>
      <div id="qrWrap" class="panel">
        <p>${t("qrTitle")}</p>
        <div id="qrCode"></div>
        <p class="small">${location.origin}${location.pathname}#host</p>
      </div>
      <div class="button-row">
        <button id="backBtn">${t("back")}</button>
        <button id="generateBtn" class="primary">${t("generate")}</button>
      </div>
    </section>
  `;

  const hostUrl = `${location.origin}${location.pathname}#host`;
  const qrCodeBox = document.getElementById("qrCode");
  qrCodeBox.innerHTML = "";
  // qr library is loaded from CDN in index.html
  // eslint-disable-next-line no-undef
  new QRCode(qrCodeBox, { text: hostUrl, width: 140, height: 140 });

  document.getElementById("backBtn").onclick = () => {
    state.step = "mode";
    render();
  };

  document.getElementById("generateBtn").onclick = () => {
    state.teams[0] = document.getElementById("team1").value.trim() || "Team A";
    state.teams[1] = document.getElementById("team2").value.trim() || "Team B";
    startSelection();
    state.step = "game";
    render();
  };
}

function renderGame() {
  const q = getCurrentQuestion();
  const isHost = state.role === "host";

  const answerRows = q.answers
    .map((a, i) => {
      const key = `${state.currentRound}-${i}`;
      const opened = Boolean(state.revealMap[key]);
      return `
        <div class="answer-box">
          <div>
            <strong>#${i + 1}</strong>
            ${
              opened
                ? `<span>${a[state.lang]}</span>`
                : `<span class="answer-hidden">${"■ ".repeat(6)}</span>`
            }
          </div>
          <div>
            <span>${a.points} ${t("points")}</span>
            ${
              isHost
                ? `<button data-answer="${i}" data-points="${a.points}" ${
                    opened ? "disabled" : ""
                  }>${opened ? t("revealed") : t("reveal")}</button>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  app.innerHTML = `
    <section class="panel grid">
      <h2>${isHost ? t("hostTitle") : t("teamTitle")} ${
    isHost ? `<span class="host-tag">(${t("roleHost")})</span>` : ""
  }</h2>
      <p class="small">${isHost ? t("hostHint") : t("teamHint")}</p>
      <div class="score-row">
        <div class="score-chip">${state.teams[0]}: ${state.scores[0]}</div>
        <div class="score-chip">${state.teams[1]}: ${state.scores[1]}</div>
      </div>
      <h3>${t("round")} ${state.currentRound + 1} / ${state.rounds}</h3>
      <p><strong>${t("question")}:</strong> ${q[state.lang]}</p>
      <div class="answers-board">${answerRows}</div>
      <div class="button-row">
        <button id="nextRoundBtn" class="primary">${t("nextRound")}</button>
        <button id="restartBtn">${t("back")}</button>
      </div>
    </section>
  `;

  document.getElementById("nextRoundBtn").onclick = goNextRound;
  document.getElementById("restartBtn").onclick = () => {
    state.step = "landing";
    render();
  };

  if (isHost) {
    document.querySelectorAll("[data-answer]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-answer"));
        const points = Number(btn.getAttribute("data-points"));
        revealAnswer(idx, points);
      });
    });
  }
}

function render() {
  updateLanguageLayout();
  if (state.step === "landing") return renderLanding();
  if (state.step === "mode") return renderModeStep();
  if (state.step === "teams") return renderTeamsStep();
  return renderGame();
}

updateLanguageLayout();
state.role = window.location.hash === "#host" ? "host" : "team";
render();
