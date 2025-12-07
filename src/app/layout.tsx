import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getBaseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...getBaseMetadata(),
  title: {
    default: "Christian Ace Masayon - Fullstack Web Developer | UX & UI Designer",
    template: "%s | Christian Ace Masayon"
  },
  description: "Christian Ace Masayon is a Computer Science graduate specializing in full-stack development and user-centered UI/UX design. Based in Tagum City, Philippines.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://csmasayon.com",
    title: "Christian Ace Masayon - Fullstack Developer & UX Designer",
    description: "Computer Science graduate specializing in full-stack development and user-centered UI/UX design.",
    siteName: "Christian Ace Masayon Portfolio",
    images: [
      {
        url: "https://csmasayon.com/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Ace Masayon - Fullstack Developer & UX Designer",
    description: "Computer Science graduate specializing in full-stack development and user-centered UI/UX design.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Suspense fallback={<div className="min-h-screen">{children}</div>}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
