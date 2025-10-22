import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Christian Ace Masayon - Fullstack Developer & UX Designer",
    template: "%s | Christian Ace Masayon"
  },
  description: "Christian Ace Masayon is a Computer Science graduate specializing in full-stack development with MERN stack and user-centered UI/UX design. Based in Tagum City, Philippines.",
  keywords: [
    "Christian Ace Masayon",
    "Fullstack Developer",
    "UX Designer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Portfolio",
    "Philippines Developer",
    "Web Development",
    "Mobile Development"
  ],
  authors: [{ name: "Christian Ace Masayon" }],
  creator: "Christian Ace Masayon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://csmasayon.com",
    title: "Christian Ace Masayon - Fullstack Developer & UX Designer",
    description: "Computer Science graduate specializing in full-stack development with MERN stack and user-centered UI/UX design.",
    siteName: "Christian Ace Masayon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Ace Masayon - Fullstack Developer & UX Designer",
    description: "Computer Science graduate specializing in full-stack development with MERN stack and user-centered UI/UX design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
