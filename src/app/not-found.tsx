import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="text-8xl font-bold text-primary/20">404</div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Page Not Found</h1>
            <p className="text-muted-foreground">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
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

          <div className="pt-8 text-sm text-muted-foreground">
            <p>If you think this is an error, please contact me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
