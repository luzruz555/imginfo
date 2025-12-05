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
        <div style={{ position: 'absolute', left: '42px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{location}</div>
        <div style={{ position: 'absolute', left: '327px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{date}</div>
        <div style={{ position: 'absolute', left: '472px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{time}</div>
        <div style={{ position: 'absolute', left: '620px', top: '110px', color: 'white', fontSize: '22px', display: 'flex' }}>{job}</div>
        <div style={{ position: 'absolute', left: '15px', top: '250px', width: '190px', color: 'white', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', textAlign: 'center', whiteSpace: 'pre-wrap' }}>{factionDisplay}</div>
        <div style={{ position: 'absolute', left: '15px', top: '287px', width: '190px', color: 'white', fontSize: '15px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>{ability}</div>
        <div style={{ position: 'absolute', left: '230px', top: '215px', color: 'white', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {chars.map((c, i) => (
            <span key={i}>{c} | {emojis[i] || '?'} | {relations[i] || '???'}</span>
          ))}
        </div>
        <div style={{ position: 'absolute', left: '230px', top: '375px', color: 'white', fontSize: '14px', display: 'flex' }}>{incident}</div>
      </div>
    ),
    {
      width: 1000,
      height: 426,
      fonts: [{ name: 'Ssaragnun', data: fontData, style: 'normal' }],
    }
  );

  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  return response;
}
