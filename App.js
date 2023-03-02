import React from "react";
import ReactDOM from "react-dom/client";

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

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const rajdhaniHotel = {
  name: "Rajdhani Hotel",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/drgphrpjbnqcwjsxaiod",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

const RestaurantCards = () => {
  return (
    <div className="card">
      <img src={rajdhaniHotel.image} />
      <h2>{rajdhaniHotel.name}</h2>
      <h3>{rajdhaniHotel.cusines.join(", ")}</h3>
      <h4> {rajdhaniHotel.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-lists">
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
