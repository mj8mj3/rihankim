# 김리한 개인 포트폴리오 (1차 시안)

정적 사이트(HTML/CSS/JS, 빌드 없음). 2nd LAB 팀 사이트와는 별개다.

## 미리보기
```
node serve.js
```
브라우저에서 http://localhost:5180 을 연다.

## 구성
- `index.html` — 첫 화면(이름·대표 영상), 작업 목록, 소개·이력, 연락
- `work.html?id=<작품id>` — 작품 상세
- `js/works.js` — 작품 데이터(한국어/영어). 작품을 더하거나 문구를 고칠 때 이 파일만 고친다.
- `js/main.js` — 목록·상세 그리기, KO/EN 전환(브라우저에 기억)
- `css/style.css` — Pretendard(웹폰트 CDN), 600px·900px 기준 모바일 대응
- `assets/media/` — 포스터 이미지와 짧은 미리보기 클립
- `작품목록.md` — 작품 목록 표와 원본 경로
- `_screenshots/` — 시안 확인용 스크린샷(배포 대상 아님)

`[확인 필요]` / `[TBC]` 표시는 사용자 확인이 남은 정보다.
