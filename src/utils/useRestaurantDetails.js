import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantDetails = (resId) => {
  //define state variables for restaurant
  const [restaurant, setRestaurant] = useState(null);

  //make an API call and fetch the restaurant data with the resId provided
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();
    console.log(json.data);
    setRestaurant(json.data);
  };

  //return restaurant Data
  return restaurant;
};

export default useRestaurantDetails;
