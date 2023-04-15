import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview";
import "./shop.styles.scss";
import CategoryProducts from "../../component/category-products/category-products";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};
