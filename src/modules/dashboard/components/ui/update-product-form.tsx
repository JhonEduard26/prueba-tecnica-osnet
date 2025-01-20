import type { Product } from "@/modules/core/types";
import { CloseIcon } from "@/modules/shared/icons/close-icon";

interface Props {
  product: Product;
}

export const UpdateProductForm = ({ product }: Props) => {
  const onCloseDialog = () => {
    const updateDialog = document.getElementById(
      `update-dialog-${product.id}`
    ) as HTMLDialogElement;
    if (updateDialog) {
      updateDialog.close();
    }
  };

  return (
    <dialog
      id={`update-dialog-${product.id}`}
      className="w-full max-w-md p-5 rounded-lg text-start md:p-8 backdrop:bg-black backdrop:bg-opacity-50"
    >
      <form id={`update-form-${product.id}`} method="dialog">
        <div className="flex justify-between items-center pb-4 mb-4 border-b">
          <h4 className="">Actualizar producto</h4>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={() => onCloseDialog()}
          >
            <CloseIcon width={12} height={12} />
          </button>
        </div>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Titulo del producto
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nombre del producto"
            defaultValue={product.title}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Decripción
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="overflow-y-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={product.description}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Precio:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="any"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="$500"
            defaultValue={product.price}
            min={1}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Categoria:
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" disabled selected>
              Elige una categoria
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <menu className="mt-12 text-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none"
          >
            Actualizar
          </button>
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={() => onCloseDialog()}
          >
            Cancelar
          </button>
        </menu>
      </form>
    </dialog>
  );
};
