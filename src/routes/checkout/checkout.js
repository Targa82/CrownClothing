import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItem } from "../../component/checkout-item/checkout-item";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalCart } = useContext(CartContext);

  const increaseQuantity = (items, id) => {
    return items.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  };

  const decreaseQuantity = (items, id) => {
    const existingCartItem = items.find((cartItem) => cartItem.id === id);
    if (existingCartItem.quantity === 1) {
      return items.filter((cartItem) => cartItem.id !== id);
    } else {
      return items.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
      <span className="total">Total: ${totalCart}</span>
    </div>
  );
};

export default Checkout;
