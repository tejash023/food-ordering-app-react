import { IMG_CDN_URL } from "../constants";

const RestaurantCards = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
  locality,
}) => {
  let ratingType;
  if (avgRating >= 4.0) {
    ratingType = "green";
  } else if (avgRating < 4.0 && avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
    <div className="card" key={id}>
      <div className="res-img">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
      </div>

      <div className="res-name">
        <h5 className="resName">{name}</h5>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
      <div className="res-info">
        {avgRating && (
          <p className={"ratings " + ratingType}>
            <i className="fa fa-star"></i>
            {avgRating}
          </p>
        )}

        <p> {sla.lastMileTravelString}</p>
        <p> {costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
