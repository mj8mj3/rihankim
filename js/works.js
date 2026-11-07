// 작품 데이터. 목록(최신순)과 상세 페이지가 이 파일 하나로 그려진다.
// 메타 라벨은 영어, 값과 설명은 원문(한국어) 그대로. 정보가 없으면 그 칸을 비워 둔다(화면에 표시되지 않음).
// blocks: text(본문) · full(한 장) · pair(두 장) · trio(세 장) · grid(여러 장) · yt(유튜브) · process(과정)
window.WORKS = [
  {
    id: "sdf2026",
    ongoing: true,
    status: "In progress",
    tag: "Branding·Web·Book",
    title: "SDF 2026 — 2nd LAB / 공백[ ]수명",
    year: 2026,
    period: "2026.11.26–11.29",
    place: "코엑스 A홀, 서울",
    exhibition: "서울디자인페스티벌 2026 (SDF 2026)",
    role: "Brand identity (2nd LAB), Web design & development (2ndlab.kr), Logo design (공백[ ]수명), Book design, Photography",
    site: "https://2ndlab.kr",
    cover: "sdf/rs02.jpg",
    hero: { img: "sdf/brand_logo_preview.png" },
    line: "버려진 재료의 두 번째 가능성을 탐구하는 실험실 2nd LAB, 그리고 폐어망에 다음 쓰임을 넣는 공백[ ]수명.",
    facets: [
      { id: "overview", label: "Overview", credit: "2nd LAB (5 teams) · Team 1 공백[ ]수명", blocks: [
        { t: "text", ko: [
          "서울디자인페스티벌 2026에서 다섯 개 팀이 한 부스를 함께 쓰는 공동 전시를 준비하고 있다. 전체 이름은 2nd LAB — 버려진 재료의 두 번째 가능성을 탐구하는 실험실이다. 다섯 팀이 각자 폐기물을 수집하고 실험해 새로운 소재와 오브제로 만들어 낸 과정을 함께 보여 준다.",
          "2nd LAB 전체 브랜딩과 웹사이트를 맡았고, 소속 팀인 1조 공백[ ]수명에서는 브랜딩과 책 디자인, 현장 촬영을 맡았다. 1조는 목포의 폐어망을 바구니로 다시 짓는다."
        ] },
        { t: "full", src: "sdf/rs05.jpg" }
      ] },
      { id: "brand", label: "2nd LAB Branding", credit: "Brand identity — 김리한 (logo system)", blocks: [
        { t: "text", ko: [
          "키워드는 '차곡한' — 표본, 샘플 라이브러리, 조직된 혼재, 수집과 축적. 기본 로고 '2nd LAB'과 변형 로고들을 하나의 시스템으로 만들었다. 서체는 JetBrains Mono와 Noto Sans KR, 색은 #C4B6A0 · #FCFCFC · #101010 · Cloud Dancer(#F0EEE9).",
          "다섯 팀의 엽서(100 × 152 mm)는 로고와 레이아웃을 통일해 하나의 묶음으로 보이게 했다."
        ] },
        { t: "full", src: "sdf/brand_logo_set.png" },
        { t: "pair", src: ["sdf/brand_rihan.jpg", "sdf/brand_palette.png"] },
        { t: "full", src: "sdf/brand_postcard.jpg", cap: "Postcard layout — 김리한" },
        { t: "trio", src: ["sdf/brand_keyword.jpg", "sdf/brand_decisions.jpg", "sdf/brand_postcard_spec.jpg"] }
      ] },
      { id: "web", label: "2nd LAB Web", credit: "Design & development — 김리한", blocks: [
        { t: "text", ko: [
          "2ndlab.kr — 메인 한 쪽과 다섯 팀의 영상 페이지로 된 원뎁스 사이트를 디자인하고 직접 만들었다. 각 팀 페이지에는 메인 영상과 세로 브랜드 필름, 소개가 들어간다. 숫자 키 1~5로 팀을 오가고, 화살표로 이전·다음 팀으로 넘어간다."
        ] },
        { t: "link", url: "https://2ndlab.kr", label: "Visit site — 2ndlab.kr ↗" },
        { t: "pair", src: ["sdf/web_pc_main.jpg", "sdf/web_pc_team1.jpg"] },
        { t: "grid", cols: 4, src: ["sdf/web_m_main.jpg", "sdf/web_m_team1.jpg"] },
        { t: "full", src: "sdf/web_wire.jpg", narrow: true, cap: "Wireframe" }
      ] },
      { id: "team1", label: "Team 1 Branding", credit: "Logo — 김리한 / chapter graphics — Team 1", blocks: [
        { t: "text", ko: [
          "공백[ ]수명 — 대괄호 사이를 비운 워드마크로, 쓰임을 다한 폐어망의 수명 사이에 다음 쓰임이 들어갈 자리를 남겼다. 책의 장 표지에는 그물, 쓰임, 찢김, 엉킴, 수선, 다음 쓰임의 여섯 장면을 선으로 그렸다."
        ] },
        { t: "full", src: "sdf/t1_logo.png", narrow: true },
        { t: "trio", src: ["sdf/t1_chapter1.png", "sdf/t1_chapter2.png", "sdf/t1_chapter3.png"] },
        { t: "trio", src: ["sdf/t1_chapter4.png", "sdf/t1_chapter5.png", "sdf/t1_chapter6.png"] },
        { t: "full", src: "sdf/t1_lines.png", narrow: true }
      ] },
      { id: "book", label: "Book", credit: "Book design — 김리한 (in progress) · Draft (2026.11.07)", blocks: [
        { t: "text", ko: [
          "64쪽 프로세스 북 「공백[ ]수명」. 목포 북항·남항의 현장 기록, 어민과 수선자, 어망 공장의 인터뷰, 소재 실험을 담는다. 편집과 조판을 맡아 진행하고 있다. 아래 펼침면은 2026년 11월 7일 검토용 초안이다."
        ] },
        { t: "pair", src: ["sdf/book_cover.png", "sdf/book_pur.png"], cap: "Cover" },
        { t: "pair", src: ["sdf/book_12-13.jpg", "sdf/book_20.jpg"] },
        { t: "pair", src: ["sdf/book_26-27.jpg", "sdf/book_28-29.jpg"] },
        { t: "pair", src: ["sdf/book_30-31.jpg", "sdf/book_36-37.jpg"] },
        { t: "pair", src: ["sdf/book_38-39.jpg", "sdf/book_40-41.jpg"] },
        { t: "pair", src: ["sdf/book_42-43.jpg", "sdf/book_44-45.jpg"] },
        { t: "pair", src: ["sdf/book_48-49.jpg", "sdf/book_32.jpg"], cap: "Draft (2026.11.07)" }
      ] },
      { id: "object", label: "Object·Exhibition", credit: "Team 1 · 2nd LAB space team", blocks: [
        { t: "text", ko: [
          "다섯 팀이 300 × 600 cm 부스 하나를 나눠 쓴다. 1조는 오브제 두 점 사이에 단차를 두고, 프로세스 북과 다큐멘터리 영상을 함께 놓는다. 작품마다 같은 형식의 명판(150 × 100 mm)을 붙인다."
        ] },
        { t: "pair", src: ["sdf/obj_nameplate.png", "sdf/obj_display.jpg"] }
      ] },
      { id: "research", label: "Research", credit: "Photography — mostly 김리한 (partly team)", blocks: [
        { t: "text", ko: [
          "목포 북항과 남항, 폐어망이 모이는 집하장과 배, 그물을 고치는 현장을 찾아가 기록했다."
        ] },
        { t: "full", src: "sdf/rs01.jpg" },
        { t: "trio", src: ["sdf/rs02.jpg", "sdf/rs03.jpg", "sdf/rs04.jpg"] },
        { t: "pair", src: ["sdf/rs05.jpg", "sdf/rs06.jpg"] },
        { t: "trio", src: ["sdf/rs07.jpg", "sdf/rs08.jpg", "sdf/rs09.jpg"] },
        { t: "pair", src: ["sdf/rs10.jpg", "sdf/rs11.jpg"] }
      ] },
      { id: "process", label: "Process", credit: "김리한", blocks: [
        { t: "text", ko: [
          "책 표지는 그물코, 비어 있는 한 칸, 찢긴 자리, 한 줄의 선 등 여러 안을 거쳐 그물 한가운데가 비어 있는 안으로 정했다."
        ] },
        { t: "trio", src: ["sdf/cover_draft_A.png", "sdf/cover_draft_B.png", "sdf/cover_draft_C.png"] },
        { t: "pair", src: ["sdf/cover_draft_D.png", "sdf/cover_draft_E.png"], cap: "Cover drafts A–E" }
      ] }
    ]
  },
  {
    id: "gwannyeom",
    tag: "Media Art",
    title: "관념 속의 집",
    year: 2026,
    period: "2026.10.31",
    place: "화성예술의전당 Hwaseong Arts Center",
    exhibition: "2026 HCF 미디어아트쇼 (2026 화성시 미디어 페스티벌)",
    medium: "Sound interactive visual, two-surface projection mapping (outer & inner wall), TouchDesigner",
    duration: "3'32\"",
    credit: "Visual & Sound — 김리한",
    cover: "gwannyeom/s4.jpg",
    hero: { video: "gwannyeom/clip.mp4", poster: "gwannyeom/clip-poster.webp" },
    line: "외벽과 내벽, 두 개의 면에 프로젝션 매핑으로 펼쳐지는 사운드 인터랙티브 영상.",
    blocks: [
      { t: "text", ko: [
        "집은 벽과 지붕으로 이루어진 장소이기 전에, 우리가 머릿속에 짓고 허물기를 반복하는 하나의 관념이다. 어떤 이에게 집은 창밖으로 보이던 안개 낀 하늘이고, 어떤 이에게는 어린 시절 걷던 좁은 골목이며, 또 어떤 이에게는 아무 소리도 들리지 않는 깊은 고요다.",
        "〈관념 속의 집〉은 이처럼 저마다 다른 모습으로 존재하는 '마음속의 집'을 하나의 여정으로 엮음과 동시에, 작가 스스로 관념 속에 존재하는 그 어떤 상태에 다다르고자 시도하는 작업이다.",
        "우리는 누구나 마음 한편에 오래 머무는 생각과 시간의 덧칠로 이루어진 기억을 품고 살아간다. 그 기억들은 켜켜이 쌓여 하나의 집을 이루고, 이 작품은 그렇게 형성된 내면의 집에 닿고자 한다."
      ] },
      { t: "reel", src: "gwannyeom/reels.mp4", h: "Highlight — 60\" (full version 3'32\" on Instagram)", url: "https://www.instagram.com/p/DfMk1Yah3jI/", ko: ["외벽과 내벽, 두 개의 면에 프로젝션 매핑으로 펼쳐지는 사운드 인터랙티브 영상에서 1분을 골랐다. 소리를 켜고 보면 장면들이 소리에 반응해 움직이는 모습을 볼 수 있다. 3분 32초 전체 버전은 인스타그램에서 볼 수 있다."] },
      { t: "section", h: "Live — 2026.10.31", ko: ["2026 HCF 미디어아트쇼 당일, 화성예술의전당 외벽에 투사된 현장 기록."] },
      { t: "trio", src: ["gwannyeom/gwannyeom_live_01_opening.mp4", "gwannyeom/gwannyeom_live_02_structure.mp4", "gwannyeom/gwannyeom_live_03_city.mp4"], cap: "Live — opening / structure / city" },
      { t: "pair", src: ["gwannyeom/live1.jpg", "gwannyeom/live2.jpg"] },
      { t: "trio", src: ["gwannyeom/live3.jpg", "gwannyeom/live4.jpg", "gwannyeom/live5.jpg"] },
      { t: "trio", src: ["gwannyeom/live6.jpg", "gwannyeom/live7.jpg", "gwannyeom/live8.jpg"] },
      { t: "grid", cols: 4, src: ["gwannyeom/s1.jpg", "gwannyeom/s2.jpg", "gwannyeom/s3.jpg", "gwannyeom/s4.jpg", "gwannyeom/s5.jpg", "gwannyeom/s6.jpg", "gwannyeom/s7.jpg", "gwannyeom/s8.jpg"], cap: "Venue preview (3D) — scenes" }
    ]
  },
  {
    id: "seungmu",
    tag: "Media Art",
    title: "〈승무〉",
    titleEn: "Seungmu",
    year: 2026,
    period: "2026.10.31",
    place: "화성예술의전당 야외공연장 Hwaseong Arts Center, Outdoor Stage",
    exhibition: "2026 HCF 미디어아트쇼 (2026 화성시 미디어 페스티벌)",
    medium: "2-channel projection mapping, live dance",
    duration: "7'50\"",
    credit: "Team houseCall (하우스콜)",
    collab: "화성시 향토무형문화재 승무보존위원회",
    cover: "seungmu/s07.jpg",
    hero: { video: "seungmu/preview.mp4", poster: "seungmu/preview-poster.webp" },
    line: "망자의 안녕을 비는 춤 승무와 함께, 용주사의 밤에서 낮으로 이어지는 프로젝션 매핑.",
    blocks: [
      { t: "text", ko: [
        "화성시 향토무형문화재 승무보존위원회의 두 무용수가 추는 쌍승무와 함께한 프로젝션 매핑 공연이다. 무대 중앙의 북을 중심으로 한 두 무용수의 동선과 공연의 흐름에 맞춰 영상의 구성과 전환 시점을 설계했다.",
        "조지훈의 시 「승무」의 배경인 화성 8경 용주사의 밤 풍경으로 시작해 낮 풍경으로 닫힌다. 흑백의 수묵에서 단청과 오방색, 색동으로 나아갔다가 다시 수묵으로 돌아오며, 죽음과 삶의 경계를 흑백과 유채색으로 나누어 표현했다."
      ] },
      { t: "pair", src: ["seungmu/s01.jpg", "seungmu/s02.jpg"] },
      { t: "full", src: "seungmu/s04.jpg" },
      { t: "trio", src: ["seungmu/s03.jpg", "seungmu/s05.jpg", "seungmu/s06.jpg"] },
      { t: "pair", src: ["seungmu/s08.jpg", "seungmu/s09.jpg"] },
      { t: "full", src: "seungmu/s11.jpg" },
      { t: "trio", src: ["seungmu/s12.jpg", "seungmu/s13.jpg", "seungmu/s14.jpg"] },
      { t: "pair", src: ["seungmu/s10.jpg", "seungmu/s07.jpg"] }
    ]
  },
  {
    id: "xmf",
    tag: "Media Art",
    title: "XMF 2026",
    titleEn: "Stage LED Visuals",
    year: 2026,
    period: "2026.10.03–04",
    place: "인천 파라다이스시티 Paradise City, Incheon",
    exhibition: "XMF 2026 (Xnterstellar Music Festival)",
    medium: "Audio-reactive real-time visuals for stage LED, TouchDesigner",
    role: "LED Visual Production & Live Operation",
    artists: "Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA",
    cover: "xmf/lucy_knight_cradle_A.jpg",
    hero: { video: "xmf/xmf_lucy_stage_15s.mp4", poster: "xmf/hero.jpg" },
    line: "XMF 2026 한국 아티스트 무대 LED 영상 중 일부를 TouchDesigner로 제작하고 현장에서 운용했다.",
    blocks: [
      { t: "text", ko: [
        "XMF 2026 한국 아티스트 무대 LED 영상 중 일부를 TouchDesigner로 제작하고 현장에서 운용했다. 이 페이지에는 그중 직접 만든 Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA 무대의 곡별 영상을 모았다. 공연 중에는 소리에 반응하도록 실시간으로 돌렸다.",
        "Left or Right, 어리버리, sunday morning, 사랑은 어쩌고, 발아, 뜨거, 못 죽는 기사와 비단 요람, Don't Look Back, HIGH, Rock like star — 곡의 성격에 맞춰 화면의 재료와 움직임을 달리했다."
      ] },
      { t: "pair", src: ["xmf/xmf_lucy_reactive_12s.mp4", "xmf/xmf_hrtzwav_reactive_12s.mp4"], cap: "Reactive visuals — LUCY, hrtz.wav" },
      { t: "section", h: "On site — 2026.09.29–10.04", ko: ["작업실에서 영상을 준비하고, 무대 설치부터 리허설, 공연까지 현장의 운영석에서 LED 영상을 직접 운용했다."] },
      { t: "trio", src: ["xmf/site02.jpg", "xmf/site03.jpg", "xmf/site04.jpg"] },
      { t: "grid", cols: 4, src: ["xmf/site05.jpg", "xmf/site06.jpg", "xmf/site07.jpg", "xmf/site08.jpg"] },
      { t: "full", src: "xmf/xmf_live_01_ledstage.mp4", narrow: true, cap: "LED stage — on site" },
      { t: "trio", src: ["xmf/site09.jpg", "xmf/site14.jpg", "xmf/site15.jpg"] },
      { t: "grid", cols: 4, src: ["xmf/site10.jpg", "xmf/site11.jpg", "xmf/site12.jpg", "xmf/site13.jpg"] },
      { t: "grid", cols: 4, src: ["xmf/site16.jpg", "xmf/site17.jpg", "xmf/site18.jpg", "xmf/site19.jpg"] },
      { t: "grid", cols: 4, src: ["xmf/site01.jpg", "xmf/site20.jpg"], cap: "Preparation / rehearsal pass" },
      { t: "grid", cols: 5, src: ["xmf/hifiunicorn_left_or_right_bubbles.jpg", "xmf/hrtzwav_eoribeori_A.jpg", "xmf/lucy_bara_A.jpg", "xmf/thefix_dont_look_back_B.jpg", "xmf/younha_rock_like_star_A.jpg", "xmf/hifiunicorn_left_or_right_firework.jpg", "xmf/hrtzwav_sunday_morning_B.jpg", "xmf/lucy_knight_cradle_A.jpg", "xmf/thefix_high_A.jpg", "xmf/younha_rock_like_star_C.jpg"], cap: "Stills by song — Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA" }
    ]
  },
  {
    id: "chungman",
    tag: "Installation",
    title: "충만한 세상에 복이 있을지어니?",
    year: 2026,
    period: "2026.09.02–09.05",
    place: "갤러리 실, 조치원 1927 아트센터",
    exhibition: "《ATTACHED HOME》",
    supported: "본 전시는 문화체육관광부, 한국문화예술위원회, 세종시문화관광재단의 「K-Art 청년 창작자 지원사업」에 선정되어 지원받아 진행됩니다.",
    medium: "가변설치, 혼합재료 오브제, 감열지, 열전사 프린터",
    size: "Variable",
    credit: "2인 공동 작업",
    poster: "chungman/poster.jpg",
    cover: "chungman/overview.jpg",
    hero: { img: "chungman/overview.jpg", tall: true },
    line: "계속해서 주어진다. 감당의 여부는 중요하지 않다. '나'는 그것을 감아낸다.",
    blocks: [
      { t: "text", lead: true, ko: [
        "계속해서 주어진다. 감당의 여부는 중요하지 않다. '나'는 그것을 감아낸다. 버거움에 멈춰 서고, 다시 더듬으며 끌어안는다. 받아내지 못한 것들은 쌓여, 세상은 어느새 넘치도록 가득해진다. 이토록 충만한 세상에, 복은 어디에 있을까?"
      ] },
      { t: "text", ko: [
        "세상은 여러 발전을 이루었고 이루 말할 수 없는 풍요를 안겨주었다. 그러한 세계는 우리에게 확정적인 행복을 보장하는가. 많은 것이 빠르게 변화하고 쏟아져 나오는 동안, 우리는 그 속도에 온전히 닿지 못한 채 살아간다. 이 작품은 그 간극에서 발생하는 불안과 소외를 바라보며, 외부 상황 속 내면의 심리에 질문한다."
      ] },
      { t: "full", src: "chungman/c01.jpg" },
      { t: "pair", src: ["chungman/c02.jpg", "chungman/c03.jpg"] },
      { t: "trio", src: ["chungman/c04.jpg", "chungman/c06.jpg", "chungman/c07.jpg"] },
      { t: "text", ko: [
        "네 개의 기둥 위에 놓인 감열지 프린터가 멈추지 않고 종이를 출력하고, 종이는 바닥에 떨어져 쌓인다. 중앙의 낮은 자리에는 감열지를 감아올리는 오브제 '나'가 놓인다. 관객의 눈높이보다 조금 아래에 있고, 프린터보다 현저히 느리다.",
        "오브제 '나'는 수평축에 감열지를 감는 장치다. 스테퍼 모터가 축을 돌리고, 종이의 지름은 20mm에서 시작해 최대 약 140mm까지 부푼다. 불규칙하게 멈췄다가 다시 돌기를 반복한다. 고장이 아니라 상태다.",
        "감열지는 열과 빛에 의해 스스로 사라지는 매체다. 프레임은 원목과 금속이며, 볼트와 베어링, 축이 드러난 채로 실제로 작동한다."
      ] },
      { t: "full", src: "chungman/c12.jpg" },
      { t: "trio", src: ["chungman/c08.jpg", "chungman/c10.jpg", "chungman/c11.jpg"] },
      { t: "pair", src: ["chungman/c09.jpg", "chungman/c05.jpg"] },
      { t: "process", steps: [
        { h: "Idea", ko: "감열지(영수증 종이)를 거래와 시간, 순간의 기록으로 리서치했다. 실시간 출력, 출력과 스캔이 반복되는 재귀 구조, 계속 도는 장치를 떠올렸고, '세계와 나 사이의 시차, 거기서 오는 버거움과 잠식'을 키워드로 삼았다." },
        { h: "Sketch", ko: "높이가 다른 스툴과 영수증 프린터, 쌓이는 감열지, 관객의 위치를 스케치하고, 아두이노로 프린터 출력과 감기 장치를 구현하는 계획을 세웠다." },
        { h: "Engineering", ko: "TTL 감열지 프린터 4대와 57.5mm 감열지, ESP32로 출력부를 구성했다. 감기 장치는 Nema 23 스테퍼 모터와 TB6600 드라이버, 12mm 연마봉 축과 베어링으로 설계했다." },
        { h: "Graphics", ko: "제목의 '복(福)'에서 출력 그래픽을 끌어왔다. 여러 서체의 福을 반복하고, 인복·돈복·일복을 대화 기록과 영수증, 계약서 같은 문서의 형식으로 출력했다." }
      ], src: ["chungman/p1.jpg", "chungman/p2.jpg", "chungman/p3.jpg"] }
    ]
  },
  {
    id: "garage3",
    tag: "Space·Object",
    title: "Garage Project 3 — Team MOIN",
    titleEn: "(NIMBUS)",
    year: 2026,
    period: "2026.08.31–09.03",
    place: "섭골길 일대, 조치원",
    exhibition: "Garage Project 3 \"Find your Sp( )t\"",
    organizer: "문화공작소 (Sejong)",
    medium: "Collective shop — planning, branding, space, operation, program / Object: NIMBUS (steel mesh pendant light)",
    role: "Space design · Fixtures & furniture making (Team MOIN) / NIMBUS (solo)",
    cover: "nimbus/n09.jpg",
    hero: { img: "nimbus/n05.jpg" },
    line: "사람과 시대와 사물이 한 방에 모이는 collective shop MOIN, 그리고 그 안에 띄운 철제 메쉬 조명 NIMBUS.",
    facets: [
      { id: "overview", label: "Overview", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "Garage Project 3 \"Find your Sp( )t\"는 조치원 섭골길 골목 곳곳의 공간에서 열린 프로젝트다. 'Spot'은 내 취향이 세상과 만나는 점이자, 서로의 관심이 이어져 만들어지는 문화의 거리를 뜻한다.",
          "팀 MOIN은 '사람들을 불러 모으기 위해 오래전부터 사물을 수집해온 한 컬렉터의 공간'이라는 설정의 collective shop을 열었다. 팀이 함께 기획·브랜딩·공간·운영·프로그램을 만들고, 팀원 각자는 그 공간 안에 놓일 개인 작품을 만들었다. 김리한은 공간 디자인과 집기·가구 제작을 맡았고, 개인 작품으로 펜던트 조명 NIMBUS를 만들었다.",
          "방문객들은 '조치원에서 못 보던 공간 같다', '감도 높다', '편안하고 아늑하다'고 말했다. 감도를 과시하기보다 편안하게 체감할 수 있는 공간을 만들고자 했던 의도가 그 반응 속에서 확인되었다."
        ] },
        { t: "full", src: "nimbus/n06.jpg" },
        { t: "full", src: "garage3/ov_space.jpg", narrow: true }
      ] },
      { id: "planning", label: "Planning", credit: "Team MOIN · personal notes: 김리한", blocks: [
        { t: "text", ko: [
          "조치원(鳥致院)은 충청권의 남북과 동서를 잇는 요충지이자 사람과 물산이 모이던 곳이다. 이름의 '원(院)'은 말을 묶어 두고 쉬어 가던 조선시대의 역원에서 왔다. 오늘의 조치원은 더 이상 중심지가 아니고 사람들은 흩어졌다. 팀은 여기서 다시 사람을 모으는 컬렉터의 공간을 떠올렸다.",
          "관람과 사용, 감상과 구매의 경계가 나뉘지 않는 체류형 컬렉트 숍, 그 중심에는 컵이 있다. 콘셉트는 '사물이 모인다, 사람들이 모인다, 취향이 모인다'로 정리했다."
        ] },
        { t: "grid", cols: 5, src: ["garage3/pl_team1.jpg", "garage3/pl_team2.jpg", "garage3/pl_team3.jpg", "garage3/pl_team4.jpg", "garage3/pl_team5.jpg"] },
        { t: "text", ko: [
          "개인 기획 노트에서는 '시간의 흔적, 낡음의 미학'을 붙잡았다. 새것을 낡아 보이게 만드는 대신 시간이 만든 흔적을 그대로 담는 오브젝트를 인사이트 트립에서 발로 뛰며 모으고, 고쳐서 공간에 두는 방향이다. 현장 답사에서는 뻥 뚫린 2층 공간을 조금 더 아늑하고 프라이빗하게 감싸는 방법을 고민했다."
        ] },
        { t: "section", h: "Insight trip — 강릉, 2026.08.10–11", ko: ["강릉의 소품샵과 거리를 걸으며 시간이 만든 흔적이 남은 사물들을 찾아다녔다."] },
        { t: "full", src: "garage3/pl_trip.jpg", narrow: true },
        { t: "trio", src: ["garage3/pl_rihan1.jpg", "garage3/pl_rihan2.jpg", "garage3/pl_rihan3.jpg"] },
        { t: "pair", src: ["garage3/pl_rihan4.jpg", "garage3/pl_rihan5.jpg"], cap: "Personal planning notes & site survey" }
      ] },
      { id: "branding", label: "Branding", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "MOIN은 '모인'에서 왔다. 슬로건은 People, Times and Objects Gathered in One Room. 심볼은 서로 다른 방향에서 사람들이 하나의 중심을 향해 모이는 모습을 그렸다. 중심의 작은 형태들은 한곳에 모인 사람들을, 바깥으로 뻗는 선들은 그 만남에서 다시 퍼져 나가는 관계와 이야기를 뜻한다. 손으로 그린 듯 불규칙한 선으로 다듬었다."
        ] },
        { t: "pair", src: ["garage3/br_logo.jpg", "garage3/br_symbol.jpg"] },
        { t: "full", src: "garage3/br_symbol_mid.jpg", narrow: true }
      ] },
      { id: "space", label: "Space", credit: "Team MOIN — space design · fixtures & furniture making: 김리한", blocks: [
        { t: "text", ko: [
          "공간은 ENJOY, DISPLAY, REST, PURCHASE 구역으로 나눴다. 낮은 테이블과 눈높이의 행잉 조명으로 컵이 놓이는 높낮이에 변주를 주고, 2층은 좌식 카페트와 낮은 탁자로 프라이빗하게 감쌌다. 무드보드의 키워드는 collected, nonchalant, handcrafted, natural texture, aged."
        ] },
        { t: "pair", src: ["garage3/sp_iso.jpg", "garage3/sp_zones.jpg"] },
        { t: "pair", src: ["garage3/sp_display1.jpg", "garage3/sp_display2.jpg"] },
        { t: "trio", src: ["garage3/sp_plan.jpg", "garage3/sp_section.jpg", "garage3/sp_zoning.jpg"] },
        { t: "section", h: "Fixtures — 김리한 제작", ko: [
          "스탠딩 테이블과 벤치를 직접 만들었다. 컵이 놓이는 로우 테이블은 테이블소로 직접 깎아 형태를 냈고, 공간 곳곳에 둔 돌은 직접 주워 왔다."
        ] },
        { t: "list", items: ["Standing table — 직접 제작", "Bench — 직접 제작", "Low table — 테이블소로 직접 가공", "Stones — 직접 수집"] },
        { t: "trio", src: ["nimbus/n03.jpg", "nimbus/n05.jpg", "nimbus/n06.jpg"], cap: "Low table, stones, standing tables and benches in the space" }
      ] },
      { id: "operation", label: "Operation", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "MOIN에서는 모든 것을 살 수 있다. 방문객이 고른 컵에 음료를 담아 내고, 쓴 컵은 씻고 포장해 각자의 공간으로 가져가게 했다. 컵 외의 사물은 전시가 끝난 뒤 받는 예약판매로 운영했다. 낮은 사물을 발견하는 시간, 밤은 사람과 사람이 이어지는 시간으로, 조도와 조명의 색, 음료로 둘을 나눴다."
        ] },
        { t: "full", src: "garage3/op_cup.jpg", narrow: true }
      ] },
      { id: "object", label: "Object: NIMBUS", credit: "김리한 (solo) — Steel mesh, pendant light, 300 × 700 × 500 mm", blocks: [
        { t: "text", ko: [
        "철제 메쉬의 물성을 활용하고자 재료를 겹치고 쌓는 방식을 택했고 그것이 자연스럽게 형태의 출발점이 되었다. 낱장의 메쉬는 평면적이고 규칙적인 구조를 가지지만, 여러 겹이 적층되면서 예상하지 못한 곡면과 부피를 만들어낸다.",
        "조명이 놓이는 공간 역시 사물과 사람, 서로 다른 취향이 한곳에 모이는 장소를 전제로 한다. 서로 다른 것들이 모여 하나의 장면을 이루는 공간의 성격과, 개별적인 메쉬가 축적되며 하나의 덩어리로 변해가는 방식 사이의 유사성을 조명의 형태로 연결했다.",
        "겹쳐진 메쉬가 만들어내는 불분명한 윤곽과 밀도에서는 구름의 형상을 떠올렸다. 명확한 경계 없이 뭉치고 흩어지며 공중에 머무는 구름의 성질을 따라, 이 덩어리를 바닥에 두기보다 공간에 띄우는 펜던트 조명의 형식으로 완성했다. 불이 들어오면 촘촘한 격자 사이로 빛이 걸러지고 중첩되며, 단단한 철제는 시각적으로 가볍고 부유하는 덩어리로 전환된다."
      ] },
        { t: "full", src: "nimbus/n01.jpg" },
        { t: "pair", src: ["nimbus/n02.jpg", "nimbus/n03.jpg"] },
        { t: "full", src: "nimbus/n04.jpg" },
        { t: "trio", src: ["nimbus/n05.jpg", "nimbus/n06.jpg", "nimbus/n07.jpg"] },
        { t: "pair", src: ["nimbus/n09.jpg", "nimbus/n10.jpg"] },
        { t: "full", src: "nimbus/n08.jpg" },
        { t: "pair", src: ["garage3/ob_drawing.jpg", "garage3/sp_display1.jpg"], cap: "Drawing / planned position in DISPLAY(1)" }
      ] },
      { id: "program", label: "Program", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "3일 동안 낮과 밤을 다르게 운영했다. 낮은 사물을 발견하는 시간, 밤은 사람과 사람이 이어지는 시간이다. 낮에는 매일 같은 방식으로 컵을 고르고 음료를 즐기게 했고, 밤은 날마다 다른 콘셉트로 꾸렸다."
        ] },
        { t: "process", h: "Day / Night", steps: [
          { h: "Daytime — every day", ko: "사물을 발견하는 시간. 방문객이 진열된 컵 가운데 하나를 고르면 그 컵에 음료를 담아 낸다." },
          { h: "1st Night — DJ Party", ko: "Hyperpop과 Techno 디제잉이 흐르는 공간에서 비어퐁과 시크릿 미션을 함께 즐긴다. 팀을 이루어 게임을 하고 각자 받은 비밀 미션을 수행하며 자연스럽게 대화하고 교류한다." },
          { h: "2nd Night — Tea Tasting", ko: "사전 예약으로 모인 10명이 각자 좋아하는 음악 한 곡을 골라 오고, 준비된 세 종류의 차를 함께 맛보며 서로의 플레이리스트를 나눈다." },
          { h: "3rd Night — Movie Night", ko: "마지막 밤, 넓은 공간을 최대한 열어 모두가 함께 영화를 본다." }
        ] },
        { t: "full", src: "garage3/pg_dj2.jpg" },
        { t: "pair", src: ["garage3/pg_dj1.jpg", "garage3/pg_night.jpg"] },
        { t: "pair", src: ["garage3/pg_tea1.jpg", "garage3/pg_tea2.jpg"], cap: "1st Night DJ Party / 2nd Night Tea Tasting" }
      ] }
    ]
  },
  {
    id: "algomi",
    school: true,
    tag: "UX·GUI",
    title: "Algomi",
    titleEn: "Algorithm + Me",
    year: 2026,
    period: "2026.06",
    medium: "Service ideation prototype, GUI design",
    cover: "algomi/01.jpg",
    hero: { img: "algomi/01.jpg" },
    line: "쌓여 온 디지털 데이터를 하나의 캐릭터로 시각화해, 자신의 디지털 자아를 마주하게 하는 서비스.",
    blocks: [
      { t: "text", ko: [
        "Algomi는 우리가 인지하지 못한 채 쌓아온 디지털 데이터를 시각화하여, 자신의 디지털 자아를 마주하게 하는 서비스다. 유튜브, 인스타그램, 네이버와 같은 여러 플랫폼에서 누적된 콘텐츠 소비 패턴은 Algomi를 통해 하나의 캐릭터로 시각화되며, 이를 통해 그동안 어렴풋이만 알고 있던 자신의 알고리즘을 직관적으로 확인할 수 있다.",
        "캐릭터가 가진 각 키워드를 누르면 해당 알고리즘이 어떤 플랫폼에서, 어떤 콘텐츠를 통해 형성되었는지 그 출처까지 한눈에 모아볼 수 있다. 변화하고자 하는 방향을 키워드로 설정하면 캐릭터가 그에 맞춰 점진적으로 변해, 알고리즘과 디지털 세계 속 자신의 자아에 능동적인 태도를 취하도록 돕는다. 친구들의 알고리즘 캐릭터를 함께 탐색하고 비교하는 소셜 경험으로도 확장된다."
      ] },
      { t: "trio", src: ["algomi/02.jpg", "algomi/03.jpg", "algomi/04.jpg"] },
      { t: "pair", src: ["algomi/06.jpg", "algomi/08.jpg"] }
    ]
  },
  {
    id: "mi",
    school: true,
    tag: "Graphic·Drawing",
    card: true,
    title: "美 — 아름다울 미",
    year: 2026,
    period: "2026.06",
    medium: "흑지, 화이트 마카, 실크원단",
    size: "297 × 420 mm",
    cover: "mi/cover.png"
  },
  {
    id: "bodoni",
    school: true,
    tag: "Graphic·Editorial",
    title: "Bodoni",
    titleEn: "Type Specimen Poster",
    year: 2026,
    period: "2026.06",
    medium: "Poster, Adobe Illustrator",
    size: "A2",
    cover: "bodoni/b1.jpg",
    hero: { img: "bodoni/b1.jpg", tall: true },
    blocks: []
  },
  {
    id: "transparent",
    tag: "Media Art",
    title: "투명해진 공간",
    year: 2026,
    period: "2026.05.13–05.24",
    place: "BRT작은미술관, 세종",
    exhibition: "〈세종 즐겨찾기 : pinned sejong〉 (Group exhibition)",
    supported: "세종시문화관광재단 전시공간지원사업",
    medium: "Interactive media art — MediaPipe hand tracking, HTML5 Canvas, projector, webcam, interview video",
    credit: "Solo — interviews, concept, development, installation",
    poster: "transparent/poster.jpg",
    cover: "transparent/i01.jpg",
    hero: { img: "transparent/screen.jpg" },
    line: "호수공원을 스쳐간 사람들의 기억이 글자가 되고, 글자는 호수의 수면이 된다.",
    blocks: [
      { t: "text", lead: true, ko: [
        "익숙한 공간은 종종 투명해진다. 매일 보아서, 더 이상 보이지 않는 것들."
      ] },
      { t: "text", ko: [
        "세종 호수공원은 도시 속 가장 익숙한 공간 중 하나다. 매일 스쳐 지나가지만 그 안에는 수많은 사람들의 시간과 감정이 조용히 쌓여 있다. 이 작업은 그 보이지 않던, 익숙해서 잊혀졌던 기억들을 수면 위로 끌어올려, 투명해진 공간을 다시 바라보게 만드는 것을 목표로 한다.",
        "작품 속 모든 텍스트는 지어낸 문장이 아니다. 세종 호수공원을 경험한 사람들을 직접 인터뷰해 그들의 기억과 감정을 수집했다. 다섯 가지 공통 질문을 중심으로 처음 그 공간을 접했을 때의 인상부터 일상에서의 의미, 가장 기억에 남는 순간까지 자유롭게 풀어냈다. 수집된 답변을 작품의 톤에 맞게 재구성해 화면을 채웠고, 호수의 깊은 네이비 색상과 Pretendard Light 서체로 잔잔한 수면의 질감을 구현했다. 화면 전체는 하나의 수면이자, 한 도시에 쌓인 집단적 기억의 표면이 된다."
      ] },
      { t: "full", src: "transparent/view.jpg" },
      { t: "text", ko: [
        "관객은 카메라 앞에서 손을 뻗어 화면 속 글자들을 흐트러뜨릴 수 있다. 손끝을 따라 글자들이 물결처럼 출렁이고 흰빛의 파문이 번진다. 이 인터랙션은 타인의 내면에 직접 닿는 행위를 물리적 경험으로 번역한 결과이며, 관객은 단순한 감상자를 넘어 작품의 일부가 된다.",
        "인터랙션은 MediaPipe Tasks Vision JS를 기반으로 구현했다. 웹캠으로 실시간으로 손의 랜드마크를 감지하고, 손끝 좌표를 HTML5 Canvas 위의 텍스트 파티클과 연동했다. 전시는 LG 프로젝터와 Logitech Brio 웹캠으로 구성했고, 작품 옆에 인터뷰 영상을 함께 상영해 화면 속 문장들이 실제 누군가의 이야기임을 전했다. 인터뷰 섭외부터 기획, 개발, 전시 구성까지 전 과정을 혼자 진행했다."
      ] },
      { t: "yt", id: "jaBAGZCVVfU" },
      { t: "trio", src: ["transparent/i01.jpg", "transparent/i03.jpg", "transparent/i04.jpg"] },
      { t: "trio", src: ["transparent/interview1.jpg", "transparent/interview2.jpg", "transparent/interview3.jpg"], cap: "Interviews" },
      { t: "yt", id: "TViC-ZjyzxE" }
    ]
  },
  {
    id: "lake",
    school: true,
    tag: "Media Art",
    title: "Lake for your own",
    year: 2023,
    period: "2023.12",
    medium: "Interactive object — Arduino, Processing, 12 touch sensors (TTP-233B), potentiometer",
    credit: "Solo — concept, circuit, code, object",
    cover: "lake/l2.jpg",
    hero: { img: "lake/l1.jpg", tall: true },
    line: "언제 어디서든 손끝으로 만질 수 있는 호수의 풍경.",
    blocks: [
      { t: "text", ko: [
        "바쁜 현대사회 속에서 사람들은 자연을 즐기고 싶어도 시간과 장소의 제약으로 쉽게 누리지 못한다. 이 작업은 언제 어디서든 호수의 풍경을 손끝으로 만질 수 있는 인터랙티브 오브젝트를 만드는 것을 목표로 한다. 물을 흐리고 물결을 일렁이는 감각을 물리적 인터랙션으로 번역해 전달하고자 했다.",
        "상단에는 12개의 TTP-233B 터치센서를 4×3 그리드로 배치해 각 센서의 위치를 화면 좌표와 일대일로 매핑했다. 특정 지점을 누르거나 여러 개를 이어서 쓸면 그 위치에 맞춰 물파장이 화면에 퍼진다. 하단의 가변저항을 시계방향으로 돌리면 호수를 위에서 내려다본 물결이 서서히 나타나고, 반대로 돌리면 사라진다. 두 인터랙션은 각각 '수면을 건드리는 행위'와 '호수 전체를 조망하는 시점'을 물리적 조작으로 번역한 결과다.",
        "하나의 Processing 창에서 Arduino와 시리얼 통신을 이중으로 처리하는 문제는 하나의 보드에서 보낸 두 값을 서로 다른 두 Processing 창에서 각각 받도록 구조를 다시 설계해 풀었다."
      ] },
      { t: "yt", id: "MC07K2WJ0-k" },
      { t: "trio", src: ["lake/l2.jpg", "lake/l3.jpg", "lake/l4.jpg"] }
    ]
  }
];

