import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { ShimmerBlock } from "../components/Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=25.8773651&lng=86.5927887&menuId=${resId}`
    );
    const json = await response.json();
    //console.log(json.data);
    setRestaurant(json.data);
  };

  return !restaurant ? (
    <ShimmerBlock />
  ) : (
    <div className="restaurant-details">
      <div className="restaurant-info">
        <div className="restaurant-name">
          <h2>{restaurant?.name}</h2>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.area}, {restaurant?.city}
          </p>
        </div>
        <div className="restaurant-basics">
          <h4>⭐ {restaurant?.avgRating} </h4>

          <p>{restaurant.totalRatingsString}</p>
        </div>
      </div>

      <div className="restaurant-menu">
        <p>Menu</p>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className="menu-items" key={item?.id}>
            <div className="item-details">
              <li>
                <p>{item?.name}</p>
              </li>
              <li>₹{item?.price / 100}</li>
            </div>
            <div className="item-img">
              {!item?.cloudinaryImageId ? null : (
                <img src={IMG_CDN_URL + item?.cloudinaryImageId} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
