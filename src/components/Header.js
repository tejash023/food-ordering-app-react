import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsHandbagFill, BsHandbag } from "react-icons/bs";
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
  const cartCount = useSelector((store) => store.cart.totalItemsCount);

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
                {cartCount > 0 ? (
                  <BsHandbagFill size="2.2rem" />
                ) : (
                  <BsHandbag size="2.2rem" />
                )}
                <span className="cart-count">{cartCount}</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
