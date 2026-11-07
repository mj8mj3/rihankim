// 작품 데이터. 목록(최신순)과 상세 페이지가 이 파일 하나로 그려진다.
// 메타 라벨은 영어, 값과 설명은 원문(한국어) 그대로. 정보가 없으면 그 칸을 비워 둔다(화면에 표시되지 않음).
// blocks: text(본문) · full(한 장) · pair(두 장) · trio(세 장) · grid(여러 장) · yt(유튜브) · process(과정)
window.WORKS = [
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
    cover: "gwannyeom/s2.jpg",
    hero: { video: "gwannyeom/clip.mp4", poster: "gwannyeom/wide.jpg" },
    line: "외벽과 내벽, 두 개의 면에 프로젝션 매핑으로 펼쳐지는 사운드 인터랙티브 영상.",
    blocks: [
      { t: "text", ko: [
        "집은 벽과 지붕으로 이루어진 장소이기 전에, 우리가 머릿속에 짓고 허물기를 반복하는 하나의 관념이다. 어떤 이에게 집은 창밖으로 보이던 안개 낀 하늘이고, 어떤 이에게는 어린 시절 걷던 좁은 골목이며, 또 어떤 이에게는 아무 소리도 들리지 않는 깊은 고요다.",
        "〈관념 속의 집〉은 이처럼 저마다 다른 모습으로 존재하는 '마음속의 집'을 하나의 여정으로 엮음과 동시에, 작가 스스로 관념 속에 존재하는 그 어떤 상태에 다다르고자 시도하는 작업이다.",
        "우리는 누구나 마음 한편에 오래 머무는 생각과 시간의 덧칠로 이루어진 기억을 품고 살아간다. 그 기억들은 켜켜이 쌓여 하나의 집을 이루고, 이 작품은 그렇게 형성된 내면의 집에 닿고자 한다."
      ] },
      { t: "trio", src: ["gwannyeom/s1.jpg", "gwannyeom/s3.jpg", "gwannyeom/s4.jpg"], cap: "Venue preview (3D)" },
      { t: "pair", src: ["gwannyeom/s5.jpg", "gwannyeom/s6.jpg"] }
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
    hero: { img: "seungmu/hero.jpg" },
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
    credit: "Personal work",
    artists: "Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA",
    cover: "xmf/lucy_knight_cradle_A.jpg",
    hero: { video: "xmf/xmf_lucy_stage_15s.mp4", poster: "xmf/hero.jpg" },
    line: "다섯 팀의 무대 LED에 곡마다 띄운, 소리에 반응하는 실시간 영상.",
    blocks: [
      { t: "text", ko: [
        "한일 음악 페스티벌 XMF 2026의 무대 LED 영상을 만들었다. Hi-Fi Un!corn, hrtz.wav, LUCY, THE FIX, YOUNHA 다섯 팀의 곡마다 따로 영상을 짓고, 공연 중에는 소리에 반응하도록 TouchDesigner로 실시간으로 돌렸다.",
        "Left or Right, 어리버리, sunday morning, 사랑은 어쩌고, 발아, 뜨거, 못 죽는 기사와 비단 요람, Don't Look Back, HIGH, Rock like star — 곡의 성격에 맞춰 화면의 재료와 움직임을 달리했다."
      ] },
      { t: "pair", src: ["xmf/xmf_lucy_reactive_12s.mp4", "xmf/xmf_hrtzwav_reactive_12s.mp4"], cap: "Reactive visuals — LUCY, hrtz.wav" },
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
    id: "nimbus",
    tag: "Object",
    title: "NIMBUS",
    year: 2026,
    period: "2026.08.31–09.03",
    place: "섭골길 일대, 조치원",
    exhibition: "Garage Project 3 \"Find your Sp( )t\"",
    medium: "Steel mesh, pendant light",
    size: "300 × 700 × 500 mm",
    credit: "Personal work — Team MOIN",
    cover: "nimbus/n09.jpg",
    hero: { img: "nimbus/n01.jpg" },
    line: "겹쳐 쌓은 철제 메쉬가 구름처럼 공간에 떠 있는 펜던트 조명.",
    blocks: [
      { t: "text", ko: [
        "철제 메쉬의 물성을 활용하고자 재료를 겹치고 쌓는 방식을 택했고 그것이 자연스럽게 형태의 출발점이 되었다. 낱장의 메쉬는 평면적이고 규칙적인 구조를 가지지만, 여러 겹이 적층되면서 예상하지 못한 곡면과 부피를 만들어낸다.",
        "조명이 놓이는 공간 역시 사물과 사람, 서로 다른 취향이 한곳에 모이는 장소를 전제로 한다. 서로 다른 것들이 모여 하나의 장면을 이루는 공간의 성격과, 개별적인 메쉬가 축적되며 하나의 덩어리로 변해가는 방식 사이의 유사성을 조명의 형태로 연결했다.",
        "겹쳐진 메쉬가 만들어내는 불분명한 윤곽과 밀도에서는 구름의 형상을 떠올렸다. 명확한 경계 없이 뭉치고 흩어지며 공중에 머무는 구름의 성질을 따라, 이 덩어리를 바닥에 두기보다 공간에 띄우는 펜던트 조명의 형식으로 완성했다. 불이 들어오면 촘촘한 격자 사이로 빛이 걸러지고 중첩되며, 단단한 철제는 시각적으로 가볍고 부유하는 덩어리로 전환된다."
      ] },
      { t: "pair", src: ["nimbus/n02.jpg", "nimbus/n03.jpg"] },
      { t: "full", src: "nimbus/n04.jpg" },
      { t: "trio", src: ["nimbus/n05.jpg", "nimbus/n06.jpg", "nimbus/n07.jpg"] },
      { t: "pair", src: ["nimbus/n09.jpg", "nimbus/n10.jpg"] },
      { t: "full", src: "nimbus/n08.jpg" },
      { t: "section", h: "Team MOIN — Space & Branding", ko: ["Garage Project 3에서 팀 MOIN의 공간 구성과 브랜딩을 함께 맡았다. MOIN은 사람들을 불러 모으기 위해 오래전부터 사물을 수집해온 한 컬렉터의 공간이라는 설정의 collective shop으로, 서로 다른 시대와 배경의 사물이 각자의 개성을 유지한 채 공존하고 방문객이 사물을 직접 쓰며 머물 때 완성된다. '사물이 모인다, 사람들이 모인다, 취향이 모인다'를 콘셉트로, 서로 다른 방향에서 하나의 중심으로 모이는 모습을 심볼로 삼았다."] },
      { t: "pair", src: ["nimbus/moin1.jpg", "nimbus/moin2.jpg"] },
      { t: "pair", src: ["nimbus/moin3.jpg", "nimbus/moin4.jpg"] },
      { t: "pair", src: ["nimbus/moin5.jpg", "nimbus/moin6.jpg"] }
    ]
  },
  {
    id: "algomi",
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
