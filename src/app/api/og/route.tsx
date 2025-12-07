import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string, text: string, weight: number = 400) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET() {
  // Collect all text that will be rendered
  const allText = "Christian Ace Masayon Fullstack Web Developer UX UI Designer csmasayon.com";
  const nameText = "Christian Ace Masayon";

  // Load Geist fonts - regular and bold
  const geistRegular = await loadGoogleFont("Geist", allText, 400);
  const geistBold = await loadGoogleFont("Geist", nameText, 700);

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center justify-center"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          padding: "80px",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        <div tw="flex flex-col items-center justify-center gap-6">
          <h1
            tw="text-6xl text-white leading-tight text-center"
            style={{
              fontFamily: "Geist",
              fontWeight: 700,
            }}
          >
            Christian Ace Masayon
          </h1>

          <h2
            tw="border border-transparent rounded-xl bg-white text-xl text-black px-5 py-3 leading-snug text-center font-normal"
            style={{
              fontFamily: "Geist",
              fontWeight: 400,
            }}
          >
            Fullstack Web Developer | UX & UI Designer
          </h2>
        </div>

        <div
          tw="absolute bottom-10 text-lg text-gray-500"
          style={{
            fontFamily: "Geist",
            fontWeight: 400,
          }}
        >
          csmasayon.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}