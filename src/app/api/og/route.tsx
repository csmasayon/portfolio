import { ImageResponse } from "next/og";

export async function GET() {
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
        }}
      >
        <div tw="flex flex-col items-center justify-center gap-6">
          <h1 tw="text-6xl text-white font-bold leading-tight text-center">
            Christian Ace Masayon
          </h1>

          <h2 tw="border border-transparent rounded-xl bg-white text-xl text-black px-5 py-3 leading-snug text-center font-normal">
            Fullstack Web Developer | UX & UI Designer
          </h2>
        </div>

        <div tw="absolute bottom-10 text-lg text-gray-500">csmasayon.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
