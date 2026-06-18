"use client";
import { Check, ExternalLink, Plus, Tag } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartContext } from "@/contexts/cartContext";
import { formatter } from "@/lib/utils";
import type { Product } from "@/types/";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const {
    title,
    brand,
    primary_category,
    price,
    id,
    product_type,
    slug,
    discount_pct,
    available,
  } = product;

  const { addToCart, items } = useCartContext();

  // Availability variables matching CartItemCompact logic
  const totalAvailable = Number(available) || 0;
  const isOutOfStock = totalAvailable <= 0;
  const isInCart = items.find((item) => item.id === id);

  return (
    <Card className="relative w-full " size="sm">
      <Image
        src={`https://picsum.photos/seed/${slug}/200/300`}
        alt={title}
        height={300}
        width={200}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant={"outline"}>{formatter.formatCurrency(price)}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="justify-between flex items-center">
          <span>{brand}</span>
          {discount_pct > 0 && (
            <Badge
              variant="default"
              className="mb-1.5 bg-green-600 hover:bg-green-700"
            >
              <HugeiconsIcon icon={Tag} size={14} className="mr-1 inline" />
              Save {discount_pct}%
            </Badge>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-2">
        {/* Category tags */}
        <div className="flex items-center gap-x-2">
          <Badge variant="secondary">{primary_category}</Badge>
          <Badge variant="secondary">{product_type}</Badge>
        </div>

        {/* Stock status indicator */}
        {isOutOfStock ? (
          <div className="text-xs text-destructive font-medium mt-1">
            Out of stock
          </div>
        ) : totalAvailable <= 2 ? (
          <div className="text-xs text-amber-600 font-medium mt-1">
            Only {totalAvailable} left in stock
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="mt-auto ">
        <ButtonGroup className="[&_button]:cursor-pointer ">
          <Button
            size={"lg"}
            disabled={!!isInCart || isOutOfStock}
            onClick={() => addToCart(product)}
          >
            {isOutOfStock ? (
              "Out of stock"
            ) : isInCart ? (
              <>
                <HugeiconsIcon icon={Check} className="mr-1" />
                Added
              </>
            ) : (
              <>
                <HugeiconsIcon icon={Plus} className="mr-1" />
                Add to cart
              </>
            )}
          </Button>
          <Button
            size={"lg"}
            variant={"secondary"}
            nativeButton={false}
            render={
              <Link href={`/products/${slug}`}>
                Details{" "}
                <HugeiconsIcon icon={ExternalLink} className="ml-1 inline" />
              </Link>
            }
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
