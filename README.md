# Status Image API

캐릭터챗용 상태창 이미지 생성 API

## 🚀 배포 방법

### 1. GitHub에 업로드

1. GitHub에서 새 레포지토리 생성
2. 이 폴더의 모든 파일을 업로드

### 2. Vercel에 배포

1. [vercel.com](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. 방금 만든 레포지토리 선택
5. "Deploy" 클릭
6. 완료! (약 1-2분 소요)

## 📝 사용법

배포 후 받은 URL 뒤에 파라미터를 붙여서 사용:

```
https://your-app.vercel.app/api/status?location=폐공장&date=03/15&time=14:30&job=탐정&faction=EDEN&char=아리아&emoji=💕&relation=흥미로운 인간&incident=적과 조우
```

### 마크다운에서 사용

```markdown
![상태창](https://your-app.vercel.app/api/status?location=폐공장&date=03/15&time=14:30&job=탐정&faction=EDEN&char=아리아&emoji=💕&relation=흥미로운 인간&incident=적과 조우)
```

## 📌 파라미터 목록

| 파라미터 | 설명 | 예시 |
|---------|------|------|
| location | 현재 위치 | 폐공장 |
| date | 날짜 | 03/15 |
| time | 시간 | 14:30 |
| job | 직업 | 탐정 |
| faction | 소속 | EDEN |
| char | 캐릭터 이름 | 아리아 |
| emoji | 관계 이모지 | 💕 |
| relation | 관계 설명 | 흥미로운 인간 |
| incident | 현재 사건 | 적과 조우 |

## ⚙️ 좌표 조정

텍스트 위치가 안 맞으면 `app/api/status/route.js` 파일에서 좌표를 수정하세요:

```javascript
// 예: Current Location 위치 조정
left: '55px',   // 왼쪽에서 거리
top: '68px',    // 위에서 거리
```

## 📁 폴더 구조

```
status-image-api/
├── app/
│   ├── api/
│   │   └── status/
│   │       └── route.js    ← API 로직
│   ├── layout.js
│   └── page.js
├── public/
│   ├── fonts/
│   │   └── ssaragnun.otf   ← 싸락눈 폰트
│   └── status-bg.png       ← 배경 이미지
├── package.json
├── next.config.js
└── README.md
```
