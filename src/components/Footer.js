import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>All rights reserved.</p>
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
      </ul>
    </div>
  );
};

export default Footer;
