"use client";

import { Table } from "@/modules/dashboard/components/ui/table";
import { useProducts } from "@/modules/dashboard/hooks/useProducts";
import { Loader } from "@/modules/shared/components/ui/loader";

export default function Page() {
  const { products, isLoading, onDeleteProduct, onUpdateProduct } =
    useProducts();

  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h2>Listado de productos</h2>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          Agregar producto
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          products={products}
          onDeleteProduct={onDeleteProduct}
          onUpdateProduct={onUpdateProduct}
        />
      )}
    </div>
  );
}
