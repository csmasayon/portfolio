import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "./page-container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <PageContainer className="mt-6 mb-6">
        <div className="border-t space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 mb-4">
            <div className="text-center sm:text-left">
              <div>© {currentYear} Christian Ace Masayon. All rights reserved.</div>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://github.com/csmasayon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github />
              </Link>
              <Link
                href="https://linkedin.com/in/christian-ace-masayon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin />
              </Link>
              <Link
                href="mailto:casmasayon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Christian Ace Masayon"
              >
                <Mail />
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}