import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import ItemQuantity from "./ItemQuantity";
import { ShimmerLines } from "./Shimmer";

import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";

const RestaurantMenu = ({ menuItems }) => {
  // console.log("item", item);
  // const { id, name, description, price, imageId } = item;
  // console.log(id, name, description, price, imageId);
  // const { resId } = useParams();
  // const restaurant = useRestaurantDetails(resId);

  // console.log("Menu", restaurantMenu);
  //const recommendedMenu = restaurant?.cards[2]?.card?.card?.itemCards;

  // const [addedToCart, setAddedToCart] = useState(false);

  //console.log(menuItems);
  // Object.values(
  //   menuItems.map((item) => {
  //     console.log(item.card.info.ribbon);
  //   })
  // );

  return !menuItems ? (
    <ShimmerLines />
  ) : (
    <div className="restaurant-menu">
      {Object.values(menuItems).map((item) => (
        <div className="menu-items" key={item.card.info?.id}>
          <div className="item-details">
            <div className="item-extras">
              {/* Check for veg/non veg */}
              {item.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
              {/* Check for Bestsellers */}
              {item?.card?.info?.ribbon?.text === "Bestseller" && (
                <span className="bestseller">
                  <i className="fa fa-star"></i> Bestseller
                </span>
              )}
            </div>

            <h4>{item.card.info?.name}</h4>

            <p>₹{item.card.info?.price / 100}</p>
            <span className="item-desc">{item.card.info?.description}</span>
          </div>
          <div className="item-img">
            {!item.card.info?.imageId ? null : (
              <img src={IMG_CDN_URL + item.card.info?.imageId} />
            )}
            {/* <button
              className="add-food-item"
              onClick={() => handleAddItem(item.card.info)}
            >
              Add
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
