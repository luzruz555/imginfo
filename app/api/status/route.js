import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const location = searchParams.get('location') || '???';
  const date = searchParams.get('date') || 'MM/DD';
  const time = searchParams.get('time') || 'HH:MM';
  const job = searchParams.get('job') || '???';
  let faction = searchParams.get('faction') || '???';
  const ability = searchParams.get('ability') || '???';
  const char = searchParams.get('char') || '???';
  const emoji = searchParams.get('emoji') || '?';
  const relation = searchParams.get('relation') || '???';
  const incident = searchParams.get('incident') || '???';

  const host = request.headers.get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = protocol + '://' + host;

  const fontData = await fetch(baseUrl + '/fonts/ssaragnun.otf').then(function(res) { return res.arrayBuffer(); });

  const factionDisplay = faction === 'ETERNAL ARKIVE' ? 'ETERNAL\nARKIVE' : faction;

  const chars = char.split('.');
  const emojis = emoji.split('.');
  const relations = relation.split('.');

  const response = new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', fontFamily: 'Ssaragnun' }}>
        <img src={baseUrl + '/status-bg.png'} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', left: '84px', top: '220px', color: 'white', fontSize: '44px', display: 'flex' }}>{location}</div>
        <div style={{ position: 'absolute', left: '654px', top: '220px', color: 'white', fontSize: '44px', display: 'flex' }}>{date}</div>
        <div style={{ position: 'absolute', left: '944px', top: '220px', color: 'white', fontSize: '44px', display: 'flex' }}>{time}</div>
        <div style={{ position: 'absolute', left: '1240px', top: '220px', color: 'white', fontSize: '44px', display: 'flex' }}>{job}</div>
        <div style={{ position: 'absolute', left: '30px', top: '500px', width: '380px', color: 'white', fontSize: '60px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', textAlign: 'center', whiteSpace: 'pre-wrap' }}>{factionDisplay}</div>
        <div style={{ position: 'absolute', left: '30px', top: '574px', width: '380px', color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>{ability}</div>
        <div style={{ position: 'absolute', left: '460px', top: '430px', color: 'white', fontSize: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {chars.map((c, i) => (
            <span key={i}>{c} | {emojis[i] || '?'} | {relations[i] || '???'}</span>
          ))}
        </div>
        <div style={{ position: 'absolute', left: '460px', top: '750px', color: 'white', fontSize: '28px', display: 'flex' }}>{incident}</div>
      </div>
    ),
    {
      width: 2000,
      height: 852,
      fonts: [{ name: 'Ssaragnun', data: fontData, style: 'normal' }],
    }
  );

  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  return response;
}
