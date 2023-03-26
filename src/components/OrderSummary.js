import { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmOrder from "../assets/svg/confirmed.svg";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { getCartTotal } from "../utils/totalPrice";
import Error from "./Error";
import { v4 as uuid } from "uuid";

const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isVisible, setIsVisible] = useState(false);
  const totalAmount = getCartTotal(cartItems);
  const unique_id = uuid();
  const orderID = unique_id.slice(0, 6);

  return Object.values(cartItems).length <= 0 ? (
    <Error />
  ) : (
    <div className="container order-summary">
      <p className="heading-text">Order Summary</p>
      <p className="order-confirm-info">
        {" "}
        <TbDiscountCheckFilled color="green" size="1.5rem" />
        Your Order is Confirmed!
      </p>
      <img className="display-img-md mtop10 mbottom10" src={ConfirmOrder} />
      <p>Sit back while we deliver it in less than 30 minutes!!</p>
      <p className="heading-text mtop20">Order Details</p>
      <p className="mbottom10">Order ID: #{orderID.toUpperCase()}</p>
      <div className="order-summary-details">
        <div className="cart-order-summary">
          {Object.values(cartItems).map((item) => (
            <div key={item.id} className="cart-summary-item">
              <p className="item-name">{item.name}</p>

              <p>{item.quantity} pc.</p>
              <p>₹ {item.price / 100}</p>
            </div>
          ))}
          <div className="total-bill">
            <h3 className="subheading-text">To Pay</h3>
            <h3 className="heading-text">₹ {totalAmount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
