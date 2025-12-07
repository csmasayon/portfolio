import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Christian Ace Masayon - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Load your portrait image
  const portraitData = await readFile(
    join(process.cwd(), 'public/images/portrait.PNG')
  );
  const portraitBase64 = `data:image/png;base64,${portraitData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#252525',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            gap: '60px',
          }}
        >
          {/* Left - Text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flex: 1,
              gap: '12px',
            }}
          >
            <h1
              style={{
                fontSize: 56,
                fontWeight: 'bold',
                color: '#fafafa',
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              Hi, I&apos;m Christian Ace Masayon.
            </h1>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: '#fafafa',
                lineHeight: 1.3,
                marginBottom: 4,
              }}
            >
              I&apos;m a fullstack web developer.
            </h2>
            <p
              style={{
                fontSize: 20,
                color: '#b5b5b5',
                lineHeight: 1.5,
                marginTop: 8,
              }}
            >
              Based in Tagum City, Davao del Norte, Philippines
            </p>
          </div>

          {/* Right - Portrait */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '300px',
              height: '300px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <img
              src={portraitBase64}
              alt="Christian Ace Masayon"
              width={300}
              height={300}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            fontSize: 18,
            color: '#808080',
          }}
        >
          csmasayon.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}