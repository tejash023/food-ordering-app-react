import { useState, useEffect } from "react";
import { Shimmer } from "react-shimmer";

import RestaurantCards from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase)
  );

  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }

  return restaurants.length == 0 ? (
    <Shimmer width={260} height={180} />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state - restuarants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {restaurants.map((restaurant) => (
          <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
