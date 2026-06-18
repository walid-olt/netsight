import { Minus, Plus, Trash } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useCartContext } from "@/contexts/cartContext";
import { formatter } from "@/lib/utils";
import type { CartItem } from "@/types";

type Props = {
  item: CartItem;
};

export default function CartItemCompact({ item }: Props) {
  const {
    id,
    title,
    brand,
    price,
    discount_pct,
    available,
    condition,
    slug,
    quantity,
  } = item;

  const { deleteFromCart, updateQuantity } = useCartContext();

  const totalAvailable = Number(available) || 0;
  const isOutOfStock = totalAvailable <= 0;

  // Disable "+" if out of stock or if cart quantity already reaches maximum available stock
  const isPlusDisabled = isOutOfStock || quantity >= totalAvailable;

  // Disable "-" if quantity drops to 1 (users should use Trash button to delete)
  const isMinusDisabled = quantity <= 1;

  const unitTotal = price * quantity;

  return (
    <div className="flex gap-4 border-border">
      <div className="w-16 h-16 shrink-0 rounded-md overflow-hidden bg-muted">
        <Image
          src={`https://picsum.photos/seed/${slug}/200/300`}
          alt={title}
          height={300}
          width={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-x-2">
          <div className="truncate">
            <div className="text-sm font-medium text-foreground truncate text-wrap">
              {title}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {brand} • <span className="capitalize">{condition}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold text-foreground font-serif">
              {formatter.formatCurrency(unitTotal)}
            </div>
            {discount_pct > 0 && (
              <Badge variant="default" className="mt-1 bg-green-600 text-xs">
                Save {discount_pct}%
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-2">
          <ButtonGroup className="h-8 flex items-center">
            <Button
              size="icon-sm"
              variant="outline"
              aria-label="Decrease quantity"
              disabled={isMinusDisabled}
              onClick={() => updateQuantity(id, quantity - 1)}
            >
              <HugeiconsIcon icon={Minus} />
            </Button>

            <Button
              size="icon-sm"
              variant="outline"
              aria-label="Increase quantity"
              disabled={isPlusDisabled}
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              <HugeiconsIcon icon={Plus} />
            </Button>

            <span className="px-3 text-sm font-medium">{quantity}</span>
          </ButtonGroup>

          <div className="flex items-center gap-2">
            {isOutOfStock ? (
              <div className="text-xs text-destructive font-medium">
                Out of stock
              </div>
            ) : totalAvailable - quantity <= 2 ? (
              <div className="text-xs text-amber-600 font-medium">
                Only {totalAvailable - quantity} left
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">In stock</div>
            )}

            <Button
              size="sm"
              variant="destructive"
              aria-label="Remove item"
              className="text-destructive"
              onClick={() => deleteFromCart(id)}
            >
              <HugeiconsIcon icon={Trash} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
