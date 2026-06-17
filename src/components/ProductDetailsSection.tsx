import { ArrowRight01Icon, Check, Plus, Tag } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useCartContext } from "@/contexts/cartContext";
import { formatter } from "@/lib/utils";
import type { Product } from "@/types/";

type Props = {
  product: Product;
};

export default function ProductDetailsSection({ product }: Props) {
  const {
    title,
    brand,
    condition,
    id,
    price,
    wasPrice,
    discount_pct,
    savings_usd,
    primary_category,
    available,
  } = product;
  const { addToCart, items } = useCartContext();
  const isInCart = items.find((item) => item.id === id);
  const isSoldOut = Number(available) === 0;
  return (
    <div className="flex flex-col gap-6 sticky top-8">
      {/* 1. Breadcrumb / Brand */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{primary_category}</span>
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />

        <span className="font-medium text-foreground">{brand}</span>
      </div>

      <div>
        <h1 className="text-lg font-semibold tracking-tight text-foreground ">
          {title}
        </h1>
        <div className="flex items-center gap-3 mt-4">
          <Badge variant="secondary" className="capitalize">
            {condition}
          </Badge>
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-3">
          <span className="text-4xl font-bold tracking-tight font-serif">
            {formatter.formatCurrency(price)}
          </span>
          {discount_pct > 0 && (
            <Badge
              variant="default"
              className="mb-1.5 bg-green-600 hover:bg-green-700"
            >
              <HugeiconsIcon icon={Tag} size={14} className="mr-1 inline" />
              Save {discount_pct}%
            </Badge>
          )}
        </div>

        {wasPrice && (
          <div className="text-sm text-muted-foreground mt-1">
            Was: <span className="line-through">{wasPrice}</span>
            {savings_usd > 0 &&
              ` (Save ${formatter.formatCurrency(savings_usd)})`}
          </div>
        )}
      </div>

      <div className="text-sm mt-2">
        {Number(available) > 0 ? (
          <span className="text-green-600 font-medium">
            In Stock{" "}
            <span className="text-muted-foreground font-normal">
              ({available} available)
            </span>
          </span>
        ) : (
          <span className="text-destructive font-medium">Out of Stock</span>
        )}
      </div>

      <div className="mt-4">
        <ButtonGroup className="w-full [&_button]:cursor-pointer">
          <Button
            size={"lg"}
            className={"w-full"}
            disabled={!!isInCart || isSoldOut}
            onClick={() => addToCart(product)}
          >
            {isInCart && !isSoldOut && (
              <>
                <HugeiconsIcon icon={Check} />
                added
              </>
            )}

            {!isInCart && !isSoldOut && (
              <>
                <HugeiconsIcon icon={Plus} />
                add to cart
              </>
            )}
            {isSoldOut && "Sold out"}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
