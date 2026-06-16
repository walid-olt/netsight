/** 
## Visual Layout

**Header Section** (most prominent)
- Product title (large, bold)
- Brand name + product type (secondary text)
- Star rating + review count (small, right-aligned)

**Pricing Section** (critical for conversion)
- Current price (very large, prominent color)
- Original price (struck through, if discount exists)
- Discount badge (if applicable) showing % off
- "Savings" amount below in muted text

**Stock Status** (urgency signal)
- Single line: "X in stock" or "Low stock" (color-coded)
- Condition label (if not "New")

**Core Product Details** (minimal grid, 2-3 columns max)
- Brand tier (if premium matters)
- Product category
- MPN/UPC (tiny, gray, collapsible accordion if needed)

**Call-to-Action**
- Single prominent button (Add to Cart / Buy Now)
- Secondary action below (Wishlist or Compare)

**Optional Below Fold** (collapse by default)
- Smart home ecosystem (if relevant)
- Resolution/specs (if camera/display)
- Condition score breakdown (if used/refurbished)
- Demand tier / popularity indicator

---

## Data to Hide
- `log_price`, `log_sold`, `log_revenue_proxy`, `sqrt_available` (derived/analytical)
- `price_per_channel`, `revenue_proxy_usd` (backend metadata)
- All the `_*` flags that are internal counters

## Data to Feature Conditionally
- **Discount fields** only if `has_discount === 1`
- **Condition details** only if `condition !== "New"`
- **Smart home** only if product type is smart device
- **Stock warning** only if `available < threshold`
*/

import Image from "next/image";
import type { Product } from "@/types";
import ProductDetailsSection from "./ProductDetailsSection";

type Props = {
  product: Product;
};

const ProductDetails = ({ product }: Props) => {
  const { slug } = product;
  return (
    <section className="px-4 py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-8">
        <div className="md:col-span-5">
          <div className="sticky top-8 aspect-square rounded-(--radius) overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${slug}/200/300`}
              alt="Event cover"
              height={300}
              width={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 ">
          <ProductDetailsSection product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
