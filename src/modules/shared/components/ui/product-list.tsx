import { Product } from "@/modules/core/types";
import { ProductCard } from "./product-card";

interface Props {
  products: Product[];
}

export const ProductList = ({ products = [] }: Props) => {
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
