"use client";
import { Cart } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartContext } from "@/contexts/cartContext";
import { formatter } from "@/lib/utils";
import CartItemCompact from "./CartItemCompact";
import EmptyCart from "./EmptyCart";
import { Badge } from "./ui/badge";

export const CartIcon = () => {
  const { items, setCartVisibility } = useCartContext();
  const size = items.length;
  return (
    <div>
      <Button
        variant="ghost"
        size="icon-sm"
        className="relative"
        onClick={() => {
          setCartVisibility(true);
        }}
      >
        <Badge
          variant={size > 0 ? "default" : "secondary"}
          className="absolute -top-2 -right-3 size-min text-[8px] rounded-full"
        >
          {size}
        </Badge>
        <HugeiconsIcon className="size-full" icon={Cart} />
      </Button>
    </div>
  );
};

export default function CartSheet() {
  const { isCartVisible, setCartVisibility, total, items } = useCartContext();
  return (
    <Sheet open={isCartVisible} onOpenChange={setCartVisibility}>
      <SheetContent showCloseButton={false} side="right">
        <SheetHeader className="flex flex-row items-baseline justify-between">
          <SheetTitle className={"text-xl"}>Cart</SheetTitle>
          <span className={"text-xl font-serif "}>
            {formatter.formatCurrency(total)}
          </span>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-scroll">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            items.map((i) => <CartItemCompact key={i.id} item={i} />)
          )}
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Cancel</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
