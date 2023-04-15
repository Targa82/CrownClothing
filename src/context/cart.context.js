import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitem contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found increment quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //retrun new array with modified cartItems /new Cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  dropOn: false,
  setDropOn: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  totalCart: 0,
});

export const CartProvider = ({ children }) => {
  const [dropOn, setDropOn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const totalCartCalc = cartItems.reduce((prev, current) => {
      return current.price * current.quantity + prev;
    }, 0);
    setTotalCart(totalCartCalc);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    dropOn,
    setDropOn,
    addItemToCart,
    cartItems,
    setCartItems,
    totalCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
