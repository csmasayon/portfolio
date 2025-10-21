"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu();
        }}
        className="relative z-50"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div
          className="absolute inset-0 z-60 bg-background backdrop-blur"
          onClick={toggleMenu}
        >
          <div className="flex flex-col  h-screen px-6 bg-background backdrop-blur-sm">
            <div
              className="text-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end pt-6 pb-4">
                <Button variant="outline" size="icon" onClick={toggleMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav>
                <ul className="space-y-6">
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about">about</Link>
                  </li>
                  <li>
                    <Link href="/projects">projects</Link>
                  </li>
                  <li>
                    <Link href="/experiences">experiences</Link>
                  </li>
                </ul>
              </nav>

              <div className="pt-8 border-t">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm text-muted-foreground">Theme:</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
