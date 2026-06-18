import { ExternalLink } from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import products from "@/data";
import ProductCard from "./ProductCard";

const featured = products
  .sort((a, b) => b.savings_usd - a.savings_usd)
  .slice(0, 6);

export default function FeaturedProducts() {
  return (
    <section className="px-4 py-4">
      <h1 className="text-xl font-semibold pb-2">Featured products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {featured.map((p) => (
          <ProductCard product={p} key={p.title} />
        ))}
      </div>

      <div className="flex items-center p-4">
        <Button
          size={"lg"}
          nativeButton={false}
          className={"mx-auto"}
          render={
            <Link href={`/products`}>
              More products <HugeiconsIcon icon={ExternalLink} />
            </Link>
          }
        />
      </div>
    </section>
  );
}
