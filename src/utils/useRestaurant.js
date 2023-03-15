// import { useState, useEffect } from "react";
// import { FETCH_RESTAURANTS } from "../constants";

// const useRestaurant = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   //const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   //const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     //API CALL
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(FETCH_RESTAURANTS);
//     const json = await data.json();
//     setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
//   }

//   return {
//     allRestaurants,
//   };
// };

// export default useRestaurant;
