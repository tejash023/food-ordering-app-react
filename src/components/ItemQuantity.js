import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="item-quantity">
      <button
        onClick={() => {
          dispatch(removeItem(item.id));
        }}
      >
        -
      </button>
      {console.log(item.quantity)}
      <p>{item.quantity ? item.quantity : 0}</p>
      <button
        onClick={() => {
          dispatch(addItem(item));
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
