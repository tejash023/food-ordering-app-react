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
      "https://www.swiggy.com/dapi/menu/v4/full?lat=25.8773651&lng=86.5927887&menuId=287730"
    );
    const json = await response.json();
    console.log(json.data);
    setRestaurant(json.data);
  };

  return !restaurant ? (
    <ShimmerBlock />
  ) : (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <p>{restaurant.avgRatings}</p>
      <p>{restaurant.area}</p>
      <p>{restaurant.city}</p>
    </div>
  );
};

export default RestaurantMenu;
