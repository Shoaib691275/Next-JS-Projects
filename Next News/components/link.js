"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PathLink({ path,children }) {
  const link = usePathname();
  return (
    <Link
      className={link.startsWith(path) ? "active" : undefined}
      href={path}
    >
      {children}
    </Link>
  );
}
