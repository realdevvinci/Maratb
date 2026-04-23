const STRINGS = {
  en: {
    language: "Language",
    donate: "Donate",
    landingTitle: "Welcome to Family Feud AR",
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
    revealWinner: "Reveal Winner",
    chooseQuestion: "Choose question",
    roleHost: "Host Mode",
    round: "Round",
    noMoreRounds: "No more rounds. Restart from landing page.",
    noGameFound: "Game not found. Start a new game first.",
    firebaseMissing: "Please configure firebase-config.js first.",
    gameId: "Game ID",
    setupHint:
      "Scan the host QR from another device, then press Generate Game Board.",
    creatingGame: "Creating game...",
    gameCreateFailed:
      "Could not create game. Check Firebase Database rules and connection.",
    noOne: "No one",
    revealScoreTo: "Award revealed answer points to",
    roundScore: "Current round score",
    transferToOther: "Transfer round score to other team",
    transferFrom: "Transfer from",
    transferDone: "Round points transferred.",
    scoredTo: "Scored to",
    selectAtLeastOne: "Select at least one question.",
    selectedQuestions: "Selected questions",
    randomQuestions: "Random Questions",
    winnerTitle: "Game Over",
    winnerIs: "Winner",
    tieGame: "It's a tie!",
    backHome: "Back to Home Screen",
    top10Name: "Top 10 Challenge",
    feudName: "Family Feud",
    top10HowText:
      "Reveal Top 10 ranked answers. Rank 1 gives 1 point, rank 10 gives 10 points.",
    chooseGame: "Choose Your Game",
  },
  ar: {
    language: "اللغة",
    donate: "تبرع",
    landingTitle: "مرحبًا بك في لعبة فاميلي فيود",
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
    revealWinner: "إعلان الفائز",
    chooseQuestion: "اختر السؤال",
    roleHost: "وضع المضيف",
    round: "جولة",
    noMoreRounds: "لا توجد جولات إضافية. أعد التشغيل من الصفحة الرئيسية.",
    noGameFound: "لم يتم العثور على اللعبة. ابدأ لعبة جديدة أولًا.",
    firebaseMissing: "يرجى إعداد firebase-config.js أولًا.",
    gameId: "معرف اللعبة",
    setupHint: "امسح QR للمضيف من جهاز آخر ثم اضغط إنشاء لوحة اللعبة.",
    creatingGame: "جاري إنشاء اللعبة...",
    gameCreateFailed:
      "تعذر إنشاء اللعبة. تحقق من قواعد قاعدة البيانات واتصال الشبكة.",
    noOne: "لا أحد",
    revealScoreTo: "إسناد نقاط الإجابة المكشوفة إلى",
    roundScore: "نقاط الجولة الحالية",
    transferToOther: "نقل نقاط الجولة للفريق الآخر",
    transferFrom: "النقل من",
    transferDone: "تم نقل نقاط الجولة.",
    scoredTo: "تم الإسناد إلى",
    selectAtLeastOne: "اختر سؤالًا واحدًا على الأقل.",
    selectedQuestions: "الأسئلة المختارة",
    randomQuestions: "أسئلة عشوائية",
    winnerTitle: "انتهت اللعبة",
    winnerIs: "الفائز",
    tieGame: "تعادل!",
    backHome: "العودة للصفحة الرئيسية",
    top10Name: "تحدي التوب 10",
    feudName: "فاميلي فيود",
    top10HowText:
      "اكشف إجابات التوب 10 المرتبة. المركز 1 يعطي نقطة واحدة والمركز 10 يعطي 10 نقاط.",
    chooseGame: "اختر لعبتك",
  },
};

