import { type ClassValue, clsx } from "clsx";
import s from "slugify";
import { twMerge } from "tailwind-merge";
import { DataFormatter } from "./format";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new DataFormatter("fr-MA");
s.extend({ "|": " " });
export const slugify = (value: string) =>
  s(value, { lower: true, strict: true });
