import React from "react";
import { useSelector } from "react-redux";
import { getCartTotal } from "../utils/totalPrice";
import { Link } from "react-router-dom";

const CartNavigation = () => {
  const cartCount = useSelector((store) => store.cart.totalItemsCount);
  const cartItems = useSelector((store) => store.cart.items);

  const totalAmount = getCartTotal(cartItems);
  return (
    <div className="cart-navigation">
      <div>
        <p>
          {cartCount} Item | Rs {totalAmount}
        </p>
      </div>
      <div>
        <Link to="/cart">
          <p>View Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default CartNavigation;
