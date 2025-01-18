"use client";

import clsx from "clsx";
import { ArrowLeftIcon } from "../../icons/arrow-left-icon";
import { ArrowRightIcon } from "../../icons/arrow-right-icon";

interface Props {
  currentPage: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  totalPages: number;
}

export const Paginator = ({
  currentPage,
  onNextPage,
  onPreviousPage,
  totalPages,
}: Props) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center">
      <button
        className={clsx(
          "flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900",
          {
            "cursor-not-allowed bg-gray-300": isFirstPage,
          }
        )}
        onClick={onPreviousPage}
        disabled={isFirstPage}
      >
        <ArrowLeftIcon width={20} height={20} />
        Anterior
      </button>
      <div className="text-gray-700 bg-white border border-gray-300 rounded-lg h-10 w-10 flex items-center justify-center me-3">
        <span className="text-black text-base font-medium">{currentPage}</span>
      </div>
      <button
        className={clsx(
          "flex items-center justify-center px-4 h-10 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900",
          {
            "cursor-not-allowed bg-gray-300": isLastPage,
          }
        )}
        onClick={onNextPage}
        disabled={isLastPage}
      >
        Siguiente
        <ArrowRightIcon width={20} height={20} />
      </button>
    </div>
  );
};
