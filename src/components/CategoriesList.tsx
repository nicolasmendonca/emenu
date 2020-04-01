import React from "react";
import { Category } from "../types/Category";

interface ICategoriesListProps {
  categories: Category[];
}

const CategoriesList: React.FC<ICategoriesListProps> = ({ categories }) => {
  return (
    <ul className="CategoriesList">
      {categories.map(category => (
        <li className="CategoriesList__item" key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
