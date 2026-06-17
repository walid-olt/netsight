import { useCallback, useMemo, useState } from "react";
import type { CartItems, Product } from "@/types";

// closures, am I right ?
export default function useCart() {
  const [items, setCartItems] = useState<CartItems>([]);

  const [isCartVisible, setCartVisibility] = useState<boolean>(false);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const deleteFromCart = useCallback((id: string) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }, []);

  const updateQuantity = useCallback((id: string, q: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) return { ...item, quantity: q };
        return item;
      }),
    );
  }, []);

  const emptyCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );

  return useMemo(
    () => ({
      items,
      isCartVisible,
      setCartVisibility,
      addToCart,
      deleteFromCart,
      updateQuantity,
      emptyCart,
      total,
    }),
    [
      items,
      isCartVisible,
      addToCart,
      deleteFromCart,
      updateQuantity,
      emptyCart,
      total,
    ],
  );
}
