import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { dropOn, setDropOn, cartItems } = useContext(CartContext);
  const [iconQ, setIconQ] = useState(0);

  useEffect(() => {
    let quant = 0;
    cartItems.map((item) => {
      quant += item.quantity;
      return quant;
    });
    setIconQ(quant);
  }, [cartItems]);

  const dropHandler = () => {
    setDropOn(!dropOn);
    console.log(dropOn);
  };
  return (
    <div className="cart-icon-container" onClick={dropHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{iconQ}</span>
    </div>
  );
};
