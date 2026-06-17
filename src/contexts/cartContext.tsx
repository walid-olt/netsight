"use client";
import { createContext, useContext } from "react";

import useCart from "@/hooks/useCart";

type CartContextType = ReturnType<typeof useCart>;
const cartCtx = createContext<null | CartContextType>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useCart();
  return <cartCtx.Provider value={cart}>{children}</cartCtx.Provider>;
}

export function useCartContext() {
  const ctx = useContext(cartCtx);

  if (!ctx)
    throw new Error("useCartContext can only be used within a CartProvider ");

  return ctx;
}
