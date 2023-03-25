import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PlacesAutocomplete from "./PlacesAutocomplete";

const loggedInUser = () => {
  //API Call
  return false;
};

const Title = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        alt="logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
      />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="header-items">
        <Title />
        <div className="navigation-menu">
          <div className="nav-items">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>

              <Link to="/cart" className="cart-logo">
                <i className="fa fa-shopping-cart"></i>
                <span className="cart-count">
                  {cartItems.length ? cartItems.length : 0}
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
