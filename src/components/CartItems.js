import { IMG_CDN_URL } from "../constants";

const CartItems = ({ cartItems }) => {
  return (
    <div className="cart-items-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-item">
          <p>{item.name}</p>

          <p>{item.price / 100}</p>
        </div>
      ))}

      <h3>Total Bill</h3>
      <p>{cartItems.price}</p>
    </div>
  );
};

export default CartItems;
