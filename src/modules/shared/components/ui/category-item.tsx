import { Category } from "@/modules/core/types";

interface Props {
  category: Category;
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <a
      href="#"
      className="block py-2 pr-4 pl-3 capitalize text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
    >
      {category}
    </a>
  );
};
