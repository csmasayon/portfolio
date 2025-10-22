import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t max-w-4xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 mb-8">
        <div className="text-center sm:text-left">
          <div>
            © 2025 Christian Ace Masayon. All rights reserved. Made with shadcn,
            Tailwind CSS, and Next.js.
          </div>
        </div>
        <div className="flex gap-2">
          <a href="https://github.com/csmasayon" target="_blank">
            <Github />
          </a>
          <a href="https://linkedin.com/in/christian-ace-masayon" target="_blank">
            <Linkedin />
          </a>
          <a href="mailto:casmasayon@gmail.com" target="_blank">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
