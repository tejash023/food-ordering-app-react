import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { ShimmerBlock } from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const { restaurant } = useRestaurantDetails(resId);

  return !restaurant ? (
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

      <RestaurantMenu />
    </div>
  );
};

export default RestaurantDetails;
