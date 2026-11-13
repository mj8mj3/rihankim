// 작품 데이터. 목록(최신순)과 상세 페이지가 이 파일 하나로 그려진다.
// 메타 라벨은 영어, 값과 설명은 원문(한국어) 그대로. 정보가 없으면 그 칸을 비워 둔다(화면에 표시되지 않음).
// blocks: text(본문) · full(한 장) · pair(두 장) · trio(세 장) · grid(여러 장) · yt(유튜브) · process(과정)
window.WORKS = [
  {
    id: "sdf2026",
    ongoing: true,
    status: "In progress",
    tag: "Branding·Web",
    title: "2nd LAB — Capstone Design",
    titleEn: "SDF 2026",
    year: 2026,
    period: "2026.11.26–11.29",
    place: "코엑스 A홀, 서울",
    exhibition: "서울디자인페스티벌 2026 (SDF 2026)",
    role: "Brand identity (2nd LAB, 캡스톤 디자인 전체), Web design & development (2ndlab.kr)",
    site: "https://2ndlab.kr",
    cover: "sdf/brand_logo_preview.png",
    hero: { img: "sdf/brand_logo_preview.png" },
    line: "캡스톤 디자인 다섯 팀이 함께 여는 전시 2nd LAB — 버려진 재료의 두 번째 가능성을 탐구하는 실험실. 전체 브랜딩과 웹사이트를 만들었다.",
    facets: [
      { id: "brand", label: "Branding", credit: "Brand identity — 김리한", blocks: [
        { t: "text", ko: [
          "「Design Challenge[캡스톤디자인]」 다섯 팀이 서울디자인페스티벌 2026에서 부스 하나를 함께 쓴다. 전체 이름은 2nd LAB — 버려진 재료의 두 번째 가능성을 탐구하는 실험실이다. 다섯 팀이 각자 폐기물을 모으고 실험해 새로운 소재와 오브제로 만든 과정을 함께 보여 준다.",
          "기본 로고 '2nd LAB'과 변형 로고들을 하나의 시스템으로 만들었다. 서체는 JetBrains Mono와 Noto Sans KR, 색은 #C4B6A0 · #FCFCFC · #101010 · Cloud Dancer(#F0EEE9). 다섯 팀의 엽서(100 × 152 mm)는 로고와 레이아웃을 통일해 하나의 묶음으로 보이게 했다."
        ] },
        { t: "full", src: "sdf/brand_logo_set.png" },
        { t: "full", src: "sdf/brand_palette.png", narrow: true },
        { t: "full", src: "sdf/brand_postcard.jpg", cap: "Postcard layout" }
      ] },
      { id: "web", label: "Web", credit: "Design & development — 김리한", blocks: [
        { t: "text", ko: [
          "2ndlab.kr — 메인 한 쪽과 다섯 팀의 영상 페이지로 된 원뎁스 사이트를 디자인하고 직접 만들었다. 각 팀 페이지에는 메인 영상과 세로 브랜드 필름, 소개가 들어간다. 숫자 키 1~5로 팀을 오가고, 화살표로 이전·다음 팀으로 넘어간다."
        ] },
        { t: "link", url: "https://2ndlab.kr", label: "Visit site — 2ndlab.kr ↗" },
        { t: "pair", src: ["sdf/web_pc_main.jpg", "sdf/web_pc_team1.jpg"] },
        { t: "grid", cols: 4, src: ["sdf/web_m_main.jpg", "sdf/web_m_team1.jpg"] }
      ] }
    ]
  },
  {
    id: "gongbaek",
    ongoing: true,
    status: "In progress",
    tag: "Branding·Product",
    title: "공백[ ]수명",
    titleEn: "Empty Lifespan — 2nd LAB Team 1",
    year: 2026,
    period: "2026.11.26–11.29",
    place: "코엑스 A홀, 서울",
    exhibition: "서울디자인페스티벌 2026 (SDF 2026) — 2nd LAB",
    role: "Team 1 branding, process book, field photography & filming (Team 1, 5)",
    cover: "sdf/t1_b2.jpg",
    hero: { img: "sdf/t1_b2.jpg" },
    line: "목포의 폐어망으로 바스켓을 만드는 팀. 쓰임을 다했다고 선언된 뒤에도 남아 있는 시간, '공백수명'을 들여다본다.",
    facets: [
      { id: "branding", label: "Branding", credit: "Team 1 branding — 김리한 외 2명", blocks: [
        { t: "text", ko: [
          "공백수명(Empty Lifespan)은 사람이 쓸모를 다했다고 선언한 뒤에도 물질과 기능이 남아 있는, 다음 역할을 아직 찾지 못한 시간이다. 누가 어떤 기준으로 수명의 끝을 선언하는지 묻고, 폐기물로 규정된 상태와 남아 있는 기능 사이의 간극을 찾는 브랜드로 정리했다.",
          "로고는 '공백'과 '수명' 사이를 대괄호로 비웠다. 대괄호는 폐기와 재활용 사이에 있지만 잘 보이지 않던 시간이자, 앞으로 무엇이든 채워질 수 있는 자리다. 슬로건은 '공백 너머의 수명을 바라보다', 서체는 MaruBuri, 색은 폐어망의 파랑에서 가져온 #3F649C와 #6DACE7."
        ] },
        { t: "full", src: "sdf/t1_brand_concept.jpg" },
        { t: "full", src: "sdf/t1_logo_meaning.jpg" },
        { t: "section", h: "Process book — in progress", ko: [
          "공백수명의 정의, 폐어망을 고른 이유, 어망의 생애와 목포 현장 기록, 어민·수선자 인터뷰, 소재 실험과 제품 제작, 에필로그로 이어지는 프로세스 북을 만들고 있다. 아래는 2026년 11월 7일 검토용 초안이다."
        ] },
        { t: "pair", src: ["sdf/book_cover.png", "sdf/book_12-13.jpg"] },
        { t: "pair", src: ["sdf/book_26-27.jpg", "sdf/book_28-29.jpg"] },
        { t: "pair", src: ["sdf/book_30-31.jpg", "sdf/book_36-37.jpg"] },
        { t: "pair", src: ["sdf/book_38-39.jpg", "sdf/book_40-41.jpg"], cap: "Draft (2026.11.07)" },
        { t: "section", h: "Documentary", ko: [
          "목포의 사람들과 폐어망의 생애를 따라가는 다큐멘터리. 인트로(목포항과 슬로건), 1장 어민이 생각하는 어망의 수명, 2장 공백수명에 놓인 폐어망, 3장 안강망 수선자, 아웃트로로 짰다. 목포 두 차례 현장 촬영에서 사진과 영상을 찍었다."
        ] },
        { t: "full", src: "sdf/t1_doc_intro.jpg", cap: "Storyboard — Opening / Intro" }
      ] },
      { id: "product", label: "Product", credit: "Team 1 — basket", blocks: [
        { t: "text", ko: [
          "폐어망을 겹쳐 열로 압착한 서피스로 바스켓을 만든다. '잡던 물질이 담는 물질이 된다.' 안강망 수선자가 수선 도구를 담는 바스켓과, 새참을 담는 넓고 얕은 바스켓 두 가지다. 폐로프와 폐그물 조각, 폐부표처럼 다음 쓰임을 기다리는 폐어구를 함께 담아 두는 자리이기도 하다.",
          "처음에는 스트랩을 엮는 방식을 시도했지만 형태를 버티지 못해, 스트랩과 서피스를 나누지 않고 서피스를 크게 쓰는 방식으로 바꿨다. 마감에는 똑딱이와 스티치 같은 부자재를 더했다."
        ] },
        { t: "full", src: "sdf/t1_b2.jpg" },
        { t: "full", src: "sdf/t1_b1.jpg" },
        { t: "pair", src: ["sdf/t1_b1_detail.jpg", "sdf/t1_b2_detail.jpg"], cap: "Basket 01 / 02 — finishing details" },
        { t: "section", h: "Process", ko: ["스트랩 직조 원통형, 쉐이커박스형 서피스, 1:1 페이퍼 목업을 거쳐 형태를 정했다."] },
        { t: "trio", src: ["sdf/t1_mock_strap.jpg", "sdf/t1_mock_surface.jpg", "sdf/t1_b1_paper.jpg"], cap: "Strap mockup / surface mockup / 1:1 paper mockup" },
        { t: "section", h: "Field research — 목포", ko: ["목포 북항과 남항, 폐어망 집하장과 배, 그물을 고치는 현장을 두 차례 찾아가 기록했다."] },
        { t: "full", src: "sdf/rs01.jpg" },
        { t: "trio", src: ["sdf/rs02.jpg", "sdf/rs03.jpg", "sdf/rs04.jpg"] },
        { t: "pair", src: ["sdf/rs05.jpg", "sdf/rs06.jpg"] },
        { t: "trio", src: ["sdf/rs07.jpg", "sdf/rs08.jpg", "sdf/rs09.jpg"] },
        { t: "pair", src: ["sdf/rs10.jpg", "sdf/rs11.jpg"], cap: "Photography — mostly 김리한" }
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
      { t: "section", h: "Reels — Digital / Live", ko: ["위는 디지털 화면, 아래는 공연장에 마스킹한 현장 영상이다. 소리를 켜고 보면 장면들이 소리에 반응해 움직인다."] },
      { t: "videos", items: [
        { src: "gwannyeom/reel_01.mp4", ar: 0.5625, cap: "Reel 01" },
        { src: "gwannyeom/reel_02.mp4", ar: 0.5625, cap: "Reel 02" },
        { src: "gwannyeom/reel_03.mp4", ar: 0.5625, cap: "Reel 03" }
      ] },
      { t: "section", h: "Digital — venue 3D, 3'32\"", ko: ["외벽과 내벽, 두 개의 면에 프로젝션 매핑으로 펼쳐지는 사운드 인터랙티브 영상을 공연장 3D로 본 디지털 버전."] },
      { t: "videos", items: [
        { src: "gwannyeom/gwannyeom_digital.mp4", ar: 0.8, cap: "Digital — venue 3D" }
      ] },
      { t: "section", h: "Live — 2026.10.31", ko: ["2026 HCF 미디어아트쇼 당일, 화성예술의전당 외벽에 투사된 현장 기록."] },
      { t: "trio", src: ["gwannyeom/gwannyeom_live_01_opening.mp4", "gwannyeom/gwannyeom_live_02_structure.mp4", "gwannyeom/gwannyeom_live_03_city.mp4"], cap: "Live — opening / structure / city" },
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
    cover: "xmf/hero.jpg",
    hero: { video: "xmf/xmf_lucy_stage_15s.mp4", poster: "xmf/hero.jpg" },
    line: "XMF 2026 한국 아티스트 무대 LED 영상 중 일부를 TouchDesigner로 제작하고 현장에서 운용했다.",
    blocks: [
      { t: "text", ko: [
        "XMF 2026 한국 아티스트 무대 LED 영상 중 일부를 TouchDesigner로 제작하고 현장에서 운용했다. 이 페이지에는 그중 직접 만든 Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA 무대의 곡별 영상을 모았다. 공연 중에는 소리에 반응하도록 실시간으로 돌렸다.",
        "Left or Right, 어리버리, sunday morning, 사랑은 어쩌고, 발아, 뜨거, 못 죽는 기사와 비단 요람, Don't Look Back, HIGH, Rock like star — 곡의 성격에 맞춰 화면의 재료와 움직임을 달리했다."
      ] },
      { t: "pair", src: ["xmf/xmf_lucy_reactive_12s.mp4", "xmf/xmf_hrtzwav_reactive_12s.mp4"], cap: "Reactive visuals — LUCY, hrtz.wav" },
      { t: "section", h: "On site — 2026.09.29–10.04", ko: ["작업실에서 영상을 준비하고, 무대 설치부터 리허설, 공연까지 현장에서 LED 영상을 직접 운용했다."] },
      { t: "trio", src: ["xmf/site02.jpg", "xmf/site03.jpg", "xmf/site04.jpg"], cap: "Stage build" },
      { t: "full", src: "xmf/xmf_live_01_ledstage.mp4", narrow: true, cap: "LED stage — on site" },
      { t: "pair", src: ["xmf/site15.jpg", "xmf/site01.jpg"], cap: "Night stage / preparing the show at home" },
      { t: "grid", cols: 5, src: ["xmf/hifiunicorn_left_or_right_bubbles.jpg", "xmf/hrtzwav_eoribeori_A.jpg", "xmf/lucy_bara_A.jpg", "xmf/thefix_dont_look_back_B.jpg", "xmf/younha_rock_like_star_A.jpg", "xmf/hifiunicorn_left_or_right_firework.jpg", "xmf/hrtzwav_sunday_morning_B.jpg", "xmf/lucy_knight_cradle_A.jpg", "xmf/thefix_high_A.jpg", "xmf/younha_rock_like_star_C.jpg"], cap: "Stills by song — Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA" }
    ]
  },
  {
    id: "chungman",
    tag: "Installation",
    title: "충만한 세상에 복이 있을지어니?",
    titleEn: "Is There Fortune in a World So Full?",
    year: 2026,
    period: "2026.09.02–09.05",
    place: "갤러리 실, 조치원 1927 아트센터",
    exhibition: "《ATTACHED HOME》",
    supported: "본 전시는 문화체육관광부, 한국문화예술위원회, 세종시문화관광재단의 「K-Art 청년 창작자 지원사업」에 선정되어 지원받아 진행됩니다.",
    medium: "혼합재료 오브제, 감열지, 감열 프린터",
    size: "Variable",
    credit: "2인 공동 작업",
    poster: "chungman/poster.jpg",
    cover: "chungman/n361.jpg",
    hero: { img: "chungman/n244.jpg", tall: true },
    line: "세상은 쉬지 않고 내려보내고, 나는 한 뼘씩 감아 올린다.",
    blocks: [
      { t: "text", lead: true, ko: [
        "복이 내린다. 사람의 복, 일의 복, 돈의 복, 몸의 복. 청하지 않아도 내리고 그치라 해도 내린다. 발목까지 차오른 축복 속에서 나는 감는다. 감다가 걸리고 걸리다 멈추고 멈췄다가, 또 감는다.",
        "세상은 한 번도 늦은 적이 없다. 늦는 것은 언제나 나다. 그래도 놓지 않는다. 한 바퀴, 반 바퀴, 한 칸. 삼키지 못한 복을 끌어안고 나는 여전히 감는다."
      ] },
      { t: "text", ko: [
        "복은 위에서 아래로 쏟아진다. 천장에 매달린 네 대의 프린터는 인복, 일복, 돈복, 건강복을 쉬지 않고 출력하고, 종이는 중력을 따라 끝없이 바닥으로 흘러내린다.",
        "'내'가 받는 복은 아래에서 위로 올라간다. 가운데의 모터는 이 모든 복이 겹쳐 인쇄된 한 줄의 종이를 중력을 거슬러 감아 올린다. 그 속도는 느리고, 자주 멈추며, 버겁다.",
        "세상은 쉬지 않고 내려보내고, 나는 한 뼘씩 감아 올린다. 감아 올리지 못한 복은 바닥에 쌓여 간다. 세상은 이미 복으로 넘치는데, 나에게 닿는 복은 왜 이렇게 무거울까."
      ] },
      { t: "full", src: "chungman/n361.jpg" },
      { t: "pair", src: ["chungman/n700.jpg", "chungman/n390.jpg"] },
      { t: "pair", src: ["chungman/n386.jpg", "chungman/n389.jpg"] },
      { t: "text", ko: [
        "작품은 금속과 목재로 제작한 키네틱 조형물이다. 네 대의 TTL 감열 프린터는 ESP32로 제어되며, 각각 인복, 일복, 돈복, 건강복에 해당하는 그래픽을 출력한다. 프린터는 목재 받침에 얹혀 천장에 매달려 있고, 출력된 감열지는 아래로 흘러내린다.",
        "가운데에 놓인, 종이를 감아 올리는 장치는 금속 프레임 위에 스텝 모터와 드라이버, 커플러, 베어링을 조합해 직접 설계하고 제작했다. 스텝 모터의 회전은 커플러를 통해 축으로 전달되고, 베어링이 축을 받쳐 주며, 네 가지 그래픽이 겹쳐 인쇄된 종이를 아래에서 위로 감아 올린다."
      ] },
      { t: "trio", src: ["chungman/n712.jpg", "chungman/n408.jpg", "chungman/n395.jpg"] },
      { t: "pair", src: ["chungman/n253.jpg", "chungman/n370.jpg"] },
      { t: "full", src: "chungman/n381.jpg" },
      { t: "trio", src: ["chungman/n726.jpg", "chungman/n709.jpg", "chungman/n343.jpg"] },
      { t: "section", h: "Graphics — thermal paper, 58 × 3000 mm, 5 types", ko: ["감열지 그래픽, 58mm × 3000mm 5종. 제목의 '복(福)'에서 출발해 인복·일복·돈복·건강복을 대화 기록과 영수증, 계약서 같은 문서의 형식으로 옮겼고, 프린터는 이 긴 띠를 끊지 않고 계속 출력한다."] },
      { t: "trio", src: ["chungman/g01.jpg", "chungman/g02.jpg", "chungman/g03.jpg"] },
      { t: "full", src: "chungman/band1.jpg" },
      { t: "full", src: "chungman/band2.jpg" },
      { t: "full", src: "chungman/band3.jpg" },
      { t: "pair", src: ["chungman/g15.jpg", "chungman/g16.jpg"] },
      { t: "process", steps: [
        { h: "Idea", ko: "감열지(영수증 종이)를 거래와 시간, 순간의 기록으로 리서치했다. 실시간 출력, 출력과 스캔이 반복되는 재귀 구조, 계속 도는 장치를 떠올렸고, '세계와 나 사이의 시차, 거기서 오는 버거움과 잠식'을 키워드로 삼았다." },
        { h: "Sketch", ko: "높이가 다른 스툴과 영수증 프린터, 쌓이는 감열지, 관객의 위치를 스케치하고, 아두이노로 프린터 출력과 감기 장치를 구현하는 계획을 세웠다." },
        { h: "Engineering", ko: "TTL 감열지 프린터 4대와 57.5mm 감열지, ESP32로 출력부를 구성했다. 감기 장치는 Nema 23 스테퍼 모터와 TB6600 드라이버, 12mm 연마봉 축과 베어링으로 설계했다." },
        { h: "Graphics", ko: "제목의 '복(福)'에서 출력 그래픽을 끌어왔다. 여러 서체의 福을 반복하고, 인복·일복·돈복·건강복을 대화 기록과 영수증, 계약서 같은 문서의 형식으로 출력했다." }
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
    place: "프라이빗 라운지(카페 어반 옆), 섭골길, 조치원",
    exhibition: "Garage Project 3 \"Find your Sp( )t\"",
    organizer: "문화공작소 (Sejong)",
    medium: "Collective shop — planning, branding, space, operation, program / Object: NIMBUS (steel mesh pendant light)",
    role: "Space team — zoning, fixtures & furniture design and making (Team MOIN) / NIMBUS (solo)",
    cover: "nimbus/n09.jpg",
    hero: { img: "nimbus/n05.jpg" },
    line: "사람과 시대와 사물이 한 방에 모이는 collective shop MOIN, 그리고 그 안에 띄운 철제 메쉬 조명 NIMBUS.",
    facets: [
      { id: "overview", label: "Overview", credit: "Team MOIN (7) — space design · fixtures & furniture making: 김리한", blocks: [
        { t: "text", ko: [
          "Garage Project 3 \"Find your Sp( )t\"는 조치원 섭골길 골목 곳곳의 공간에서 열린 프로젝트다. 'Spot'은 내 취향이 세상과 만나는 점이자, 서로의 관심이 이어져 만들어지는 문화의 거리를 뜻한다.",
          "팀 MOIN(7명)은 카페 '어반' 옆 건물의 2층짜리 프라이빗 라운지를 맡아, 7월 13일 첫 회의부터 9월 3일까지 약 두 달 동안 collective shop 한 곳을 기획하고 만들고 운영했다. 설정은 '사람들을 불러 모으기 위해 오래전부터 사물을 수집해 온 한 컬렉터의 방'이다. 공간 안의 가구·조명·컵·오브제는 모두 살 수 있고, 방문객은 고른 컵에 음료를 받아 마시며 머문다.",
          "팀은 공간(3명), 브랜딩(2명), 스타일링(2명), 예산으로 일을 나눴다. 김리한은 공간 팀에서 존 구성과 집기·가구 설계·제작을 맡았고, 개인 작품으로 펜던트 조명 NIMBUS를 만들어 DISPLAY(1)에 걸었다."
        ] },
        { t: "full", src: "nimbus/n06.jpg" },
        { t: "full", src: "garage3/ov_space.jpg", narrow: true },
        { t: "section", h: "Response", ko: [
          "방문객들은 '조치원에서 못 보던 공간 같다', '이런 공간이 더 많아졌으면 좋겠다', '감도 높다', '편안하고 아늑하다'고 말했다. 카페나 판매점 한 가지로 읽히기보다, 둘러보고 앉아서 머무는 공간으로 받아들여졌다."
        ] }
      ] },
      { id: "planning", label: "Planning", credit: "Team MOIN · personal notes: 김리한", blocks: [
        { t: "text", ko: [
          "조치원(鳥致院)은 충청권의 남북과 동서를 잇는 요충지이자 사람과 물산이 모이던 곳이다. 이름의 '원(院)'은 말을 묶어 두고 쉬어 가던 조선시대의 역원에서 왔다. 오늘의 조치원은 더 이상 중심지가 아니다. 팀은 한때 사람이 모이던 이 땅에서 다시 사람을 모으는 장소를 열기로 했다.",
          "서로 다른 사람의 작업을 한 공간에 모으려면 그것을 묶어 줄 장치가 필요했다. 그래서 '한 명의 컬렉터'라는 가상의 인물을 세웠다. 컬렉터에게 수집은 과시가 아니라 손님을 맞기 위한 준비이고, 그가 가장 많이 모은 사물은 사람과 사람을 잇는 컵이다."
        ] },
        { t: "pair", src: ["garage3/pl_jochiwon1.jpg", "garage3/pl_jochiwon2.jpg"], cap: "Background — 鳥致院" },
        { t: "process", h: "Timeline", steps: [
          { h: "07.13 — OT", ko: "공간은 카페 어반 옆 건물의 프라이빗 라운지로 정해졌다. 여러 디자이너가 한 공간을 함께 꾸리는 collective exhibition 형식으로 가기로 했다." },
          { h: "07.20 — Concept ideation", ko: "각자 관심사와 해 보고 싶은 작업을 나누고 공간 설정을 여러 개 내놓았다. 조건 다섯 가지를 정리했다 — 컬렉터의 방, 모든 것을 살 수 있음, 과거와 현재의 사물이 함께 놓임, 낮과 밤이 다름, 사람이 모이는 곳." },
          { h: "07.27 — 컬렉터의 방", ko: "상위 개념을 '컬렉터의 방'으로 확정하고, 방문객과 공간이 처음 만나는 사물을 컵으로 정했다. 무드보드 키워드는 collected, nonchalant, handcrafted, natural texture, aged." },
          { h: "08.04 — 1st briefing", ko: "흐름과 판매 아이템은 좋은 평가를 받았다. 낮과 밤이 분명히 달라야 한다는 피드백에 따라 낮은 편집숍과 음료, 밤은 사전 예약 호스팅으로 나눴다." },
          { h: "08.10–11 — Insight trip, 강릉", ko: "강릉 소품샵을 돌며 컵과 소품을 모으고, 각자 집과 지인에게서 빌릴 수 있는 사물을 아카이브했다. 돌아와서 받은 피드백 — 밖에서 안이 보이지 않으니 어떤 공간인지 알리는 사이니지가 필요하다." },
          { h: "08.16–18 — Decisions", ko: "집기 제작 예산을 50만 원 이내로 잡고, 합판 원장 7장과 2T 철판(컵 진열 뒤 아카이브 월)을 사기로 했다. 화장실로 이어지는 복도에는 파티션을 직접 세우기로 했다." },
          { h: "08.24 — Fabrication", ko: "공방에서 테이블쏘로, 시우터 협동조합과 메이커스페이스에서 CNC로 판재를 재단했다." },
          { h: "08.31–09.03 — Open", ko: "설치를 마치고 낮에는 컵과 음료, 밤에는 날마다 다른 프로그램으로 운영했다." }
        ] },
        { t: "grid", cols: 5, src: ["garage3/pl_team1.jpg", "garage3/pl_team2.jpg", "garage3/pl_team3.jpg", "garage3/pl_team4.jpg", "garage3/pl_team5.jpg"], cap: "1st briefing (midterm)" },
        { t: "section", h: "Personal notes — 김리한", ko: [
          "기획 초반 노트에서는 '시간의 흔적, 낡음의 미학'을 붙잡았다. 새것을 낡아 보이게 만드는 대신 시간이 만든 흔적을 그대로 담은 사물을 인사이트 트립에서 모으고 고쳐 두자는 방향이다. 현장 답사에서는 뻥 뚫린 공간을 반투명 천으로 감싸 아늑하게 만들고, 2층에서 투사하는 방법을 고민했다."
        ] },
        { t: "trio", src: ["garage3/pl_rihan1.jpg", "garage3/pl_rihan2.jpg", "garage3/pl_rihan3.jpg"] },
        { t: "pair", src: ["garage3/pl_rihan4.jpg", "garage3/pl_rihan5.jpg"], cap: "Personal planning notes & site survey" },
        { t: "full", src: "garage3/pl_trip.jpg", narrow: true, cap: "Insight trip — 강릉, 2026.08.10–11" }
      ] },
      { id: "branding", label: "Branding", credit: "Team MOIN — branding & graphics by the branding team", blocks: [
        { t: "text", ko: [
          "MOIN은 '모인'에서 왔다. 사물이 모이고, 서로 다른 시대가 모이고, 작가들의 취향이 모이고, 사람들이 음료를 즐기러 모인다는 뜻이다. '모이는 중'이 아니라 '모여서 하나가 된 상태'라는 인상을 주려 했다. 슬로건은 People, Times and Objects Gathered in One Room.",
          "심볼은 여러 방향에서 사람들이 한 중심으로 모이는 모습이다. 가운데의 작은 형태는 모인 사람들, 바깥으로 뻗는 선은 그 만남에서 다시 퍼지는 관계를 뜻한다. 손으로 그린 듯 불규칙한 선으로 다듬었다. 키워드는 GATHER(사람이 모인다), SHIFT(공간이 시간에 따라 바뀐다), COLLECT(컵과 사물과 취향이 모인다)."
        ] },
        { t: "pair", src: ["garage3/br_logo.jpg", "garage3/br_symbol.jpg"] },
        { t: "pair", src: ["garage3/br_color.jpg", "garage3/br_symbol_mid.jpg"], cap: "MOIN White #FAF8F6 · MOIN Black #43403D · MOIN Brown #CCA977" },
        { t: "section", h: "Applications", ko: [
          "브랜딩 팀은 메인 포스터, 작품 설명 패브릭 포스터, 컵 매거진(zine), 패키지, 사이니지, 인스타그램 콘텐츠를 만들었다. zine에는 컵마다 번호를 붙이고 산 곳과 특징, 얽힌 이야기를 적었다. 컵은 크라프트 종이백과 캔버스 천, 로고 도장, 벌집 포장지로 싸서 내줬다. 밖에서 안이 보이지 않는다는 피드백에 따라 입구에는 0.6 × 1.6 m 패브릭 사이니지를 걸었다."
        ] },
        { t: "trio", src: ["garage3/br_poster1.jpg", "garage3/br_poster2.jpg", "garage3/br_poster3.jpg"], cap: "Posters" },
        { t: "pair", src: ["garage3/br_signage.jpg", "garage3/br_scope.jpg"], cap: "Fabric signage / branding work scope" }
      ] },
      { id: "space", label: "Space", credit: "Space team (3) — zoning, fixtures & furniture design and making incl. 김리한", blocks: [
        { t: "text", ko: [
          "들어서는 순간 탁 트인 느낌과 밀도를 함께 갖도록 하는 것이 기준이었다. 입구 쪽에는 컵을 두어 이곳의 주인공이 컵이라는 것을 바로 알게 하고, 가운데에는 시선을 붙잡는 기둥을 세워 공간을 세로로 나눴다. 1층은 ENJOY, DISPLAY(1)(2), REST(1)(2), PURCHASE로, 2층 다락은 좌식 REST(3)로 나눴다."
        ] },
        { t: "pair", src: ["garage3/sp_iso.jpg", "garage3/sp_zones.jpg"] },
        { t: "list", items: [
          "ENJOY — 사이드 테이블 다섯 개를 탑처럼 쌓은 기둥과 스탠딩 테이블 네 개. 기둥 각 단에 프리미엄 컵을 올리고, 스탠딩 테이블에서는 받은 음료를 서서 마신다.",
          "DISPLAY(1) — 낮은 테이블과 눈높이의 행잉 조명(NIMBUS). 컵이 놓이는 높낮이에 변화를 줬다.",
          "DISPLAY(2) — 소품 선반. 비어 보일 수 있는 벽을 채우고, 선반 위 소품도 모두 판매한다.",
          "REST(1)(2) — 소파와 직접 만든 벤치·테이블, 팀원이 자작나무 합판을 카빙해 만든 스툴.",
          "REST(3) — 2층 다락. 신발을 벗고 앉는 카페트와 유기적인 형태의 낮은 탁자, 팀원이 만든 조명.",
          "PURCHASE — 계산과 포장, 브랜딩 인쇄물."
        ] },
        { t: "pair", src: ["garage3/sp_display1.jpg", "garage3/sp_display2.jpg"] },
        { t: "trio", src: ["garage3/sp_plan.jpg", "garage3/sp_section.jpg", "garage3/sp_zoning.jpg"], cap: "Floor plan / section / zoning" },
        { t: "section", h: "Fixtures — design & making", ko: [
          "공간 팀은 존별 집기와 가구를 설계하고 직접 만들었다. 판재는 공방에서 테이블쏘로 직접 재단하거나, 시우터 협동조합과 메이커스페이스에서 CNC로 잘랐다. 2층 좌식 테이블 다리는 각재와 투바이 목재로 짜고, 현장에서 실측해 높이를 맞출 수 있게 했다. 2층 바닥과 천장 높이를 직접 재서, 펜던트 조명은 줄 길이 2,100–2,200 mm로 낮은 진열 테이블 위 눈높이에 오도록 정했다."
        ] },
        { t: "pair", src: ["garage3/sp_cnc.jpg", "garage3/sp_legs.jpg"], cap: "Cutting plan by method (table saw / CNC ×2) · floor-table legs" },
        { t: "list", items: ["Standing table — 직접 제작", "Bench — 직접 제작", "Low table — 테이블쏘로 직접 가공", "Floor table (2F) — CNC 상판 + 각재 다리", "Stones — 직접 수집"] },
        { t: "trio", src: ["nimbus/n03.jpg", "nimbus/n05.jpg", "nimbus/n06.jpg"], cap: "Low table, stones, standing tables and benches in the space" },
        { t: "section", h: "Proposal — DISPLAY zone (김리한)", ko: [
          "인사이트 트립 회의 때 DISPLAY 존에 단초점 프로젝터로 MOIN의 키 컬러를 쓴 몰입형 영상을 투사하는 안과, 콘크리트 블록 사이에 판재를 끼우는 진열대 안을 제안했다."
        ] },
        { t: "full", src: "garage3/sp_rihan_proj.jpg", narrow: true }
      ] },
      { id: "operation", label: "Operation", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "MOIN에서는 모든 것을 살 수 있다. 다만 사는 방식은 물건마다 달랐다. 컵은 그 자리에서 산다. 방문객이 고른 컵에 음료를 담아 주고, 음료 없이 컵만 사면 값을 깎아 준다. 다 마신 컵은 나갈 때 씻고 포장해 건넨다. 가구·그래픽·오브제는 현장에서 예약하고, 운영이 끝난 뒤 받아 간다. 팔 수 없는 물건에는 미리 판매 완료 표시를 했고, 판매 정보는 zine에 담았다.",
          "방문 흐름은 ENTER → EXPLORE → SELECT → REST → TAKE. 들어와 둘러보고, 컵을 고르고, 앉아서 마시고, 컵을 가져간다. 낮과 밤은 조도와 조명 색, 내는 음료로 나눴다. 낮은 사물을 발견하는 시간, 밤은 사람과 사람이 이어지는 시간이다."
        ] },
        { t: "full", src: "garage3/op_ux.jpg", cap: "User experience — daytime" },
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
        { t: "pair", src: ["garage3/ob_drawing.jpg", "garage3/sp_display1.jpg"], cap: "Drawing / planned position in DISPLAY(1)" },
        { t: "full", src: "garage3/ob_desc.jpg", narrow: true, cap: "Work card on the fabric poster" }
      ] },
      { id: "program", label: "Program", credit: "Team MOIN", blocks: [
        { t: "text", ko: [
          "3일 동안 낮과 밤을 다르게 운영했다. 낮에는 매일 같은 방식으로 컵을 고르고 음료를 즐기게 했고, 밤은 날마다 다른 콘셉트로 꾸렸다. 1차 발표 피드백에 따라 밤 프로그램은 낮보다 더 계획된 느낌이 들도록 예약과 순서를 분명히 짰다."
        ] },
        { t: "process", h: "Day / Night", steps: [
          { h: "Daytime — every day", ko: "사물을 발견하는 시간. 방문객이 진열된 컵 가운데 하나를 고르면 그 컵에 음료를 담아 낸다." },
          { h: "1st Night (09.01) — DJ Party", ko: "18:00–21:30. Hyperpop과 Techno 디제잉을 세 시간 내내 배경으로 틀었다. 입장할 때 네 팀 중 하나로 나뉘고, '처음 만난 사람에게 가장 좋아하는 노래를 물어보세요' 같은 개인 시크릿 미션 종이를 받는다. 비어퐁 1·2라운드와 결승을 치르며 자연스럽게 대화하게 했다." },
          { h: "2nd Night (09.02) — Tea Tasting", ko: "사전 예약으로 모인 10명이 각자 좋아하는 음악 한 곡을 골라 오고, 준비된 세 종류의 차를 함께 맛보며 서로의 플레이리스트를 나눈다." },
          { h: "3rd Night (09.03) — Movie Night", ko: "마지막 밤, 넓은 공간을 최대한 열고 조도를 낮춰 모두가 같은 화면 앞에 모여 영화를 본다." }
        ] },
        { t: "full", src: "garage3/pg_dj2.jpg" },
        { t: "pair", src: ["garage3/pg_dj1.jpg", "garage3/pg_night.jpg"] },
        { t: "pair", src: ["garage3/pg_tea1.jpg", "garage3/pg_tea2.jpg"], cap: "1st Night DJ Party / 2nd Night Tea Tasting" }
      ] }
    ]
  },
  {
    id: "meomun",
    tag: "Product",
    title: "머문",
    titleEn: "Bookmark",
    year: 2026,
    period: "2026.10",
    medium: "Laser-cut stainless steel 0.3t (tested: birch, basswood, poplar plywood 1.5t)",
    credit: "Personal work — Digital Makers Lab",
    cover: "meomun/hero.jpg",
    hero: { img: "meomun/hero.jpg" },
    line: "남기고 싶은 한 줄만 보이게 하는 책갈피.",
    blocks: [
      { t: "text", ko: [
        "책을 읽다 남기고 싶은 문장이 있으면 밑줄을 긋는 대신 이 책갈피를 끼운다. 가운데 창으로 그 한 줄만 보인다.",
        "처음에는 1.5t 합판으로 만들었는데, 두꺼워서 종이에 자국이 남았다. 그래서 0.3t 스테인리스로 바꿔 레이저로 잘랐다."
      ] },
      { t: "full", src: "meomun/m06.jpg" },
      { t: "full", src: "meomun/m04.jpg" },
      { t: "pair", src: ["meomun/m15.jpg", "meomun/m16.jpg"], cap: "Stainless steel 0.3t and plywood 1.5t versions" },
      { t: "section", h: "Process", ko: ["도면을 그리고, 레이저로 자른 뒤 줄과 사포로 모서리를 다듬었다."] },
      { t: "trio", src: ["meomun/m01.jpg", "meomun/m02.jpg", "meomun/m03.jpg"], cap: "Drawing / laser-cut parts / deburring" }
    ]
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
    hero: { img: "transparent/screen3.jpg" },
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
    cover: "mi/cover.jpg"
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
