import { IMG_CDN_URL } from "../constants";

const RestaurantCards = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  costForTwoString,
}) => {
  let ratingType;
  if (avgRating > 4.0) {
    ratingType = "green";
  } else if (avgRating < 4 && avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
    <div className="card" key={id}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="res-name">
        <h5 className="resName">{name}</h5>
        <p>{cuisines.join(", ")}</p>
      </div>
      <div className="res-info">
        {avgRating && (
          <p className={"ratings " + ratingType}>
            <i class="fa fa-star"></i>
            {avgRating}
          </p>
        )}

        <p> {lastMileTravelString}</p>
        <p> {costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
