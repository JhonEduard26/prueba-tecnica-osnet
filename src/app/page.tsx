import { Product } from "@/modules/core/types";
import { ProductList } from "@/modules/shared/components/ui/product-list";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products?limit=10");
  const products: Product[] = await data.json();

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 2xl:px-0">
      <ProductList products={products} />
    </main>
  );
}
