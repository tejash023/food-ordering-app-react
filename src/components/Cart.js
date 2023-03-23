import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="container">
      <h2>Cart Items</h2>
      <p>Items in Cart {cartItems.length}</p>
      <CartItems cartItems={cartItems} />
    </div>
  );
};

export default Cart;
