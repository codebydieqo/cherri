import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto 2xl:px-5", className)}>
      {children}
    </div>
  );
}
