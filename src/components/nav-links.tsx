"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", match: "exact" as const },
  { href: "/about", label: "About", match: "prefix" as const },
  { href: "/projects", label: "Projects", match: "prefix" as const },
];

function isActive(pathname: string, href: string, match: "exact" | "prefix") {
  if (match === "exact") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinksProps = {
  onNavigate?: () => void;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
};

export function NavLinks({
  onNavigate,
  className,
  listClassName,
  itemClassName,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav id="mobile-navigation" className={className}>
      <ul className={listClassName}>
        {navItems.map((item) => {
          const active = isActive(pathname, item.href, item.match);

          return (
            <li key={item.href} className={itemClassName}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative block font-semibold leading-none transition-colors hover:text-primary",
                  itemClassName,
                  active
                    ? "text-primary underline decoration-primary decoration-2 underline-offset-[6px]"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
