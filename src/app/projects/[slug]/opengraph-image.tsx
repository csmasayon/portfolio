import { ImageResponse } from 'next/og';

export const alt = 'Project';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const mdxModule = await import(`@/content/projects/${slug}.mdx`);
    const mdxMetadata = mdxModule.metadata || {};

    const title = mdxMetadata.title || 
      slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const description = mdxMetadata.description || `Project details`;

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
                fontSize: 56,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: 16,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              {title}
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
                fontSize: 24,
                color: '#a1a1aa',
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
            <p
              style={{
                fontSize: 18,
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
  } catch (error) {
    console.error("Error generating opengraph image for project:", error);
    // Fallback to default
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            fontSize: 48,
          }}
        >
          Project
        </div>
      ),
      {
        ...size,
      }
    );
  }
}