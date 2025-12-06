import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-8xl font-bold text-primary/40">404</div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">This page could not be found.</h1>
            <p className="text-muted-foreground">
              Contact me at casmasayon@gmail.com if you think this is an error.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
