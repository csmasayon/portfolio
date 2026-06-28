"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = React.useCallback(() => setIsOpen(false), []);
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  React.useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  const menuPanel =
    isOpen && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] sm:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <div className="relative flex h-full flex-col bg-background px-6 pb-10 pt-4">
              <div className="flex justify-end">
                <Button variant="outline" size="icon" onClick={closeMenu}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
                <NavLinks
                  onNavigate={closeMenu}
                  className="w-full"
                  listClassName="flex flex-col items-center gap-8"
                  itemClassName="text-2xl"
                />

                <div className="border-t border-border pt-8">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="sm:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-[101]"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {menuPanel}
    </div>
  );
}