// 기사: 매체·날짜·제목·링크만. 언론사 사진은 쓰지 않는다.
window.PRESS = [
  { outlet: "K-Classic News", date: "2026.11.02", title: "온 가족이 함께한 AI·미디어 체험과 할로윈 파티 '2026 화성시 미디어 페스티벌' 1만 관람객 호응", url: "https://www.kclassicnews.com/news/article.html?no=232088" },
  { outlet: "한국현대미술신문", date: "2026.11.02", title: "온 가족이 함께한 AI·미디어 체험과 할로윈 파티 '2026 화성시 미디어 페스티벌' 1만 관람객 호응", url: "https://www.kinn.co.kr/news/article.html?no=812504" },
  { outlet: "비전21뉴스", date: "2026.11.02", title: "온 가족이 함께한 AI·미디어 체험과 할로윈 파티 '2026 화성시 미디어 페스티벌' 1만 관람객 호응", url: "https://www.vision21.kr/news/article.html?no=635291" },
  { outlet: "경기헤드뉴스", date: "2026.11.02", title: "온 가족이 함께한 AI·미디어 체험과 할로윈 파티 '2026 화성시 미디어 페스티벌' 1만 관람객 호응", url: "https://www.ghnews.net/news/article.html?no=249061" },
  { outlet: "경인미래신문", date: "2026.11.02", title: "화성시 미디어 페스티벌에 시민 1만여 명 참여", url: "https://www.kifuture.com/news/article.html?no=177741" },
  { outlet: "뉴스프리존", date: "2026.11.02", title: "화성시 미디어 페스티벌 with Halloween Party..1만여 명 발길", url: "https://www.newsfreezone.co.kr/news/articleView.html?idxno=717261" },
  { outlet: "화성저널", date: "2026.11.02", title: "AI·미디어 체험부터 할로윈 파티까지 '2026 화성시 미디어 페스티벌' 오는 31일 개최", url: "https://www.hsj.co.kr/news/articleView.html?idxno=56795" },
  { outlet: "저널25방송", date: "2026.10.28", title: "화성예술의전당서 '미디어 페스티벌 with Halloween Party' 개최", url: "https://www.journal25.com/news/articleView.html?idxno=570546" },
  { outlet: "화성인터넷신문", date: "2026.10.28", title: "AI·미디어 체험부터 할로윈 파티 '미디어 페스티벌' 31일", url: "https://www.hsinews.com/54229" },
  { outlet: "이뉴스투데이", date: "2026.10.28", title: "화성시, AI·미디어 체험과 할로윈이 만나는 가을축제 31일 개최", url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2485361" },
  { outlet: "글로벌비즈뉴스", date: "2026.10.28", title: "AI·미디어 체험부터 할로윈 파티까지 '2026 화성시 미디어 페스티벌' 10월 31일 개최", url: "http://www.gbnews.kr/news/articleView.html?idxno=76053" },
  { outlet: "뉴스와이어", date: "2026.10.28", title: "AI·미디어 체험부터 할로윈 파티까지 '2026 화성시 미디어 페스티벌' 10월 31일 개최", url: "https://www.newswire.co.kr/newsRead.php?no=1045647", kind: "Press release" }
];
window.PRESS_WORKS = ["gwannyeom", "seungmu"];

// Small Works: 상세 페이지 없이 썸네일 + 인스타 게시물 링크.
window.SMALL = [
  { title: "Immersive art", date: "2026.08.07", tool: "TouchDesigner", src: "small/sw1.jpg", url: "https://www.instagram.com/p/Dbue6O6xYSO/" },
  { title: "Immersive art", date: "2026.08.20", tool: "TouchDesigner", src: "small/sw2.jpg", url: "https://www.instagram.com/p/DcOpApKP9_B/" },
  { title: "몽환", date: "2026.09.08", tool: "Seedance 2.5, TouchDesigner", src: "small/sw3.jpg", url: "https://www.instagram.com/p/Dc__q-azZ6w/" },
  { title: "HIGH", date: "2026.09.16", tool: "TouchDesigner", src: "small/sw4.jpg", url: "https://www.instagram.com/p/DdURip9zrZP/" }
];
