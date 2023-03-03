import { IMG_CDN_URL } from "../constants";

const RestaurantCards = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card" key={id}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4> {lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCards;
