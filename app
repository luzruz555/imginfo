export const metadata = {
  title: 'Status Image API',
  description: 'Dynamic status image generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📊 Status Image API</h1>
      
      <h2>사용법</h2>
      <code style={{ 
        display: 'block', 
        background: '#1a1a2e', 
        color: '#e0e7ff', 
        padding: '20px', 
        borderRadius: '8px',
        overflowX: 'auto'
      }}>
        /api/status?location=폐공장&date=03/15&time=14:30&job=탐정&faction=EDEN&char=아리아&emoji=💕&relation=흥미로운 인간&incident=적과 조우
      </code>
      
      <h2>파라미터</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>파라미터</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>설명</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>location</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>현재 위치</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>폐공장</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>date</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>날짜</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>03/15</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>time</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>시간</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>14:30</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>job</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>직업</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>탐정</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>faction</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>소속</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>EDEN</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>char</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>캐릭터 이름</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>아리아</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>emoji</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>관계 이모지</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>💕</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>relation</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>관계 설명</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>흥미로운 인간</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>incident</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>현재 사건</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>적과 조우</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
