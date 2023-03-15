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
          <h4>
            <i class="fa fa-star"></i> {restaurant?.avgRating}{" "}
          </h4>

          <p>{restaurant.totalRatingsString}</p>
        </div>
      </div>

      <div className="restaurant-menu">
        <p>Total ({Object.values(restaurant?.menu?.items).length})</p>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className="menu-items" key={item?.id}>
            <div className="item-details">
              <div className="item-extras">
                {/* Check for veg/non veg */}
                {item?.isVeg === 0 ? (
                  <span className="nonveg">
                    <i class="fa fa-circle"></i>
                  </span>
                ) : (
                  <span className="veg">
                    <i class="fa fa-circle"></i>
                  </span>
                )}
                {/* Check for Bestsellers */}
                {item?.isBestSeller && (
                  <span className="bestseller">
                    <i class="fa fa-star"></i> Bestseller
                  </span>
                )}
              </div>

              <h4>{item?.name}</h4>

              <p>₹{item?.price / 100}</p>
              <span className="item-desc">{item?.description}</span>
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
