import { ImageResponse } from 'next/og';

export const alt = 'Christian Ace Masayon - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: 16,
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Christian Ace Masayon
          </h1>
          <div
            style={{
              width: '100px',
              height: '2px',
              backgroundColor: '#3b82f6',
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontSize: 28,
              color: '#a1a1aa',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Fullstack Developer & UX Designer
          </p>
          <p
            style={{
              fontSize: 20,
              color: '#71717a',
              textAlign: 'center',
              marginTop: 32,
            }}
          >
            csmasayon.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}