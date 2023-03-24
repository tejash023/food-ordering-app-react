import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";

const CartItems = ({ cartItems }) => {
  const getCartTotal = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });

    return totalPrice / 100;
  };

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-items-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-item">
          <p>{item.name}</p>

          <div className="cart-item-actions">
            <p>₹ {item.price / 100}</p>
            <button
              className="remove-cart-items"
              onClick={() => handleRemoveItem(item)}
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
      ))}

      <div className="total-bill">
        <h3>Total Bill</h3>
        <h3>₹ {getCartTotal()}</h3>
      </div>
    </div>
  );
};

export default CartItems;
