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

    console.log(resData);

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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            //need to filter the data
            const data = filterData(searchText, allRestaurants);

            // update the state - restuarants
            setFilteredRestaurants(data);
          }}
          onBlur={() => {
            setFilteredRestaurants(allRestaurants);
            setSearchText("");
          }}
        />
      </div>
      {filteredRestaurants.length === 0 ? (
        <NotFound />
      ) : (
        <div className="restaurant-lists">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCards {...restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
