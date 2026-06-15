"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// you'd think with how much Next js is over-engineered they would also have a basic `isActive` prop
type Props = ComponentProps<typeof Link>;

export default function NavLink({ className, href, ...rest }: Props) {
  const [active, setActive] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const base = window.location.origin;
    const current = new URL(path, base);
    const target = new URL(String(href), base);
    setActive(current.href === target.href);
  }, [path]);
  return (
    <Link
      {...rest}
      href={href}
      className={cn(className, active && "text-primary")}
    />
  );
}
