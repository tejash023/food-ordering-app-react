import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCard";
import { ShimmerCards } from "./Shimmer";

// filter data function - filter and return the resturants as per the input value
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }
  console.log(filteredRestaurants);

  /*
   ** Conditonal Rendering
   ** If restaurant is empty => shimmer UI
   ** If restaurant has data => actual UI Data */

  // not render component (Early return)
  if (!allRestaurants) return null;

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
            console.log("data", data);
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
