import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  //define state variables for restaurant
  const [restaurant, setRestaurant] = useState(null);

  //make an API call and fetch the restaurant data with the resId provided
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

  //return restaurant Data
  return restaurant;
};

export default useRestaurant;
