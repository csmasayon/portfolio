import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 mb-8">
        <div className="text-center sm:text-left">
          <div>
            © {currentYear} Christian Ace Masayon. All rights reserved.
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="https://github.com/csmasayon" target="_blank" rel="noopener noreferrer">
            <Github />
          </Link>
          <Link href="https://linkedin.com/in/christian-ace-masayon" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </Link>
          <Link href="mailto:casmasayon@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
