import type data from "@/data/products-dataset.json";
export type Product = (typeof data)[number];

export default function Home() {
  return <h1>Home</h1>;
}