const QUESTION_BANK = {
  jobs: [
    {
      en: "Name A Type Of Professional That You Seldom See Joking Around.",
      ar: "قم بتسمية نوع من المحترفين الذي نادرًا ما تراه يمزح.",
      answers: [
        {
          en: "Lawyer",
          ar: "محامي",
          points: 31,
        },
        {
          en: "Doctor",
          ar: "طبيب",
          points: 27,
        },
        {
          en: "Politician",
          ar: "سياسي",
          points: 19,
        },
        {
          en: "Judge",
          ar: "يحكم على",
          points: 9,
        },
        {
          en: "Teacher",
          ar: "مدرس",
          points: 4,
        },
        {
          en: "Police",
          ar: "شرطة",
          points: 4,
        },
        {
          en: "Accountant",
          ar: "محاسب",
          points: 3,
        },
      ],
    },
    {
      en: "What Would You Do In A Job Interview That Would Guarantee You Don’t Get The Job.",
      ar: "ماذا ستفعل في مقابلة العمل التي تضمن عدم حصولك على الوظيفة؟",
      answers: [
        {
          en: "Chew Gum/Candy",
          ar: "مضغ العلكة/الحلوى",
          points: 28,
        },
        {
          en: "Lie",
          ar: "كذب",
          points: 20,
        },
        {
          en: "Pass Gas",
          ar: "تمرير الغاز",
          points: 20,
        },
        {
          en: "Swear",
          ar: "يُقسم",
          points: 11,
        },
        {
          en: "Smoke",
          ar: "دخان",
          points: 9,
        },
        {
          en: "Sleep",
          ar: "ينام",
          points: 5,
        },
        {
          en: "Arrive Late",
          ar: "الوصول متأخرا",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something You Might Find On Top Of A Tall Office Building",
      ar: "قم بتسمية شيء قد تجده أعلى مبنى مكتبي طويل",
      answers: [
        {
          en: "Antenna",
          ar: "هوائي",
          points: 23,
        },
        {
          en: "Satellite Dish",
          ar: "طبق الأقمار الصناعية",
          points: 19,
        },
        {
          en: "Flag",
          ar: "علَم",
          points: 19,
        },
        {
          en: "Helipad",
          ar: "مهبط طائرات الهليكوبتر",
          points: 13,
        },
        {
          en: "Lightning Rod",
          ar: "مانعة الصواعق",
          points: 8,
        },
        {
          en: "Roof",
          ar: "سَطح",
          points: 8,
        },
        {
          en: "Bird",
          ar: "طائر",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something The Doctor Begins To Check As You Get Older.",
      ar: "قم بتسمية شيء يبدأ الطبيب بفحصه مع تقدمك في السن.",
      answers: [
        {
          en: "Heart",
          ar: "قلب",
          points: 34,
        },
        {
          en: "Prostate",
          ar: "البروستات",
          points: 28,
        },
        {
          en: "Blood Pressure",
          ar: "ضغط الدم",
          points: 18,
        },
        {
          en: "Colon",
          ar: "القولون",
          points: 5,
        },
        {
          en: "Vision",
          ar: "رؤية",
          points: 4,
        },
        {
          en: "Hearing",
          ar: "السمع",
          points: 4,
        },
        {
          en: "Cholesterol",
          ar: "الكولسترول",
          points: 3,
        },
      ],
    },
    {
      en: "Which Profession is Least Likely To Have A Wild Night Life After Work",
      ar: "ما هي المهنة الأقل احتمالاً للتمتع بحياة ليلية صاخبة بعد العمل؟",
      answers: [
        {
          en: "Doctor",
          ar: "طبيب",
          points: 36,
        },
        {
          en: "Police",
          ar: "شرطة",
          points: 15,
        },
        {
          en: "Teacher",
          ar: "مدرس",
          points: 11,
        },
        {
          en: "Lawyer",
          ar: "محامي",
          points: 11,
        },
        {
          en: "Accountant",
          ar: "محاسب",
          points: 9,
        },
        {
          en: "Librarian",
          ar: "أمين مكتبة",
          points: 7,
        },
        {
          en: "Clergy",
          ar: "رجال الدين",
          points: 6,
        },
      ],
    },
    {
      en: "Which Quality Do You Think A Boss Looks For First When Hiring A New Employee?",
      ar: "ما هي الجودة التي تعتقد أن المدير يبحث عنها أولاً عند تعيين موظف جديد؟",
      answers: [
        {
          en: "Appearance",
          ar: "مظهر",
          points: 27,
        },
        {
          en: "Honesty",
          ar: "الصدق",
          points: 18,
        },
        {
          en: "Experience",
          ar: "خبرة",
          points: 14,
        },
        {
          en: "Personality",
          ar: "شخصية",
          points: 14,
        },
        {
          en: "Education",
          ar: "تعليم",
          points: 10,
        },
        {
          en: "Intelligence",
          ar: "ذكاء",
          points: 9,
        },
        {
          en: "Confidence",
          ar: "ثقة",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something About His Job That Santa Claus Might Brag About.",
      ar: "اذكر شيئًا عن وظيفته قد يتفاخر به سانتا كلوز.",
      answers: [
        {
          en: "Flying Reindeer",
          ar: "الرنة الطائرة",
          points: 36,
        },
        {
          en: "Generosity",
          ar: "الكرم",
          points: 21,
        },
        {
          en: "Works Once A Year",
          ar: "يعمل مرة واحدة في السنة",
          points: 12,
        },
        {
          en: "World Travel",
          ar: "السفر العالمي",
          points: 11,
        },
        {
          en: "Paid In Cookies",
          ar: "ملفات تعريف الارتباط المدفوعة",
          points: 8,
        },
        {
          en: "Fancy Sleigh",
          ar: "مزلقة يتوهم",
          points: 6,
        },
        {
          en: "Efficiency",
          ar: "كفاءة",
          points: 4,
        },
      ],
    },
    {
      en: "Name The Most Stressful Job To Have On A Cruise Ship",
      ar: "قم بتسمية الوظيفة الأكثر إرهاقًا التي يجب عليك القيام بها على متن سفينة سياحية",
      answers: [
        {
          en: "Captain",
          ar: "قبطان",
          points: 52,
        },
        {
          en: "Food Server",
          ar: "خادم الطعام",
          points: 18,
        },
        {
          en: "Cook",
          ar: "يطبخ",
          points: 12,
        },
        {
          en: "Housekeeper",
          ar: "مدبرة منزل",
          points: 7,
        },
        {
          en: "Bartender",
          ar: "نادل",
          points: 4,
        },
        {
          en: "Lifeguard",
          ar: "يا حارس الشاطئ",
          points: 3,
        },
        {
          en: "Entertainer",
          ar: "الفنان",
          points: 3,
        },
      ],
    },
    {
      en: "Name The Thing You Most Fear Doing During An Important Job Interview",
      ar: "قم بتسمية الشيء الذي تخشى القيام به أثناء مقابلة العمل المهمة",
      answers: [
        {
          en: "Sounding Stupid",
          ar: "يبدو غبيا",
          points: 32,
        },
        {
          en: "Not Being Hired",
          ar: "عدم التعاقد",
          points: 18,
        },
        {
          en: "Tongue Tied",
          ar: "اللسان مربوط",
          points: 13,
        },
        {
          en: "Sweating",
          ar: "التعرق",
          points: 12,
        },
        {
          en: "Appearance",
          ar: "مظهر",
          points: 12,
        },
        {
          en: "Being Nervous",
          ar: "كونها عصبية",
          points: 5,
        },
        {
          en: "Forgetting Name",
          ar: "نسيان الاسم",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something You May Have Once Worn With A Work Uniform, But Wouldn’t Wear For A Night On The Town",
      ar: "اذكر شيئًا ربما ارتديته ذات يوم مع زي العمل، ولكنك لن ترتديه لقضاء ليلة في المدينة",
      answers: [
        {
          en: "Bowtie",
          ar: "ربطة القوس",
          points: 28,
        },
        {
          en: "Name Tag/ Badge",
          ar: "علامة الاسم/الشارة",
          points: 19,
        },
        {
          en: "Cap/ Visor",
          ar: "كاب / قناع",
          points: 17,
        },
        {
          en: "Apron",
          ar: "ساحة",
          points: 11,
        },
        {
          en: "Work Boots",
          ar: "أحذية العمل",
          points: 10,
        },
        {
          en: "Hard Hat",
          ar: "قبعة صلبة",
          points: 8,
        },
        {
          en: "Hairnet",
          ar: "شبكة الشعر",
          points: 4,
        },
      ],
    },
    {
      en: "If You Commuted To Work By Jet Pack, Name Something Dangerous That Could Happen. Be Specific.",
      ar: "إذا انتقلت إلى العمل بواسطة Jet Pack، فاذكر شيئًا خطيرًا يمكن أن يحدث. كن محددًا.",
      answers: [
        {
          en: "Fall To Earth",
          ar: "السقوط على الأرض",
          points: 37,
        },
        {
          en: "Run Out Of Gas",
          ar: "نفاد الغاز",
          points: 18,
        },
        {
          en: "Hit A Plane",
          ar: "ضرب طائرة",
          points: 11,
        },
        {
          en: "Blow Up",
          ar: "نسف",
          points: 8,
        },
        {
          en: "Collide With A Bird",
          ar: "تصطدم مع الطيور",
          points: 7,
        },
        {
          en: "Hit A Tree",
          ar: "ضرب شجرة",
          points: 5,
        },
        {
          en: "Hit A Building",
          ar: "ضرب مبنى",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Job Aquaman Could Do If He Couldnâ€™T Be A Superhero Anymore",
      ar: "قم بتسمية الوظيفة التي يمكن للرجل المائي القيام بها إذا لم يعد بطلاً خارقًا بعد الآن",
      answers: [
        {
          en: "Lifeguard",
          ar: "يا حارس الشاطئ",
          points: 31,
        },
        {
          en: "Swim Coach",
          ar: "مدرب السباحة",
          points: 18,
        },
        {
          en: "Swimmer",
          ar: "سباح",
          points: 17,
        },
        {
          en: "Fisherman",
          ar: "صياد",
          points: 10,
        },
        {
          en: "Pool Cleaner",
          ar: "منظف ​​حمامات السباحة",
          points: 6,
        },
        {
          en: "Plumber",
          ar: "سباك",
          points: 5,
        },
        {
          en: "Marine Biologist",
          ar: "عالم الأحياء البحرية",
          points: 4,
        },
      ],
    },
  ],
  home: [
    {
      en: "Name Something You Do More Of When Someone’s Taking A Home Video Of You.",
      ar: "قم بتسمية شيء تفعله أكثر عندما يقوم شخص ما بتصوير فيديو منزلي لك.",
      answers: [
        {
          en: "Smile",
          ar: "يبتسم",
          points: 37,
        },
        {
          en: "Laugh",
          ar: "يضحك",
          points: 22,
        },
        {
          en: "Talk",
          ar: "يتحدث",
          points: 16,
        },
        {
          en: "Hide",
          ar: "يخفي",
          points: 10,
        },
        {
          en: "Wave",
          ar: "موجة",
          points: 5,
        },
        {
          en: "Pose/Show Off",
          ar: "تشكل / اظهار",
          points: 5,
        },
        {
          en: "Act Silly",
          ar: "تصرف بسخافة",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something A Family Uses In Their Home A Robot Family Wouldn’t Need",
      ar: "قم بتسمية شيء تستخدمه العائلة في منزلها ولا تحتاج إليه عائلة الروبوتات",
      answers: [
        {
          en: "Food",
          ar: "طعام",
          points: 30,
        },
        {
          en: "Television",
          ar: "تلفزيون",
          points: 28,
        },
        {
          en: "Bathroom",
          ar: "حمام",
          points: 8,
        },
        {
          en: "Dishwasher",
          ar: "غسالة الأواني",
          points: 8,
        },
        {
          en: "Microwave",
          ar: "ميكروويف",
          points: 8,
        },
        {
          en: "Drinks",
          ar: "مشروبات",
          points: 8,
        },
        {
          en: "Bed",
          ar: "سرير",
          points: 6,
        },
      ],
    },
    {
      en: "After A Week Of Camping, What Luxury Oh Home Are You Most Excited To Have Again?",
      ar: "بعد أسبوع من التخييم، ما هو أكثر منزل فاخر أنت متحمس لامتلاكه مرة أخرى؟",
      answers: [
        {
          en: "Bed",
          ar: "سرير",
          points: 35,
        },
        {
          en: "Shower",
          ar: "دش",
          points: 25,
        },
        {
          en: "TV",
          ar: "تلفزيون",
          points: 13,
        },
        {
          en: "Toilet",
          ar: "مرحاض",
          points: 11,
        },
        {
          en: "Electricity",
          ar: "كهرباء",
          points: 4,
        },
        {
          en: "Air Conditioner",
          ar: "مكيف الهواء",
          points: 4,
        },
        {
          en: "Computer",
          ar: "حاسوب",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Sold Door-To-Door",
      ar: "قم بتسمية شيء تم بيعه من الباب إلى الباب",
      answers: [
        {
          en: "Vacuums",
          ar: "مكانس",
          points: 23,
        },
        {
          en: "Book",
          ar: "كتاب",
          points: 17,
        },
        {
          en: "Magazines",
          ar: "المجلات",
          points: 14,
        },
        {
          en: "Cosmetics",
          ar: "مستحضرات التجميل",
          points: 14,
        },
        {
          en: "Cookies",
          ar: "ملفات تعريف الارتباط",
          points: 11,
        },
        {
          en: "Insurance",
          ar: "تأمين",
          points: 10,
        },
        {
          en: "Fuller Brushes",
          ar: "فرش أكمل",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something You Might See At A High School Homecoming.",
      ar: "قم بتسمية شيء قد تراه في حفل العودة للوطن بالمدرسة الثانوية.",
      answers: [
        {
          en: "Queen",
          ar: "ملكة",
          points: 26,
        },
        {
          en: "Balloons",
          ar: "بالونات",
          points: 17,
        },
        {
          en: "Float",
          ar: "يطفو",
          points: 14,
        },
        {
          en: "Football Game",
          ar: "لعبة كرة القدم",
          points: 11,
        },
        {
          en: "Dresses",
          ar: "فساتين",
          points: 11,
        },
        {
          en: "Limos",
          ar: "ليموزين",
          points: 10,
        },
        {
          en: "King",
          ar: "ملِك",
          points: 7,
        },
      ],
    },
    {
      en: "What Do Parents Do As Part Of Their Children’s bedtime Routine?",
      ar: "ماذا يفعل الآباء كجزء من روتين وقت نوم أطفالهم؟",
      answers: [
        {
          en: "Read",
          ar: "يقرأ",
          points: 43,
        },
        {
          en: "Tuck Them In",
          ar: "دسهم في",
          points: 17,
        },
        {
          en: "Brush Teeth",
          ar: "فرشاة الأسنان",
          points: 10,
        },
        {
          en: "Give Bath",
          ar: "إعطاء حمام",
          points: 9,
        },
        {
          en: "Pray",
          ar: "يصلي",
          points: 6,
        },
        {
          en: "Sing",
          ar: "يغني",
          points: 6,
        },
        {
          en: "Kiss Goodnight",
          ar: "قبلة تصبح على خير",
          points: 5,
        },
      ],
    },
  ],
  people: [
    {
      en: "Real Or Fictional, Name A Famous Man With Long Hair",
      ar: "حقيقي أم خيالي، اذكر اسم رجل مشهور ذو شعر طويل",
      answers: [
        {
          en: "Jesus",
          ar: "عيسى",
          points: 41,
        },
        {
          en: "Fabio",
          ar: "فابيو",
          points: 15,
        },
        {
          en: "Samson",
          ar: "شمشون",
          points: 11,
        },
        {
          en: "Howard Stern",
          ar: "هوارد ستيرن",
          points: 8,
        },
        {
          en: "George Washington",
          ar: "جورج واشنطن",
          points: 7,
        },
        {
          en: "Hercules",
          ar: "هرقل",
          points: 7,
        },
        {
          en: "Albert Einstein",
          ar: "ألبرت أينشتاين",
          points: 7,
        },
      ],
    },
    {
      en: "Name Something That Makes An Otherwise Average Person Seem Very Atrractive",
      ar: "قم بتسمية شيء يجعل الشخص العادي يبدو جذابًا للغاية",
      answers: [
        {
          en: "Make Up",
          ar: "ماكياج",
          points: 26,
        },
        {
          en: "Nice Haircut",
          ar: "قصة شعر جميلة",
          points: 23,
        },
        {
          en: "Great Smile",
          ar: "ابتسامة عظيمة",
          points: 13,
        },
        {
          en: "Personality",
          ar: "شخصية",
          points: 12,
        },
        {
          en: "Clothes",
          ar: "ملابس",
          points: 8,
        },
        {
          en: "Money",
          ar: "مال",
          points: 7,
        },
        {
          en: "Alcohol",
          ar: "الكحول",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something Kids Get Away With In Schools Today, That They Wouldn’t Have 50 Years Ago.",
      ar: "قم بتسمية شيء يفلت منه الأطفال في المدارس اليوم، ولم يكن من الممكن أن يحصلوا عليه قبل 50 عامًا.",
      answers: [
        {
          en: "Talking Back",
          ar: "الحديث مرة أخرى",
          points: 28,
        },
        {
          en: "Swearing",
          ar: "الشتائم",
          points: 26,
        },
        {
          en: "Cheating",
          ar: "الغش",
          points: 17,
        },
        {
          en: "Chewing Gum",
          ar: "مضغ العلكة",
          points: 10,
        },
        {
          en: "Use Cell Phone",
          ar: "استخدام الهاتف الخليوي",
          points: 8,
        },
        {
          en: "Skipping Class",
          ar: "تخطي الصف",
          points: 4,
        },
        {
          en: "Arriving Late",
          ar: "الوصول متأخرا",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Reason Why A Man Might Seem Too Immature To Date",
      ar: "اذكر سببًا يجعل الرجل يبدو غير ناضج جدًا حتى الآن",
      answers: [
        {
          en: "Younger Man",
          ar: "الرجل الأصغر سنا",
          points: 35,
        },
        {
          en: "Lives With Parents",
          ar: "يعيش مع الوالدين",
          points: 23,
        },
        {
          en: "No Job",
          ar: "لا وظيفة",
          points: 17,
        },
        {
          en: "No Car",
          ar: "لا سيارة",
          points: 8,
        },
        {
          en: "Goofs Around",
          ar: "الأبله حولها",
          points: 8,
        },
        {
          en: "No Money",
          ar: "لا مال",
          points: 4,
        },
        {
          en: "Baby Face",
          ar: "وجه الطفل",
          points: 4,
        },
      ],
    },
    {
      en: "Other Than A Bar, Name A Place Where It’s Common To Get Hit On.",
      ar: "بخلاف الحانات، قم بتسمية مكان من الشائع التعرض للضرب فيه.",
      answers: [
        {
          en: "Work/School",
          ar: "العمل/المدرسة",
          points: 33,
        },
        {
          en: "Party",
          ar: "حزب",
          points: 18,
        },
        {
          en: "Shopping Center",
          ar: "مركز تسوق",
          points: 13,
        },
        {
          en: "Gym",
          ar: "نادي رياضي",
          points: 12,
        },
        {
          en: "Church",
          ar: "كنيسة",
          points: 10,
        },
        {
          en: "Park",
          ar: "حديقة",
          points: 7,
        },
        {
          en: "Beach",
          ar: "شاطئ",
          points: 6,
        },
      ],
    },
    {
      en: "Name An Animal With A Terrifying Bite.",
      ar: "قم بتسمية حيوان ذو عضة مرعبة.",
      answers: [
        {
          en: "Snake",
          ar: "ثعبان",
          points: 23,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 18,
        },
        {
          en: "Shark",
          ar: "سمك القرش",
          points: 18,
        },
        {
          en: "Lion",
          ar: "الأسد",
          points: 17,
        },
        {
          en: "Tiger",
          ar: "نمر",
          points: 11,
        },
        {
          en: "Alligator",
          ar: "التمساح",
          points: 5,
        },
        {
          en: "Bear",
          ar: "دُبٌّ",
          points: 5,
        },
      ],
    },
    {
      en: "Why Might Someone’s Phone Number Be Unlisted?",
      ar: "لماذا قد يكون رقم هاتف شخص ما غير مدرج؟",
      answers: [
        {
          en: "Privacy",
          ar: "خصوصية",
          points: 35,
        },
        {
          en: "Famous",
          ar: "مشهور",
          points: 17,
        },
        {
          en: "Avoid Telemarketers",
          ar: "تجنب المسوقين عبر الهاتف",
          points: 12,
        },
        {
          en: "Occupation",
          ar: "إشغال",
          points: 11,
        },
        {
          en: "Getting Prank Calls",
          ar: "الحصول على مكالمات مزحة",
          points: 10,
        },
        {
          en: "Just Moved",
          ar: "انتقلت للتو",
          points: 5,
        },
        {
          en: "Bill Collectors",
          ar: "جامعي الفاتورة",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something That Can Go Wrong During A First Kiss With Someone",
      ar: "قم بتسمية شيء يمكن أن يحدث بشكل خاطئ أثناء القبلة الأولى مع شخص ما",
      answers: [
        {
          en: "Bad Breath",
          ar: "رائحة الفم الكريهة",
          points: 35,
        },
        {
          en: "Miss Their Mouth",
          ar: "ملكة جمال فمهم",
          points: 16,
        },
        {
          en: "Bump Nose/ Head",
          ar: "نتوء الأنف / الرأس",
          points: 12,
        },
        {
          en: "Cough",
          ar: "سعال",
          points: 8,
        },
        {
          en: "Sneeze",
          ar: "يعطس",
          points: 8,
        },
        {
          en: "Burp",
          ar: "تجشؤ",
          points: 8,
        },
        {
          en: "Bite Up",
          ar: "لدغة",
          points: 7,
        },
      ],
    },
    {
      en: "Name Something That People Use Less In The Summer Than In The Winter",
      ar: "اذكر شيئًا يستخدمه الناس أقل في الصيف منه في الشتاء",
      answers: [
        {
          en: "Coat",
          ar: "معطف",
          points: 43,
        },
        {
          en: "Heater",
          ar: "سخان",
          points: 29,
        },
        {
          en: "Gloves",
          ar: "قفازات",
          points: 6,
        },
        {
          en: "Shovel",
          ar: "مجرفة",
          points: 6,
        },
        {
          en: "Boots",
          ar: "أحذية",
          points: 5,
        },
        {
          en: "Sweater",
          ar: "سترة",
          points: 5,
        },
        {
          en: "Blankets",
          ar: "البطانيات",
          points: 3,
        },
      ],
    },
    {
      en: "Name An Odor That’s So Distinct, You Know Right Away What It Is",
      ar: "قم بتسمية رائحة مميزة جدًا، وستعرف ما هي على الفور",
      answers: [
        {
          en: "Skunk",
          ar: "الظربان",
          points: 22,
        },
        {
          en: "Garlic",
          ar: "ثوم",
          points: 18,
        },
        {
          en: "Onions",
          ar: "البصل",
          points: 17,
        },
        {
          en: "Poop",
          ar: "يتبرّز",
          points: 13,
        },
        {
          en: "Roses",
          ar: "الورود",
          points: 10,
        },
        {
          en: "Gasoline",
          ar: "الغازولين",
          points: 8,
        },
        {
          en: "Body Odor",
          ar: "رائحة الجسم",
          points: 7,
        },
      ],
    },
    {
      en: "Name A Type Of Club",
      ar: "اسم نوع النادي",
      answers: [
        {
          en: "Golf Club",
          ar: "نادي الجولف",
          points: 50,
        },
        {
          en: "Night Club",
          ar: "النادي الليلي",
          points: 22,
        },
        {
          en: "Gentleman’s Club",
          ar: "نادي السادة",
          points: 8,
        },
        {
          en: "Club Sandwich",
          ar: "كلوب ساندويتش",
          points: 5,
        },
        {
          en: "Billy Club",
          ar: "نادي بيلي",
          points: 5,
        },
        {
          en: "Country Club",
          ar: "نادي ريفي",
          points: 4,
        },
        {
          en: "Book Club",
          ar: "نادي الكتاب",
          points: 3,
        },
      ],
    },
    {
      en: "Name a Rowdy Star Who Might Benefit From Going To Charm School",
      ar: "قم بتسمية النجم المشاكس الذي قد يستفيد من الذهاب إلى مدرسة السحر",
      answers: [
        {
          en: "Dennis Rodman",
          ar: "دينيس رودمان",
          points: 22,
        },
        {
          en: "Charlie Sheen",
          ar: "تشارلي شين",
          points: 20,
        },
        {
          en: "Paris Hilton",
          ar: "باريس هيلتون",
          points: 16,
        },
        {
          en: "Lindsay Lohan",
          ar: "ليندسي لوهان",
          points: 15,
        },
        {
          en: "Mike Tyson",
          ar: "مايك تايسون",
          points: 7,
        },
        {
          en: "Kid Rock",
          ar: "كيد روك",
          points: 7,
        },
        {
          en: "Britney Spears",
          ar: "بريتني سبيرز",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something A Person Does That Slows Down The Checkout Line At The Supermarket",
      ar: "قم بتسمية شيء يفعله شخص ما ويؤدي إلى إبطاء خط الدفع في السوبر ماركت",
      answers: [
        {
          en: "Use Coupons",
          ar: "استخدام كوبونات",
          points: 30,
        },
        {
          en: "Talk",
          ar: "يتحدث",
          points: 20,
        },
        {
          en: "Write Check",
          ar: "Write Check",
          points: 16,
        },
        {
          en: "Price Check",
          ar: "التحقق من الأسعار",
          points: 9,
        },
        {
          en: "Count Change",
          ar: "عد التغيير",
          points: 6,
        },
        {
          en: "Read Magazines",
          ar: "قراءة المجلات",
          points: 4,
        },
        {
          en: "Buy Too Many Items",
          ar: "شراء الكثير من العناصر",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Complaint People Have About Their Cell Phones",
      ar: "قم بتسمية شكوى لدى الأشخاص بشأن هواتفهم المحمولة",
      answers: [
        {
          en: "No Service",
          ar: "لا توجد خدمة",
          points: 21,
        },
        {
          en: "Dropped Calls",
          ar: "المكالمات المسقطة",
          points: 19,
        },
        {
          en: "Fuzzy Reception",
          ar: "استقبال غامض",
          points: 16,
        },
        {
          en: "Expensive",
          ar: "غالي",
          points: 14,
        },
        {
          en: "Batteries Die Fast",
          ar: "البطاريات تموت بسرعة",
          points: 12,
        },
        {
          en: "Break Easily",
          ar: "كسر بسهولة",
          points: 4,
        },
        {
          en: "Can’t Hear Well",
          ar: "لا أستطيع أن أسمع جيدا",
          points: 3,
        },
      ],
    },
    {
      en: "Name An Animal With Sharp Teeth",
      ar: "اسم حيوان ذو أسنان حادة",
      answers: [
        {
          en: "Shark",
          ar: "سمك القرش",
          points: 36,
        },
        {
          en: "Tiger",
          ar: "نمر",
          points: 20,
        },
        {
          en: "Lion",
          ar: "الأسد",
          points: 18,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 11,
        },
        {
          en: "Bear",
          ar: "دُبٌّ",
          points: 7,
        },
        {
          en: "Wolf",
          ar: "ذئب",
          points: 4,
        },
        {
          en: "Cat",
          ar: "قطة",
          points: 3,
        },
      ],
    },
    {
      en: "Name An Animal Or Person Who Might Spend Time In A Tree",
      ar: "قم بتسمية حيوان أو شخص قد يقضي وقتًا في شجرة",
      answers: [
        {
          en: "Tarzan",
          ar: "طرزان",
          points: 22,
        },
        {
          en: "Bird Watcher",
          ar: "مراقب الطيور",
          points: 21,
        },
        {
          en: "Monkey",
          ar: "قرد",
          points: 15,
        },
        {
          en: "Tree Trimmer",
          ar: "ماكينة تشذيب الأشجار",
          points: 12,
        },
        {
          en: "Bird",
          ar: "طائر",
          points: 9,
        },
        {
          en: "Firefighter",
          ar: "رجل الاطفاء",
          points: 9,
        },
        {
          en: "Child",
          ar: "طفل",
          points: 7,
        },
      ],
    },
    {
      en: "Name A Sympton That Would Cause You To Say, “I Think I’m Coming Down With Something.”",
      ar: 'قم بتسمية العَرَض الذي قد يجعلك تقول: "أعتقد أنني سأواجه شيئًا ما".',
      answers: [
        {
          en: "Runny Nose",
          ar: "سيلان الأنف",
          points: 19,
        },
        {
          en: "Coughing",
          ar: "السعال",
          points: 17,
        },
        {
          en: "Fever",
          ar: "حمى",
          points: 14,
        },
        {
          en: "Sneezing",
          ar: "العطس",
          points: 14,
        },
        {
          en: "Sore Throat",
          ar: "التهاب الحلق",
          points: 10,
        },
        {
          en: "Stuffy Head",
          ar: "رئيس خانق",
          points: 9,
        },
        {
          en: "Chills",
          ar: "قشعريرة",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something A Teenager Couldn’t Live Without",
      ar: "قم بتسمية شيء لا يستطيع المراهق العيش بدونه",
      answers: [
        {
          en: "Cell Phone",
          ar: "الهاتف الخلوي",
          points: 49,
        },
        {
          en: "Computer",
          ar: "حاسوب",
          points: 13,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 12,
        },
        {
          en: "Music",
          ar: "موسيقى",
          points: 9,
        },
        {
          en: "TV",
          ar: "تلفزيون",
          points: 7,
        },
        {
          en: "Money",
          ar: "مال",
          points: 6,
        },
        {
          en: "Clothes",
          ar: "ملابس",
          points: 3,
        },
      ],
    },
    {
      en: "Name Someplace Were You’d See A Lot Of People Gossiping",
      ar: "قم بتسمية مكان ما حيث كنت ترى الكثير من الناس يثرثرون",
      answers: [
        {
          en: "Party",
          ar: "حزب",
          points: 24,
        },
        {
          en: "Mall",
          ar: "مول",
          points: 20,
        },
        {
          en: "Place Of Worship",
          ar: "مكان العبادة",
          points: 18,
        },
        {
          en: "Work",
          ar: "عمل",
          points: 14,
        },
        {
          en: "School",
          ar: "مدرسة",
          points: 10,
        },
        {
          en: "Hair Saloon",
          ar: "صالون الشعر",
          points: 5,
        },
        {
          en: "Coffee Shop",
          ar: "مقهى",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Halloween Costume Adults Wear To Look Sexy.",
      ar: "قم بتسمية زي الهالوين الذي يرتديه الكبار ليبدو مثيرًا.",
      answers: [
        {
          en: "Nurse",
          ar: "ممرضة",
          points: 34,
        },
        {
          en: "Maid",
          ar: "خادمة",
          points: 21,
        },
        {
          en: "Devil",
          ar: "شيطان",
          points: 17,
        },
        {
          en: "Cat",
          ar: "قطة",
          points: 11,
        },
        {
          en: "Witch",
          ar: "ساحرة",
          points: 9,
        },
        {
          en: "Vampire",
          ar: "مصاص دماء",
          points: 4,
        },
        {
          en: "Cop",
          ar: "شرطي",
          points: 3,
        },
      ],
    },
    {
      en: "If There Was A School For Beauty Queens, Name A Skill That Would Be Taught There.",
      ar: "إذا كانت هناك مدرسة لملكات الجمال، فاذكر المهارة التي سيتم تدريسها هناك.",
      answers: [
        {
          en: "Pageant Walk",
          ar: "مسيرة المسابقة",
          points: 30,
        },
        {
          en: "Winning Smile",
          ar: "ابتسامة الفوز",
          points: 16,
        },
        {
          en: "Make Up Application",
          ar: "تطبيق المكياج",
          points: 16,
        },
        {
          en: "Pageant Wave",
          ar: "موجة المسابقة",
          points: 14,
        },
        {
          en: "Hair Styling",
          ar: "تصفيف الشعر",
          points: 9,
        },
        {
          en: "Singing",
          ar: "الغناء",
          points: 6,
        },
        {
          en: "Correct Posture",
          ar: "الموقف الصحيح",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something A Man Wouldn’t Want To Have Happen To Him While He’s Giving A Speech",
      ar: "اذكر شيئًا لا يريد الرجل أن يحدث له أثناء إلقاء خطابه",
      answers: [
        {
          en: "Fly Is Open",
          ar: "الطيران مفتوح",
          points: 25,
        },
        {
          en: "Burp",
          ar: "تجشؤ",
          points: 15,
        },
        {
          en: "Get Laughed At",
          ar: "اضحك على",
          points: 14,
        },
        {
          en: "Break Wind",
          ar: "كسر الريح",
          points: 14,
        },
        {
          en: "Being Heckled",
          ar: "يجري مضايقة",
          points: 10,
        },
        {
          en: "Stutter",
          ar: "تلعثم",
          points: 8,
        },
        {
          en: "Coughing",
          ar: "السعال",
          points: 8,
        },
      ],
    },
    {
      en: "Name An Animal That Associated With Being Dirty",
      ar: "قم بتسمية الحيوان المرتبط بكونه قذرًا",
      answers: [
        {
          en: "Pig",
          ar: "خنزير",
          points: 37,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 30,
        },
        {
          en: "Rodent",
          ar: "القوارض",
          points: 10,
        },
        {
          en: "Skunk",
          ar: "الظربان",
          points: 7,
        },
        {
          en: "Monkey",
          ar: "قرد",
          points: 7,
        },
        {
          en: "Elephant",
          ar: "الفيل",
          points: 4,
        },
        {
          en: "Cow",
          ar: "بقرة",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Kind Of Bell",
      ar: "اسم نوع من الجرس",
      answers: [
        {
          en: "Liberty Bell",
          ar: "جرس الحرية",
          points: 27,
        },
        {
          en: "Door Bell",
          ar: "جرس الباب",
          points: 22,
        },
        {
          en: "Church Bell",
          ar: "جرس الكنيسة",
          points: 12,
        },
        {
          en: "Wedding Bells",
          ar: "أجراس الزفاف",
          points: 9,
        },
        {
          en: "School Bell",
          ar: "جرس المدرسة",
          points: 9,
        },
        {
          en: "Jingle Bells",
          ar: "جلجل أجراس",
          points: 9,
        },
        {
          en: "Cow Bell",
          ar: "بقرة الجرس",
          points: 7,
        },
      ],
    },
    {
      en: "Name A Complaint A Pregnant Women Might Have",
      ar: "قم بتسمية شكوى قد تتقدم بها المرأة الحامل",
      answers: [
        {
          en: "Clothes Don’t Fit",
          ar: "الملابس لا تناسب",
          points: 24,
        },
        {
          en: "Back Pain",
          ar: "آلام الظهر",
          points: 16,
        },
        {
          en: "Hungry",
          ar: "جائع",
          points: 14,
        },
        {
          en: "Tired",
          ar: "مرهق",
          points: 14,
        },
        {
          en: "Morning Sickness",
          ar: "غثيان الصباح",
          points: 12,
        },
        {
          en: "Swollen Feet",
          ar: "تورم القدمين",
          points: 10,
        },
        {
          en: "Cramps",
          ar: "تشنجات",
          points: 7,
        },
      ],
    },
    {
      en: "Name Something A Woman Might Complain That Her Husband Never Wants To Do",
      ar: "اذكر شيئًا قد تشتكي المرأة من أن زوجها لا يريد فعله أبدًا",
      answers: [
        {
          en: "Go Out",
          ar: "الخروج",
          points: 24,
        },
        {
          en: "Clean",
          ar: "ينظف",
          points: 18,
        },
        {
          en: "Be Intimate",
          ar: "كن حميمًا",
          points: 4,
        },
        {
          en: "Cook",
          ar: "يطبخ",
          points: 12,
        },
        {
          en: "Talk",
          ar: "يتحدث",
          points: 10,
        },
        {
          en: "Shop",
          ar: "محل",
          points: 5,
        },
        {
          en: "Cuddle",
          ar: "يحضن",
          points: 5,
        },
      ],
    },
    {
      en: "What Word Would You Use To Describe A Very Attractive Person",
      ar: "ما هي الكلمة التي تستخدمها لوصف شخص جذاب للغاية؟",
      answers: [
        {
          en: "Hot",
          ar: "حار",
          points: 28,
        },
        {
          en: "Beautiful",
          ar: "جميل",
          points: 24,
        },
        {
          en: "Sexy",
          ar: "جنسي",
          points: 17,
        },
        {
          en: "Pretty",
          ar: "جميل",
          points: 6,
        },
        {
          en: "Gorgeous",
          ar: "خلاب",
          points: 5,
        },
        {
          en: "Handsome",
          ar: "وسيم",
          points: 4,
        },
        {
          en: "Cute",
          ar: "لطيف",
          points: 4,
        },
      ],
    },
    {
      en: "Tell Me Something You Over-Did As A Teenager, That You Can Laugh About Today.",
      ar: "أخبرني بشيء أفرطت في فعله عندما كنت مراهقًا، والذي يمكنك أن تضحك عليه اليوم.",
      answers: [
        {
          en: "Drinking",
          ar: "الشرب",
          points: 26,
        },
        {
          en: "Hair Styling",
          ar: "تصفيف الشعر",
          points: 20,
        },
        {
          en: "Going Out/Partying",
          ar: "الخروج / الحفلات",
          points: 20,
        },
        {
          en: "Makeup",
          ar: "ماكياج",
          points: 9,
        },
        {
          en: "Eating Junk Food",
          ar: "تناول الوجبات السريعة",
          points: 8,
        },
        {
          en: "Smoking",
          ar: "تدخين",
          points: 8,
        },
        {
          en: "Dieting/Exercise",
          ar: "اتباع نظام غذائي / ممارسة الرياضة",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Reason Your Eyes Might Water.",
      ar: "اذكر سببًا قد يجعل عيناك تدمع.",
      answers: [
        {
          en: "Cutting onions",
          ar: "قطع البصل",
          points: 37,
        },
        {
          en: "Crying",
          ar: "بكاء",
          points: 23,
        },
        {
          en: "Allergies",
          ar: "الحساسية",
          points: 10,
        },
        {
          en: "Smoke",
          ar: "دخان",
          points: 8,
        },
        {
          en: "Yawning",
          ar: "التثاؤب",
          points: 7,
        },
        {
          en: "Sick",
          ar: "مريض",
          points: 6,
        },
        {
          en: "Dirt",
          ar: "الأوساخ",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something That A Couple Often Does Once The Kids Have To Move Out",
      ar: "اذكر شيئًا يفعله الزوجان غالبًا عندما يضطر الأطفال إلى الخروج",
      answers: [
        {
          en: "Travel",
          ar: "يسافر",
          points: 37,
        },
        {
          en: "Rekindle Romance",
          ar: "إحياء الرومانسية",
          points: 16,
        },
        {
          en: "Downsize",
          ar: "تقليص الحجم",
          points: 13,
        },
        {
          en: "Retire",
          ar: "تقاعد",
          points: 7,
        },
        {
          en: "Remodel",
          ar: "إعادة تصميم",
          points: 6,
        },
        {
          en: "Throw A Party",
          ar: "رمي حفلة",
          points: 5,
        },
        {
          en: "Divorce",
          ar: "الطلاق",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Place Where You Nap Just To Pass The Time",
      ar: "قم بتسمية مكان تغفو فيه فقط لتمضية الوقت",
      answers: [
        {
          en: "At Home",
          ar: "في البيت",
          points: 30,
        },
        {
          en: "Work",
          ar: "عمل",
          points: 24,
        },
        {
          en: "Long Car/ Bus Ride",
          ar: "رحلة طويلة بالسيارة / الحافلة",
          points: 18,
        },
        {
          en: "Airport/ Plane",
          ar: "المطار / الطائرة",
          points: 7,
        },
        {
          en: "Park",
          ar: "حديقة",
          points: 7,
        },
        {
          en: "School",
          ar: "مدرسة",
          points: 7,
        },
        {
          en: "Doctor’s Office",
          ar: "مكتب الطبيب",
          points: 3,
        },
      ],
    },
    {
      en: "Tell Me A Word People Use To Describe Female Babies But Not Male Babies",
      ar: "أخبرني عن الكلمة التي يستخدمها الناس لوصف الأطفال الإناث وليس الأطفال الذكور",
      answers: [
        {
          en: "Pretty",
          ar: "جميل",
          points: 35,
        },
        {
          en: "Cute",
          ar: "لطيف",
          points: 29,
        },
        {
          en: "Beautiful",
          ar: "جميل",
          points: 12,
        },
        {
          en: "Princess",
          ar: "أميرة",
          points: 7,
        },
        {
          en: "Precious",
          ar: "ثمين",
          points: 6,
        },
        {
          en: "Adorable",
          ar: "محبوب",
          points: 4,
        },
        {
          en: "Doll",
          ar: "لعبة",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Famous Woman Who Speaks With An Accent To Americans.",
      ar: "قم بتسمية امرأة مشهورة تتحدث بلكنة للأمريكيين.",
      answers: [
        {
          en: "Sophia Loren",
          ar: "صوفيا لورين",
          points: 23,
        },
        {
          en: "Queen Elizabeth",
          ar: "الملكة اليزابيث",
          points: 21,
        },
        {
          en: "Nicole Kidman",
          ar: "نيكول كيدمان",
          points: 16,
        },
        {
          en: "Madonna",
          ar: "مادونا",
          points: 13,
        },
        {
          en: "Zsa Zsa Gabor",
          ar: "زا زا جابور",
          points: 12,
        },
        {
          en: "Penelope Cruz",
          ar: "بينيلوبي كروز",
          points: 7,
        },
        {
          en: "Dolly Parton",
          ar: "دوللي بارتون",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Body Part That Gets Clothed In Winter, But Stays Naked All Summer.",
      ar: "اذكر اسم جزء من الجسم الذي يلبس في الشتاء، لكنه يبقى عاريًا طوال الصيف.",
      answers: [
        {
          en: "Hands",
          ar: "الأيدي",
          points: 20,
        },
        {
          en: "Legs",
          ar: "الساقين",
          points: 20,
        },
        {
          en: "Forearms",
          ar: "الساعدين",
          points: 17,
        },
        {
          en: "Head",
          ar: "رأس",
          points: 17,
        },
        {
          en: "Neck",
          ar: "رقبة",
          points: 17,
        },
        {
          en: "Feet",
          ar: "قدم",
          points: 9,
        },
        {
          en: "Ears",
          ar: "آذان",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Term For Someone Who Thinks Very Highly Of Himself",
      ar: "اذكر مصطلحًا لشخص يفكر كثيرًا في نفسه",
      answers: [
        {
          en: "Conceited",
          ar: "مغرور",
          points: 27,
        },
        {
          en: "Arrogant",
          ar: "متكبر",
          points: 19,
        },
        {
          en: "Cocky",
          ar: "مغرور",
          points: 17,
        },
        {
          en: "Stuck Up",
          ar: "عالقة",
          points: 15,
        },
        {
          en: "Snob",
          ar: "متكبر",
          points: 9,
        },
        {
          en: "Vain",
          ar: "عبثا",
          points: 5,
        },
        {
          en: "Egotistical",
          ar: "مغرور",
          points: 5,
        },
      ],
    },
    {
      en: "Name An Expression That Begins With The Word â€œFirstâ€ ",
      ar: 'اذكر التعبير الذي يبدأ بكلمة "أولا".',
      answers: [
        {
          en: "First Come 1St Served",
          ar: "يأتي أولاً يخدم أولاً",
          points: 26,
        },
        {
          en: "First Love",
          ar: "الحب الأول",
          points: 18,
        },
        {
          en: "First Class",
          ar: "الدرجة الأولى",
          points: 10,
        },
        {
          en: "First Things First",
          ar: "الأشياء الأولى أولا",
          points: 10,
        },
        {
          en: "First Time",
          ar: "المرة الأولى",
          points: 10,
        },
        {
          en: "First Kiss",
          ar: "القبلة الأولى",
          points: 10,
        },
        {
          en: "First Base",
          ar: "القاعدة الأولى",
          points: 10,
        },
      ],
    },
    {
      en: "Name A School Subject That People Often Become Bad At In Adulthood.",
      ar: "قم بتسمية المادة الدراسية التي غالبًا ما يصبح الناس سيئين فيها في مرحلة البلوغ.",
      answers: [
        {
          en: "Math",
          ar: "الرياضيات",
          points: 35,
        },
        {
          en: "English/Spelling",
          ar: "الإنجليزية / التهجئة",
          points: 21,
        },
        {
          en: "History",
          ar: "تاريخ",
          points: 20,
        },
        {
          en: "Science",
          ar: "علوم",
          points: 12,
        },
        {
          en: "Geography",
          ar: "الجغرافيا",
          points: 5,
        },
        {
          en: "Physical Fitness",
          ar: "اللياقة البدنية",
          points: 3,
        },
        {
          en: "Foreign Language",
          ar: "لغة أجنبية",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Personality Trait You Hope People Use When Talking About You",
      ar: "قم بتسمية سمة شخصية تأمل أن يستخدمها الناس عند التحدث عنك",
      answers: [
        {
          en: "Kind",
          ar: "عطوف",
          points: 38,
        },
        {
          en: "Funny",
          ar: "مضحك",
          points: 25,
        },
        {
          en: "Friendly",
          ar: "ودي",
          points: 10,
        },
        {
          en: "Smart",
          ar: "ذكي",
          points: 9,
        },
        {
          en: "Honest",
          ar: "أمين",
          points: 7,
        },
        {
          en: "Happy",
          ar: "سعيد",
          points: 4,
        },
        {
          en: "Fun",
          ar: "هزار",
          points: 3,
        },
      ],
    },
    {
      en: "What,Specifically Might Someone Do When They Walk Into Their Surprise Party.",
      ar: "ما الذي قد يفعله شخص ما على وجه التحديد عندما يدخل إلى حفلته المفاجئة؟",
      answers: [
        {
          en: "Scream",
          ar: "الصراخ",
          points: 34,
        },
        {
          en: "Cry",
          ar: "يبكي",
          points: 20,
        },
        {
          en: "Jump",
          ar: "القفز",
          points: 16,
        },
        {
          en: "Smile",
          ar: "يبتسم",
          points: 8,
        },
        {
          en: "Faint",
          ar: "إِغماء",
          points: 7,
        },
        {
          en: "Laugh",
          ar: "يضحك",
          points: 6,
        },
        {
          en: "Gasp",
          ar: "اللحظات",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something An Underage Teen Needs Their Parents’ Permission To Do",
      ar: "قم بتسمية شيء يحتاج المراهق القاصر إلى إذن والديه للقيام به",
      answers: [
        {
          en: "Drive",
          ar: "يقود",
          points: 39,
        },
        {
          en: "Go Out",
          ar: "الخروج",
          points: 28,
        },
        {
          en: "Date",
          ar: "تاريخ",
          points: 11,
        },
        {
          en: "Stay Out Late",
          ar: "البقاء خارجا في وقت متأخر",
          points: 7,
        },
        {
          en: "Move Out",
          ar: "تحرك للخارج",
          points: 4,
        },
        {
          en: "Get A Tattoo",
          ar: "احصل على وشم",
          points: 3,
        },
        {
          en: "Get Married",
          ar: "تزوج",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Wouldn’t Want Your Children To Do As You Do?",
      ar: "اذكر شيئًا لا تريد أن يفعله أطفالك كما تفعل؟",
      answers: [
        {
          en: "Smoke",
          ar: "دخان",
          points: 33,
        },
        {
          en: "Drink Alcohol",
          ar: "شرب الكحول",
          points: 26,
        },
        {
          en: "Swear",
          ar: "يُقسم",
          points: 18,
        },
        {
          en: "Eat",
          ar: "يأكل",
          points: 8,
        },
        {
          en: "Drive",
          ar: "يقود",
          points: 5,
        },
        {
          en: "Work",
          ar: "عمل",
          points: 4,
        },
        {
          en: "Gossip",
          ar: "نميمة",
          points: 3,
        },
      ],
    },
    {
      en: "Name An Article Of Clothing You Can’t Wash In The Wash Machine",
      ar: "قم بتسمية قطعة من الملابس التي لا يمكنك غسلها في الغسالة",
      answers: [
        {
          en: "Shoes",
          ar: "أحذية",
          points: 29,
        },
        {
          en: "Brassiere",
          ar: "حمالة",
          points: 21,
        },
        {
          en: "Hat",
          ar: "قبعة",
          points: 16,
        },
        {
          en: "Coat",
          ar: "معطف",
          points: 13,
        },
        {
          en: "Sweater",
          ar: "سترة",
          points: 9,
        },
        {
          en: "Suit",
          ar: "بدلة",
          points: 7,
        },
        {
          en: "Gown",
          ar: "ثوب",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Place Where You May Have To Stand For A Long Time",
      ar: "قم بتسمية مكان قد تضطر إلى الوقوف فيه لفترة طويلة",
      answers: [
        {
          en: "Bank",
          ar: "بنك",
          points: 23,
        },
        {
          en: "DMV",
          ar: "DMV",
          points: 21,
        },
        {
          en: "Concert",
          ar: "حفلة موسيقية",
          points: 15,
        },
        {
          en: "Bus Stop",
          ar: "محطة الحافلات",
          points: 14,
        },
        {
          en: "Amusement Park",
          ar: "حديقة الملاهي",
          points: 8,
        },
        {
          en: "Work",
          ar: "عمل",
          points: 7,
        },
        {
          en: "Grocery Checkout",
          ar: "الخروج من البقالة",
          points: 7,
        },
      ],
    },
    {
      en: "Name An Extra Something You Add To Your Mac And Cheese To Make It More Satisfying",
      ar: "قم بتسمية شيء إضافي تضيفه إلى ماك آند تشيز الخاص بك لجعله أكثر إرضاءً",
      answers: [
        {
          en: "Ketchup",
          ar: "كاتشب",
          points: 33,
        },
        {
          en: "Salt",
          ar: "ملح",
          points: 19,
        },
        {
          en: "Extra Cheese",
          ar: "جبنة اضافية",
          points: 14,
        },
        {
          en: "Pepper",
          ar: "الفلفل",
          points: 11,
        },
        {
          en: "Hot Dogs",
          ar: "نقانق",
          points: 7,
        },
        {
          en: "Tuna",
          ar: "تونة",
          points: 6,
        },
        {
          en: "Ham",
          ar: "لحم خنزير",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something A Woman Might Want To Cover Up With Makeup",
      ar: "اذكر شيئًا قد ترغب المرأة في تغطيته بالمكياج",
      answers: [
        {
          en: "Blemish",
          ar: "عيب",
          points: 65,
        },
        {
          en: "Scar",
          ar: "ندبة",
          points: 9,
        },
        {
          en: "Bruise",
          ar: "كدمة",
          points: 6,
        },
        {
          en: "Wrinkles",
          ar: "التجاعيد",
          points: 6,
        },
        {
          en: "Mole",
          ar: "الخلد",
          points: 5,
        },
        {
          en: "Freckles",
          ar: "النمش",
          points: 3,
        },
        {
          en: "Hickey",
          ar: "هيكي",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something That A Man Had Better Not Take Along On His Honeymoon",
      ar: "اذكر شيئًا من الأفضل ألا يأخذه الرجل معك في شهر العسل",
      answers: [
        {
          en: "Another Woman",
          ar: "امرأة أخرى",
          points: 33,
        },
        {
          en: "Cell Phone",
          ar: "الهاتف الخلوي",
          points: 17,
        },
        {
          en: "His Parents",
          ar: "والديه",
          points: 14,
        },
        {
          en: "Work/ Laptop",
          ar: "العمل/الكمبيوتر المحمول",
          points: 12,
        },
        {
          en: "His Best Friend",
          ar: "أفضل صديق له",
          points: 6,
        },
        {
          en: "Golf Clubs",
          ar: "نوادي الجولف",
          points: 5,
        },
        {
          en: "His Pet",
          ar: "حيوانه الأليف",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Profession Where You’d Have To Smile A Lot.",
      ar: "قم بتسمية مهنة يجب أن تبتسم فيها كثيرًا.",
      answers: [
        {
          en: "Model",
          ar: "نموذج",
          points: 41,
        },
        {
          en: "Salesperson",
          ar: "مندوب مبيعات",
          points: 24,
        },
        {
          en: "Flight Attendant",
          ar: "مضيفة طيران",
          points: 15,
        },
        {
          en: "Receptionist",
          ar: "موظف استقبال",
          points: 8,
        },
        {
          en: "News Reporter",
          ar: "مراسل الأخبار",
          points: 5,
        },
        {
          en: "Photographer",
          ar: "مصور",
          points: 4,
        },
        {
          en: "Host",
          ar: "يستضيف",
          points: 3,
        },
      ],
    },
    {
      en: "We Asked 100 Women: When You Should Be Focusing On Romance, Name Something Your Mind Is Often Distracted By Instead?",
      ar: "لقد سألنا 100 امرأة: متى يجب عليك التركيز على الرومانسية، اذكر شيئًا غالبًا ما يصرف عقلك عنه؟",
      answers: [
        {
          en: "Job",
          ar: "وظيفة",
          points: 40,
        },
        {
          en: "Kids",
          ar: "أطفال",
          points: 19,
        },
        {
          en: "Bills",
          ar: "فواتير",
          points: 16,
        },
        {
          en: "Eating",
          ar: "الأكل",
          points: 10,
        },
        {
          en: "Other Men",
          ar: "رجال آخرون",
          points: 5,
        },
        {
          en: "Tv",
          ar: "تلفزيون",
          points: 5,
        },
        {
          en: "House",
          ar: "منزل",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Chore People Had To Do During Colonial Times That We Don’t Do Any More",
      ar: "قم بتسمية عمل روتيني كان على الناس القيام به خلال العصور الاستعمارية ولم نعد نقوم به بعد الآن",
      answers: [
        {
          en: "Churn Butter",
          ar: "زبدة زبد",
          points: 28,
        },
        {
          en: "Carry Water",
          ar: "احمل الماء",
          points: 18,
        },
        {
          en: "Handwash Clothes",
          ar: "ملابس غسيل يدوي",
          points: 13,
        },
        {
          en: "Milk Cows",
          ar: "أبقار الحليب",
          points: 13,
        },
        {
          en: "Farm Work",
          ar: "العمل الزراعي",
          points: 10,
        },
        {
          en: "Chop Wood",
          ar: "قطع الخشب",
          points: 10,
        },
        {
          en: "Hunt",
          ar: "مطاردة",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Way You Might Know Someone Is In The Secret Service",
      ar: "قم بتسمية طريقة قد تعرف بها أن شخصًا ما يعمل في الخدمة السرية",
      answers: [
        {
          en: "Dark Sunglasses",
          ar: "نظارات شمسية داكنة",
          points: 32,
        },
        {
          en: "The Way They Dress",
          ar: "الطريقة التي يرتدون بها ملابسهم",
          points: 12,
        },
        {
          en: "Haircut",
          ar: "قصة شعر",
          points: 12,
        },
        {
          en: "With The President",
          ar: "مع الرئيس",
          points: 10,
        },
        {
          en: "Have An Earpiece",
          ar: "لديك سماعة الأذن",
          points: 10,
        },
        {
          en: "They’re Quiet",
          ar: "إنهم هادئون",
          points: 10,
        },
        {
          en: "ID Card",
          ar: "بطاقة الهوية",
          points: 8,
        },
      ],
    },
    {
      en: "Name A Place Where A Woman Would Hate For Her Husband To be When She Went Into Labor",
      ar: "اذكر المكان الذي تكره المرأة أن يكون فيه زوجها عندما تأتي إلى المخاض",
      answers: [
        {
          en: "At The Bar",
          ar: "في البار",
          points: 38,
        },
        {
          en: "At Work",
          ar: "في العمل",
          points: 28,
        },
        {
          en: "Out Of Town",
          ar: "خارج المدينة",
          points: 11,
        },
        {
          en: "At A Strip Club",
          ar: "في نادي التعري",
          points: 9,
        },
        {
          en: "Stuck In A Traffic",
          ar: "عالقة في حركة المرور",
          points: 6,
        },
        {
          en: "In An Airplane",
          ar: "في طائرة",
          points: 4,
        },
        {
          en: "In Jail",
          ar: "في السجن",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Place Where Wish People Wouldn’t Answer Their Cell Phones",
      ar: "قم بتسمية مكان لا يرد فيه الأشخاص على هواتفهم المحمولة",
      answers: [
        {
          en: "Movie Theater",
          ar: "السينما",
          points: 27,
        },
        {
          en: "Place Of Worship",
          ar: "مكان العبادة",
          points: 27,
        },
        {
          en: "Restaurant",
          ar: "مطعم",
          points: 13,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 11,
        },
        {
          en: "Library",
          ar: "مكتبة",
          points: 9,
        },
        {
          en: "At Work",
          ar: "في العمل",
          points: 7,
        },
        {
          en: "In The Bathroom",
          ar: "في الحمام",
          points: 4,
        },
      ],
    },
    {
      en: "What Do You Find Out About A Person Right Away On An Online Dating Site, But Much Later If You Meet In Real Life?",
      ar: "ماذا تكتشف عن شخص ما على الفور على موقع المواعدة عبر الإنترنت، ولكن بعد ذلك بكثير إذا التقيت به في الحياة الحقيقية؟",
      answers: [
        {
          en: "Age",
          ar: "عمر",
          points: 35,
        },
        {
          en: "Weight",
          ar: "وزن",
          points: 30,
        },
        {
          en: "Job",
          ar: "وظيفة",
          points: 10,
        },
        {
          en: "Marital Status",
          ar: "الحالة الاجتماعية",
          points: 9,
        },
        {
          en: "Kids",
          ar: "أطفال",
          points: 7,
        },
        {
          en: "Religion",
          ar: "دِين",
          points: 3,
        },
        {
          en: "Income",
          ar: "دخل",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Two People On A Date Might Share",
      ar: "قم بتسمية شيء قد يشاركه شخصان في موعد غرامي",
      answers: [
        {
          en: "Kiss",
          ar: "قبلة",
          points: 33,
        },
        {
          en: "Drink",
          ar: "شرب",
          points: 24,
        },
        {
          en: "Food",
          ar: "طعام",
          points: 20,
        },
        {
          en: "Bill",
          ar: "فاتورة",
          points: 9,
        },
        {
          en: "Conversation",
          ar: "محادثة",
          points: 5,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 3,
        },
        {
          en: "Interests",
          ar: "الاهتمامات",
          points: 3,
        },
      ],
    },
    {
      en: "Besides Alcohol, Drugs, Or Tobacco, Name Something That People Get Addicted To.",
      ar: "إلى جانب الكحول أو المخدرات أو التبغ، قم بتسمية شيء يدمن عليه الناس.",
      answers: [
        {
          en: "Love",
          ar: "حب",
          points: 24,
        },
        {
          en: "Gambling",
          ar: "القمار",
          points: 20,
        },
        {
          en: "Coffee",
          ar: "قهوة",
          points: 18,
        },
        {
          en: "Eating",
          ar: "الأكل",
          points: 12,
        },
        {
          en: "TV",
          ar: "تلفزيون",
          points: 11,
        },
        {
          en: "Chocolate",
          ar: "الشوكولاته",
          points: 7,
        },
        {
          en: "Internet",
          ar: "إنترنت",
          points: 6,
        },
      ],
    },
    {
      en: "Name An Accent That Many Americans Consider Sexy",
      ar: "اذكرn Accent That Many Americans Consider Sexy",
      answers: [
        {
          en: "French",
          ar: "فرنسي",
          points: 34,
        },
        {
          en: "Italian",
          ar: "ايطالي",
          points: 20,
        },
        {
          en: "Spanish",
          ar: "الأسبانية",
          points: 17,
        },
        {
          en: "British",
          ar: "بريطانية",
          points: 17,
        },
        {
          en: "Southern",
          ar: "جنوبي",
          points: 4,
        },
        {
          en: "Australian",
          ar: "استرالية",
          points: 3,
        },
        {
          en: "Irish",
          ar: "الأيرلندية",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Complaint An Astronaut Might Have About Living On The Space Station",
      ar: "قم بتسمية شكوى قد تكون لدى رائد فضاء بشأن العيش في المحطة الفضائية",
      answers: [
        {
          en: "Bad Food",
          ar: "طعام سيء",
          points: 40,
        },
        {
          en: "Lonely",
          ar: "وحيد",
          points: 18,
        },
        {
          en: "No Gravity",
          ar: "لا الجاذبية",
          points: 15,
        },
        {
          en: "No Bathroom",
          ar: "لا يوجد حمام",
          points: 11,
        },
        {
          en: "No Fresh Air",
          ar: "لا يوجد هواء نقي",
          points: 5,
        },
        {
          en: "Cramped",
          ar: "ضيقة",
          points: 5,
        },
        {
          en: "It’s Cold",
          ar: "انها بارده",
          points: 4,
        },
      ],
    },
    {
      en: "Tell Me A Woman’s Name That Starts With The Letter “J”",
      ar: 'أخبرني عن اسم امرأة يبدأ بحرف "ي"',
      answers: [
        {
          en: "Jennifer",
          ar: "جنيفر",
          points: 27,
        },
        {
          en: "Janet",
          ar: "جانيت",
          points: 20,
        },
        {
          en: "Jane",
          ar: "جين",
          points: 19,
        },
        {
          en: "Joanne",
          ar: "جوان",
          points: 12,
        },
        {
          en: "Judy",
          ar: "جودي",
          points: 5,
        },
        {
          en: "Jamie",
          ar: "جيمي",
          points: 5,
        },
        {
          en: "Jackie",
          ar: "جاكي",
          points: 5,
        },
      ],
    },
    {
      en: "Where Do People Often Go For Their Honeymoons?",
      ar: "أين يذهب الناس غالبًا لقضاء شهر العسل؟",
      answers: [
        {
          en: "Hawaii",
          ar: "هاواي",
          points: 37,
        },
        {
          en: "Bahamas",
          ar: "جزر البهاما",
          points: 15,
        },
        {
          en: "Niagra Falls",
          ar: "شلالات نياجرا",
          points: 11,
        },
        {
          en: "Mexico",
          ar: "المكسيك",
          points: 11,
        },
        {
          en: "Las Vegas",
          ar: "لاس فيجاس",
          points: 8,
        },
        {
          en: "Paris",
          ar: "باريس",
          points: 8,
        },
        {
          en: "Jamaica",
          ar: "جامايكا",
          points: 7,
        },
      ],
    },
    {
      en: "Name Something People Might Put On Cottage Cheese",
      ar: "قم بتسمية شيء قد يضعه الناس على الجبن",
      answers: [
        {
          en: "Peaches",
          ar: "الخوخ",
          points: 21,
        },
        {
          en: "Pineapple",
          ar: "أناناس",
          points: 18,
        },
        {
          en: "Oranges",
          ar: "البرتقال",
          points: 15,
        },
        {
          en: "Pepper",
          ar: "الفلفل",
          points: 15,
        },
        {
          en: "Blueberry",
          ar: "توت",
          points: 12,
        },
        {
          en: "Salt",
          ar: "ملح",
          points: 10,
        },
        {
          en: "Jelly",
          ar: "هلام",
          points: 8,
        },
      ],
    },
    {
      en: "Name Something A Beautiful Woman Might Flirt With Someone In Order To Get",
      ar: "قم بتسمية شيء يمكن للمرأة الجميلة أن تغازله مع شخص ما لكي تحصل عليه",
      answers: [
        {
          en: "Money",
          ar: "مال",
          points: 34,
        },
        {
          en: "Free Drink",
          ar: "مشروب مجاني",
          points: 23,
        },
        {
          en: "Job",
          ar: "وظيفة",
          points: 9,
        },
        {
          en: "Pass On Speeding Ticket",
          ar: "تمرير تذكرة السرعة",
          points: 8,
        },
        {
          en: "Phone Number",
          ar: "رقم التليفون",
          points: 7,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 5,
        },
        {
          en: "Jewelry",
          ar: "مجوهرات",
          points: 5,
        },
      ],
    },
    {
      en: "Name A Gift You Might Buy If You’re A Secret Santa",
      ar: "قم بتسمية الهدية التي قد تشتريها إذا كنت سانتا السري",
      answers: [
        {
          en: "Candles",
          ar: "الشموع",
          points: 19,
        },
        {
          en: "Cookies/ Candy",
          ar: "ملفات تعريف الارتباط / الحلوى",
          points: 18,
        },
        {
          en: "Clothes",
          ar: "ملابس",
          points: 13,
        },
        {
          en: "Toys",
          ar: "ألعاب",
          points: 12,
        },
        {
          en: "Get Certificate",
          ar: "الحصول على الشهادة",
          points: 12,
        },
        {
          en: "Perfume",
          ar: "عطر",
          points: 10,
        },
        {
          en: "Jewelry",
          ar: "مجوهرات",
          points: 9,
        },
      ],
    },
    {
      en: "Name An Activity That’s More Fun To Do When It’s Raining Outside",
      ar: "قم بتسمية نشاط أكثر متعة للقيام به عندما تمطر في الخارج",
      answers: [
        {
          en: "Play Football",
          ar: "العب كرة القدم",
          points: 17,
        },
        {
          en: "Dance",
          ar: "الرقص",
          points: 16,
        },
        {
          en: "Swim",
          ar: "السباحة",
          points: 15,
        },
        {
          en: "Sleep",
          ar: "ينام",
          points: 13,
        },
        {
          en: "Read",
          ar: "يقرأ",
          points: 11,
        },
        {
          en: "Watch TV/Movie",
          ar: "مشاهدة التلفزيون / الفيلم",
          points: 10,
        },
        {
          en: "Jog",
          ar: "هرولة",
          points: 9,
        },
      ],
    },
    {
      en: "Name An Item A Company Might Put Their Logo On And Give Out For Free.",
      ar: "قم بتسمية عنصر قد تضع الشركة شعارها عليه وتوزعه مجانًا.",
      answers: [
        {
          en: "Pen",
          ar: "قلم",
          points: 47,
        },
        {
          en: "Hat",
          ar: "قبعة",
          points: 18,
        },
        {
          en: "Shirt",
          ar: "قميص",
          points: 16,
        },
        {
          en: "Food Service",
          ar: "خدمة الطعام",
          points: 7,
        },
        {
          en: "Magnet",
          ar: "مغناطيس",
          points: 4,
        },
        {
          en: "Cup",
          ar: "كوب",
          points: 3,
        },
        {
          en: "Key Chain",
          ar: "سلسلة المفاتيح",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Word Or Phrase That Has The Word “Key” In It.",
      ar: 'قم بتسمية كلمة أو عبارة تحتوي على كلمة "مفتاح" فيها.',
      answers: [
        {
          en: "Key Chain",
          ar: "سلسلة المفاتيح",
          points: 28,
        },
        {
          en: "Keyhole",
          ar: "ثقب المفتاح",
          points: 19,
        },
        {
          en: "Keyboard",
          ar: "لوحة المفاتيح",
          points: 12,
        },
        {
          en: "House Key",
          ar: "مفتاح البيت",
          points: 10,
        },
        {
          en: "Door Key",
          ar: "مفتاح الباب",
          points: 9,
        },
        {
          en: "Keystone",
          ar: "كيستون",
          points: 9,
        },
        {
          en: "Keynote",
          ar: "الكلمة الرئيسية",
          points: 9,
        },
      ],
    },
    {
      en: "Name An Animal That A Person Can Be Referred To As",
      ar: "اسم الحيوان الذي يمكن أن يشير إليه الشخص",
      answers: [
        {
          en: "Dog",
          ar: "كلب",
          points: 49,
        },
        {
          en: "Pig",
          ar: "خنزير",
          points: 24,
        },
        {
          en: "Tiger",
          ar: "نمر",
          points: 6,
        },
        {
          en: "Bear",
          ar: "دُبٌّ",
          points: 5,
        },
        {
          en: "Fox",
          ar: "فوكس",
          points: 4,
        },
        {
          en: "Cow",
          ar: "بقرة",
          points: 3,
        },
        {
          en: "Kitten",
          ar: "هريرة",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Most Parents Can’t Wait Until Their Child Starts Doing On His Own",
      ar: "قم بتسمية شيء لا يستطيع معظم الآباء الانتظار حتى يبدأ طفلهم في القيام به بمفرده",
      answers: [
        {
          en: "Walking",
          ar: "المشي",
          points: 38,
        },
        {
          en: "Driving",
          ar: "القيادة",
          points: 18,
        },
        {
          en: "Using Bathroom",
          ar: "استخدام الحمام",
          points: 14,
        },
        {
          en: "Eating",
          ar: "الأكل",
          points: 8,
        },
        {
          en: "Paying Bills",
          ar: "دفع الفواتير",
          points: 6,
        },
        {
          en: "Dressing",
          ar: "خلع الملابس",
          points: 5,
        },
        {
          en: "Laundry",
          ar: "مغسلة",
          points: 5,
        },
      ],
    },
    {
      en: "Name A Type Of Animal That Can Be Found In The Cereal Box",
      ar: "قم بتسمية نوع الحيوان الذي يمكن العثور عليه في علبة الحبوب",
      answers: [
        {
          en: "Tiger",
          ar: "نمر",
          points: 31,
        },
        {
          en: "Rabbit",
          ar: "أرنب",
          points: 22,
        },
        {
          en: "Parrot",
          ar: "ببغاء",
          points: 13,
        },
        {
          en: "Bear",
          ar: "دُبٌّ",
          points: 13,
        },
        {
          en: "Monkey",
          ar: "قرد",
          points: 11,
        },
        {
          en: "Kangaroo",
          ar: "كنغر",
          points: 5,
        },
        {
          en: "Lion",
          ar: "الأسد",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something People Do To Help Them Fall Asleep At Night.",
      ar: "قم بتسمية شيء يفعله الناس لمساعدتهم على النوم ليلاً.",
      answers: [
        {
          en: "Sleeping Pill",
          ar: "حبة النوم",
          points: 18,
        },
        {
          en: "Count Sheep",
          ar: "عد الأغنام",
          points: 16,
        },
        {
          en: "Drink Warm Milk",
          ar: "شرب الحليب الدافئ",
          points: 16,
        },
        {
          en: "Read",
          ar: "يقرأ",
          points: 13,
        },
        {
          en: "Watch TV",
          ar: "مشاهدة التلفزيون",
          points: 10,
        },
        {
          en: "Listen To Music",
          ar: "استمع إلى الموسيقى",
          points: 8,
        },
        {
          en: "Listen To The Radio",
          ar: "الاستماع إلى الراديو",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something A Little Kid Might Tell You About Santa Claus.",
      ar: "قم بتسمية شيء قد يخبرك به طفل صغير عن سانتا كلوز.",
      answers: [
        {
          en: "He’s Plump",
          ar: "إنه ممتلئ الجسم",
          points: 33,
        },
        {
          en: "Is Jolly",
          ar: "هل جولي",
          points: 14,
        },
        {
          en: "Has A Beard",
          ar: "لديه لحية",
          points: 14,
        },
        {
          en: "Wears A Red Suit",
          ar: "يرتدي بدلة حمراء",
          points: 12,
        },
        {
          en: "He’s Real",
          ar: "إنه حقيقي",
          points: 11,
        },
        {
          en: "Brings Presents",
          ar: "يجلب الهدايا",
          points: 9,
        },
        {
          en: "Lives At North Pole",
          ar: "يعيش في القطب الشمالي",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Related To Finances That It’s Hard To Explain To A Kid.",
      ar: "قم بتسمية شيء متعلق بالشؤون المالية يصعب شرحه لطفل.",
      answers: [
        {
          en: "Taxes",
          ar: "الضرائب",
          points: 37,
        },
        {
          en: "Credit",
          ar: "ائتمان",
          points: 25,
        },
        {
          en: "Interest",
          ar: "اهتمام",
          points: 12,
        },
        {
          en: "Budget",
          ar: "ميزانية",
          points: 8,
        },
        {
          en: "Stocks",
          ar: "الأسهم",
          points: 7,
        },
        {
          en: "Mortgage",
          ar: "القرض العقاري",
          points: 6,
        },
        {
          en: "Loans",
          ar: "القروض",
          points: 3,
        },
      ],
    },
    {
      en: "Name An “Extra” You Might Pay More For At The Gym",
      ar: 'قم بتسمية "شيء إضافي" قد تدفع مقابله أكثر في صالة الألعاب الرياضية',
      answers: [
        {
          en: "Personal Trainer",
          ar: "مدرب شخصي",
          points: 28,
        },
        {
          en: "Massage",
          ar: "تدليك",
          points: 18,
        },
        {
          en: "Laundry Service",
          ar: "خدمة غسيل الملابس",
          points: 15,
        },
        {
          en: "Food/ Drink",
          ar: "الغذاء / الشراب",
          points: 14,
        },
        {
          en: "Pool Access",
          ar: "الوصول إلى حمام السباحة",
          points: 9,
        },
        {
          en: "Tanning Bed",
          ar: "سرير دباغة",
          points: 7,
        },
        {
          en: "Locker Room Use",
          ar: "استخدام غرفة خلع الملابس",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something People Do To Let You Know They’re Bored",
      ar: "قم بتسمية شيء يفعله الأشخاص لإعلامك بأنهم يشعرون بالملل",
      answers: [
        {
          en: "Yawn",
          ar: "التثاؤب",
          points: 45,
        },
        {
          en: "Sigh",
          ar: "تنهد",
          points: 22,
        },
        {
          en: "Sleep",
          ar: "ينام",
          points: 10,
        },
        {
          en: "Roll Their Eyes",
          ar: "لفة عيونهم",
          points: 9,
        },
        {
          en: "Twiddle Thumbs",
          ar: "تويدل الابهام",
          points: 4,
        },
        {
          en: "Tap Fingers",
          ar: "اضغط على الأصابع",
          points: 3,
        },
        {
          en: "Look At Watch",
          ar: "أنظر إلى شاهد",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something That A Person From A Warm Climate Wouldn’t Know How To Do In The Snow.",
      ar: "اذكر شيئًا لا يعرف أي شخص يعيش في مناخ دافئ كيف يفعله في الثلج.",
      answers: [
        {
          en: "Drive",
          ar: "يقود",
          points: 42,
        },
        {
          en: "Ski",
          ar: "تزلج",
          points: 26,
        },
        {
          en: "Walk Through It",
          ar: "المشي من خلال ذلك",
          points: 14,
        },
        {
          en: "Shovel",
          ar: "مجرفة",
          points: 5,
        },
        {
          en: "Sled",
          ar: "تزلج",
          points: 5,
        },
        {
          en: "Dress",
          ar: "فستان",
          points: 3,
        },
        {
          en: "Make A Snowman",
          ar: "اصنع رجل ثلج",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Male Performer Past Or Present Known For Wearing Outrageous Clothing",
      ar: "قم بتسمية فنان ذكر في الماضي أو الحاضر معروف بارتداء الملابس الفاحشة",
      answers: [
        {
          en: "Elton John",
          ar: "إلتون جون",
          points: 33,
        },
        {
          en: "Liberace",
          ar: "ليبريس",
          points: 19,
        },
        {
          en: "Prince",
          ar: "الأمير",
          points: 12,
        },
        {
          en: "Elvis",
          ar: "الفيس",
          points: 9,
        },
        {
          en: "Boy George",
          ar: "الصبي جورج",
          points: 8,
        },
        {
          en: "Dennis Rodman",
          ar: "دينيس رودمان",
          points: 7,
        },
        {
          en: "Michael Jackson",
          ar: "مايكل جاكسون",
          points: 7,
        },
      ],
    },
    {
      en: "name A Slender Animal that Wouldn’t Make A Very Good Piggy Bank.",
      ar: "قم بتسمية حيوان نحيف لا يمكن أن يكون بمثابة حصالة جيدة جدًا.",
      answers: [
        {
          en: "Snake",
          ar: "ثعبان",
          points: 35,
        },
        {
          en: "Giraffe",
          ar: "زرافة",
          points: 33,
        },
        {
          en: "Cat",
          ar: "قطة",
          points: 14,
        },
        {
          en: "Deer",
          ar: "عزيزي",
          points: 5,
        },
        {
          en: "Pony",
          ar: "ترجمة حرفية",
          points: 5,
        },
        {
          en: "Lizard",
          ar: "سحلية",
          points: 3,
        },
        {
          en: "Monkey",
          ar: "قرد",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Typical Holiday Casserole.",
      ar: "قم بتسمية طبق خزفي نموذجي للعطلات.",
      answers: [
        {
          en: "Green Bean",
          ar: "الفاصوليا الخضراء",
          points: 23,
        },
        {
          en: "Tuna",
          ar: "تونة",
          points: 21,
        },
        {
          en: "Chicken",
          ar: "فرخة",
          points: 17,
        },
        {
          en: "Turkey",
          ar: "ديك رومى",
          points: 15,
        },
        {
          en: "Sweet Potato",
          ar: "البطاطا الحلوة",
          points: 11,
        },
        {
          en: "Broccoli",
          ar: "بروكلي",
          points: 5,
        },
        {
          en: "Mushroom",
          ar: "فطر",
          points: 2,
        },
      ],
    },
  ],
  relationships: [
    {
      en: "Something You’D Hate For Your Date To Be Allergic To",
      ar: "شيء تكره أن يكون شريكك مصابًا بالحساسية تجاهه",
      answers: [
        {
          en: "Flowers",
          ar: "زهور",
          points: 26,
        },
        {
          en: "Perfume/Cologne",
          ar: "العطور/كولونيا",
          points: 22,
        },
        {
          en: "Me",
          ar: "أنا",
          points: 10,
        },
        {
          en: "Dinner",
          ar: "عشاء",
          points: 10,
        },
        {
          en: "Chocolates",
          ar: "الشوكولاتة",
          points: 10,
        },
        {
          en: "Kissing",
          ar: "تقبيل",
          points: 5,
        },
        {
          en: "Alcohol",
          ar: "الكحول",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something Your Parents Look For In Your Date, Although You May Not",
      ar: "قم بتسمية شيء يبحث عنه والديك في رفيقتك، على الرغم من أنك قد لا تفعل ذلك",
      answers: [
        {
          en: "Money",
          ar: "مال",
          points: 33,
        },
        {
          en: "Social Graces",
          ar: "النعم الاجتماعية",
          points: 22,
        },
        {
          en: "Good Job",
          ar: "أحسنت",
          points: 19,
        },
        {
          en: "Appearance",
          ar: "مظهر",
          points: 13,
        },
        {
          en: "Maturity",
          ar: "نضج",
          points: 6,
        },
        {
          en: "Well Dressed",
          ar: "يرتدي ملابس جيدة",
          points: 3,
        },
        {
          en: "Education",
          ar: "تعليم",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Almost Everyday Bride Wants At Her Wedding",
      ar: "قم بتسمية شيء تريده العروس يوميًا تقريبًا في حفل زفافها",
      answers: [
        {
          en: "Flowers",
          ar: "زهور",
          points: 29,
        },
        {
          en: "Cake",
          ar: "كعكة",
          points: 26,
        },
        {
          en: "Groom",
          ar: "زوج",
          points: 16,
        },
        {
          en: "Ring",
          ar: "جرس",
          points: 10,
        },
        {
          en: "White Dress",
          ar: "فستان ابيض",
          points: 8,
        },
        {
          en: "Family",
          ar: "عائلة",
          points: 5,
        },
        {
          en: "Gifts",
          ar: "الهدايا",
          points: 3,
        },
      ],
    },
    {
      en: "If Your Husband Could Get One Quality From James Bond, What Would You Want It To Be?",
      ar: "إذا كان لزوجك أن يحصل على صفة واحدة من جيمس بوند، ماذا تريدين أن تكون؟",
      answers: [
        {
          en: "Looks",
          ar: "يبدو",
          points: 49,
        },
        {
          en: "Charm",
          ar: "سحر",
          points: 20,
        },
        {
          en: "Wealth",
          ar: "ثروة",
          points: 10,
        },
        {
          en: "Sophistication",
          ar: "التطور",
          points: 9,
        },
        {
          en: "British Accent",
          ar: "اللكنة البريطانية",
          points: 4,
        },
        {
          en: "Fashion Sense",
          ar: "حس الموضة",
          points: 3,
        },
        {
          en: "Intelligence",
          ar: "ذكاء",
          points: 3,
        },
      ],
    },
    {
      en: "What Might Some Women Love More Than Their Spouse?",
      ar: "ما الذي قد تحبه بعض النساء أكثر من أزواجهن؟",
      answers: [
        {
          en: "Children",
          ar: "أطفال",
          points: 36,
        },
        {
          en: "Money",
          ar: "مال",
          points: 23,
        },
        {
          en: "Shopping",
          ar: "التسوق",
          points: 12,
        },
        {
          en: "Shoes",
          ar: "أحذية",
          points: 9,
        },
        {
          en: "Pet",
          ar: "حيوان أليف",
          points: 8,
        },
        {
          en: "Chocolate",
          ar: "الشوكولاته",
          points: 4,
        },
        {
          en: "Jewelry",
          ar: "مجوهرات",
          points: 3,
        },
      ],
    },
  ],
  travel: [
    {
      en: "Name A Vehicle That You Can Hear Coming Before You See It",
      ar: "قم بتسمية مركبة يمكنك سماعها قبل أن تراها",
      answers: [
        {
          en: "Semi Truck",
          ar: "نصف شاحنة",
          points: 33,
        },
        {
          en: "Train",
          ar: "يدرب",
          points: 29,
        },
        {
          en: "Motorcycle",
          ar: "دراجة نارية",
          points: 12,
        },
        {
          en: "Police Car",
          ar: "سيارة الشرطة",
          points: 10,
        },
        {
          en: "Ice Cream Truck",
          ar: "شاحنة الآيس كريم",
          points: 6,
        },
        {
          en: "Bus",
          ar: "حافلة",
          points: 4,
        },
        {
          en: "Ambulance",
          ar: "سيارة إسعاف",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Souvenir People Collect That Has A City’s Name On It.",
      ar: "قم بتسمية إحدى الهدايا التذكارية التي يجمعها الأشخاص والتي تحمل اسم المدينة.",
      answers: [
        {
          en: "Spoon",
          ar: "ملعقة",
          points: 20,
        },
        {
          en: "Shirt",
          ar: "قميص",
          points: 19,
        },
        {
          en: "Key Chain",
          ar: "سلسلة المفاتيح",
          points: 18,
        },
        {
          en: "Coffee Cups",
          ar: "فناجين القهوة",
          points: 11,
        },
        {
          en: "Glasses",
          ar: "نظارات",
          points: 10,
        },
        {
          en: "Plates",
          ar: "لوحات",
          points: 10,
        },
        {
          en: "Ashtray",
          ar: "منفضة سجائر",
          points: 8,
        },
      ],
    },
    {
      en: "Name A Country That Is Known For Their Beer",
      ar: "قم بتسمية البلد الذي يشتهر بالبيرة",
      answers: [
        {
          en: "Germany",
          ar: "ألمانيا",
          points: 25,
        },
        {
          en: "Ireland",
          ar: "أيرلندا",
          points: 19,
        },
        {
          en: "USA",
          ar: "الولايات المتحدة الأمريكية",
          points: 17,
        },
        {
          en: "Canada",
          ar: "كندا",
          points: 14,
        },
        {
          en: "England",
          ar: "انجلترا",
          points: 9,
        },
        {
          en: "Mexico",
          ar: "المكسيك",
          points: 8,
        },
        {
          en: "Australia",
          ar: "أستراليا",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something You Keep In Your Car’s Glove Compartment.",
      ar: "قم بتسمية شيء تحتفظ به في حجرة القفازات بسيارتك.",
      answers: [
        {
          en: "Registration",
          ar: "تسجيل",
          points: 35,
        },
        {
          en: "Map",
          ar: "رسم خريطة",
          points: 23,
        },
        {
          en: "Insurance Card",
          ar: "بطاقة التأمين",
          points: 13,
        },
        {
          en: "Flashlight",
          ar: "مصباح يدوي",
          points: 12,
        },
        {
          en: "Gloves",
          ar: "قفازات",
          points: 8,
        },
        {
          en: "Tissues",
          ar: "الأنسجة",
          points: 4,
        },
        {
          en: "Car Manual",
          ar: "دليل السيارة",
          points: 3,
        },
      ],
    },
    {
      en: "What Are Some Things Truckers Might Take With Them On A Trip?",
      ar: "ما هي بعض الأشياء التي قد يأخذها سائقو الشاحنات معهم في الرحلة؟",
      answers: [
        {
          en: "Food",
          ar: "طعام",
          points: 27,
        },
        {
          en: "Map",
          ar: "رسم خريطة",
          points: 21,
        },
        {
          en: "Change Of Clothes",
          ar: "تغيير الملابس",
          points: 17,
        },
        {
          en: "Coffee",
          ar: "قهوة",
          points: 15,
        },
        {
          en: "Companion",
          ar: "رفيق",
          points: 9,
        },
        {
          en: "Music`",
          ar: "موسيقى",
          points: 5,
        },
        {
          en: "Cell Phone",
          ar: "الهاتف الخلوي",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something People Associate With “A Christmas Carol” By Charles Dickens.",
      ar: 'قم بتسمية شيء يرتبط به الناس مع "ترنيمة عيد الميلاد" لتشارلز ديكنز.',
      answers: [
        {
          en: "Christmas",
          ar: "عيد الميلاد",
          points: 24,
        },
        {
          en: "Tiny Tim",
          ar: "تيم الصغير",
          points: 19,
        },
        {
          en: "Scrooge",
          ar: "البخيل",
          points: 18,
        },
        {
          en: "Bob Cratchit",
          ar: "بوب كراتشيت",
          points: 11,
        },
        {
          en: "Christmas Tree",
          ar: "شجرة عيد الميلاد",
          points: 9,
        },
        {
          en: "Ghosts",
          ar: "أشباح",
          points: 8,
        },
        {
          en: "Chains",
          ar: "السلاسل",
          points: 6,
        },
      ],
    },
    {
      en: "What Occupation Might Someone Have If They Carry A Folder Marked “Top Secret”?",
      ar: 'ما هي المهنة التي قد يشغلها شخص ما إذا كان يحمل مجلدًا يحمل علامة "سري للغاية"؟',
      answers: [
        {
          en: "Private Investigator",
          ar: "محقق خاص",
          points: 28,
        },
        {
          en: "Police Officer",
          ar: "ضابط شرطة",
          points: 25,
        },
        {
          en: "Lawyer",
          ar: "محامي",
          points: 17,
        },
        {
          en: "Politician",
          ar: "سياسي",
          points: 12,
        },
        {
          en: "Soldier",
          ar: "جندي",
          points: 8,
        },
        {
          en: "IRS",
          ar: "مصلحة الضرائب",
          points: 3,
        },
        {
          en: "Doctor",
          ar: "طبيب",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Cartoon Movie That Makes You Cry Even As An Adult",
      ar: "قم بتسمية فيلم كرتوني يجعلك تبكي حتى عندما تكون بالغًا",
      answers: [
        {
          en: "Bambi",
          ar: "بامبي",
          points: 44,
        },
        {
          en: "Lion King",
          ar: "الأسد الملك",
          points: 22,
        },
        {
          en: "Cinderella",
          ar: "سندريلا",
          points: 13,
        },
        {
          en: "Fox & The Hound",
          ar: "فوكس وكلب الصيد",
          points: 7,
        },
        {
          en: "Finding Nemo",
          ar: "العثور على نيمو",
          points: 5,
        },
        {
          en: "Beauty & The Beast",
          ar: "الجمال والوحش",
          points: 3,
        },
        {
          en: "Dumbo",
          ar: "دامبو",
          points: 3,
        },
      ],
    },
    {
      en: "If You Went On A Camping Trip By Yourself, What Might You Spend The Week Doing?",
      ar: "إذا ذهبت في رحلة تخييم بمفردك، ما الذي قد تقضيه خلال الأسبوع؟",
      answers: [
        {
          en: "Fishing",
          ar: "صيد السمك",
          points: 34,
        },
        {
          en: "Sleeping",
          ar: "نائم",
          points: 25,
        },
        {
          en: "Reading",
          ar: "قراءة",
          points: 17,
        },
        {
          en: "Hiking",
          ar: "جولة على الأقدام",
          points: 10,
        },
        {
          en: "Relaxing",
          ar: "مريح",
          points: 5,
        },
        {
          en: "Hunting",
          ar: "الصيد",
          points: 3,
        },
        {
          en: "Eating",
          ar: "الأكل",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something That Spies In Movies Always Carry",
      ar: "قم بتسمية الشيء الذي يحمله الجواسيس في الأفلام دائمًا",
      answers: [
        {
          en: "Weapon",
          ar: "سلاح",
          points: 34,
        },
        {
          en: "Binoculars",
          ar: "مناظير",
          points: 20,
        },
        {
          en: "Camera",
          ar: "آلة تصوير",
          points: 18,
        },
        {
          en: "Phone",
          ar: "هاتف",
          points: 9,
        },
        {
          en: "Magnifying Glass",
          ar: "عدسة مكبرة",
          points: 8,
        },
        {
          en: "Briefcase",
          ar: "حقيبة",
          points: 4,
        },
        {
          en: "Flashlight",
          ar: "مصباح يدوي",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Reason Why You Might Stay In A Hotel In Your Own City.",
      ar: "اذكر سببًا قد يجعلك تقيم في فندق في مدينتك.",
      answers: [
        {
          en: "Natural Disaster",
          ar: "كارثة طبيعية",
          points: 30,
        },
        {
          en: "Romance",
          ar: "الرومانسية",
          points: 18,
        },
        {
          en: "Just For Fun",
          ar: "للمتعة فقط",
          points: 13,
        },
        {
          en: "Moving",
          ar: "تتحرك",
          points: 12,
        },
        {
          en: "Fight With Spouse",
          ar: "قتال مع الزوج",
          points: 11,
        },
        {
          en: "Remodeling",
          ar: "إعادة تصميم",
          points: 8,
        },
        {
          en: "Getting Married",
          ar: "الزواج",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something That An Adventurous Person Might Try While At The Beach",
      ar: "قم بتسمية شيء قد يجربه الشخص المغامر أثناء تواجده على الشاطئ",
      answers: [
        {
          en: "Surfing",
          ar: "تصفح",
          points: 28,
        },
        {
          en: "Skinny Dipping",
          ar: "غمس نحيل",
          points: 25,
        },
        {
          en: "Scuba Diving",
          ar: "الغوص",
          points: 13,
        },
        {
          en: "Parasailing",
          ar: "التزلج الهوائي",
          points: 10,
        },
        {
          en: "Snorkeling",
          ar: "الغطس",
          points: 7,
        },
        {
          en: "Wartersking",
          ar: "وارترسكينج",
          points: 4,
        },
        {
          en: "Jet Sking",
          ar: "التزلج على الماء",
          points: 4,
        },
      ],
    },
    {
      en: "Why Might You Have To Stop The Car During A Long Ride?",
      ar: "لماذا قد تضطر إلى إيقاف السيارة أثناء رحلة طويلة؟",
      answers: [
        {
          en: "Use Bathroom",
          ar: "استخدام الحمام",
          points: 40,
        },
        {
          en: "Get Gas",
          ar: "احصل على الغاز",
          points: 18,
        },
        {
          en: "Eat",
          ar: "يأكل",
          points: 15,
        },
        {
          en: "Car Trouble",
          ar: "مشكلة السيارة",
          points: 11,
        },
        {
          en: "Need Rest",
          ar: "بحاجة إلى الراحة",
          points: 7,
        },
        {
          en: "Car Sick",
          ar: "سيارة مريضة",
          points: 5,
        },
        {
          en: "Kids Fighting",
          ar: "قتال الاطفال",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Famous Beach",
      ar: "اسم الشاطئ الشهير",
      answers: [
        {
          en: "Venice",
          ar: "البندقية",
          points: 31,
        },
        {
          en: "Daytona",
          ar: "دايتونا",
          points: 16,
        },
        {
          en: "Malibu",
          ar: "ماليبو",
          points: 13,
        },
        {
          en: "Huntington",
          ar: "هنتنغتون",
          points: 11,
        },
        {
          en: "Pebble",
          ar: "حصاة",
          points: 10,
        },
        {
          en: "Miami",
          ar: "ميامي",
          points: 7,
        },
        {
          en: "Long",
          ar: "طويل",
          points: 7,
        },
      ],
    },
    {
      en: "Tell Me A City In Which You’d Never Be Bored",
      ar: "أخبرني عن المدينة التي لن تشعر بالملل فيها أبدًا",
      answers: [
        {
          en: "New York City",
          ar: "مدينة نيويورك",
          points: 44,
        },
        {
          en: "Las Vegas",
          ar: "لاس فيجاس",
          points: 26,
        },
        {
          en: "Paris",
          ar: "باريس",
          points: 9,
        },
        {
          en: "Los Angeles",
          ar: "لوس أنجلوس",
          points: 7,
        },
        {
          en: "Chicago",
          ar: "شيكاغو",
          points: 5,
        },
        {
          en: "New Orleans",
          ar: "نيو اورليانز",
          points: 4,
        },
        {
          en: "Miami",
          ar: "ميامي",
          points: 4,
        },
      ],
    },
    {
      en: "When Traveling In A Foreign Country, Name Something You’d Hate To Forget The Word For.",
      ar: "عند السفر إلى بلد أجنبي، قم بتسمية شيء تكره أن تنسى الكلمة الخاصة به.",
      answers: [
        {
          en: "Bathroom",
          ar: "حمام",
          points: 43,
        },
        {
          en: "Hello",
          ar: "مرحبًا",
          points: 19,
        },
        {
          en: "Food",
          ar: "طعام",
          points: 9,
        },
        {
          en: "Thank You",
          ar: "شكرًا لك",
          points: 8,
        },
        {
          en: "Help",
          ar: "يساعد",
          points: 7,
        },
        {
          en: "Please",
          ar: "لو سمحت",
          points: 6,
        },
        {
          en: "Money",
          ar: "مال",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something You See A Lot Of When You Look Out The Window On A Long Car Ride.",
      ar: "قم بتسمية شيء تراه كثيرًا عندما تنظر من النافذة أثناء رحلة طويلة بالسيارة.",
      answers: [
        {
          en: "Trees",
          ar: "الأشجار",
          points: 41,
        },
        {
          en: "Vehicles",
          ar: "المركبات",
          points: 26,
        },
        {
          en: "Fields",
          ar: "الحقول",
          points: 9,
        },
        {
          en: "Cows",
          ar: "الأبقار",
          points: 8,
        },
        {
          en: "Road",
          ar: "طريق",
          points: 6,
        },
        {
          en: "Billboards",
          ar: "اللوحات الإعلانية",
          points: 4,
        },
        {
          en: "Mountains",
          ar: "الجبال",
          points: 3,
        },
      ],
    },
    {
      en: "While Vacationing, What Might A Cheapskate Buy As Souvenirs For Her Friends?",
      ar: "أثناء قضاء الإجازة، ما الذي يمكن أن تشتريه الفتاة الرخيصة كهدايا تذكارية لأصدقائها؟",
      answers: [
        {
          en: "Postcard",
          ar: "بطاقة بريدية",
          points: 32,
        },
        {
          en: "Keychain",
          ar: "سلسلة المفاتيح",
          points: 28,
        },
        {
          en: "T Shirt",
          ar: "تي شيرت",
          points: 10,
        },
        {
          en: "Magnet",
          ar: "مغناطيس",
          points: 9,
        },
        {
          en: "Shot Glass",
          ar: "طلقة الزجاج",
          points: 9,
        },
        {
          en: "Pen",
          ar: "قلم",
          points: 4,
        },
        {
          en: "Mug",
          ar: "قدح",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something You Would Hate To Go On A Road Trip Without.",
      ar: "قم بتسمية شيء تكره الذهاب إليه في رحلة برية بدونه.",
      answers: [
        {
          en: "Map/ GPS",
          ar: "الخريطة/ نظام تحديد المواقع",
          points: 35,
        },
        {
          en: "Money",
          ar: "مال",
          points: 26,
        },
        {
          en: "Snacks",
          ar: "وجبات خفيفة",
          points: 18,
        },
        {
          en: "Change Of Clothes",
          ar: "تغيير الملابس",
          points: 6,
        },
        {
          en: "Cell Phone",
          ar: "الهاتف الخلوي",
          points: 5,
        },
        {
          en: "Family/ Friends",
          ar: "العائلة / الأصدقاء",
          points: 4,
        },
        {
          en: "Music",
          ar: "موسيقى",
          points: 4,
        },
      ],
    },
  ],
  miscellaneous: [
    {
      en: "Name Something Specific You Often Run Out Of Space To Write On",
      ar: "قم بتسمية شيء محدد غالبًا ما تنفد منك المساحة للكتابة عليه",
      answers: [
        {
          en: "Check",
          ar: "يفحص",
          points: 26,
        },
        {
          en: "Greeting Card",
          ar: "بطاقة معايدة",
          points: 20,
        },
        {
          en: "Post It Note",
          ar: "بعد ذلك ملاحظة",
          points: 16,
        },
        {
          en: "Hand",
          ar: "يُسلِّم",
          points: 10,
        },
        {
          en: "Envelope",
          ar: "ظرف",
          points: 10,
        },
        {
          en: "Notebook Page",
          ar: "صفحة دفتر الملاحظات",
          points: 10,
        },
        {
          en: "Application",
          ar: "طلب",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something You Try To Get Rid Of That Always Seems To Come Back.",
      ar: "قم بتسمية شيء تحاول التخلص منه ويبدو أنه يعود إليك دائمًا.",
      answers: [
        {
          en: "Pimple",
          ar: "بثرة",
          points: 26,
        },
        {
          en: "Men",
          ar: "الرجال",
          points: 18,
        },
        {
          en: "Bugs",
          ar: "البق",
          points: 16,
        },
        {
          en: "Cold",
          ar: "بارد",
          points: 12,
        },
        {
          en: "Boomerang",
          ar: "يرتد",
          points: 10,
        },
        {
          en: "Bad Headache",
          ar: "صداع سيء",
          points: 8,
        },
        {
          en: "Bad Habit",
          ar: "العادة السيئة",
          points: 6,
        },
      ],
    },
    {
      en: "If You Lived On Sesame Street, Which Character Would Get On Your Nerves?",
      ar: "إذا كنت تعيش في شارع سمسم، ما هي الشخصية التي ستثير أعصابك؟",
      answers: [
        {
          en: "Big Bird",
          ar: "الطائر الكبير",
          points: 41,
        },
        {
          en: "Elmo",
          ar: "إلمو",
          points: 19,
        },
        {
          en: "Oscar",
          ar: "أوسكار",
          points: 15,
        },
        {
          en: "Cookie Monster",
          ar: "كوكي مونستر",
          points: 14,
        },
        {
          en: "Ernie",
          ar: "إرني",
          points: 4,
        },
        {
          en: "Grover",
          ar: "جروفر",
          points: 3,
        },
        {
          en: "Bert",
          ar: "بيرت",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You’d See A Lot Of In California",
      ar: "قم بتسمية شيء تراه كثيرًا في كاليفورنيا",
      answers: [
        {
          en: "Beaches",
          ar: "الشواطئ",
          points: 28,
        },
        {
          en: "Palm Trees",
          ar: "أشجار النخيل",
          points: 24,
        },
        {
          en: "Sun",
          ar: "شمس",
          points: 11,
        },
        {
          en: "Movie Stars",
          ar: "نجوم السينما",
          points: 11,
        },
        {
          en: "Artists",
          ar: "الفنانين",
          points: 9,
        },
        {
          en: "Cars",
          ar: "سيارات",
          points: 6,
        },
        {
          en: "Blondes",
          ar: "الشقراوات",
          points: 6,
        },
      ],
    },
    {
      en: "Name The Worst Part About Riding The Bus.",
      ar: "قم بتسمية الجزء الأسوأ في ركوب الحافلة.",
      answers: [
        {
          en: "Crowded",
          ar: "مزدحم",
          points: 30,
        },
        {
          en: "Stinky",
          ar: "نتن",
          points: 18,
        },
        {
          en: "Bumpy",
          ar: "به نتوءات",
          points: 12,
        },
        {
          en: "Noise",
          ar: "ضوضاء",
          points: 12,
        },
        {
          en: "Takes Longer",
          ar: "يستغرق وقتا أطول",
          points: 7,
        },
        {
          en: "Hot",
          ar: "حار",
          points: 6,
        },
        {
          en: "Bus Fare",
          ar: "أجرة الحافلة",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something You’d Be Afraid To Do By Yourself",
      ar: "قم بتسمية شيء تخشى القيام به بنفسك",
      answers: [
        {
          en: "Travel",
          ar: "يسافر",
          points: 43,
        },
        {
          en: "Skydive",
          ar: "القفز بالمظلات",
          points: 16,
        },
        {
          en: "Sleep",
          ar: "ينام",
          points: 12,
        },
        {
          en: "Swim",
          ar: "السباحة",
          points: 10,
        },
        {
          en: "Walk At Night",
          ar: "المشي في الليل",
          points: 6,
        },
        {
          en: "Watch Scary Movie",
          ar: "مشاهدة فيلم رعب",
          points: 6,
        },
        {
          en: "Camp",
          ar: "مخيم",
          points: 4,
        },
      ],
    },
    {
      en: "Name The Worst Thing To Have To Share With A Sibling",
      ar: "قم بتسمية أسوأ شيء يجب مشاركته مع أحد الأخوة",
      answers: [
        {
          en: "Clothes",
          ar: "ملابس",
          points: 33,
        },
        {
          en: "Bedroom",
          ar: "غرفة نوم",
          points: 25,
        },
        {
          en: "Bed",
          ar: "سرير",
          points: 20,
        },
        {
          en: "Toys",
          ar: "ألعاب",
          points: 10,
        },
        {
          en: "Food",
          ar: "طعام",
          points: 4,
        },
        {
          en: "Bathroom",
          ar: "حمام",
          points: 3,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Associate With Fairy Tales",
      ar: "قم بتسمية شيء ترتبط به مع القصص الخيالية",
      answers: [
        {
          en: "Princess",
          ar: "أميرة",
          points: 40,
        },
        {
          en: "Fairies",
          ar: "الجنيات",
          points: 15,
        },
        {
          en: "Happy Ending",
          ar: "نهاية سعيدة",
          points: 15,
        },
        {
          en: "Prince",
          ar: "الأمير",
          points: 8,
        },
        {
          en: "Wicked Witch",
          ar: "الساحرة الشريرة",
          points: 7,
        },
        {
          en: "Brothers Grimm",
          ar: "الاخوة جريم",
          points: 5,
        },
        {
          en: "Castle",
          ar: "قلعة",
          points: 5,
        },
      ],
    },
    {
      en: "What Traffic Signs Describe Your Life Style?",
      ar: "ما هي علامات المرور التي تصف نمط حياتك؟",
      answers: [
        {
          en: "Stop",
          ar: "قف",
          points: 44,
        },
        {
          en: "Green Light",
          ar: "الضوء الأخضر",
          points: 17,
        },
        {
          en: "Yield/Slow Down",
          ar: "العائد / إبطاء",
          points: 13,
        },
        {
          en: "Dead End",
          ar: "طريق مسدود",
          points: 8,
        },
        {
          en: "Do Not Enter",
          ar: "لا تدخل",
          points: 7,
        },
        {
          en: "Curves Ahead",
          ar: "منحنيات إلى الأمام",
          points: 6,
        },
        {
          en: "Caution",
          ar: "حذر",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something An Experienced Parent Does Automatically When They Pick Up A Crying Baby.",
      ar: "قم بتسمية شيء يفعله أحد الوالدين ذوي الخبرة تلقائيًا عندما يلتقط طفلاً يبكي.",
      answers: [
        {
          en: "Rock Them",
          ar: "صخرة لهم",
          points: 32,
        },
        {
          en: "Pat Back",
          ar: "بات باك",
          points: 21,
        },
        {
          en: "Sing Lullaby",
          ar: "الغناء التهويدة",
          points: 11,
        },
        {
          en: "Feed",
          ar: "يٌطعم",
          points: 11,
        },
        {
          en: "Hug/Cuddle",
          ar: "عناق / عناق",
          points: 9,
        },
        {
          en: "Bounce Them",
          ar: "ترتد لهم",
          points: 7,
        },
        {
          en: "Change Diaper",
          ar: "تغيير الحفاضات",
          points: 4,
        },
      ],
    },
    {
      en: "What Do College Students Do That Annoys Their Professors The Most?",
      ar: "ما الذي يفعله طلاب الجامعات ويزعج أساتذتهم أكثر؟",
      answers: [
        {
          en: "Talk",
          ar: "يتحدث",
          points: 32,
        },
        {
          en: "Fall Asleep",
          ar: "تغفو",
          points: 18,
        },
        {
          en: "Skip Class",
          ar: "تخطي الصف",
          points: 17,
        },
        {
          en: "Cheat",
          ar: "يغش",
          points: 13,
        },
        {
          en: "Text Message",
          ar: "رسالة نصية",
          points: 9,
        },
        {
          en: "Arrive Late",
          ar: "الوصول متأخرا",
          points: 8,
        },
        {
          en: "Chew Gum",
          ar: "مضغ العلكة",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something A Patient Might Do That Would Make A Dentist Complain?",
      ar: "اذكر شيئًا قد يفعله المريض مما قد يجعل طبيب الأسنان يشتكي؟",
      answers: [
        {
          en: "Bite",
          ar: "يعض",
          points: 26,
        },
        {
          en: "Move A Lot",
          ar: "تحرك كثيرا",
          points: 15,
        },
        {
          en: "Scream",
          ar: "الصراخ",
          points: 12,
        },
        {
          en: "Not Brushing",
          ar: "لا بالفرشاة",
          points: 11,
        },
        {
          en: "Talk",
          ar: "يتحدث",
          points: 11,
        },
        {
          en: "Spit",
          ar: "يبصقون",
          points: 11,
        },
        {
          en: "Close Mouth",
          ar: "إغلاق الفم",
          points: 10,
        },
      ],
    },
    {
      en: "What Souvenir Would You Bring Back From Hawaii",
      ar: "ما هي الهدايا التذكارية التي ستحضرها معك من هاواي؟",
      answers: [
        {
          en: "Lei",
          ar: "ليو",
          points: 57,
        },
        {
          en: "Sand",
          ar: "رمل",
          points: 11,
        },
        {
          en: "Hawaiian Shirt",
          ar: "قميص هاواي",
          points: 9,
        },
        {
          en: "Seashell",
          ar: "صدف",
          points: 6,
        },
        {
          en: "Grass Skirt",
          ar: "تنورة العشب",
          points: 6,
        },
        {
          en: "Pineapple",
          ar: "أناناس",
          points: 4,
        },
        {
          en: "Coconut",
          ar: "جوزة الهند",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something A King Has, But Most Men Don’t.",
      ar: "قم بتسمية شيء يمتلكه الملك، ولكن معظم الرجال لا يفعلون ذلك.",
      answers: [
        {
          en: "Crown",
          ar: "تاج",
          points: 53,
        },
        {
          en: "Castle",
          ar: "قلعة",
          points: 11,
        },
        {
          en: "Marriage to queen",
          ar: "الزواج من الملكة",
          points: 10,
        },
        {
          en: "Thrown",
          ar: "ألقيت",
          points: 6,
        },
        {
          en: "Riches",
          ar: "ثروات",
          points: 6,
        },
        {
          en: "Servants",
          ar: "الخدم",
          points: 4,
        },
        {
          en: "Command",
          ar: "يأمر",
          points: 3,
        },
      ],
    },
    {
      en: "Tell Me Something You’d Be Reluctant To Buy From A Rummage Sale",
      ar: "أخبرني بشيء قد تتردد في شرائه من أحد عروض التخفيضات",
      answers: [
        {
          en: "Underwear",
          ar: "الملابس الداخلية",
          points: 51,
        },
        {
          en: "Shoes",
          ar: "أحذية",
          points: 12,
        },
        {
          en: "TV",
          ar: "تلفزيون",
          points: 10,
        },
        {
          en: "Food",
          ar: "طعام",
          points: 9,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 6,
        },
        {
          en: "Bed",
          ar: "سرير",
          points: 5,
        },
        {
          en: "Computer",
          ar: "حاسوب",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something Specific Your Partner Did Early In Your Relationship That You Wish They Still Did Now?",
      ar: "اذكر شيئًا محددًا فعله شريكك في وقت مبكر من علاقتكما، وتتمنى لو أنه ما زال يفعله الآن؟",
      answers: [
        {
          en: "Kiss",
          ar: "قبلة",
          points: 27,
        },
        {
          en: "Open Doors",
          ar: "أبواب مفتوحة",
          points: 23,
        },
        {
          en: "Buy Flowers",
          ar: "شراء الزهور",
          points: 19,
        },
        {
          en: "Hug",
          ar: "حضن",
          points: 7,
        },
        {
          en: "Hold Hands",
          ar: "امسك اليدين",
          points: 5,
        },
        {
          en: "Cook",
          ar: "يطبخ",
          points: 4,
        },
        {
          en: "Cuddle",
          ar: "يحضن",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something You Should Always Keep Secret, Even From Your Partner.",
      ar: "قم بتسمية شيء يجب أن تبقيه سرًا دائمًا، حتى من شريكك.",
      answers: [
        {
          en: "Weight",
          ar: "وزن",
          points: 35,
        },
        {
          en: "Affairs",
          ar: "الشؤون",
          points: 25,
        },
        {
          en: "Dating History",
          ar: "تاريخ المواعدة",
          points: 12,
        },
        {
          en: "Spending",
          ar: "الإنفاق",
          points: 12,
        },
        {
          en: "Real Age",
          ar: "العمر الحقيقي",
          points: 5,
        },
        {
          en: "Passwords",
          ar: "كلمات المرور",
          points: 4,
        },
        {
          en: "Diary",
          ar: "مذكرة",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something That You Might Find Around A Pool",
      ar: "قم بتسمية شيء قد تجده حول حمام السباحة",
      answers: [
        {
          en: "Lounge Chair",
          ar: "كرسي صالة",
          points: 36,
        },
        {
          en: "Puddles",
          ar: "البرك",
          points: 15,
        },
        {
          en: "Towels",
          ar: "المناشف",
          points: 14,
        },
        {
          en: "Swimmers",
          ar: "السباحون",
          points: 12,
        },
        {
          en: "Fence",
          ar: "سور",
          points: 8,
        },
        {
          en: "Lifeguard",
          ar: "يا حارس الشاطئ",
          points: 8,
        },
        {
          en: "Diving Board",
          ar: "مجلس الغوص",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something Specific That Takes Longer To Dry, Than To Wash.",
      ar: "قم بتسمية شيء محدد يستغرق وقتًا أطول للتجفيف بدلاً من الغسيل.",
      answers: [
        {
          en: "Hair",
          ar: "شعر",
          points: 35,
        },
        {
          en: "Jeans",
          ar: "جينز",
          points: 28,
        },
        {
          en: "Towels",
          ar: "المناشف",
          points: 14,
        },
        {
          en: "Blankets",
          ar: "البطانيات",
          points: 11,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 4,
        },
        {
          en: "Dishes",
          ar: "أطباق",
          points: 4,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 3,
        },
      ],
    },
    {
      en: "Tell Me A Question That Twins Are Often Asked",
      ar: "أخبرني سؤالاً كثيراً ما يطرحه التوائم",
      answers: [
        {
          en: "Are You Twins?",
          ar: "هل أنت توأمان؟",
          points: 29,
        },
        {
          en: "Identical / Fraternal",
          ar: "متطابق / أخوي",
          points: 23,
        },
        {
          en: "Who’S Older?",
          ar: "من هو الأكبر سنا؟",
          points: 20,
        },
        {
          en: "Who’S Who?",
          ar: "من هو؟",
          points: 16,
        },
        {
          en: "Similar Names?",
          ar: "أسماء مماثلة؟",
          points: 4,
        },
        {
          en: "Think Alike?",
          ar: "أعتقد على حد سواء؟",
          points: 3,
        },
        {
          en: "Dress Alike?",
          ar: "اللباس على حد سواء؟",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Would Need If You Were Putting On A Rock Concert.",
      ar: "قم بتسمية شيء قد تحتاجه إذا كنت ستقيم حفلًا لموسيقى الروك.",
      answers: [
        {
          en: "Band",
          ar: "فرقة",
          points: 26,
        },
        {
          en: "Stage",
          ar: "منصة",
          points: 19,
        },
        {
          en: "Amplifiers",
          ar: "مكبرات الصوت",
          points: 15,
        },
        {
          en: "Speakers",
          ar: "مكبرات الصوت",
          points: 14,
        },
        {
          en: "Guitar",
          ar: "غيتار",
          points: 10,
        },
        {
          en: "Fans",
          ar: "المشجعين",
          points: 7,
        },
        {
          en: "Ear Plugs",
          ar: "سدادات الأذن",
          points: 5,
        },
      ],
    },
    {
      en: "Name The First Thing You Would Do If You Were Stranded On A Deserted Island.",
      ar: "قم بتسمية أول شيء ستفعله إذا تقطعت بك السبل في جزيرة مهجورة.",
      answers: [
        {
          en: "Build A Shelter",
          ar: "بناء مأوى",
          points: 24,
        },
        {
          en: "Find Food",
          ar: "البحث عن الغذاء",
          points: 20,
        },
        {
          en: "Find Fresh Water",
          ar: "البحث عن المياه العذبة",
          points: 16,
        },
        {
          en: "Pray",
          ar: "يصلي",
          points: 10,
        },
        {
          en: "Cry",
          ar: "يبكي",
          points: 10,
        },
        {
          en: "Build A Fire",
          ar: "بناء النار",
          points: 10,
        },
        {
          en: "Explore",
          ar: "يستكشف",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something A Male Rock Star Might Do To Make Himself Look More Rebellious.",
      ar: "اذكر شيئًا قد يفعله نجم الروك ليجعل نفسه يبدو أكثر تمردًا.",
      answers: [
        {
          en: "Tattoos",
          ar: "الوشم",
          points: 28,
        },
        {
          en: "Get Body Pierced",
          ar: "الحصول على مثقوب الجسم",
          points: 26,
        },
        {
          en: "Dye Hair",
          ar: "صبغ الشعر",
          points: 17,
        },
        {
          en: "Paint Face",
          ar: "طلاء الوجه",
          points: 8,
        },
        {
          en: "Shave Head",
          ar: "حلاقة الرأس",
          points: 8,
        },
        {
          en: "Long Hair",
          ar: "شعر طويل",
          points: 6,
        },
        {
          en: "Facial Hair",
          ar: "شعر الوجه",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something That Can Make You Look Older Than Your Age.",
      ar: "قم بتسمية شيء يمكن أن يجعلك تبدو أكبر من عمرك.",
      answers: [
        {
          en: "Make Up",
          ar: "ماكياج",
          points: 33,
        },
        {
          en: "Wrinkles",
          ar: "التجاعيد",
          points: 30,
        },
        {
          en: "Hair Style/ Color",
          ar: "نمط الشعر/اللون",
          points: 17,
        },
        {
          en: "Smoking",
          ar: "تدخين",
          points: 8,
        },
        {
          en: "Clothes",
          ar: "ملابس",
          points: 5,
        },
        {
          en: "Sun",
          ar: "شمس",
          points: 3,
        },
        {
          en: "Facial Hair",
          ar: "شعر الوجه",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Might Sign Up For If You Like To Receive Mail",
      ar: "قم بتسمية شيء يمكنك الاشتراك فيه إذا كنت ترغب في تلقي البريد",
      answers: [
        {
          en: "Magazine",
          ar: "مجلة",
          points: 49,
        },
        {
          en: "Coupons",
          ar: "كوبونات",
          points: 19,
        },
        {
          en: "Credit Card",
          ar: "بطاقة إئتمان",
          points: 8,
        },
        {
          en: "Catalogs",
          ar: "الكتالوجات",
          points: 8,
        },
        {
          en: "Sweepstakes",
          ar: "اليانصيب",
          points: 6,
        },
        {
          en: "Newspaper",
          ar: "صحيفة",
          points: 4,
        },
        {
          en: "Fan Club",
          ar: "نادي المعجبين",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something A Parent Might Miss About Their Younger Years",
      ar: "قم بتسمية شيء قد يفتقده أحد الوالدين في سنوات صغره",
      answers: [
        {
          en: "Freedom/ Time Alone",
          ar: "الحرية / الوقت وحده",
          points: 33,
        },
        {
          en: "Dating",
          ar: "مواعدة",
          points: 19,
        },
        {
          en: "Youthful Appearance",
          ar: "المظهر الشبابي",
          points: 17,
        },
        {
          en: "More Friends",
          ar: "المزيد من الأصدقاء",
          points: 10,
        },
        {
          en: "Going To School",
          ar: "الذهاب إلى المدرسة",
          points: 9,
        },
        {
          en: "Having Energy",
          ar: "وجود الطاقة",
          points: 8,
        },
        {
          en: "Fewer Bills",
          ar: "فواتير أقل",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something The Three Stooges Do While Fighting That You’d Be Surprised To See A Pro Boxer Do",
      ar: "اذكر شيئًا يفعله الثلاثة المضحكين أثناء القتال، وستتفاجأ عندما ترى ملاكمًا محترفًا يفعله",
      answers: [
        {
          en: "Poke Eyes",
          ar: "كزة عيون",
          points: 27,
        },
        {
          en: "Slap",
          ar: "يصفع",
          points: 19,
        },
        {
          en: "Laugh",
          ar: "يضحك",
          points: 17,
        },
        {
          en: "Kick",
          ar: "ركلة",
          points: 9,
        },
        {
          en: "Bite",
          ar: "يعض",
          points: 6,
        },
        {
          en: "Head Butt",
          ar: "بعقب الرأس",
          points: 5,
        },
        {
          en: "Funny Noises",
          ar: "أصوات مضحكة",
          points: 4,
        },
      ],
    },
    {
      en: "Where Were You The Last Time You Felt You’d Been Ripped Off?",
      ar: "أين كنت آخر مرة شعرت فيها أنك قد تعرضت للسرقة؟",
      answers: [
        {
          en: "Mall/ Dept Store",
          ar: "مول / متجر متعدد الأقسام",
          points: 36,
        },
        {
          en: "Grocery Store",
          ar: "محل بقالة",
          points: 15,
        },
        {
          en: "Bank",
          ar: "بنك",
          points: 11,
        },
        {
          en: "Mechanic",
          ar: "ميكانيكي",
          points: 10,
        },
        {
          en: "Restaurant",
          ar: "مطعم",
          points: 10,
        },
        {
          en: "Movie Theatre",
          ar: "مسرح السينما",
          points: 9,
        },
        {
          en: "Gas Station",
          ar: "محطة بنزين",
          points: 7,
        },
      ],
    },
    {
      en: "Which Animal Has The Best Chance Of Winning At The Hurdles?",
      ar: "أي حيوان لديه أفضل فرصة للفوز في الحواجز؟",
      answers: [
        {
          en: "Horse",
          ar: "حصان",
          points: 32,
        },
        {
          en: "Kangaroo",
          ar: "كنغر",
          points: 27,
        },
        {
          en: "Cheetah",
          ar: "الفهد",
          points: 12,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 10,
        },
        {
          en: "Giraffe",
          ar: "زرافة",
          points: 8,
        },
        {
          en: "Rabbit",
          ar: "أرنب",
          points: 5,
        },
        {
          en: "Gazelle",
          ar: "غزال",
          points: 3,
        },
      ],
    },
    {
      en: "Which Animal’s Communication Sounds A Lot Like Crying?",
      ar: "ما هو الحيوان الذي يبدو أن تواصله يشبه إلى حد كبير البكاء؟",
      answers: [
        {
          en: "Cat",
          ar: "قطة",
          points: 35,
        },
        {
          en: "Dolphin",
          ar: "دولفين",
          points: 13,
        },
        {
          en: "Monkey",
          ar: "قرد",
          points: 11,
        },
        {
          en: "Bird",
          ar: "طائر",
          points: 11,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 11,
        },
        {
          en: "Whale",
          ar: "حوت",
          points: 10,
        },
        {
          en: "Hyena",
          ar: "ضبع",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something That College Students Get Stolen From Them On Campus.",
      ar: "اذكر شيئًا سرقه طلاب الكلية منهم في الحرم الجامعي.",
      answers: [
        {
          en: "Computer",
          ar: "حاسوب",
          points: 30,
        },
        {
          en: "Money",
          ar: "مال",
          points: 27,
        },
        {
          en: "Book",
          ar: "كتاب",
          points: 24,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 5,
        },
        {
          en: "Bike",
          ar: "دراجة",
          points: 4,
        },
        {
          en: "Phone",
          ar: "هاتف",
          points: 4,
        },
        {
          en: "Ipod",
          ar: "آي بود",
          points: 3,
        },
      ],
    },
    {
      en: "If You Were Forming A Relay Race Team, Which Animals Would You Choose For Teammates?",
      ar: "إذا كنت ستشكل فريقًا لسباق التتابع، فما هي الحيوانات التي ستختارها لزملائك في الفريق؟",
      answers: [
        {
          en: "Cheetah",
          ar: "الفهد",
          points: 50,
        },
        {
          en: "Horse",
          ar: "حصان",
          points: 20,
        },
        {
          en: "Rabbit",
          ar: "أرنب",
          points: 7,
        },
        {
          en: "Jaguar",
          ar: "جاكوار",
          points: 7,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 5,
        },
        {
          en: "Tiger",
          ar: "نمر",
          points: 5,
        },
        {
          en: "Lion",
          ar: "الأسد",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something You Do To Calm Yourself After Becoming Very Angry.",
      ar: "اذكر شيئًا تفعله لتهدئة نفسك بعد أن أصبحت غاضبًا جدًا.",
      answers: [
        {
          en: "Breathe",
          ar: "يتنفس",
          points: 25,
        },
        {
          en: "Smoke",
          ar: "دخان",
          points: 24,
        },
        {
          en: "Walk",
          ar: "يمشي",
          points: 18,
        },
        {
          en: "Count To 10",
          ar: "العد إلى 10",
          points: 15,
        },
        {
          en: "Eat Something",
          ar: "أكل شيئا",
          points: 7,
        },
        {
          en: "Meditate",
          ar: "تأمل",
          points: 4,
        },
        {
          en: "Listen To Music",
          ar: "استمع إلى الموسيقى",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something Of Yours That You’d Be Angry To Find A Partner Snooped Into",
      ar: "اذكر شيئًا خاصًا بك قد تغضب منه إذا وجدت شريكًا يتطفل عليه",
      answers: [
        {
          en: "Diary",
          ar: "مذكرة",
          points: 44,
        },
        {
          en: "Purse/ Wallet",
          ar: "محفظة / محفظة",
          points: 25,
        },
        {
          en: "Cell Phone",
          ar: "الهاتف الخلوي",
          points: 9,
        },
        {
          en: "Underwear Drawer",
          ar: "درج الملابس الداخلية",
          points: 5,
        },
        {
          en: "Online Accounts",
          ar: "الحسابات عبر الإنترنت",
          points: 4,
        },
        {
          en: "Bank Account",
          ar: "الحساب البنكي",
          points: 4,
        },
        {
          en: "Mail",
          ar: "بريد",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Would Change If You Could In Your Life",
      ar: "اذكر شيئًا كنت ستغيره لو استطعت في حياتك",
      answers: [
        {
          en: "Job",
          ar: "وظيفة",
          points: 36,
        },
        {
          en: "Salary",
          ar: "مرتب",
          points: 21,
        },
        {
          en: "Weight",
          ar: "وزن",
          points: 14,
        },
        {
          en: "Age",
          ar: "عمر",
          points: 13,
        },
        {
          en: "Looks",
          ar: "يبدو",
          points: 7,
        },
        {
          en: "Name",
          ar: "اسم",
          points: 3,
        },
        {
          en: "Marriage",
          ar: "زواج",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something No Christmas Party Should Be Without.",
      ar: "قم بتسمية شيء لا ينبغي أن تخلو منه حفلة عيد الميلاد.",
      answers: [
        {
          en: "Egg Nog",
          ar: "رقم البيض",
          points: 23,
        },
        {
          en: "Tree",
          ar: "شجرة",
          points: 19,
        },
        {
          en: "Gifts",
          ar: "الهدايا",
          points: 17,
        },
        {
          en: "Santa Claus",
          ar: "سانتا كلوز",
          points: 14,
        },
        {
          en: "Drinks",
          ar: "مشروبات",
          points: 9,
        },
        {
          en: "Food",
          ar: "طعام",
          points: 9,
        },
        {
          en: "Mistletoe",
          ar: "الهدال",
          points: 5,
        },
      ],
    },
    {
      en: "If You Were An Earth Tour Guide, Which Landmarks Would You Show To An Alien?",
      ar: "إذا كنت مرشدًا سياحيًا على الأرض، ما هي المعالم التي قد تظهرها لكائن فضائي؟",
      answers: [
        {
          en: "Grand Canyon",
          ar: "جراند كانيون",
          points: 36,
        },
        {
          en: "Statue Of Liberty",
          ar: "تمثال الحرية",
          points: 25,
        },
        {
          en: "White House",
          ar: "البيت الأبيض",
          points: 11,
        },
        {
          en: "Eiffel Tower",
          ar: "برج ايفل",
          points: 8,
        },
        {
          en: "Egyptian Pyramids",
          ar: "الأهرامات المصرية",
          points: 8,
        },
        {
          en: "Great Wall Of China",
          ar: "سور الصين العظيم",
          points: 5,
        },
        {
          en: "Mount Rushmore",
          ar: "جبل رشمور",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something That Goes Well With A Juicy Steak",
      ar: "قم بتسمية شيء يتناسب جيدًا مع شريحة لحم طرية",
      answers: [
        {
          en: "Baked Potato",
          ar: "البطاطا المخبوزة",
          points: 41,
        },
        {
          en: "Salad",
          ar: "سلطة",
          points: 12,
        },
        {
          en: "Fries",
          ar: "بطاطا مقلية",
          points: 10,
        },
        {
          en: "Wine",
          ar: "خمر",
          points: 10,
        },
        {
          en: "Beer",
          ar: "جعة",
          points: 9,
        },
        {
          en: "Steak Sauce",
          ar: "صلصة ستيك",
          points: 8,
        },
        {
          en: "Mushrooms",
          ar: "الفطر",
          points: 7,
        },
      ],
    },
  ],
  entertainment: [
    {
      en: "Name A Celebrity From Decades Ago, Who’s Still Thought Of As A Style Icon.",
      ar: "قم بتسمية أحد المشاهير منذ عقود مضت، والذي لا يزال يُنظر إليه على أنه أيقونة للأناقة.",
      answers: [
        {
          en: "Marilyn Monroe",
          ar: "مارلين مونرو",
          points: 32,
        },
        {
          en: "Elvis Presley",
          ar: "إلفيس بريسلي",
          points: 31,
        },
        {
          en: "Twiggy",
          ar: "تويجي",
          points: 8,
        },
        {
          en: "Elizabeth Taylor",
          ar: "إليزابيث تايلور",
          points: 6,
        },
        {
          en: "James Dean",
          ar: "جيمس دين",
          points: 6,
        },
        {
          en: "Jackie O",
          ar: "جاكي أو",
          points: 5,
        },
        {
          en: "Audrey Hepburn",
          ar: "أودري هيبورن",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Reason Why Someone Might Not Want Their Phone Number listed In The Phone Book.",
      ar: "اذكر سببًا لعدم رغبة شخص ما في إدراج رقم هاتفه في دليل الهاتف.",
      answers: [
        {
          en: "Privacy",
          ar: "خصوصية",
          points: 38,
        },
        {
          en: "Prank Calls",
          ar: "مكالمات مزحة",
          points: 18,
        },
        {
          en: "Stalker",
          ar: "مترصد",
          points: 13,
        },
        {
          en: "Telemarketers",
          ar: "المسوقين عبر الهاتف",
          points: 13,
        },
        {
          en: "Ex",
          ar: "السابق",
          points: 6,
        },
        {
          en: "They’re Famous",
          ar: "إنهم مشهورون",
          points: 5,
        },
        {
          en: "Bill Collectors",
          ar: "جامعي الفاتورة",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Movie Based On A TV Show Or Skit",
      ar: "قم بتسمية فيلم بناءً على برنامج تلفزيوني أو مسرحية هزلية",
      answers: [
        {
          en: "Charlie’s Angel",
          ar: "ملاك تشارلي",
          points: 21,
        },
        {
          en: "Bewitched",
          ar: "مسحور",
          points: 16,
        },
        {
          en: "Wayne’s World",
          ar: "عالم وين",
          points: 15,
        },
        {
          en: "Dukes Of Hazzard",
          ar: "دوقات هازارد",
          points: 14,
        },
        {
          en: "Brady Bunch",
          ar: "برادي بانش",
          points: 13,
        },
        {
          en: "Starsky And Hutch",
          ar: "ستارسكي وهاتش",
          points: 7,
        },
        {
          en: "Blues Brother",
          ar: "أخي البلوز",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Game People Play At Picnics",
      ar: "قم بتسمية لعبة يلعبها الناس في النزهات",
      answers: [
        {
          en: "Tag",
          ar: "علامة",
          points: 23,
        },
        {
          en: "Frisbee",
          ar: "الفريسبي",
          points: 20,
        },
        {
          en: "Volleyball",
          ar: "الكرة الطائرة",
          points: 17,
        },
        {
          en: "Horseshoes",
          ar: "حدوات",
          points: 12,
        },
        {
          en: "Football",
          ar: "كرة القدم",
          points: 11,
        },
        {
          en: "Baseball",
          ar: "البيسبول",
          points: 9,
        },
        {
          en: "Checkers/Chess",
          ar: "لعبة الداما / الشطرنج",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Pasttime More Respectable Than Watching Tv",
      ar: "قم بتسمية هواية أكثر احترامًا من مشاهدة التلفزيون",
      answers: [
        {
          en: "Reading",
          ar: "قراءة",
          points: 39,
        },
        {
          en: "Exercise",
          ar: "يمارس",
          points: 22,
        },
        {
          en: "Sports",
          ar: "الرياضة",
          points: 12,
        },
        {
          en: "Crafts",
          ar: "الحرف اليدوية",
          points: 9,
        },
        {
          en: "Playing Instrument",
          ar: "أداة العزف",
          points: 7,
        },
        {
          en: "Listening To Radio",
          ar: "الاستماع إلى الراديو",
          points: 3,
        },
        {
          en: "Cooking",
          ar: "طبخ",
          points: 3,
        },
      ],
    },
    {
      en: "Name A TV Gameshow You Think You Have A Good Chance Of Winning",
      ar: "قم بتسمية برنامج ألعاب تلفزيوني تعتقد أن لديك فرصة جيدة للفوز به",
      answers: [
        {
          en: "Family Feud",
          ar: "نزاع عائلي",
          points: 38,
        },
        {
          en: "Wheel Of Fortune",
          ar: "عجلة الحظ",
          points: 30,
        },
        {
          en: "Price Is Right",
          ar: "السعر مناسب",
          points: 15,
        },
        {
          en: "Millionaire",
          ar: "مليونير",
          points: 5,
        },
        {
          en: "Lingo",
          ar: "لغة",
          points: 4,
        },
        {
          en: "Jeopardy",
          ar: "خطر",
          points: 3,
        },
        {
          en: "Deal Or No Deal",
          ar: "صفقة أو لا صفقة",
          points: 3,
        },
      ],
    },
    {
      en: "Name One Word That You Always See On The Covers Of Celebrity Magazines",
      ar: "اذكر كلمة واحدة تراها دائمًا على أغلفة مجلات المشاهير",
      answers: [
        {
          en: "Divorce",
          ar: "الطلاق",
          points: 20,
        },
        {
          en: "Sex/ Affair",
          ar: "الجنس/العلاقة",
          points: 17,
        },
        {
          en: "Star",
          ar: "نجم",
          points: 17,
        },
        {
          en: "Scandal",
          ar: "فضيحة",
          points: 16,
        },
        {
          en: "Hot",
          ar: "حار",
          points: 11,
        },
        {
          en: "Pregnant",
          ar: "حامل",
          points: 8,
        },
        {
          en: "Diet/ Weight",
          ar: "النظام الغذائي / الوزن",
          points: 8,
        },
      ],
    },
    {
      en: "Name An Animal Character That Talks In The Movies",
      ar: "قم بتسمية شخصية حيوانية تتحدث في الأفلام",
      answers: [
        {
          en: "Bugs Bunny",
          ar: "باغز باني",
          points: 25,
        },
        {
          en: "Babe",
          ar: "فاتنة",
          points: 22,
        },
        {
          en: "Mickey Mouse",
          ar: "ميكي ماوس",
          points: 19,
        },
        {
          en: "Kermit The Frog",
          ar: "كيرميت الضفدع",
          points: 10,
        },
        {
          en: "Daffy Duck",
          ar: "دافي داك",
          points: 8,
        },
        {
          en: "Porky Pig",
          ar: "خنزير بوركي",
          points: 6,
        },
        {
          en: "Donald Duck",
          ar: "دونالد داك",
          points: 5,
        },
      ],
    },
    {
      en: "Name A Kid’s Game A Grown Man Would Look Pretty Silly Playing",
      ar: "قم بتسمية لعبة للأطفال، سيبدو الرجل البالغ سخيفًا جدًا عند لعبها",
      answers: [
        {
          en: "Hopscotch",
          ar: "الحجلة",
          points: 32,
        },
        {
          en: "Hide N Seek",
          ar: "إخفاء N تسعى",
          points: 17,
        },
        {
          en: "Tag",
          ar: "علامة",
          points: 15,
        },
        {
          en: "Twister",
          ar: "الإعصار",
          points: 11,
        },
        {
          en: "Jump Rope",
          ar: "القفز على الحبل",
          points: 9,
        },
        {
          en: "Musical Chairs",
          ar: "الكراسي الموسيقية",
          points: 8,
        },
        {
          en: "Dress Up",
          ar: "تلبيس",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something People Like To Listen To Music While Doing",
      ar: "قم بتسمية شيء يحب الناس الاستماع إلى الموسيقى أثناء القيام به",
      answers: [
        {
          en: "Cleaning",
          ar: "تنظيف",
          points: 21,
        },
        {
          en: "Execising",
          ar: "ممارسة",
          points: 18,
        },
        {
          en: "Studying",
          ar: "دراسة",
          points: 18,
        },
        {
          en: "Gardening",
          ar: "البستنة",
          points: 12,
        },
        {
          en: "Eating",
          ar: "Eating",
          points: 10,
        },
        {
          en: "Dancing",
          ar: "الرقص",
          points: 8,
        },
        {
          en: "Driving",
          ar: "القيادة",
          points: 8,
        },
      ],
    },
    {
      en: "In The Movies, Name A Specific Place A Damsel In Distress Might Get Trapped Or Face Danger.",
      ar: "في الأفلام، قم بتسمية مكان محدد قد تتعرض فيه فتاة في محنة للحصار أو تواجه خطرًا.",
      answers: [
        {
          en: "Train Tracks",
          ar: "مسارات القطار",
          points: 24,
        },
        {
          en: "Tower",
          ar: "برج",
          points: 20,
        },
        {
          en: "Castle",
          ar: "قلعة",
          points: 19,
        },
        {
          en: "A Dark Alley",
          ar: "زقاق مظلم",
          points: 10,
        },
        {
          en: "Basement",
          ar: "الطابق السفلي",
          points: 7,
        },
        {
          en: "Car",
          ar: "سيارة",
          points: 7,
        },
        {
          en: "Elevator",
          ar: "مصعد",
          points: 7,
        },
      ],
    },
    {
      en: "Name A Kid’s Movie That Most Adults Have Seen Too.",
      ar: "قم بتسمية فيلم للأطفال شاهده معظم البالغين أيضًا.",
      answers: [
        {
          en: "Shrek",
          ar: "شريك",
          points: 23,
        },
        {
          en: "Toy Story",
          ar: "قصة لعبة",
          points: 22,
        },
        {
          en: "Lion King",
          ar: "الأسد الملك",
          points: 20,
        },
        {
          en: "ET",
          ar: "إت",
          points: 10,
        },
        {
          en: "Bambi",
          ar: "بامبي",
          points: 9,
        },
        {
          en: "Cinderella",
          ar: "سندريلا",
          points: 8,
        },
        {
          en: "Finding Nemo",
          ar: "العثور على نيمو",
          points: 6,
        },
      ],
    },
    {
      en: "Which Christmas Movie Is Played Most Often Over The Holidays?",
      ar: "ما هو فيلم عيد الميلاد الذي يتم تشغيله في أغلب الأحيان خلال العطلات؟",
      answers: [
        {
          en: "A Christmas Story",
          ar: "قصة عيد الميلاد",
          points: 35,
        },
        {
          en: "Rudolph/Red Nosed Reindeer",
          ar: "رودولف / الرنة ذات الأنف الأحمر",
          points: 19,
        },
        {
          en: "The Grinch",
          ar: "غرينش",
          points: 16,
        },
        {
          en: "Home Alone",
          ar: "وحيدا في المنزل",
          points: 11,
        },
        {
          en: "White Christmas",
          ar: "عيد الميلاد الأبيض",
          points: 5,
        },
        {
          en: "It’s/Wonderful Life",
          ar: "إنها/حياة رائعة",
          points: 5,
        },
        {
          en: "Frosty The Snowman",
          ar: "فاترة الرجل الثلجي",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something On TV That Causes People To Yell At Their Screens",
      ar: "قم بتسمية شيء ما على شاشة التلفزيون يجعل الناس يصرخون على شاشاتهم",
      answers: [
        {
          en: "Ball Game",
          ar: "لعبة الكرة",
          points: 46,
        },
        {
          en: "Commercials",
          ar: "الإعلانات التجارية",
          points: 17,
        },
        {
          en: "Boxing Match",
          ar: "مباراة الملاكمة",
          points: 12,
        },
        {
          en: "News",
          ar: "أخبار",
          points: 10,
        },
        {
          en: "Politics",
          ar: "سياسة",
          points: 5,
        },
        {
          en: "Horror Movie",
          ar: "فيلم رعب",
          points: 5,
        },
        {
          en: "Game Show",
          ar: "عرض اللعبة",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Christmas Show That Is On Tv Every Year",
      ar: "قم بتسمية برنامج عيد الميلاد الذي يتم عرضه على التلفزيون كل عام",
      answers: [
        {
          en: "Rudolph",
          ar: "رودولف",
          points: 25,
        },
        {
          en: "Christmas Story",
          ar: "قصة عيد الميلاد",
          points: 21,
        },
        {
          en: "Charlie Brown",
          ar: "تشارلي براون",
          points: 15,
        },
        {
          en: "Frosty",
          ar: "فاترة",
          points: 12,
        },
        {
          en: "Grinch",
          ar: "غرينش",
          points: 11,
        },
        {
          en: "A Wonderful Life",
          ar: "حياة رائعة",
          points: 10,
        },
        {
          en: "Home Alone",
          ar: "وحيدا في المنزل",
          points: 3,
        },
      ],
    },
    {
      en: "Name A TV Show You’d Never Want Your Name Mentioned On.",
      ar: "قم بتسمية برنامج تلفزيوني لا ترغب أبدًا في ذكر اسمك عليه.",
      answers: [
        {
          en: "Jerry Springer",
          ar: "جيري سبرينغر",
          points: 33,
        },
        {
          en: "Cops",
          ar: "رجال شرطة",
          points: 17,
        },
        {
          en: "Cheaters",
          ar: "الغشاشون",
          points: 14,
        },
        {
          en: "The Nightly News",
          ar: "الأخبار الليلية",
          points: 12,
        },
        {
          en: "America’s Most Wanted",
          ar: "أمريكا الأكثر طلبا",
          points: 6,
        },
        {
          en: "Oprah Winfrey",
          ar: "أوبرا وينفري",
          points: 5,
        },
        {
          en: "Judge Judy",
          ar: "القاضي جودي",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something You Remember About The Tv Show “M*A*S*H”",
      ar: 'قم بتسمية شيء تتذكره عن البرنامج التلفزيوني "M*A*S*H"',
      answers: [
        {
          en: "Hot Lips",
          ar: "الشفاه الساخنة",
          points: 26,
        },
        {
          en: "Hawkeye",
          ar: "هوك",
          points: 22,
        },
        {
          en: "Radar",
          ar: "رادار",
          points: 16,
        },
        {
          en: "War",
          ar: "حرب",
          points: 12,
        },
        {
          en: "Doctors",
          ar: "الأطباء",
          points: 8,
        },
        {
          en: "Theme Music",
          ar: "موضوع الموسيقى",
          points: 5,
        },
        {
          en: "Klinger",
          ar: "كلينجر",
          points: 5,
        },
      ],
    },
    {
      en: "Name Something People Associate With The TV Show “60 Minutes”",
      ar: 'قم بتسمية شيء يرتبط به الأشخاص في البرنامج التلفزيوني "60 دقيقة"',
      answers: [
        {
          en: "Investigative Pieces",
          ar: "قطع التحقيق",
          points: 18,
        },
        {
          en: "Andy Rooney",
          ar: "آندي روني",
          points: 16,
        },
        {
          en: "Ticking Clock",
          ar: "الساعة الموقوتة",
          points: 14,
        },
        {
          en: "Tough Questions",
          ar: "أسئلة صعبة",
          points: 14,
        },
        {
          en: "Dan Rather",
          ar: "دان رازر",
          points: 14,
        },
        {
          en: "Mike Wallace",
          ar: "مايك والاس",
          points: 11,
        },
        {
          en: "Leslie Stahl",
          ar: "ليزلي ستال",
          points: 9,
        },
      ],
    },
  ],
  food: [
    {
      en: "Unlike “Honey Bun”, Name A Breakfast Food That Doesn’t Make A Good Pet Name",
      ar: 'على عكس "كعكة العسل"، قم بتسمية طعام الإفطار الذي لا يجعل اسمًا جيدًا للحيوانات الأليفة',
      answers: [
        {
          en: "Cereal",
          ar: "رقائق الذرة",
          points: 27,
        },
        {
          en: "Eggs",
          ar: "بيض",
          points: 22,
        },
        {
          en: "Bacon",
          ar: "لحم خنزير مقدد",
          points: 15,
        },
        {
          en: "Toast",
          ar: "نخب",
          points: 11,
        },
        {
          en: "Pancake",
          ar: "فطيرة",
          points: 10,
        },
        {
          en: "Donut",
          ar: "كعكة محلاة",
          points: 6,
        },
        {
          en: "Bagel",
          ar: "الخبز",
          points: 5,
        },
      ],
    },
    {
      en: "Name A Country Known For Having Beautiful Weather.",
      ar: "اذكر اسم دولة معروفة بطقسها الجميل.",
      answers: [
        {
          en: "United States",
          ar: "الولايات المتحدة",
          points: 27,
        },
        {
          en: "Mexico",
          ar: "المكسيك",
          points: 15,
        },
        {
          en: "Australia",
          ar: "أستراليا",
          points: 14,
        },
        {
          en: "Bahamas",
          ar: "جزر البهاما",
          points: 12,
        },
        {
          en: "France",
          ar: "فرنسا",
          points: 11,
        },
        {
          en: "Spain",
          ar: "إسبانيا",
          points: 9,
        },
        {
          en: "Brazil",
          ar: "البرازيل",
          points: 8,
        },
      ],
    },
    {
      en: "Name A Holiday Food People Plan To Avoid, But End Up Eating Anyway.",
      ar: "قم بتسمية طعام العطلة الذي يخطط الناس لتجنبه، لكن ينتهي بهم الأمر بتناوله على أي حال.",
      answers: [
        {
          en: "Pie",
          ar: "فطيرة",
          points: 28,
        },
        {
          en: "Turkey",
          ar: "ديك رومى",
          points: 22,
        },
        {
          en: "Cake",
          ar: "كعكة",
          points: 17,
        },
        {
          en: "Cookies",
          ar: "ملفات تعريف الارتباط",
          points: 11,
        },
        {
          en: "Fruitcake",
          ar: "كعكة الفاكهة",
          points: 10,
        },
        {
          en: "Ham",
          ar: "لحم خنزير",
          points: 4,
        },
        {
          en: "Candy",
          ar: "حلوى",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Food That Doesn’t Need To Be Refrigerated",
      ar: "قم بتسمية الطعام الذي لا يحتاج إلى التبريد",
      answers: [
        {
          en: "Bread",
          ar: "خبز",
          points: 35,
        },
        {
          en: "Bananas",
          ar: "الموز",
          points: 16,
        },
        {
          en: "Cookies",
          ar: "ملفات تعريف الارتباط",
          points: 13,
        },
        {
          en: "Chips",
          ar: "رقائق",
          points: 10,
        },
        {
          en: "Potatoes",
          ar: "البطاطس",
          points: 8,
        },
        {
          en: "Cereal",
          ar: "رقائق الذرة",
          points: 6,
        },
        {
          en: "Canned Goods",
          ar: "السلع المعلبة",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Food Almost Everyone Knows How To Make",
      ar: "قم بتسمية طعام يعرف الجميع تقريبًا كيفية صنعه",
      answers: [
        {
          en: "Eggs",
          ar: "بيض",
          points: 32,
        },
        {
          en: "Hamburger",
          ar: "همبرغر",
          points: 15,
        },
        {
          en: "Spaghetti",
          ar: "معكرونة",
          points: 14,
        },
        {
          en: "Macaroni & Cheese",
          ar: "معكرونة وجبنة",
          points: 9,
        },
        {
          en: "Peanut Butter & Jelly",
          ar: "زبدة الفول السوداني والجيلي",
          points: 9,
        },
        {
          en: "Chicken",
          ar: "فرخة",
          points: 8,
        },
        {
          en: "Cereal",
          ar: "رقائق الذرة",
          points: 8,
        },
      ],
    },
    {
      en: "Besides Ice Cream, Name A Food That Can Be Scooped.",
      ar: "إلى جانب الآيس كريم، قم بتسمية طعام يمكن تناوله.",
      answers: [
        {
          en: "Mashed Potatoes",
          ar: "البطاطس المهروسة",
          points: 29,
        },
        {
          en: "Yogurt",
          ar: "زبادي",
          points: 25,
        },
        {
          en: "Cataloupe",
          ar: "كاتالوب",
          points: 11,
        },
        {
          en: "Cottage Cheese",
          ar: "جبن",
          points: 9,
        },
        {
          en: "Jello",
          ar: "جيلو",
          points: 8,
        },
        {
          en: "Rice",
          ar: "أرز",
          points: 8,
        },
        {
          en: "Cereal",
          ar: "رقائق الذرة",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Fruit That People Might Add To Jell-o",
      ar: "قم بتسمية الفاكهة التي قد يضيفها الناس إلى الجيلي",
      answers: [
        {
          en: "Strawberry",
          ar: "الفراولة",
          points: 20,
        },
        {
          en: "Apple",
          ar: "تفاحة",
          points: 18,
        },
        {
          en: "Pineapple",
          ar: "أناناس",
          points: 16,
        },
        {
          en: "Peach",
          ar: "خَوخ",
          points: 16,
        },
        {
          en: "Banana",
          ar: "موز",
          points: 14,
        },
        {
          en: "Grape",
          ar: "العنب",
          points: 7,
        },
        {
          en: "Cherry",
          ar: "الكرز",
          points: 5,
        },
      ],
    },
    {
      en: "Name A Drink Or Food That Can Be Eaten Either Hot Or Cold.",
      ar: "قم بتسمية مشروب أو طعام يمكن تناوله ساخنًا أو باردًا.",
      answers: [
        {
          en: "Tea",
          ar: "شاي",
          points: 32,
        },
        {
          en: "Pizza",
          ar: "بيتزا",
          points: 29,
        },
        {
          en: "Coffee",
          ar: "قهوة",
          points: 17,
        },
        {
          en: "Milk",
          ar: "لبن",
          points: 8,
        },
        {
          en: "Soup",
          ar: "حساء",
          points: 4,
        },
        {
          en: "Cereal",
          ar: "رقائق الذرة",
          points: 3,
        },
        {
          en: "Chicken",
          ar: "فرخة",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Food That Would Be Disgusting To Be Fed ‘Romantically’.",
      ar: 'قم بتسمية الطعام الذي قد يكون من المثير للاشمئزاز تناوله بطريقة "رومانسية".',
      answers: [
        {
          en: "Fish",
          ar: "سمكة",
          points: 28,
        },
        {
          en: "Soup",
          ar: "حساء",
          points: 19,
        },
        {
          en: "Pizza",
          ar: "بيتزا",
          points: 16,
        },
        {
          en: "Noodles",
          ar: "نودلز",
          points: 12,
        },
        {
          en: "Hot Dog",
          ar: "نقانق",
          points: 8,
        },
        {
          en: "Ribs",
          ar: "ضلوع",
          points: 7,
        },
        {
          en: "Chicken",
          ar: "فرخة",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Food You Eat With Your Fingers",
      ar: "قم بتسمية الطعام الذي تتناوله بأصابعك",
      answers: [
        {
          en: "French Fries",
          ar: "بطاطس مقلية",
          points: 24,
        },
        {
          en: "Chicken",
          ar: "فرخة",
          points: 19,
        },
        {
          en: "Hamburger",
          ar: "همبرغر",
          points: 17,
        },
        {
          en: "Cheese",
          ar: "جبن",
          points: 10,
        },
        {
          en: "Sandwich",
          ar: "شطيرة",
          points: 8,
        },
        {
          en: "Pizza",
          ar: "بيتزا",
          points: 8,
        },
        {
          en: "Chips",
          ar: "رقائق",
          points: 8,
        },
      ],
    },
    {
      en: "Name Something You Need In Order To Get A Great Job",
      ar: "قم بتسمية شيء تحتاجه للحصول على وظيفة رائعة",
      answers: [
        {
          en: "Resume",
          ar: "سيرة ذاتية",
          points: 34,
        },
        {
          en: "Education",
          ar: "تعليم",
          points: 30,
        },
        {
          en: "Experience",
          ar: "خبرة",
          points: 13,
        },
        {
          en: "Good Looks",
          ar: "مظهر جيد",
          points: 8,
        },
        {
          en: "Personality",
          ar: "شخصية",
          points: 5,
        },
        {
          en: "Intelligence",
          ar: "ذكاء",
          points: 3,
        },
        {
          en: "Connections",
          ar: "اتصالات",
          points: 3,
        },
      ],
    },
    {
      en: "Name A Food You Cook For Which You Don’t Need To Read A Recipe",
      ar: "قم بتسمية الطعام الذي تطبخه ولا تحتاج إلى قراءة وصفة له",
      answers: [
        {
          en: "Eggs",
          ar: "بيض",
          points: 34,
        },
        {
          en: "Rice",
          ar: "أرز",
          points: 19,
        },
        {
          en: "Mac And Cheese",
          ar: "ماك والجبن",
          points: 11,
        },
        {
          en: "Soup",
          ar: "حساء",
          points: 10,
        },
        {
          en: "Spaghetti",
          ar: "معكرونة",
          points: 10,
        },
        {
          en: "Frozen Pizza",
          ar: "بيتزا مجمدة",
          points: 8,
        },
        {
          en: "Cookies",
          ar: "ملفات تعريف الارتباط",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Place That You Wouldn’t Want To Go After Having A Few To Drink",
      ar: "قم بتسمية مكان لا ترغب في الذهاب إليه بعد تناول القليل من المشروبات",
      answers: [
        {
          en: "Place Of Worship",
          ar: "مكان العبادة",
          points: 32,
        },
        {
          en: "Work",
          ar: "عمل",
          points: 26,
        },
        {
          en: "Police Station",
          ar: "مركز الشرطة",
          points: 13,
        },
        {
          en: "Home",
          ar: "بيت",
          points: 10,
        },
        {
          en: "Parents’ House",
          ar: "بيت الوالدين",
          points: 6,
        },
        {
          en: "In Laws’ House",
          ar: "في بيت القوانين",
          points: 3,
        },
        {
          en: "Court",
          ar: "محكمة",
          points: 3,
        },
      ],
    },
    {
      en: "They’ve Cloned A Sheep: Name A Creature They Should Never Clone Because We Already Have Too Many.",
      ar: "لقد استنسخوا خروفًا: قم بتسمية مخلوق لا ينبغي عليهم استنساخه أبدًا لأن لدينا بالفعل عددًا كبيرًا جدًا منه.",
      answers: [
        {
          en: "Snake",
          ar: "ثعبان",
          points: 16,
        },
        {
          en: "Cat",
          ar: "قطة",
          points: 15,
        },
        {
          en: "Rat",
          ar: "فأر",
          points: 15,
        },
        {
          en: "Pigeon",
          ar: "حمامة",
          points: 15,
        },
        {
          en: "Human",
          ar: "بشر",
          points: 13,
        },
        {
          en: "Dog",
          ar: "كلب",
          points: 12,
        },
        {
          en: "Deer",
          ar: "عزيزي",
          points: 10,
        },
      ],
    },
    {
      en: "Name Something That Lives In The Ocean That Most People Wouldn’t Eat",
      ar: "اذكر شيئًا يعيش في المحيط ولا يأكله معظم الناس",
      answers: [
        {
          en: "Squid",
          ar: "الحبار",
          points: 20,
        },
        {
          en: "Sharks",
          ar: "أسماك القرش",
          points: 18,
        },
        {
          en: "Whales",
          ar: "الحيتان",
          points: 16,
        },
        {
          en: "Jellyfish",
          ar: "قنديل البحر",
          points: 15,
        },
        {
          en: "Octopus",
          ar: "الأخطبوط",
          points: 13,
        },
        {
          en: "Eel",
          ar: "الجريث",
          points: 7,
        },
        {
          en: "Dolphins",
          ar: "الدلافين",
          points: 6,
        },
      ],
    },
    {
      en: "Name A Dessert You Might Not Serve At A Fancy Dinner Party.",
      ar: "قم بتسمية الحلوى التي قد لا تقدمها في حفل عشاء فاخر.",
      answers: [
        {
          en: "Ice Cream",
          ar: "بوظة",
          points: 44,
        },
        {
          en: "Jell O",
          ar: "جيل أو",
          points: 23,
        },
        {
          en: "Cookies",
          ar: "ملفات تعريف الارتباط",
          points: 15,
        },
        {
          en: "Brownies",
          ar: "براونيز",
          points: 6,
        },
        {
          en: "Pie",
          ar: "فطيرة",
          points: 4,
        },
        {
          en: "Cupcakes",
          ar: "الكعك",
          points: 4,
        },
        {
          en: "Donuts",
          ar: "الكعك",
          points: 3,
        },
      ],
    },
    {
      en: "Name Something A Kid Might Do At The Dinner Table That Would Probably Get Him In Trouble.",
      ar: "اذكر شيئًا قد يفعله الطفل على مائدة العشاء والذي من المحتمل أن يوقعه في المشاكل.",
      answers: [
        {
          en: "Throw Food",
          ar: "رمي الطعام",
          points: 21,
        },
        {
          en: "Burp",
          ar: "تجشؤ",
          points: 20,
        },
        {
          en: "Play With Food",
          ar: "العب مع الطعام",
          points: 14,
        },
        {
          en: "Not Finish Food",
          ar: "لا تنتهي من الطعام",
          points: 14,
        },
        {
          en: "Spit Out Food",
          ar: "بصق الطعام",
          points: 9,
        },
        {
          en: "Spill Something",
          ar: "انسكاب شيء",
          points: 9,
        },
        {
          en: "Eat With Hands",
          ar: "تناول الطعام باليدين",
          points: 7,
        },
      ],
    },
    {
      en: "Name A Food That Comes In Packs Of Six Or More",
      ar: "قم بتسمية الطعام الذي يأتي في عبوات مكونة من ستة أو أكثر",
      answers: [
        {
          en: "Hot Dogs",
          ar: "نقانق",
          points: 17,
        },
        {
          en: "Pudding",
          ar: "بودنغ",
          points: 17,
        },
        {
          en: "Little Cereal Boxes",
          ar: "علب الحبوب الصغيرة",
          points: 15,
        },
        {
          en: "Beer",
          ar: "جعة",
          points: 13,
        },
        {
          en: "Soda",
          ar: "الصودا",
          points: 12,
        },
        {
          en: "Yogurt",
          ar: "زبادي",
          points: 12,
        },
        {
          en: "Eggs",
          ar: "بيض",
          points: 9,
        },
      ],
    },
    {
      en: "Name A Food That Usually Comes With A Particular Sauce",
      ar: "قم بتسمية الطعام الذي يأتي عادةً مع صلصة معينة",
      answers: [
        {
          en: "Pasta",
          ar: "المعكرونة",
          points: 37,
        },
        {
          en: "Pizza",
          ar: "بيتزا",
          points: 18,
        },
        {
          en: "Chicken Strips",
          ar: "شرائح الدجاج",
          points: 11,
        },
        {
          en: "Shrimp",
          ar: "جمبري",
          points: 9,
        },
        {
          en: "Steak",
          ar: "شريحة لحم",
          points: 9,
        },
        {
          en: "Fish",
          ar: "سمكة",
          points: 7,
        },
        {
          en: "French Fries",
          ar: "بطاطس مقلية",
          points: 5,
        },
      ],
    },
    {
      en: "Name A U.S. City Known For Having Great Weather",
      ar: "قم بتسمية مدينة أمريكية معروفة بطقسها الرائع",
      answers: [
        {
          en: "Miami",
          ar: "ميامي",
          points: 28,
        },
        {
          en: "San Diego",
          ar: "سان دييغو",
          points: 20,
        },
        {
          en: "Phoenix",
          ar: "فينيكس",
          points: 17,
        },
        {
          en: "Los Angeles",
          ar: "لوس أنجلوس",
          points: 13,
        },
        {
          en: "San Francisco",
          ar: "سان فرانسيسكو",
          points: 8,
        },
        {
          en: "Santa Fe",
          ar: "سانتا في",
          points: 4,
        },
        {
          en: "Ft. Lauderdale",
          ar: "قدم. لودرديل",
          points: 4,
        },
      ],
    },
    {
      en: "Name A Food Served In An Elementary School Cafeteria",
      ar: "قم بتسمية الطعام الذي يتم تقديمه في كافتيريا المدرسة الابتدائية",
      answers: [
        {
          en: "Pizza",
          ar: "بيتزا",
          points: 46,
        },
        {
          en: "Meatloaf",
          ar: "رغيف اللحم",
          points: 21,
        },
        {
          en: "Jell O",
          ar: "جيل أو",
          points: 10,
        },
        {
          en: "Fries",
          ar: "بطاطا مقلية",
          points: 7,
        },
        {
          en: "Chicken Nuggets",
          ar: "ناجتس الدجاج",
          points: 4,
        },
        {
          en: "Hot Dogs",
          ar: "نقانق",
          points: 3,
        },
        {
          en: "Hamburgers",
          ar: "الهامبرغر",
          points: 3,
        },
      ],
    },
    {
      en: "Besides Dishes And Utensils, What Else Do You Need To Host A Fancy Dinner Party?",
      ar: "إلى جانب الأطباق والأواني، ما الذي تحتاجه أيضًا لاستضافة حفل عشاء فاخر؟",
      answers: [
        {
          en: "Fancy Food",
          ar: "الغذاء الهوى",
          points: 42,
        },
        {
          en: "Wine",
          ar: "خمر",
          points: 13,
        },
        {
          en: "Napkins",
          ar: "المناديل",
          points: 12,
        },
        {
          en: "Candles",
          ar: "الشموع",
          points: 8,
        },
        {
          en: "Cocktail Glasses",
          ar: "نظارات الكوكتيل",
          points: 7,
        },
        {
          en: "Flowers",
          ar: "زهور",
          points: 6,
        },
        {
          en: "Music",
          ar: "موسيقى",
          points: 4,
        },
      ],
    },
    {
      en: "Name Something That Fast Food Rarely Comes Without",
      ar: "قم بتسمية شيء نادرًا ما تأتي الوجبات السريعة بدونه",
      answers: [
        {
          en: "Fries",
          ar: "بطاطا مقلية",
          points: 47,
        },
        {
          en: "Ketchup",
          ar: "كاتشب",
          points: 14,
        },
        {
          en: "Grease",
          ar: "شحم",
          points: 9,
        },
        {
          en: "Salt",
          ar: "ملح",
          points: 8,
        },
        {
          en: "Fat",
          ar: "سمين",
          points: 7,
        },
        {
          en: "Beverage",
          ar: "المشروبات",
          points: 6,
        },
        {
          en: "Napkins",
          ar: "المناديل",
          points: 5,
        },
      ],
    },
  ],
  lifestyle: [
    {
      en: "Name Something About Rapunzel’S Hair She Might’Ve Worried About",
      ar: "اذكر شيئًا عن شعر رابونزيل ربما كان يقلقها",
      answers: [
        {
          en: "Length",
          ar: "طول",
          points: 28,
        },
        {
          en: "Tangles",
          ar: "التشابك",
          points: 17,
        },
        {
          en: "Falling Out",
          ar: "السقوط",
          points: 17,
        },
        {
          en: "Split Ends",
          ar: "نهايات مقسمة",
          points: 10,
        },
        {
          en: "Lice",
          ar: "قمل",
          points: 9,
        },
        {
          en: "Combing It",
          ar: "تمشيطه",
          points: 8,
        },
        {
          en: "Cutting It",
          ar: "قطعها",
          points: 6,
        },
      ],
    },
    {
      en: "Name Something You Wouldn’t Miss About Daily Life If You Were Stranded On A Desert Island.",
      ar: "قم بتسمية شيء لن تفوته في الحياة اليومية إذا تقطعت بك السبل في جزيرة صحراوية.",
      answers: [
        {
          en: "Work",
          ar: "عمل",
          points: 27,
        },
        {
          en: "TV",
          ar: "تلفزيون",
          points: 20,
        },
        {
          en: "Traffic",
          ar: "مرور",
          points: 12,
        },
        {
          en: "Bills",
          ar: "فواتير",
          points: 12,
        },
        {
          en: "Telephone",
          ar: "هاتف",
          points: 10,
        },
        {
          en: "People",
          ar: "الناس",
          points: 8,
        },
        {
          en: "Housework",
          ar: "الأعمال المنزلية",
          points: 5,
        },
      ],
    },
  ],
};

const TOP10_QUESTION_BANK = {
  lifestyle: [
    {
      en: "Top 10 things people do right after waking up.",
      ar: "أفضل 10 أشياء يفعلها الناس بعد الاستيقاظ مباشرة.",
      answers: [
        { en: "Check phone", ar: "تفقد الهاتف", points: 1 },
        { en: "Drink water", ar: "شرب الماء", points: 2 },
        { en: "Coffee or tea", ar: "قهوة أو شاي", points: 3 },
        { en: "Brush teeth", ar: "تفريش الأسنان", points: 4 },
        { en: "Open social media", ar: "فتح السوشيال ميديا", points: 5 },
        { en: "Shower", ar: "الاستحمام", points: 6 },
        { en: "Pray", ar: "الصلاة", points: 7 },
        { en: "Check messages", ar: "مراجعة الرسائل", points: 8 },
        { en: "Make bed", ar: "ترتيب السرير", points: 9 },
        { en: "Breakfast", ar: "الإفطار", points: 10 },
      ],
    },
    {
      en: "Top 10 habits people use to stay productive.",
      ar: "أفضل 10 عادات يستخدمها الناس للبقاء منتجين.",
      answers: [
        { en: "To-do list", ar: "قائمة مهام", points: 1 },
        { en: "Calendar planning", ar: "تنظيم التقويم", points: 2 },
        { en: "Early wake-up", ar: "الاستيقاظ المبكر", points: 3 },
        { en: "Work in blocks", ar: "العمل على فترات", points: 4 },
        { en: "Turn off notifications", ar: "إغلاق الإشعارات", points: 5 },
        { en: "Exercise", ar: "الرياضة", points: 6 },
        { en: "Healthy food", ar: "أكل صحي", points: 7 },
        { en: "Priority tasks first", ar: "الأهم أولًا", points: 8 },
        { en: "Clean workspace", ar: "مكان عمل مرتب", points: 9 },
        { en: "Sleep early", ar: "النوم المبكر", points: 10 },
      ],
    },
    {
      en: "Top 10 things people forget at home.",
      ar: "أفضل 10 أشياء ينساها الناس في المنزل.",
      answers: [
        { en: "Keys", ar: "المفاتيح", points: 1 },
        { en: "Wallet", ar: "المحفظة", points: 2 },
        { en: "Phone charger", ar: "شاحن الهاتف", points: 3 },
        { en: "ID card", ar: "بطاقة الهوية", points: 4 },
        { en: "Lunch box", ar: "وجبة الغداء", points: 5 },
        { en: "Headphones", ar: "سماعات", points: 6 },
        { en: "Watch", ar: "الساعة", points: 7 },
        { en: "Water bottle", ar: "قارورة ماء", points: 8 },
        { en: "Notebook", ar: "دفتر", points: 9 },
        { en: "Glasses", ar: "النظارة", points: 10 },
      ],
    },
    {
      en: "Top 10 reasons people are late.",
      ar: "أفضل 10 أسباب تجعل الناس يتأخرون.",
      answers: [
        { en: "Traffic", ar: "الزحام", points: 1 },
        { en: "Overslept", ar: "النوم الزائد", points: 2 },
        { en: "Bad weather", ar: "الطقس السيئ", points: 3 },
        { en: "Could not find keys", ar: "لم يجد المفاتيح", points: 4 },
        { en: "Public transport delay", ar: "تأخر المواصلات", points: 5 },
        { en: "Last-minute call", ar: "اتصال مفاجئ", points: 6 },
        { en: "Family emergency", ar: "ظرف عائلي", points: 7 },
        { en: "Wardrobe change", ar: "تغيير الملابس", points: 8 },
        { en: "Phone battery issue", ar: "مشكلة بطارية الهاتف", points: 9 },
        { en: "Forgot schedule", ar: "نسي الموعد", points: 10 },
      ],
    },
    {
      en: "Top 10 ways people relax after a long day.",
      ar: "أفضل 10 طرق للاسترخاء بعد يوم طويل.",
      answers: [
        { en: "Watch a show", ar: "مشاهدة مسلسل", points: 1 },
        { en: "Sleep", ar: "النوم", points: 2 },
        { en: "Gaming", ar: "الألعاب", points: 3 },
        { en: "Walk outside", ar: "المشي", points: 4 },
        { en: "Music", ar: "الموسيقى", points: 5 },
        { en: "Tea/Coffee", ar: "شاي/قهوة", points: 6 },
        { en: "Read", ar: "القراءة", points: 7 },
        { en: "Talk with friends", ar: "الحديث مع الأصدقاء", points: 8 },
        { en: "Social media", ar: "سوشيال ميديا", points: 9 },
        { en: "Workout", ar: "تمرين", points: 10 },
      ],
    },
  ],
  entertainment: [
    {
      en: "Top 10 most watched movie genres in 2026.",
      ar: "أفضل 10 أنواع أفلام مشاهدة في 2026.",
      answers: [
        { en: "Action", ar: "أكشن", points: 1 },
        { en: "Comedy", ar: "كوميدي", points: 2 },
        { en: "Drama", ar: "دراما", points: 3 },
        { en: "Sci-Fi", ar: "خيال علمي", points: 4 },
        { en: "Thriller", ar: "إثارة", points: 5 },
        { en: "Animation", ar: "أنيميشن", points: 6 },
        { en: "Horror", ar: "رعب", points: 7 },
        { en: "Adventure", ar: "مغامرة", points: 8 },
        { en: "Romance", ar: "رومانسي", points: 9 },
        { en: "Documentary", ar: "وثائقي", points: 10 },
      ],
    },
    {
      en: "Top 10 things people stream every week.",
      ar: "أفضل 10 أشياء يقوم الناس ببثها أسبوعيًا.",
      answers: [
        { en: "Series", ar: "مسلسلات", points: 1 },
        { en: "Movies", ar: "أفلام", points: 2 },
        { en: "Football matches", ar: "مباريات كرة القدم", points: 3 },
        { en: "Gaming streams", ar: "بث الألعاب", points: 4 },
        { en: "Music videos", ar: "فيديوهات موسيقية", points: 5 },
        { en: "Podcasts", ar: "بودكاست", points: 6 },
        { en: "Short videos", ar: "فيديوهات قصيرة", points: 7 },
        { en: "Anime", ar: "أنمي", points: 8 },
        { en: "Live news", ar: "أخبار مباشرة", points: 9 },
        { en: "Documentaries", ar: "وثائقيات", points: 10 },
      ],
    },
    {
      en: "Top 10 board or party games friends play.",
      ar: "أفضل 10 ألعاب جماعية يلعبها الأصدقاء.",
      answers: [
        { en: "UNO", ar: "أونو", points: 1 },
        { en: "Monopoly", ar: "مونوبولي", points: 2 },
        { en: "Charades", ar: "تمثيل صامت", points: 3 },
        { en: "Pictionary", ar: "بيكشينري", points: 4 },
        { en: "Codenames", ar: "كود نيمز", points: 5 },
        { en: "Jenga", ar: "جينغا", points: 6 },
        { en: "Trivia", ar: "أسئلة عامة", points: 7 },
        { en: "Ludo", ar: "لودو", points: 8 },
        { en: "Cards", ar: "ورق لعب", points: 9 },
        { en: "Mafia", ar: "مافيا", points: 10 },
      ],
    },
    {
      en: "Top 10 songs people add to road trip playlists.",
      ar: "أفضل 10 أغاني يضيفها الناس لقائمة الرحلات.",
      answers: [
        { en: "Pop hits", ar: "أغاني بوب", points: 1 },
        { en: "Classic rock", ar: "روك كلاسيكي", points: 2 },
        { en: "Arabic pop", ar: "بوب عربي", points: 3 },
        { en: "Dance tracks", ar: "أغاني راقصة", points: 4 },
        { en: "Nostalgic songs", ar: "أغاني قديمة", points: 5 },
        { en: "Rap", ar: "راب", points: 6 },
        { en: "Chill beats", ar: "موسيقى هادئة", points: 7 },
        { en: "Indie", ar: "إندي", points: 8 },
        { en: "EDM", ar: "إلكترونية", points: 9 },
        { en: "K-pop", ar: "كي-بوب", points: 10 },
      ],
    },
    {
      en: "Top 10 things fans buy for their favorite teams.",
      ar: "أفضل 10 أشياء يشتريها المشجعون لفرقهم المفضلة.",
      answers: [
        { en: "Jersey", ar: "قميص الفريق", points: 1 },
        { en: "Scarf", ar: "وشاح", points: 2 },
        { en: "Cap", ar: "قبعة", points: 3 },
        { en: "Match ticket", ar: "تذكرة المباراة", points: 4 },
        { en: "Flag", ar: "علم", points: 5 },
        { en: "Mug", ar: "كوب", points: 6 },
        { en: "Poster", ar: "بوستر", points: 7 },
        { en: "Sticker set", ar: "ملصقات", points: 8 },
        { en: "Phone case", ar: "غطاء هاتف", points: 9 },
        { en: "Signed item", ar: "تذكار موقّع", points: 10 },
      ],
    },
  ],
  digital: [
    {
      en: "Top 10 apps people open every day in 2026.",
      ar: "أفضل 10 تطبيقات يفتحها الناس يوميًا في 2026.",
      answers: [
        { en: "WhatsApp", ar: "واتساب", points: 1 },
        { en: "YouTube", ar: "يوتيوب", points: 2 },
        { en: "Instagram", ar: "إنستغرام", points: 3 },
        { en: "TikTok", ar: "تيك توك", points: 4 },
        { en: "Maps", ar: "خرائط", points: 5 },
        { en: "Email", ar: "البريد الإلكتروني", points: 6 },
        { en: "Banking app", ar: "تطبيق البنك", points: 7 },
        { en: "Calendar", ar: "التقويم", points: 8 },
        { en: "Music app", ar: "تطبيق موسيقى", points: 9 },
        { en: "Notes app", ar: "تطبيق ملاحظات", points: 10 },
      ],
    },
    {
      en: "Top 10 reasons people change their phone.",
      ar: "أفضل 10 أسباب تجعل الناس يغيرون هواتفهم.",
      answers: [
        { en: "Battery weak", ar: "بطارية ضعيفة", points: 1 },
        { en: "Broken screen", ar: "شاشة مكسورة", points: 2 },
        { en: "Slow performance", ar: "أداء بطيء", points: 3 },
        { en: "Better camera", ar: "كاميرا أفضل", points: 4 },
        { en: "Low storage", ar: "مساحة قليلة", points: 5 },
        { en: "Software unsupported", ar: "لا يدعم التحديثات", points: 6 },
        { en: "Gift", ar: "هدية", points: 7 },
        { en: "Work needs", ar: "متطلبات العمل", points: 8 },
        { en: "5G upgrade", ar: "ترقية 5G", points: 9 },
        { en: "Old phone sold", ar: "بيع الهاتف القديم", points: 10 },
      ],
    },
    {
      en: "Top 10 online activities people do at night.",
      ar: "أفضل 10 أنشطة أونلاين يقوم بها الناس ليلًا.",
      answers: [
        { en: "Watch videos", ar: "مشاهدة فيديوهات", points: 1 },
        { en: "Chat", ar: "دردشة", points: 2 },
        { en: "Gaming", ar: "لعب", points: 3 },
        { en: "Shopping", ar: "تسوق", points: 4 },
        { en: "Scrolling social media", ar: "تصفح السوشيال", points: 5 },
        { en: "Read news", ar: "قراءة الأخبار", points: 6 },
        { en: "Learn online", ar: "تعلم أونلاين", points: 7 },
        { en: "Listen to podcasts", ar: "سماع بودكاست", points: 8 },
        { en: "Video calls", ar: "مكالمات فيديو", points: 9 },
        { en: "Plan next day", ar: "تخطيط اليوم التالي", points: 10 },
      ],
    },
    {
      en: "Top 10 things people look for before buying a laptop.",
      ar: "أفضل 10 أشياء يبحث عنها الناس قبل شراء لابتوب.",
      answers: [
        { en: "Price", ar: "السعر", points: 1 },
        { en: "Battery life", ar: "عمر البطارية", points: 2 },
        { en: "Performance", ar: "الأداء", points: 3 },
        { en: "RAM", ar: "الرام", points: 4 },
        { en: "Storage", ar: "التخزين", points: 5 },
        { en: "Weight", ar: "الوزن", points: 6 },
        { en: "Screen quality", ar: "جودة الشاشة", points: 7 },
        { en: "Keyboard comfort", ar: "راحة الكيبورد", points: 8 },
        { en: "Brand", ar: "العلامة التجارية", points: 9 },
        { en: "Warranty", ar: "الضمان", points: 10 },
      ],
    },
    {
      en: "Top 10 smart home devices people use in 2026.",
      ar: "أفضل 10 أجهزة منزل ذكي يستخدمها الناس في 2026.",
      answers: [
        { en: "Smart TV", ar: "تلفاز ذكي", points: 1 },
        { en: "Smart speaker", ar: "سماعة ذكية", points: 2 },
        { en: "Robot vacuum", ar: "مكنسة روبوت", points: 3 },
        { en: "Smart lights", ar: "إضاءة ذكية", points: 4 },
        { en: "Smart lock", ar: "قفل ذكي", points: 5 },
        { en: "Security camera", ar: "كاميرا مراقبة", points: 6 },
        { en: "Smart thermostat", ar: "منظم حرارة ذكي", points: 7 },
        { en: "Air purifier", ar: "منقي هواء", points: 8 },
        { en: "Smart plugs", ar: "مقابس ذكية", points: 9 },
        { en: "Video doorbell", ar: "جرس باب بكاميرا", points: 10 },
      ],
    },
  ],
  food: [
    {
      en: "Top 10 foods people crave late at night.",
      ar: "أفضل 10 أطعمة يشتهيها الناس ليلًا.",
      answers: [
        { en: "Pizza", ar: "بيتزا", points: 1 },
        { en: "Burger", ar: "برجر", points: 2 },
        { en: "Fries", ar: "بطاطس", points: 3 },
        { en: "Instant noodles", ar: "نودلز", points: 4 },
        { en: "Chocolate", ar: "شوكولاتة", points: 5 },
        { en: "Ice cream", ar: "آيس كريم", points: 6 },
        { en: "Sandwich", ar: "ساندويتش", points: 7 },
        { en: "Popcorn", ar: "فشار", points: 8 },
        { en: "Chips", ar: "شيبس", points: 9 },
        { en: "Fruit", ar: "فواكه", points: 10 },
      ],
    },
    {
      en: "Top 10 drinks people order with fast food.",
      ar: "أفضل 10 مشروبات يطلبها الناس مع الوجبات السريعة.",
      answers: [
        { en: "Cola", ar: "كولا", points: 1 },
        { en: "Water", ar: "ماء", points: 2 },
        { en: "Orange juice", ar: "عصير برتقال", points: 3 },
        { en: "Iced tea", ar: "شاي مثلج", points: 4 },
        { en: "Milkshake", ar: "ميلك شيك", points: 5 },
        { en: "Lemon mint", ar: "ليمون نعناع", points: 6 },
        { en: "Coffee", ar: "قهوة", points: 7 },
        { en: "Energy drink", ar: "مشروب طاقة", points: 8 },
        { en: "Sparkling water", ar: "ماء فوار", points: 9 },
        { en: "Tea", ar: "شاي", points: 10 },
      ],
    },
    {
      en: "Top 10 dishes people cook when guests visit.",
      ar: "أفضل 10 أطباق يطبخها الناس عند زيارة الضيوف.",
      answers: [
        { en: "Rice dishes", ar: "أطباق رز", points: 1 },
        { en: "Grilled chicken", ar: "دجاج مشوي", points: 2 },
        { en: "Pasta", ar: "باستا", points: 3 },
        { en: "Kabsa", ar: "كبسة", points: 4 },
        { en: "Salad", ar: "سلطة", points: 5 },
        { en: "Soup", ar: "شوربة", points: 6 },
        { en: "BBQ", ar: "مشاوي", points: 7 },
        { en: "Pizza", ar: "بيتزا", points: 8 },
        { en: "Dessert tray", ar: "صينية حلويات", points: 9 },
        { en: "Stuffed vegetables", ar: "محاشي", points: 10 },
      ],
    },
    {
      en: "Top 10 snacks people take to cinema.",
      ar: "أفضل 10 سناكات يأخذها الناس للسينما.",
      answers: [
        { en: "Popcorn", ar: "فشار", points: 1 },
        { en: "Nachos", ar: "ناتشوز", points: 2 },
        { en: "Chocolate", ar: "شوكولاتة", points: 3 },
        { en: "Chips", ar: "شيبس", points: 4 },
        { en: "Candy", ar: "حلوى", points: 5 },
        { en: "Hot dog", ar: "هوت دوغ", points: 6 },
        { en: "Pretzels", ar: "بريتزل", points: 7 },
        { en: "Cookies", ar: "كوكيز", points: 8 },
        { en: "Nuts", ar: "مكسرات", points: 9 },
        { en: "Ice cream", ar: "آيس كريم", points: 10 },
      ],
    },
  ],
  travel: [
    {
      en: "Top 10 essentials people pack for a short trip.",
      ar: "أفضل 10 أساسيات يحزمها الناس لرحلة قصيرة.",
      answers: [
        { en: "Passport/ID", ar: "جواز/هوية", points: 1 },
        { en: "Phone charger", ar: "شاحن الهاتف", points: 2 },
        { en: "Clothes", ar: "ملابس", points: 3 },
        { en: "Toothbrush", ar: "فرشاة أسنان", points: 4 },
        { en: "Power bank", ar: "باور بانك", points: 5 },
        { en: "Medicines", ar: "أدوية", points: 6 },
        { en: "Wallet", ar: "محفظة", points: 7 },
        { en: "Headphones", ar: "سماعات", points: 8 },
        { en: "Water bottle", ar: "قارورة ماء", points: 9 },
        { en: "Snacks", ar: "سناكات", points: 10 },
      ],
    },
    {
      en: "Top 10 things people do first at a hotel.",
      ar: "أفضل 10 أشياء يفعلها الناس أولًا في الفندق.",
      answers: [
        { en: "Check in", ar: "تسجيل الدخول", points: 1 },
        { en: "Connect to Wi-Fi", ar: "الاتصال بالواي فاي", points: 2 },
        { en: "Rest on bed", ar: "الراحة على السرير", points: 3 },
        { en: "Charge phone", ar: "شحن الهاتف", points: 4 },
        { en: "Unpack", ar: "تفريغ الحقائب", points: 5 },
        { en: "Order food", ar: "طلب طعام", points: 6 },
        { en: "Take shower", ar: "الاستحمام", points: 7 },
        { en: "Check view", ar: "مشاهدة الإطلالة", points: 8 },
        { en: "Message family", ar: "إرسال رسالة للعائلة", points: 9 },
        { en: "Plan activities", ar: "تخطيط الأنشطة", points: 10 },
      ],
    },
    {
      en: "Top 10 places people love taking photos at.",
      ar: "أفضل 10 أماكن يحب الناس التصوير فيها.",
      answers: [
        { en: "Beach", ar: "الشاطئ", points: 1 },
        { en: "Mountains", ar: "الجبال", points: 2 },
        { en: "City skyline", ar: "أفق المدينة", points: 3 },
        { en: "Cafes", ar: "المقاهي", points: 4 },
        { en: "Landmarks", ar: "المعالم", points: 5 },
        { en: "Museums", ar: "المتاحف", points: 6 },
        { en: "Desert", ar: "الصحراء", points: 7 },
        { en: "Parks", ar: "الحدائق", points: 8 },
        { en: "Markets", ar: "الأسواق", points: 9 },
        { en: "Sunset spots", ar: "أماكن الغروب", points: 10 },
      ],
    },
    {
      en: "Top 10 common travel mistakes.",
      ar: "أفضل 10 أخطاء سفر شائعة.",
      answers: [
        { en: "Overpacking", ar: "حمل أمتعة كثيرة", points: 1 },
        { en: "Late to airport", ar: "التأخر للمطار", points: 2 },
        { en: "No backup documents", ar: "بدون نسخ احتياطية للوثائق", points: 3 },
        { en: "Ignoring weather", ar: "تجاهل الطقس", points: 4 },
        { en: "No travel insurance", ar: "بدون تأمين سفر", points: 5 },
        { en: "Currency not prepared", ar: "عدم تجهيز العملة", points: 6 },
        { en: "No offline map", ar: "بدون خرائط أوفلاين", points: 7 },
        { en: "Poor time planning", ar: "تخطيط وقت ضعيف", points: 8 },
        { en: "Not checking rules", ar: "عدم مراجعة الأنظمة", points: 9 },
        { en: "Booking too late", ar: "الحجز المتأخر", points: 10 },
      ],
    },
  ],
  social: [
    {
      en: "Top 10 topics friends talk about in group chats.",
      ar: "أفضل 10 مواضيع يتحدث عنها الأصدقاء في القروبات.",
      answers: [
        { en: "Memes", ar: "ميمز", points: 1 },
        { en: "Weekend plans", ar: "خطط الويكند", points: 2 },
        { en: "Food spots", ar: "مطاعم", points: 3 },
        { en: "Work/study updates", ar: "تحديثات العمل/الدراسة", points: 4 },
        { en: "Sports", ar: "رياضة", points: 5 },
        { en: "Movies", ar: "أفلام", points: 6 },
        { en: "Travel ideas", ar: "أفكار سفر", points: 7 },
        { en: "Funny videos", ar: "فيديوهات مضحكة", points: 8 },
        { en: "Gaming", ar: "ألعاب", points: 9 },
        { en: "Life advice", ar: "نصائح", points: 10 },
      ],
    },
    {
      en: "Top 10 gifts people buy for birthdays.",
      ar: "أفضل 10 هدايا يشتريها الناس لأعياد الميلاد.",
      answers: [
        { en: "Perfume", ar: "عطر", points: 1 },
        { en: "Gift card", ar: "بطاقة هدية", points: 2 },
        { en: "Watch", ar: "ساعة", points: 3 },
        { en: "Chocolate box", ar: "علبة شوكولاتة", points: 4 },
        { en: "Flowers", ar: "ورود", points: 5 },
        { en: "Headphones", ar: "سماعات", points: 6 },
        { en: "Book", ar: "كتاب", points: 7 },
        { en: "Custom mug", ar: "كوب مخصص", points: 8 },
        { en: "Fashion item", ar: "قطعة ملابس", points: 9 },
        { en: "Tech accessory", ar: "إكسسوار تقني", points: 10 },
      ],
    },
    {
      en: "Top 10 excuses people use to cancel plans.",
      ar: "أفضل 10 أعذار يستخدمها الناس لإلغاء الخطط.",
      answers: [
        { en: "I'm tired", ar: "تعبان", points: 1 },
        { en: "Work came up", ar: "عندي شغل", points: 2 },
        { en: "Family visit", ar: "زيارة عائلية", points: 3 },
        { en: "Not feeling well", ar: "مو حاسس جيد", points: 4 },
        { en: "Traffic", ar: "زحمة", points: 5 },
        { en: "Forgot", ar: "نسيت", points: 6 },
        { en: "Unexpected guest", ar: "ضيف مفاجئ", points: 7 },
        { en: "Low budget", ar: "الميزانية قليلة", points: 8 },
        { en: "Need to study", ar: "لازم أذاكر", points: 9 },
        { en: "Rain/weather", ar: "الجو", points: 10 },
      ],
    },
    {
      en: "Top 10 things people post on social media stories.",
      ar: "أفضل 10 أشياء ينشرها الناس في الستوري.",
      answers: [
        { en: "Food", ar: "أكل", points: 1 },
        { en: "Coffee", ar: "قهوة", points: 2 },
        { en: "Gym", ar: "جيم", points: 3 },
        { en: "Travel", ar: "سفر", points: 4 },
        { en: "Quotes", ar: "اقتباسات", points: 5 },
        { en: "Sunset", ar: "غروب", points: 6 },
        { en: "Friends", ar: "أصدقاء", points: 7 },
        { en: "Music", ar: "موسيقى", points: 8 },
        { en: "Events", ar: "فعاليات", points: 9 },
        { en: "Pets", ar: "حيوانات أليفة", points: 10 },
      ],
    },
  ],
  saudi: [
    {
      en: "Top 10 cities people in Saudi Arabia visit for weekends.",
      ar: "أفضل 10 مدن في السعودية يزورها الناس في نهاية الأسبوع.",
      answers: [
        { en: "Riyadh", ar: "الرياض", points: 1 },
        { en: "Jeddah", ar: "جدة", points: 2 },
        { en: "Al Khobar", ar: "الخبر", points: 3 },
        { en: "Dammam", ar: "الدمام", points: 4 },
        { en: "Taif", ar: "الطائف", points: 5 },
        { en: "Abha", ar: "أبها", points: 6 },
        { en: "AlUla", ar: "العلا", points: 7 },
        { en: "Madinah", ar: "المدينة", points: 8 },
        { en: "Makkah", ar: "مكة", points: 9 },
        { en: "Tabuk", ar: "تبوك", points: 10 },
      ],
    },
    {
      en: "Top 10 popular activities in Saudi winter season.",
      ar: "أفضل 10 أنشطة مشهورة في موسم الشتاء بالسعودية.",
      answers: [
        { en: "Desert camping", ar: "التخييم", points: 1 },
        { en: "BBQ", ar: "الشواء", points: 2 },
        { en: "Boulevard events", ar: "فعاليات البوليفارد", points: 3 },
        { en: "Coffee gatherings", ar: "جلسات القهوة", points: 4 },
        { en: "Road trips", ar: "رحلات برية", points: 5 },
        { en: "Hiking", ar: "الهايكنج", points: 6 },
        { en: "Football matches", ar: "مباريات كرة القدم", points: 7 },
        { en: "Winter festivals", ar: "مهرجانات الشتاء", points: 8 },
        { en: "Horse riding", ar: "ركوب الخيل", points: 9 },
        { en: "Family parks", ar: "الحدائق العائلية", points: 10 },
      ],
    },
    {
      en: "Top 10 foods people in Saudi Arabia order for gatherings.",
      ar: "أفضل 10 أكلات يطلبها الناس في السعودية للعزائم.",
      answers: [
        { en: "Kabsa", ar: "كبسة", points: 1 },
        { en: "Mandi", ar: "مندي", points: 2 },
        { en: "Bukhari rice", ar: "رز بخاري", points: 3 },
        { en: "Grilled chicken", ar: "دجاج مشوي", points: 4 },
        { en: "Shawarma trays", ar: "صواني شاورما", points: 5 },
        { en: "Mutabbaq", ar: "مطبق", points: 6 },
        { en: "Sambosa", ar: "سمبوسة", points: 7 },
        { en: "Luqaimat", ar: "لقيمات", points: 8 },
        { en: "Dates and coffee", ar: "تمر وقهوة", points: 9 },
        { en: "Kunafa", ar: "كنافة", points: 10 },
      ],
    },
  ],
};

const CATEGORY_LABELS = {
  feud: {
    en: { jobs: "Jobs", school: "School", home: "Home" },
    ar: { jobs: "وظائف", school: "مدرسة", home: "المنزل" },
  },
  top10: {
    en: {
      lifestyle: "Lifestyle",
      entertainment: "Entertainment",
      digital: "Digital",
      food: "Food",
      travel: "Travel",
      social: "Social",
      saudi: "Saudi Arabia",
    },
    ar: {
      lifestyle: "نمط الحياة",
      entertainment: "ترفيه",
      digital: "رقمي",
      food: "طعام",
      travel: "سفر",
      social: "اجتماعي",
      saudi: "السعودية",
    },
  },
};

const app = document.getElementById("app");
const langSelect = document.getElementById("langSelect");
const langLabel = document.getElementById("langLabel");
const donateBtn = document.getElementById("donateBtn");

const query = new URLSearchParams(location.search);

const state = {
  lang: "en",
  step: "landing",
  role: window.location.hash === "#host" ? "host" : "team",
  gameId: query.get("game") || "",
  gameType: query.get("type") || "feud",
  rounds: 1,
  selectedQuestionKeys: ["jobs|0"],
  teams: ["Team A", "Team B"],
  remoteGame: null,
};

let db = null;
let gameRef = null;
let unsubscribeListener = null;

function t(key) {
  return STRINGS[state.lang][key] || key;
}

function getActiveQuestionBank() {
  return state.gameType === "top10" ? TOP10_QUESTION_BANK : QUESTION_BANK;
}

function formatCategoryLabel(category) {
  const byGame = CATEGORY_LABELS[state.gameType] || {};
  const localized = byGame[state.lang] || {};
  return localized[category] || category.replace(/_/g, " ");
}

function buildUrl(gameId, role) {
  const base = `${location.origin}${location.pathname}`;
  return `${base}?game=${encodeURIComponent(gameId)}&type=${encodeURIComponent(
    state.gameType,
  )}${
    role === "host" ? "#host" : ""
  }`;
}

function initializeFirebase() {
  const config = window.FIREBASE_CONFIG || {};
  if (!config.apiKey || !config.databaseURL || !window.firebase) {
    return false;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  db = firebase.database();
  return true;
}

function generateGameId() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function ensureGameId() {
  if (!state.gameId) state.gameId = generateGameId();
}

function updateLanguageLayout() {
  const isArabic = state.lang === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  langLabel.textContent = t("language");
  donateBtn.textContent = t("donate");
  document.body.classList.toggle("top10-mode", state.gameType === "top10");
}

function shuffle(arr) {
  const copied = [...arr];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function createQuestionSelection() {
  const bank = getActiveQuestionBank();
  const selected = [];
  state.selectedQuestionKeys.forEach((key) => {
    const [category, idxRaw] = key.split("|");
    const idx = Number(idxRaw);
    if (!bank[category]) return;
    if (!Number.isInteger(idx) || idx < 0 || idx >= bank[category].length)
      return;
    selected.push(bank[category][idx]);
  });
  state.rounds = selected.length;
  return selected;
}

function getAllQuestionEntries() {
  const bank = getActiveQuestionBank();
  const entries = [];
  Object.keys(bank).forEach((category) => {
    bank[category].forEach((question, idx) => {
      entries.push({ key: `${category}|${idx}`, category, idx, question });
    });
  });
  return entries;
}

function pickRandomQuestions(rounds) {
  const pool = shuffle(getAllQuestionEntries());
  const amount = Math.max(1, Math.min(rounds, pool.length));
  return pool.slice(0, amount).map((entry) => entry.key);
}

function getCategorySvg(category) {
  if (state.gameType === "top10") {
    return `
      <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
        <rect x="10" y="10" width="44" height="44" rx="8" fill="#16a34a"/>
        <path d="M20 36h6V24l-5 2v-6l6-3h6v19h6v6H20z" fill="#ecfccb"/>
      </svg>
    `;
  }
  if (category === "travel") {
    return `
      <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
        <path fill="#60a5fa" d="M6 37l52-10v8l-20 5-6 16-5-1 2-13-23 5z"/>
        <circle cx="18" cy="50" r="5" fill="#f59e0b"/>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#22c55e"/>
      <path d="M21 31h22v4H21zm0-9h22v4H21zm0 18h22v4H21z" fill="#052e16"/>
    </svg>
  `;
}

function subscribeToGame() {
  if (!db || !state.gameId) return;
  gameRef = db.ref(`games/${state.gameId}`);
  if (unsubscribeListener) unsubscribeListener();
  const callback = (snapshot) => {
    state.remoteGame = snapshot.val();
    if (!state.remoteGame) {
      app.innerHTML = `<section class="panel"><p>${t(
        "noGameFound",
      )}</p></section>`;
      return;
    }
    if (state.remoteGame.gameType) state.gameType = state.remoteGame.gameType;
    state.step = "game";
    render();
  };
  gameRef.on("value", callback);
  unsubscribeListener = () => gameRef.off("value", callback);
}

async function createGameInFirebase() {
  const selectedQuestionsRaw = createQuestionSelection();
  const selectedQuestions =
    state.gameType === "top10"
      ? selectedQuestionsRaw.map((q) => ({
          ...q,
          answers: q.answers.map((ans, idx) => ({ ...ans, points: idx + 1 })),
        }))
      : selectedQuestionsRaw;
  ensureGameId();
  const payload = {
    gameType: state.gameType,
    lang: state.lang,
    teams: state.teams,
    scores: [0, 0],
    roundScores: [0, 0],
    currentRound: 0,
    rounds: selectedQuestions.length,
    questions: selectedQuestions,
    reveals: {},
    awards: {},
    gameOver: false,
    winnerTeam: -1,
    createdAt: Date.now(),
  };
  await db.ref(`games/${state.gameId}`).set(payload);
  state.remoteGame = payload;
}

function renderQrCode(url) {
  const qrCodeBox = document.getElementById("qrCode");
  if (!qrCodeBox) return;
  qrCodeBox.innerHTML = "";
  if (!url) return;
  if (typeof QRCode === "undefined") {
    qrCodeBox.innerHTML = '<p class="small">QR library not loaded.</p>';
    return;
  }
  try {
    // qr library is loaded from CDN in index.html
    // eslint-disable-next-line no-undef
    new QRCode(qrCodeBox, { text: url, width: 140, height: 140 });
  } catch (_err) {
    qrCodeBox.innerHTML = '<p class="small">Could not render QR.</p>';
  }
}

async function revealAnswer(answerIndex) {
  if (!gameRef || !state.remoteGame) return;
  const roundIdx = state.remoteGame.currentRound;
  const revealKey = `${roundIdx}-${answerIndex}`;
  await gameRef.child(`reveals/${revealKey}`).set(true);
}

async function awardRevealedAnswer(answerIndex, points, awardChoice) {
  if (!gameRef || !state.remoteGame) return;
  const roundIdx = state.remoteGame.currentRound;
  const answerKey = `${roundIdx}-${answerIndex}`;
  const prevAward =
    state.remoteGame.awards &&
    Object.prototype.hasOwnProperty.call(state.remoteGame.awards, answerKey)
      ? state.remoteGame.awards[answerKey]
      : null;
  const nextScores = [...state.remoteGame.scores];
  const nextRoundScores = [...(state.remoteGame.roundScores || [0, 0])];

  if (prevAward === 0 || prevAward === 1) {
    nextScores[prevAward] -= points;
    nextRoundScores[prevAward] -= points;
  }
  if (awardChoice === 0 || awardChoice === 1) {
    nextScores[awardChoice] += points;
    nextRoundScores[awardChoice] += points;
  }

  await gameRef.child("scores").set(nextScores);
  await gameRef.child("roundScores").set(nextRoundScores);
  await gameRef.child(`awards/${answerKey}`).set(awardChoice);
}

async function nextRound() {
  if (!gameRef || !state.remoteGame) return;
  if (state.remoteGame.currentRound + 1 >= state.remoteGame.rounds) {
    alert(t("noMoreRounds"));
    return;
  }
  await gameRef.child("currentRound").set(state.remoteGame.currentRound + 1);
  await gameRef.child("roundScores").set([0, 0]);
}

async function revealWinner() {
  if (!gameRef || !state.remoteGame) return;
  const [scoreA, scoreB] = state.remoteGame.scores || [0, 0];
  let winnerTeam = -1;
  if (scoreA > scoreB) winnerTeam = 0;
  if (scoreB > scoreA) winnerTeam = 1;
  await gameRef.update({
    gameOver: true,
    winnerTeam,
  });
}

async function transferRoundToOther(fromTeamId) {
  if (!gameRef || !state.remoteGame) return;
  const toTeamId = fromTeamId === 0 ? 1 : 0;
  const roundScores = [...(state.remoteGame.roundScores || [0, 0])];
  const amount = Number(roundScores[fromTeamId] || 0);
  if (amount <= 0) return;

  const nextScores = [...state.remoteGame.scores];
  nextScores[fromTeamId] -= amount;
  nextScores[toTeamId] += amount;
  roundScores[fromTeamId] -= amount;
  roundScores[toTeamId] += amount;

  await gameRef.child("scores").set(nextScores);
  await gameRef.child("roundScores").set(roundScores);
  alert(t("transferDone"));
}

function renderLanding() {
  app.innerHTML = `
    <section class="landing-games">
      <h2>${t("chooseGame")}</h2>
      <div class="split-games">
        <article class="panel game-tile">
          <h3>${t("feudName")}</h3>
          <p class="small">${t("landingSub")}</p>
          <div class="button-row">
            <button id="startFeudBtn" class="primary">${t("start")}</button>
            <button id="howFeudBtn">${t("how")}</button>
          </div>
          <p id="howFeudText" class="small" hidden>${t("howText")}</p>
        </article>
        <article class="panel game-tile top10-tile">
          <h3>${t("top10Name")}</h3>
          <p class="small">${t("top10HowText")}</p>
          <div class="button-row">
            <button id="startTop10Btn" class="primary">${t("start")}</button>
            <button id="howTop10Btn">${t("how")}</button>
          </div>
          <p id="howTop10Text" class="small" hidden>${t("top10HowText")}</p>
        </article>
      </div>
    </section>
  `;

  document.getElementById("startFeudBtn").onclick = () => {
    state.gameType = "feud";
    state.selectedQuestionKeys = [Object.keys(QUESTION_BANK)[0] + "|0"];
    state.step = "mode";
    render();
  };
  document.getElementById("startTop10Btn").onclick = () => {
    state.gameType = "top10";
    state.selectedQuestionKeys = [Object.keys(TOP10_QUESTION_BANK)[0] + "|0"];
    state.step = "mode";
    render();
  };
  document.getElementById("howFeudBtn").onclick = () => {
    const el = document.getElementById("howFeudText");
    if (el) el.hidden = !el.hidden;
  };
  document.getElementById("howTop10Btn").onclick = () => {
    const el = document.getElementById("howTop10Text");
    if (el) el.hidden = !el.hidden;
  };
}

function renderModeStep() {
  const bank = getActiveQuestionBank();
  const groupedQuestions = Object.keys(bank)
    .map((category) => {
      const cards = bank[category]
        .map((q, i) => {
          const key = `${category}|${i}`;
          const checked = state.selectedQuestionKeys.includes(key)
            ? "checked"
            : "";
          return `
            <label class="question-card">
              <div class="question-card-head">
                ${getCategorySvg(category)}
                <strong>#${i + 1}</strong>
                <input type="checkbox" data-question-key="${key}" ${checked} />
              </div>
              <div class="small">${q[state.lang]}</div>
            </label>
          `;
        })
        .join("");
      return `
        <section class="panel">
          <h3>${formatCategoryLabel(category)}</h3>
          <div class="question-grid">${cards}</div>
        </section>
      `;
    })
    .join("");

  app.innerHTML = `
    <section class="panel grid">
      <h2>${t("modeTitle")}</h2>
      <div class="grid two">
        <label class="form-group">
          <span>${t("rounds")}</span>
          <input id="roundsInput" type="number" min="1" max="20" value="${
            state.rounds
          }" />
        </label>
        <div class="form-group">
          <span>&nbsp;</span>
          <button id="randomQuestionsBtn">${t("randomQuestions")}</button>
        </div>
      </div>
      <div class="small">${t("chooseQuestion")}</div>
      ${groupedQuestions}
      <div class="small">${t("selectedQuestions")}: ${
        state.selectedQuestionKeys.length
      }</div>
      <div class="small">${t("rounds")}: ${
        state.selectedQuestionKeys.length
      }</div>
      <div id="modeError" class="small"></div>
      <div class="button-row">
        <button id="backBtn">${t("back")}</button>
        <button id="nextBtn" class="primary">${t("next")}</button>
      </div>
      <button id="jumpToNextBtn" class="jump-next-btn" aria-label="Scroll to next section">↓</button>
    </section>
  `;

  document.getElementById("roundsInput").onchange = (e) => {
    state.rounds = Math.max(1, Number(e.target.value || 1));
  };
  document.getElementById("randomQuestionsBtn").onclick = () => {
    state.selectedQuestionKeys = pickRandomQuestions(state.rounds);
    renderModeStep();
  };
  document.querySelectorAll("[data-question-key]").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const key = e.target.getAttribute("data-question-key");
      if (!key) return;
      if (e.target.checked) {
        if (!state.selectedQuestionKeys.includes(key))
          state.selectedQuestionKeys.push(key);
      } else {
        state.selectedQuestionKeys = state.selectedQuestionKeys.filter(
          (n) => n !== key,
        );
      }
      state.selectedQuestionKeys.sort();
      renderModeStep();
    });
  });
  document.getElementById("backBtn").onclick = () => {
    state.step = "landing";
    render();
  };
  document.getElementById("nextBtn").onclick = () => {
    if (state.selectedQuestionKeys.length < 1) {
      const modeError = document.getElementById("modeError");
      if (modeError) modeError.textContent = t("selectAtLeastOne");
      return;
    }
    state.rounds = state.selectedQuestionKeys.length;
    state.step = "teams";
    render();
  };
  const jumpToNextBtn = document.getElementById("jumpToNextBtn");
  if (jumpToNextBtn) {
    // Fallback to guarantee sticky viewport positioning.
    jumpToNextBtn.style.position = "fixed";
    jumpToNextBtn.style.right = "16px";
    jumpToNextBtn.style.bottom = "16px";
    jumpToNextBtn.style.zIndex = "999";
  }
  document.getElementById("jumpToNextBtn").onclick = () => {
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
      nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
}

function renderTeamsStep() {
  ensureGameId();
  const gameIdPreview = state.gameId || "------";
  const hostUrl = state.gameId ? buildUrl(state.gameId, "host") : "";
  const teamUrl = state.gameId ? buildUrl(state.gameId, "team") : "";

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
        <p class="small">${t("setupHint")}</p>
        <p class="small">${t("gameId")}: ${gameIdPreview}</p>
        <div id="qrCode"></div>
        <p class="small">${hostUrl}</p>
        <p class="small">${teamUrl}</p>
      </div>
      <p id="setupStatus" class="small"></p>
      <div class="button-row">
        <button id="backBtn">${t("back")}</button>
        <button id="generateBtn" class="primary">${t("generate")}</button>
      </div>
    </section>
  `;
  renderQrCode(hostUrl);

  document.getElementById("backBtn").onclick = () => {
    state.step = "mode";
    render();
  };

  document.getElementById("generateBtn").onclick = async () => {
    const setupStatus = document.getElementById("setupStatus");
    const generateBtn = document.getElementById("generateBtn");
    state.teams[0] = document.getElementById("team1").value.trim() || "Team A";
    state.teams[1] = document.getElementById("team2").value.trim() || "Team B";
    try {
      if (setupStatus) setupStatus.textContent = t("creatingGame");
      if (generateBtn) generateBtn.disabled = true;
      await createGameInFirebase();
      history.replaceState({}, "", buildUrl(state.gameId, state.role));
      renderQrCode(buildUrl(state.gameId, "host"));
      subscribeToGame();
      state.step = "game";
      render();
    } catch (err) {
      if (setupStatus) {
        setupStatus.textContent = `${t("gameCreateFailed")} ${
          err && err.message ? `(${err.message})` : ""
        }`;
      }
      if (generateBtn) generateBtn.disabled = false;
    }
  };
}

function renderGame() {
  const g = state.remoteGame;
  if (!g) {
    app.innerHTML = `<section class="panel"><p>${t(
      "noGameFound",
    )}</p></section>`;
    return;
  }
  if (g.gameOver) {
    const winnerText =
      g.winnerTeam === 0 || g.winnerTeam === 1
        ? `${t("winnerIs")}: ${g.teams[g.winnerTeam]}`
        : t("tieGame");
    app.innerHTML = `
      <section class="panel landing">
        <h2>${t("winnerTitle")}</h2>
        <p class="small">${winnerText}</p>
        <div class="score-row">
          <div class="score-chip">${g.teams[0]}: ${g.scores[0]}</div>
          <div class="score-chip">${g.teams[1]}: ${g.scores[1]}</div>
        </div>
        ${
          state.role === "team"
            ? `<button id="backHomeBtn" class="primary">${t(
                "backHome",
              )}</button>`
            : ""
        }
      </section>
    `;
    const backHomeBtn = document.getElementById("backHomeBtn");
    if (backHomeBtn) {
      backHomeBtn.onclick = () => {
        state.step = "landing";
        history.replaceState({}, "", location.pathname);
        render();
      };
    }
    return;
  }
  const isHost = state.role === "host";
  const q = g.questions[g.currentRound];
  const isLastQuestion = g.currentRound + 1 >= g.rounds;
  const answerRows = q.answers
    .map((a, i) => {
      const key = `${g.currentRound}-${i}`;
      const opened = Boolean(g.reveals && g.reveals[key]);
      const award =
        g.awards && Object.prototype.hasOwnProperty.call(g.awards, key)
          ? g.awards[key]
          : null;
      let awardStatus = "";
      if (award === 0 || award === 1) {
        awardStatus = `${t("scoredTo")}: ${g.teams[award]}`;
      } else if (award === -1) {
        awardStatus = `${t("scoredTo")}: ${t("noOne")}`;
      }
      return `
        <div class="answer-box">
          <div>
            <strong>#${i + 1}</strong>
            ${
              isHost
                ? `<span>${a[state.lang]}</span>`
                : opened
                  ? `<span>${a[state.lang]}</span>`
                  : `<span class="answer-hidden">${"■ ".repeat(6)}</span>`
            }
          </div>
          <div>
            ${(isHost || opened) ? `<span>${a.points} ${t("points")}</span>` : ""}
            ${
              isHost
                ? `
                  ${
                    opened
                      ? ""
                      : `<button data-answer="${i}" data-action="reveal">${t(
                          "reveal",
                        )}</button>`
                  }
                  ${
                    opened
                      ? `
                        <div class="button-row">
                          <button data-answer="${i}" data-points="${
                            a.points
                          }" data-award="0">${g.teams[0]}</button>
                          <button data-answer="${i}" data-points="${
                            a.points
                          }" data-award="1">${g.teams[1]}</button>
                          <button data-answer="${i}" data-points="${
                            a.points
                          }" data-award="-1">${t("noOne")}</button>
                        </div>
                        <div class="small">${awardStatus}</div>
                      `
                      : ""
                  }
                `
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
      <div class="score-row">
        <div class="score-chip">${g.teams[0]}: ${g.scores[0]}</div>
        <div class="score-chip">${g.teams[1]}: ${g.scores[1]}</div>
      </div>
      <div class="score-row">
        <div class="score-chip">${t("roundScore")} - ${g.teams[0]}: ${
          (g.roundScores && g.roundScores[0]) || 0
        }</div>
        <div class="score-chip">${t("roundScore")} - ${g.teams[1]}: ${
          (g.roundScores && g.roundScores[1]) || 0
        }</div>
      </div>
      <h3>${t("round")} ${g.currentRound + 1} / ${g.rounds}</h3>
      <p><strong>${t("question")}:</strong> ${q[state.lang]}</p>
      <div class="answers-board">${answerRows}</div>
      <div class="button-row">
        ${
          isHost
            ? `<button id="transferFromTeam1Btn">${t("transferFrom")} ${
                g.teams[0]
              } (${t("transferToOther")})</button>`
            : ""
        }
        ${
          isHost
            ? `<button id="transferFromTeam2Btn">${t("transferFrom")} ${
                g.teams[1]
              } (${t("transferToOther")})</button>`
            : ""
        }
        ${
          isHost
            ? `<button id="${
                isLastQuestion ? "revealWinnerBtn" : "nextRoundBtn"
              }" class="primary">${
                isLastQuestion ? t("revealWinner") : t("nextRound")
              }</button>`
            : ""
        }
        ${isHost ? "" : `<button id="restartBtn">${t("back")}</button>`}
      </div>
    </section>
  `;

  if (isHost) {
    const nextRoundBtn = document.getElementById("nextRoundBtn");
    if (nextRoundBtn) nextRoundBtn.onclick = nextRound;
    const revealWinnerBtn = document.getElementById("revealWinnerBtn");
    if (revealWinnerBtn) revealWinnerBtn.onclick = revealWinner;
    const transferFromTeam1Btn = document.getElementById(
      "transferFromTeam1Btn",
    );
    const transferFromTeam2Btn = document.getElementById(
      "transferFromTeam2Btn",
    );
    if (transferFromTeam1Btn)
      transferFromTeam1Btn.onclick = () => transferRoundToOther(0);
    if (transferFromTeam2Btn)
      transferFromTeam2Btn.onclick = () => transferRoundToOther(1);
    document.querySelectorAll('[data-action="reveal"]').forEach((btn) => {
      btn.addEventListener("click", async () => {
        const idx = Number(btn.getAttribute("data-answer"));
        await revealAnswer(idx);
      });
    });
    document.querySelectorAll("[data-award]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const idx = Number(btn.getAttribute("data-answer"));
        const points = Number(btn.getAttribute("data-points"));
        const award = Number(btn.getAttribute("data-award"));
        await awardRevealedAnswer(idx, points, award);
      });
    });
  }

  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) {
    restartBtn.onclick = () => {
      state.step = "landing";
      history.replaceState({}, "", location.pathname);
      render();
    };
  }
}

function render() {
  updateLanguageLayout();
  if (state.step === "landing") return renderLanding();
  if (state.step === "mode") return renderModeStep();
  if (state.step === "teams") return renderTeamsStep();
  return renderGame();
}

function setupInitialEvents() {
  langSelect.addEventListener("change", (e) => {
    state.lang = e.target.value;
    if (state.remoteGame && state.role === "host" && gameRef) {
      gameRef.child("lang").set(state.lang);
    }
    render();
  });

  donateBtn.addEventListener("click", () => {
    window.open("https://www.buymeacoffee.com/", "_blank");
  });

  window.addEventListener("hashchange", () => {
    state.role = window.location.hash === "#host" ? "host" : "team";
    if (state.gameId && gameRef) {
      history.replaceState({}, "", buildUrl(state.gameId, state.role));
    }
    render();
  });
}

function bootstrap() {
  const ok = initializeFirebase();
  setupInitialEvents();
  updateLanguageLayout();

  if (!ok) {
    app.innerHTML = `<section class="panel"><p>${t(
      "firebaseMissing",
    )}</p></section>`;
    return;
  }

  if (state.gameId) {
    subscribeToGame();
    state.step = "game";
  } else {
    ensureGameId();
  }

  render();
}

bootstrap();
