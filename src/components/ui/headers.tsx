import { cn } from "@/lib/utils";
import React from "react";

export function H1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h1 className={cn(`text-7xl font-black ${className}`)}>{children}</h1>;
}

export function H2({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) {
    return <h2 className={cn(`text-5xl font-bold ${className}`)}>{children}</h2>;
  }