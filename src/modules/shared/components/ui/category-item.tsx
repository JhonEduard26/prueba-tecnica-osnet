import { Category } from "@/modules/core/types";
import Link from "next/link";

interface Props {
  category: Category;
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <Link
      href={category}
      className="block py-2 pr-4 pl-3 capitalize text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
      aria-current="page"
    >
      {category}
    </Link>
  );
};
