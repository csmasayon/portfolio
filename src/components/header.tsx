import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b px-4 py-3 ">
      <div className="flex items-center ">
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
      <div className="flex items-center gap-4">
        <nav className="hidden lg:flex items-center gap-2">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-primary font-semibold transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary font-semibold transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary font-semibold transition-colors"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
