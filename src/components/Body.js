import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCard";
import { ShimmerCards } from "./Shimmer";
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANTS } from "../constants";
import useOnline from "../utils/useOnline";
import Loader from "./Loader";
import NotFound from "./NotFound";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const response = await fetch(FETCH_RESTAURANTS);
    const json = await response.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

    // update the state variable restaurants with Swiggy API data
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  // not render component (Early return)
  if (!allRestaurants) return <Loader />;

  //check if user online or offline
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h2>
        There is a problem with your internet connection. Please try again
      </h2>
    );
  }

  return allRestaurants?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <>
      {filteredRestaurants.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <h1 className="main-content-text">
            Restaurants with online food delivery in Bangalore
          </h1>
          <div className="restaurant-lists">
            {filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCards {...restaurant.info} />
                {console.log(restaurant.info)}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
