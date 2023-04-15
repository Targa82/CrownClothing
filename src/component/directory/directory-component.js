import "./directory-styles.scss";
import { CategoryItem } from "../category-item/category-item-component";

export const Directory = ({ category }) => {
  return (
    <div className="categories-container">
      {category.map(({ id, title, imageUrl }) => {
        return <CategoryItem key={id} title={title} img={imageUrl} />;
      })}
    </div>
  );
};
