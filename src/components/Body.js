import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCard";
import { ShimmerCards } from "./Shimmer";
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANTS } from "../constants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }

  /*
   ** Conditonal Rendering
   ** If restaurant is empty => shimmer UI
   ** If restaurant has data => actual UI Data */

  // not render component (Early return)
  if (!allRestaurants) return null;

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
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restuarants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCards {...restaurant.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
