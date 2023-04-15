import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./product-card.styles.scss";
import Button from "../button/button";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
