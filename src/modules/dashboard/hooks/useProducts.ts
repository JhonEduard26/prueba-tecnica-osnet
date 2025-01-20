import { useEffect, useState } from "react";

import { getProducts } from "@/modules/core/services/fakestore";
import { Product } from "@/modules/core/types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const onDeleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const onUpdateProduct = (id: number, updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? updatedProduct : product
      )
    );
  };

  return {
    products,
    isLoading,
    onDeleteProduct,
    onUpdateProduct,
  };
};
