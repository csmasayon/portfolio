import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b px-4 py-3 ">
      <div className="flex items-center ">
        <h1 className="text-lg font-semibold">csmasayon</h1>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden lg:flex items-center gap-2">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors"
              >
                projects
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
