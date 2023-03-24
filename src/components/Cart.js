import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="container">
      <h2>Cart Items</h2>
      {cartItems.length > 0 ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <p>Nothing here! Try adding some delicious meals from out menu</p>
      )}
    </div>
  );
};

export default Cart;
