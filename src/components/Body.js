import { useState } from "react";
import { restaurantsList } from "../constants";
import RestaurantCards from "./RestaurantCard";

function filterRestaurant(searchText, restaurants) {
  console.log(searchText, restaurants);
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase)
  );
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterRestaurant(searchInput, restaurants);
            // update the state - restuarants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {restaurants.map((restaurant) => (
          <RestaurantCards {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
