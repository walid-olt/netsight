"use client";
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
