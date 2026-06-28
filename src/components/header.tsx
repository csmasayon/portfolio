import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { PageContainer } from "./page-container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <PageContainer className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
        >
          <Image
            src="/images/logo-w.png"
            className="invert dark:invert-0"
            alt="Christian Ace Masayon"
            width={34}
            height={34}
          />
        </Link>
        <div className="flex items-center gap-[1.75em]">
          <NavLinks className="hidden sm:flex items-center" listClassName="flex items-center gap-6" />
          <div className="hidden sm:flex items-center">
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </PageContainer>
    </header>
  );
}
