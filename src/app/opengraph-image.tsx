import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Anthony Amaro';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#0A0B0D',
          color: '#E7E9EE',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(600px 300px at 20% 10%, rgba(43,145,99,0.22), rgba(43,145,99,0) 60%)',
          }}
        />
        <div style={{ fontSize: 24, opacity: 0.8 }}>Anthony Amaro</div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2, maxWidth: 1000 }}>
          {title}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

