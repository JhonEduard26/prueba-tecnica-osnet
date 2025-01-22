"use client";

import { Category } from "@/modules/core/types";
import { convertToBase64 } from "@/modules/dashboard/utils";
import { CreateProductForm } from "@/modules/dashboard/components/ui/create-product-form";
import { Loader } from "@/modules/shared/components/ui/loader";
import { Table } from "@/modules/dashboard/components/ui/table";
import { useProducts } from "@/modules/dashboard/hooks/useProducts";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
  const { categories, products, isLoading, onCreateProduct, onDeleteProduct, onUpdateProduct } =
    useProducts();

  const handleCreateProduct = () => {
    const createDialog = document.getElementById("create-dialog") as HTMLDialogElement;

    if (createDialog) {
      createDialog.showModal();
    }

    const createForm = document.getElementById("create-form") as HTMLFormElement;
    if (createForm) {
      createForm.onsubmit = async (event) => {
        event.preventDefault();
        const title = (
          createForm.elements.namedItem("title") as HTMLInputElement
        ).value;
        const description = (
          createForm.elements.namedItem("description") as HTMLTextAreaElement
        ).value;
        const price = (
          createForm.elements.namedItem("price") as HTMLInputElement
        ).value;
        const category = (
          createForm.elements.namedItem("category") as HTMLSelectElement
        ).value as Category;
        
        const imageInput = createForm.elements.namedItem("image") as HTMLInputElement;
        const imageFile = imageInput && imageInput.files ? imageInput.files[0] : null;
        const imageBase64 = imageFile ? await convertToBase64(imageFile) : 'https://i.pravatar.cc/';

        const newProduct = {
          id: uuidv4(),
          title,
          description,
          price: parseFloat(price),
          category,
          image: imageBase64,
          rating: { rate: 0, count: 0 },
        };
        onCreateProduct(newProduct);
        createForm.reset();
        createDialog.close();
      };
    }
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-12">
        <h2>Listado de productos</h2>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          onClick={() => handleCreateProduct()}
        >
          Agregar producto
        </button>
        <CreateProductForm categories={categories} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          products={products}
          categories={categories}
          onDeleteProduct={onDeleteProduct}
          onUpdateProduct={onUpdateProduct}
        />
      )}
    </div>
  );
}
