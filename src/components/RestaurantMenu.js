import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { ShimmerBlock } from "../components/Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { restaurant, restaurantMenu } = useRestaurantDetails(resId);
  const recommendedMenu = restaurantMenu?.cards[2]?.card?.card?.itemCards;

  console.log(restaurant);

  // if (recommendedMenu) {
  //   Object.values(recommendedMenu).map((item) => {
  //     console.log(item.card.info);
  //   });
  // }

  return !recommendedMenu ? (
    <ShimmerBlock />
  ) : (
    <div className="restaurant-details">
      <div className="restaurant-info">
        <div className="restaurant-name">
          <h2>{restaurant?.name}</h2>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.areaName}, {restaurant?.city}
          </p>
        </div>
        <div className="restaurant-basics">
          <h4>
            <i className="fa fa-star"></i> {restaurant?.avgRating}{" "}
          </h4>
          <p>{restaurant.totalRatingsString}</p>
        </div>
      </div>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
