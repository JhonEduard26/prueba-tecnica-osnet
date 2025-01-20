"use client";

import Image from "next/image";

import type { Product } from "@/modules/core/types";
import { UpdateProductForm } from "./update-product-form";

interface Props {
  products: Product[];
  onDeleteProduct: (id: number) => void;
  onUpdateProduct: (id: number, updatedProduct: Product) => void;
}

export const Table = ({
  products,
  onDeleteProduct,
  onUpdateProduct,
}: Props) => {
  const handleDeleteProduct = (id: number) => {
    onDeleteProduct(id);
  };

  const handleUpdateProduct = (id: number, updatedProduct: Product) => {
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

        onUpdateProduct(id, {
          ...updatedProduct,
          title,
          description,
          price: Number(price),
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
          {products.map((product) => (
            <tr className="bg-white border-b hover:bg-gray-50" key={product.id}>
              <th scope="row" className="px-4 py-2 font-medium text-gray-900">
                {product.id}
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
                <UpdateProductForm product={product} />
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  data-modal-target={`popup-modal-${product.id}`}
                  data-modal-toggle={`popup-modal-${product.id}`}
                  className="font-medium text-red-600 hover:underline"
                  type="button"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
