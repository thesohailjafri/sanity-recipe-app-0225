import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function MyContainer({ children, className }: Props) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
