import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="container">
      <h2>Cart Items</h2>
      <p>Items in Cart {cartItems.length}</p>
    </div>
  );
};

export default Cart;
