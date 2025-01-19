import { Table } from "@/modules/dashboard/components/ui/table";
import type { Product } from "@/modules/core/types";

export default async function Page() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await data.json();

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
      <Table products={products} />
    </div>
  );
}
