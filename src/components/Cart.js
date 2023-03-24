import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="container cart-container">
      <h2>Cart Items</h2>
      {cartItems.length > 0 ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <p>Nothing here! Try adding some delicious meals from our menu!</p>
      )}

      {cartItems.length > 0 && <Link className="place-order">Place Order</Link>}
    </div>
  );
};

export default Cart;
