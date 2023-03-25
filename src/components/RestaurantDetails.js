import { useParams } from "react-router-dom";
import { ShimmerBlock } from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantDetails(resId);
  // console.log(restaurant);

  return !restaurant ? (
    <ShimmerBlock />
  ) : (
    <div className="restaurant-details">
      <RestaurantInfo restaurant={restaurant?.info} />
      <RestaurantCategory menu={restaurant?.menu} />
    </div>
  );
};

export default RestaurantDetails;
