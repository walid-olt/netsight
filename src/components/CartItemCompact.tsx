import { Minus, Plus, Trash } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
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

  const max = Number(available) || 0;
  const unitTotal = price * quantity;

  return (
    <div className="flex gap-4   border-border">
      <div className="w-16 h-16 shrink-0 rounded-md overflow-hidden bg-muted">
        <Image
          src={`https://picsum.photos/seed/${slug}/200/300`}
          alt="Event cover"
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
            <div className="text-sm font-semibold text-foreground">
              {formatter.formatCurrency(unitTotal)}
            </div>
            {discount_pct > 0 && (
              <Badge variant="default" className="mt-1 bg-green-600 text-xs">
                Save {discount_pct}%
              </Badge>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between gap-3 mt-2">
          <ButtonGroup className="h-8 flex items-center">
            <ButtonGroup aria-label="Media controls" className="h-fit">
              <Button
                size="icon-sm"
                variant="outline"
                aria-label="Increase quantity"
                disabled={max > 0 ? quantity >= max : false}
                onClick={() => updateQuantity(id, quantity + 1)}
              >
                <HugeiconsIcon icon={Plus} />
              </Button>
              <Button
                size="icon-sm"
                variant="outline"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => updateQuantity(id, quantity - 1)}
              >
                <HugeiconsIcon icon={Minus} />
              </Button>
            </ButtonGroup>
            <span>{quantity}</span>
          </ButtonGroup>

          <div className="flex items-center gap-2">
            {max > 0 ? (
              <div className="text-xs text-muted-foreground">In stock</div>
            ) : (
              <div className="text-xs text-destructive">Out of stock</div>
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
