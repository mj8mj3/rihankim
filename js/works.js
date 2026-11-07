// 작품 데이터. 각 항목의 ko/en 문구를 고치면 목록과 상세 페이지가 함께 바뀐다.
// [확인 필요] 표시는 1차 시안에서 사용자 확인이 남은 정보다.
window.WORKS = [
  {
    id: "gwannyeom",
    year: 2026,
    tags: ["performance", "projection"],
    media: { poster: "gwannyeom/wide.jpg", clip: "gwannyeom/clip.mp4" },
    gallery: ["gwannyeom/s1.jpg", "gwannyeom/s2.jpg", "gwannyeom/s3.jpg", "gwannyeom/s4.jpg", "gwannyeom/s5.jpg", "gwannyeom/s6.jpg"],
    galleryRatio: "4/5",
    ko: {
      title: "관념 속의 집",
      medium: "2면 프로젝션 매핑, 실시간 영상(TouchDesigner), 사운드",
      line: "호수, 숲, 회랑, 골목, 하늘. 열 개의 장면이 건물의 안쪽 벽과 바깥 프레임 위로 이어지는 공연 영상.",
      body: [
        "하반기 트랙 공연을 위해 만든 미디어 연출이다. 건물 안쪽 벽(내벽)과 그 앞의 ㄷ자 프레임(외벽) 두 면에 서로 이어지는 영상을 투사한다.",
        "첫 물방울이 떨어지는 호수에서 시작해 숲과 연기, 끝없는 공간, 비틀린 철골 회랑, 거미줄의 파동, 점이 모였다 흩어지는 골목을 지나 먼 나무가 선 하늘에서 끝난다.",
        "모든 장면은 TouchDesigner에서 실시간으로 계산했고, 소리에 맞춰 반응한다. 관객석 시점에서 두 면이 한 장면으로 보이도록 투사를 보정했다."
      ],
      role: "영상 연출·제작, TouchDesigner 시스템 [확인 필요]",
      venue: "화성 [장소·날짜 확인 필요]",
      galleryNote: "공연장 3D 미리보기 캡처"
    },
    en: {
      title: "House in the Mind [title TBC]",
      medium: "Two-surface projection mapping, real-time visuals (TouchDesigner), sound",
      line: "Lake, forest, corridor, alley, sky — ten scenes flowing across the inner wall and outer frame of a building.",
      body: [
        "Media direction made for a second-half track performance. Two connected images are projected onto the building's inner wall and the U-shaped frame in front of it.",
        "Starting from a lake where the first drop falls, it passes through forest and smoke, an endless space, a twisted steel corridor, rippling webs and an alley of gathering dots, and ends in a sky with distant trees.",
        "Every scene is computed live in TouchDesigner and reacts to the sound. The projection is calibrated so both surfaces read as one image from the audience."
      ],
      role: "Visual direction & production, TouchDesigner system [TBC]",
      venue: "Hwaseong [venue & date TBC]",
      galleryNote: "Stills from the 3D venue preview"
    }
  },
  {
    id: "sumuk",
    year: 2026,
    tags: ["generative", "projection"],
    media: { poster: "inkmelt/poster.jpg", clip: "inkmelt/clip.mp4" },
    series: [
      { id: "inkmelt", ko: ["녹아내리는 수묵", "곽희 「조춘도」의 먹 그림이 녹아내렸다가 다시 스며든다."], en: ["inkMelt", "Guo Xi's 'Early Spring' melts away and seeps back in."] },
      { id: "meokform", ko: ["먹", "흰 한지 위에서 먹과 물이 스스로 번지고 흐르는 시뮬레이션."], en: ["meokForm", "Ink and water spreading on their own over white hanji."] },
      { id: "swarmmarks", ko: ["검은 손자국 군체", "손가락 목탄 자국 수천 개가 한 무리처럼 움직인다."], en: ["swarmMarks", "Thousands of charcoal finger marks moving as one swarm."] },
      { id: "yongjusa", ko: ["용주사 천보루", "등불 켜진 누각을 지나 족자 속 바닷가 절벽으로 들어간다."], en: ["Yongjusa Cheonboru", "Through a lantern-lit pavilion into the cliffs of a hanging scroll."] },
      { id: "yunggeonreung", ko: ["융건릉 정자각", "정자각과 적송 숲을 반투명한 파란 천의 건축으로 지었다."], en: ["Yunggeonneung Jeongjagak", "The shrine and pine forest rebuilt as translucent blue fabric."] },
      { id: "okpae", ko: ["옥패", "해 질 녘 수묵 산 위에 떠 흔들리는 옥 노리개 셋."], en: ["Okpae", "Three jade pendants swaying above an ink landscape at dusk."] },
      { id: "islandlines", ko: ["먹선 산맥", "먹선으로 그린 산맥 사이를 천천히 미끄러져 지나간다."], en: ["islandLines", "Gliding slowly through mountains drawn in ink lines."] },
      { id: "sansuflight", ko: ["산수 비행", "청록 산수화 속 굽이치는 강 골짜기를 난다."], en: ["sansuFlight", "Flying the winding river valley of a blue-green landscape painting."] },
      { id: "butterflyink", ko: ["흰빛 나비", "밤의 수묵 산 위로 흰 나비 스물두 마리가 난다."], en: ["butterflyInk", "Twenty-two white butterflies over night-ink mountains."] },
      { id: "ripplewater", ko: ["물결", "종이빛 수면 위 두 곳에서 퍼지는 먹빛 물결의 간섭."], en: ["rippleWater", "Interfering ink ripples from two touches on paper-white water."] },
      { id: "vortextunnel", ko: ["소용돌이", "자기 피드백으로 자라나는 물빛 소용돌이."], en: ["vortexTunnel", "A water-colored vortex grown by self-feedback."] },
      { id: "creation", ko: ["창조 × 창살", "한국 창살 문양 위로 번지는 빛의 잔상."], en: ["creationPiece", "Afterimages of light over a Korean window lattice."] },
      { id: "inkblossom", ko: ["잉크 블러섬", "마우스로 밀면 소용돌이치는 반응확산 패턴(인터랙티브)."], en: ["RD Ink Blossom", "A reaction–diffusion pattern you push into swirls (interactive)."] },
      { id: "sevenwaves", ko: ["일곱 물결", "[설명 확인 필요]"], en: ["Seven Waves", "[description TBC]"] }
    ],
    ko: {
      title: "수묵 생성 영상 연작",
      medium: "실시간 생성 영상(TouchDesigner, GLSL), 2면 투사용 1920×707 / 1920×698",
      line: "먹, 물, 종이, 그리고 화성의 장소들. 끝없이 계산되며 이어지는 열네 개의 영상.",
      body: [
        "공연장 안쪽 벽과 앞쪽 ㄷ자 프레임 두 화면에 투사하기 위해 만든 생성 영상 연작이다. 대부분 정해진 길이의 영상이 아니라 매 프레임 계산되는 실시간 작품이고, 일부는 이음매 없는 20초 루프다.",
        "수묵의 번짐과 붓질, 옛 그림(곽희 「조춘도」), 화성의 용주사와 융건릉을 재료로 삼았다. 일부 작품은 Shadertoy 원본 셰이더의 메커니즘을 옮겨 와 발전시켰고, 출처는 각 작품 기록에 남겼다.",
        "영상의 공연장 장면은 실제 상영이 아니라 3D 공연장 미리보기다."
      ],
      role: "개인 작업 [창작지원 사업명·기간 확인 필요]",
      venue: "창작지원 [사업명 확인 필요]"
    },
    en: {
      title: "Ink Generative Series",
      medium: "Real-time generative video (TouchDesigner, GLSL) for two projection surfaces",
      line: "Ink, water, paper and the places of Hwaseong — fourteen pieces computed endlessly.",
      body: [
        "A series of generative works made for two screens: a venue's inner wall and the U-shaped frame in front of it. Most are not fixed-length videos but real-time pieces computed every frame; some are seamless 20 s loops.",
        "Materials include ink bleeds and brush strokes, old paintings (Guo Xi's 'Early Spring'), and Hwaseong's Yongjusa temple and Yunggeonneung tombs. Some pieces port and develop the mechanism of an original Shadertoy shader, credited in each work's notes.",
        "Venue views are 3D previews, not documentation of a screening."
      ],
      role: "Solo work [program name & period TBC]",
      venue: "Creative support program [TBC]"
    }
  },
  {
    id: "redforest",
    year: 2026,
    tags: ["performance", "realtime"],
    media: { poster: "redforest/poster.jpg" },
    ko: {
      title: "붉은 숲 (redForest)",
      medium: "실시간 영상(TouchDesigner), 음악 반응",
      line: "끝없는 붉은 숲을 1인칭으로 질주한다. 킥이 울릴 때마다 숲 뒤의 하늘이 붉게 번쩍인다.",
      body: [
        "공연 「못 죽는 기사와 비단 요람」의 한 장면이다. 검게 꼬인 나무 실루엣과 진홍색 안개 빛, 낙엽 바닥 사이를 달린다.",
        "곡의 킥에 맞춰 숲 뒤의 하늘과 안개가 역광으로 번쩍이고, 나무는 검은 실루엣으로 남는다. 공연 중 키 하나로 화면 전체 색을 반전한다."
      ],
      role: "장면 영상 제작 [확인 필요]",
      venue: "LUCY 공연 「못 죽는 기사와 비단 요람」, 2026.09 [확인 필요]"
    },
    en: {
      title: "redForest",
      medium: "Real-time visuals (TouchDesigner), music-reactive",
      line: "A first-person sprint through an endless red forest; the sky flashes red with every kick.",
      body: [
        "A scene from the performance 'The Knight Who Cannot Die and the Silk Cradle'. It runs between black twisted tree silhouettes, crimson fog light and a floor of fallen leaves.",
        "On each kick the sky and fog flare as backlight while the trees stay black. A single key inverts the whole image during the show."
      ],
      role: "Scene visuals [TBC]",
      venue: "LUCY performance, Sep 2026 [TBC]"
    }
  }
];

window.TAGS = {
  all: { ko: "전체", en: "All" },
  performance: { ko: "공연", en: "Performance" },
  projection: { ko: "프로젝션", en: "Projection" },
  installation: { ko: "설치", en: "Installation" },
  realtime: { ko: "실시간", en: "Real-time" },
  generative: { ko: "생성", en: "Generative" },
  book: { ko: "책", en: "Book" },
  branding: { ko: "브랜딩", en: "Branding" }
};
