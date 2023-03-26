import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsHandbagFill, BsHandbag } from "react-icons/bs";

const Title = () => {
  return (
    <Link to="/" className="logo-items">
      <img
        data-testid="logo"
        className="logo"
        alt="logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
      />
      <p className="logo-text colblack">Go Foods.</p>
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
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>

              <Link to="/cart" className="cart-logo">
                {cartCount > 0 ? (
                  <BsHandbagFill size="2.2rem" />
                ) : (
                  <BsHandbag size="2.2rem" />
                )}
                <span data-testid="cart" className="cart-count">
                  {cartCount}
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
