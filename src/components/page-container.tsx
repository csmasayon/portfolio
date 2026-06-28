import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl 2xl:max-w-[min(100%-4rem,108rem)] px-6 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
