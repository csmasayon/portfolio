"use client";

import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the current URL hash
    const hash = window.location.hash;
    
    // If there's no hash, scroll to top
    // If there's a hash, let the browser handle it (scroll-padding-top will account for header)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      // Small delay to ensure the page has rendered, then scroll to hash
      // The browser will automatically account for scroll-padding-top
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, searchParams]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}