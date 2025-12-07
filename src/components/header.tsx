import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b px-6 py-4">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
        >
          <Image
            src="/images/logo-w.png"
            className="invert dark:invert-0"
            alt="Christian Ace Masayon"
            width={34}
            height={34}
          />
        </Link>
      </div>
      <div className="flex items-center gap-[1.75em]">
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-6">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:text-primary font-semibold transition-colors leading-none"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/about"
                className="hover:text-primary font-semibold transition-colors leading-none"
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/projects"
                className="hover:text-primary font-semibold transition-colors leading-none"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center">
          <ThemeToggle />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
