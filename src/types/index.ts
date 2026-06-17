import type products from "@/data";
export type Product = (typeof products)[number];
export type CartItem = Product & { quantity: number };
export type CartItems = CartItem[];
