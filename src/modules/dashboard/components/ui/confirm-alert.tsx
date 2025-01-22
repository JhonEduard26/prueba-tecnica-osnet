interface Props {
  id: string;
  onConfirmAction: (id: string) => void;
}

export const ConfirmAlert = ({ id, onConfirmAction }: Props) => {
  const confirmDelete = () => {
    const dialog = document.getElementById(
      `confirm-dialog-${id}`
    ) as HTMLDialogElement;
    if (!dialog) return;

    onConfirmAction(id);
    closeDialog();
  };

  const openDialog = () => {
    const dialog = document.getElementById(
      `confirm-dialog-${id}`
    ) as HTMLDialogElement;
    if (!dialog) return;
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.getElementById(
      `confirm-dialog-${id}`
    ) as HTMLDialogElement;
    if (!dialog) return;

    dialog.close();
  };

  return (
    <>
      <button
        className="font-medium text-red-600 hover:underline"
        type="button"
        onClick={() => openDialog()}
      >
        Eliminar
      </button>
      <dialog
        id={`confirm-dialog-${id}`}
        tabIndex={-1}
        className="rounded-lg backdrop:bg-black backdrop:bg-opacity-50"
      >
        <button
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          onClick={() => closeDialog()}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Cerrar modal</span>
        </button>
        <div className="p-4 md:p-5 text-center">
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500">
            ¿Estás seguro de que deseas eliminar este producto?
          </h3>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            onClick={() => confirmDelete()}
          >
            Si, Estoy seguro
          </button>
          <button
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={() => closeDialog()}
          >
            No, cancelar
          </button>
        </div>
      </dialog>
    </>
  );
};
