import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ item, increaseQuantity, decreaseQuantity }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    return cartItems.filter((cartItem) => cartItem.id !== id);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            setCartItems(decreaseQuantity(cartItems, item.id));
            console.log(item.id);
          }}
        >
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            setCartItems(increaseQuantity(cartItems, item.id));
            console.log(item.id);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <div
        className="remove-button"
        onClick={() => {
          setCartItems(removeCartItemHandler(item.id));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
