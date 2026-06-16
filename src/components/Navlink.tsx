"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof Link>;

export default function NavLink({ className, href, ...rest }: Props) {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      {...rest}
      href={href}
      className={cn(className, isActive && "text-primary")}
    />
  );
}
