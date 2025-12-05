import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const location = searchParams.get('location') || '???';
  const date = searchParams.get('date') || 'MM/DD';
  const time = searchParams.get('time') || 'HH:MM';
  const job = searchParams.get('job') || '???';
  const faction = searchParams.get('faction') || '???';
  const char = searchParams.get('char') || '???';
  const emoji = searchParams.get('emoji') || '?';
  const relation = searchParams.get('relation') || '???';
  const incident = searchParams.get('incident') || '???';

  const fontData = await fetch(
    new URL('../../public/fonts/ssaragnun.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Ssaragnun',
        }}
      >
        <img
          src={`${baseUrl}/status-bg.png`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            left: '55px',
            top: '68px',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
          }}
        >
          {location}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '330px',
            top: '68px',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
          }}
        >
          {date}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '480px',
            top: '68px',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
          }}
        >
          {time}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '640px',
            top: '68px',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
          }}
        >
          {job}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '240px',
            width: '180px',
            color: 'white',
            fontSize: '22px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {faction}
        </div>

        <div
          style={{
            position: 'absolute',
            left: '280px',
            top: '175px',
            color: 'white',
            fontSize: '22px',
            display: 'flex',
            gap: '20px',
          }}
        >
          <span>{char}</span>
          <span>{emoji}</span>
          <span>{relation}</span>
        </div>

        <div
          style={{
            position: 'absolute',
            left: '280px',
            top: '355px',
            color: 'white',
            fontSize: '22px',
            display: 'flex',
          }}
        >
          {incident}
        </div>
      </div>
    ),
    {
      width: 1000,
      height: 426,
      fonts: [
        {
          name: 'Ssaragnun',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
