import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";
import { getCartTotal } from "../utils/totalPrice";
import ItemQuantity from "./ItemQuantity";

const CartItems = ({ cartItems }) => {
  console.log("cart", cartItems);

  const totalAmount = getCartTotal(cartItems);
  console.log(totalAmount);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-items-container">
      {Object.values(cartItems).map((item) => (
        <div key={item.id} className="cart-items-item">
          <p>{item.name}</p>
          <p>Qty: {item.quantity}</p>
          <div className="cart-item-actions">
            <p>₹ {item.price / 100}</p>

            <ItemQuantity item={item} key={item.id} />
          </div>
        </div>
      ))}
      <div className="total-bill">
        <h3>Total Bill</h3>
        <h3>₹ {totalAmount}</h3>
      </div>
    </div>
  );
};

export default CartItems;
