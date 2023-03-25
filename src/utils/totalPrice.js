export const getCartTotal = (cartItems) => {
  let totalPrice = 0;
  Object.values(cartItems).map((item) => {
    totalPrice += item.quantity * item.price;
  });

  return totalPrice / 100;
};
