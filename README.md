# Rihan Kim — portfolio

정적 사이트(HTML/CSS/JS, 빌드 없음). GitHub Pages로 공개: https://mj8mj3.github.io/rihankim/

## 미리보기
```
node serve.js
```
브라우저에서 http://localhost:5180 을 연다.

## 구성
- `index.html` — 표지, 대표작(「관념 속의 집」), 작품 색인(Selected works), Other works
- `work.html?id=<작품id>` — 작품 상세: 첫 장(정보 + 큰 이미지), 본문·이미지 블록, 과정, 포스터
- `about.html` — 프로필 사진, 소개, CV, 연락처
- `press.html` — 기사 목록(매체·날짜·제목·링크)
- `js/works.js` — 작품·기사 데이터. 작품을 더하거나 문구를 고칠 때 이 파일만 고친다. 목록은 이 파일의 순서(최신순)대로 나온다.
- `js/main.js` — 색인·상세·기사 목록 그리기, 메일 주소 조립
- `css/style.css` — Pretendard, 900px·600px 기준 반응형
- `assets/media/<작품>/` — 웹용 사본(긴 변 1200~2000px, EXIF 제거). 원본은 `_incoming/`(커밋 안 함)
- `favicon.svg` / `favicon.ico` / `favicon-32.png` / `apple-touch-icon.png` — 기하 산세리프 R (Futura가 이 PC에 없어 같은 계열 형태로 직접 그림)

## 언어
메뉴·라벨·메타 정보는 영어, 작품 설명과 About 본문은 한국어(`lang="ko"`).
