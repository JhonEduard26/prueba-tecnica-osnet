"use client";

import { useState, useEffect } from "react";
import { Paginator } from "@/modules/shared/components/layout/paginator";
import { ProductList } from "@/modules/shared/components/ui/product-list";
import { Loader } from "@/modules/shared/components/ui/loader";
import type { Product } from "@/modules/core/types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 5;
  const totalPages = Math.ceil(products.length / pageSize);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const products: Product[] = await data.json();
      setProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 2xl:px-0">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList products={currentProducts} />
          <Paginator
            currentPage={currentPage}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            totalPages={totalPages}
          />
        </>
      )}
    </main>
  );
}
