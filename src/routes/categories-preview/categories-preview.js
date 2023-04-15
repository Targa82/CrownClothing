import { useContext } from "react";
import { CategoriesContext } from "../../context/categories";
import CategoryPreview from "../../component/category-preview/category-preview";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </>
  );
};
