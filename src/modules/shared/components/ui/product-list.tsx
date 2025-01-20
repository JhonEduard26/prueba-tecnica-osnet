import { Product } from "@/modules/core/types";
import { ProductCard } from "./product-card";
import { Fragment } from "react";

interface Props {
  products: Product[];
}

export const ProductList = ({ products = [] }: Props) => {
  return (
    <div className="mb-4 grid justify-items-center gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </div>
  );
};
