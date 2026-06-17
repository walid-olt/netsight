import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import products from "@/data";
export default async function ProductDetailsPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug.trim());
  if (!product) {
    return notFound();
  }
  return <ProductDetails product={product} />;
}
