import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="container">
      <h2>Cart Items</h2>
      {cartItems}
    </div>
  );
};

export default Cart;
