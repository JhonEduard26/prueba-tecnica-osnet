import { useEffect, useState } from "react";

import { getCategories, getProducts } from "@/modules/core/services/fakestore";
import { Category, Product } from "@/modules/core/types";

export const useProducts = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setIsLoading(false);
    };

    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const onCreateProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const onDeleteProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const onUpdateProduct = (id: string, updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? updatedProduct : product
      )
    );
  };

  return {
    categories,
    products,
    isLoading,
    onCreateProduct,
    onDeleteProduct,
    onUpdateProduct,
  };
};
