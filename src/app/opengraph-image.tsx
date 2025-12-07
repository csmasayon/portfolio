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
  try {
    // Try to load font with error handling
    let interFont: ArrayBuffer | null = null;
    try {
      const interResponse = await fetch(
        'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
        { cache: 'force-cache' } // Cache the font
      );
      if (interResponse.ok) {
        interFont = await interResponse.arrayBuffer();
      }
    } catch (fontError) {
      console.warn('Failed to load Inter font, using system font:', fontError);
    }

    // Try to load portrait with error handling
    let portraitBase64: string | null = null;
    try {
      const portraitData = await readFile(
        join(process.cwd(), 'public/images/portrait.PNG')
      );
      portraitBase64 = `data:image/png;base64,${portraitData.toString('base64')}`;
    } catch (imageError) {
      console.warn('Failed to load portrait image:', imageError);
    }

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
            fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
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
                  fontWeight: 700,
                  color: '#fafafa',
                  lineHeight: 1.2,
                  marginBottom: 8,
                  fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
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
                  fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
                }}
              >
                I&apos;m a fullstack web developer.
              </h2>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#b5b5b5',
                  lineHeight: 1.5,
                  marginTop: 8,
                  fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
                }}
              >
                Based in Tagum City, Davao del Norte, Philippines
              </p>
            </div>

            {portraitBase64 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '300px',
                  height: '300px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#2a2a2a',
                }}
              >
                <img
                  src={portraitBase64}
                  alt="Christian Ace Masayon"
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '300px',
                  height: '300px',
                  borderRadius: '16px',
                  backgroundColor: '#2a2a2a',
                  color: '#b5b5b5',
                  fontSize: 48,
                  fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
                }}
              >
                CAM
              </div>
            )}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '80px',
              fontSize: 18,
              color: '#808080',
              fontFamily: interFont ? 'Inter' : 'system-ui, sans-serif',
            }}
          >
            csmasayon.com
          </div>
        </div>
      ),
      {
        ...size,
        fonts: interFont
          ? [
              {
                name: 'Inter',
                data: interFont,
                style: 'normal',
                weight: 400,
              },
            ]
          : [],
      }
    );
  } catch (error) {
    // Fallback if everything fails
    console.error('Error generating OG image:', error);
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#252525',
            color: '#fafafa',
            fontSize: 48,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Christian Ace Masayon
        </div>
      ),
      {
        ...size,
      }
    );
  }
}