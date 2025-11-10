import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 mb-8">
        <div className="text-center sm:text-left">
          <div>
            © 2025 Christian Ace Masayon. All rights reserved.
          </div>
        </div>
        <div className="flex gap-2">
          <a href="https://github.com/csmasayon" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com/in/christian-ace-masayon" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:casmasayon@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
