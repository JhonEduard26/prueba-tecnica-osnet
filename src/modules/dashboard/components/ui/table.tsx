"use client";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { ConfirmAlert } from "./confirm-alert";
import { UpdateProductForm } from "./update-product-form";
import type { Category, Product } from "@/modules/core/types";

interface Props {
  products: Product[];
  categories: Category[];
  onDeleteProduct: (id: string) => void;
  onUpdateProduct: (id: string, updatedProduct: Product) => void;
}

export const Table = ({
  products,
  categories,
  onDeleteProduct,
  onUpdateProduct,
}: Props) => {
  const handleDeleteProduct = (id: string) => {
    onDeleteProduct(id);
  };

  const handleUpdateProduct = (id: string, updatedProduct: Product) => {
    const updateDialog = document.getElementById(
      `update-dialog-${id}`
    ) as HTMLDialogElement;
    if (updateDialog) {
      updateDialog.showModal();
    }

    const updateForm = document.getElementById(
      `update-form-${id}`
    ) as HTMLFormElement;
    if (updateForm) {
      updateForm.onsubmit = (event) => {
        event.preventDefault();
        const title = (
          updateForm.elements.namedItem("title") as HTMLInputElement
        ).value;
        const description = (
          updateForm.elements.namedItem("description") as HTMLTextAreaElement
        ).value;
        const price = (
          updateForm.elements.namedItem("price") as HTMLInputElement
        ).value;
        const category = (
          updateForm.elements.namedItem("category") as HTMLSelectElement
        ).value as Category;

        onUpdateProduct(id, {
          ...updatedProduct,
          title,
          description,
          price: Number(price),
          category,
        });
        updateDialog.close();
      };
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">
              Id
            </th>
            <th scope="col" className="px-4 py-3">
              Imagen
            </th>
            <th scope="col" className="px-4 py-3">
              Nombre
            </th>
            <th scope="col" className="px-4 py-3">
              Categoria
            </th>
            <th scope="col" className="px-4 py-3">
              Precio
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Editar</span>
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Eliminar</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className="bg-white border-b hover:bg-gray-50"
              key={uuidv4()}
            >
              <th scope="row" className="px-4 py-2 font-medium text-gray-900">
                {index + 1}
              </th>
              <td className="flex justify-center items-center px-4 py-2">
                <Image
                  className="aspect-square object-contain"
                  width={44}
                  height={44}
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <th scope="row" className="px-4 py-2 font-medium text-gray-900">
                {product.title}
              </th>
              <td className="px-4 py-2 capitalize">{product.category}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2 text-right">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => handleUpdateProduct(product.id, product)}
                >
                  Editar
                </button>
                <UpdateProductForm product={product} categories={categories} />
              </td>
              <td className="px-4 py-2 text-right">
                <ConfirmAlert
                  id={product.id}
                  onConfirmAction={() => handleDeleteProduct(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
