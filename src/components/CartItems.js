import { IMG_CDN_URL } from "../constants";

const CartItems = ({ cartItems }) => {
  const getCartTotal = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });
    console.log(totalPrice);
    return totalPrice / 100;
  };

  return (
    <div className="cart-items-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-item">
          <p>{item.name}</p>

          <p>₹ {item.price / 100}</p>
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
