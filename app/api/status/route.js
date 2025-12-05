import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const location = searchParams.get('location') || '???';
  const date = searchParams.get('date') || 'MM/DD';
  const time = searchParams.get('time') || 'HH:MM';
  const job = searchParams.get('job') || '???';
  let faction = searchParams.get('faction') || '???';
  const char = searchParams.get('char') || '???';
  const emoji = searchParams.get('emoji') || '?';
  const relation = searchParams.get('relation') || '???';
  const incident = searchParams.get('incident') || '???';

  const host = request.headers.get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = protocol + '://' + host;

  const fontData = await fetch(baseUrl + '/fonts/ssaragnun.otf').then(function(res) { return res.arrayBuffer(); });

  const factionDisplay = faction === 'ETERNAL ARKIVE' ? 'ETERNAL\nARKIVE' : faction;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', fontFamily: 'Ssaragnun' }}>
        <img src={baseUrl + '/status-bg.png'} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', left: '45px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{location}</div>
        <div style={{ position: 'absolute', left: '310px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{date}</div>
        <div style={{ position: 'absolute', left: '450px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{time}</div>
        <div style={{ position: 'absolute', left: '605px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{job}</div>
        <div style={{ position: 'absolute', left: '18px', top: '250px', width: '190px', color: 'white', fontSize: '28px', display: 'flex', justifyContent: 'center', textAlign: 'center', whiteSpace: 'pre-wrap' }}>{factionDisplay}</div>
        <div style={{ position: 'absolute', left: '230px', top: '215px', color: 'white', fontSize: '14px', display: 'flex', flexDirection: 'column' }}><span>{char} | {emoji} | {relation}</span></div>
        <div style={{ position: 'absolute', left: '230px', top: '375px', color: 'white', fontSize: '14px', display: 'flex' }}>{incident}</div>
      </div>
    ),
    {
      width: 1000,
      height: 426,
      fonts: [{ name: 'Ssaragnun', data: fontData, style: 'normal' }],
    }
  );
    }
