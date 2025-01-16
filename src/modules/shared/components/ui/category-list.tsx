import { Category } from "@/modules/core/types";
import { CategoryItem } from "./category-item";

interface Props {
  categories: Category[];
}

export const CategoryList = ({ categories = [] }: Props) => {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {categories.map((category) => (
        <li key={category}>
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
};
