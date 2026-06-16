import { useCallback, useMemo, useState } from "react";
import type { Product } from "@/types";

type CartItem = Product & { quantity: number };
type CartItems = CartItem[];
// closures, am I right ?
export default function useCart() {
  const [items, setCartItems] = useState<CartItems>([]);

  const [isCartVisible, setCartVisibility] = useState(false);

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

  const isInCart = useCallback(
    (id: string) => {
      return !!items.find((item) => item.id === id);
    },
    [items],
  );

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );

  return {
    items,
    isCartVisible,
    setCartVisibility,
    isInCart,
    addToCart,
    deleteFromCart,
    updateQuantity,
    emptyCart,
    total,
  };
}
