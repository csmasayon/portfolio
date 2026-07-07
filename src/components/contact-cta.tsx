import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact">
      <div className="rounded-xl border bg-card p-6 text-center shadow-sm sm:p-8 min-[1920px]:p-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Open to full-time and contract opportunities in web development, mobile
          development, and UI/UX design.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="mailto:casmasayon@gmail.com">
              <Mail />
              <span className="truncate">casmasayon@gmail.com</span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link
              href="https://www.linkedin.com/in/christian-ace-masayon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
