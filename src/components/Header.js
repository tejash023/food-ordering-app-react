import { Link } from "react-router-dom";

const loggedInUser = () => {
  //API Call
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
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

          <li>Cart</li>
        </ul>
      </div>
      <div>
        {loggedInUser ? <button>Log out</button> : <button>Login</button>}
      </div>
    </div>
  );
};

export default Header;
