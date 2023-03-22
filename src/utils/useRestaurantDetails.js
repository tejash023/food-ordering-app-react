import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantDetails = (resId) => {
  //define state variables for restaurant
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  //make an API call and fetch the restaurant data with the resId provided
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();
    const restaurant = json.data.cards[0]?.card?.card?.info;
    console.log(restaurant);
    const restaurantMenu =
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    setRestaurant(restaurant);
    setRestaurantMenu(restaurantMenu);
  };

  //return restaurant Data
  return { restaurant, restaurantMenu };
};

export default useRestaurantDetails;
