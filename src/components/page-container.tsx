import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:max-w-screen-2xl xl:px-12 2xl:max-w-[90rem] min-[2560px]:max-w-[120rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
