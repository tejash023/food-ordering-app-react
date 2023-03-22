import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { ShimmerBlock } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantMenu } = useRestaurantDetails(resId);
  const recommendedMenu = restaurantMenu?.cards[2]?.card?.card?.itemCards;

  return !recommendedMenu ? (
    <ShimmerBlock />
  ) : (
    <div className="restaurant-menu">
      <p>Total ({Object.values(recommendedMenu).length})</p>
      {Object.values(recommendedMenu).map((item) => (
        <div className="menu-items" key={item.card.info?.id}>
          <div className="item-details">
            <div className="item-extras">
              {/* Check for veg/non veg */}
              {item.card.info?.itemAttribute.vegClassifier === "NONVEG" ? (
                <span className="nonveg">
                  <i className="fa fa-circle"></i>
                </span>
              ) : (
                <span className="veg">
                  <i className="fa fa-circle"></i>
                </span>
              )}
              {/* Check for Bestsellers */}

              <span className="bestseller">
                {item.card.info?.ratings?.aggregatedRating?.rating}
              </span>
            </div>

            <h4>{item.card.info?.name}</h4>

            <p>₹{item.card.info?.price / 100}</p>
            <span className="item-desc">{item.card.info?.description}</span>
          </div>
          <div className="item-img">
            {!item.card.info?.imageId ? null : (
              <img src={IMG_CDN_URL + item.card.info?.imageId} />
            )}
            <button className="add-food-item">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
