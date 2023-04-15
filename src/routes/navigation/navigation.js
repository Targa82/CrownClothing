import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartIcon } from "../../component/cart-icon/cart-icon";
import { CartDropdown } from "../../component/cart-dropdown/cart-dropdown";
import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { dropOn } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {dropOn && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
