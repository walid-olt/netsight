import ProductCard from "@/components/ProductCard";
import products from "@/data";

const list = products.slice(0, 10);
export default function ProductsPage() {
  return (
    <section className="px-4 py-4">
      <h1 className="text-xl font-semibold pb-2">Top products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {list.map((p) => (
          <ProductCard product={p} key={p.title} />
        ))}
      </div>
    </section>
  );
}
