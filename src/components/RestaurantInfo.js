const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="restaurant-info">
      <div className="restaurant-name">
        <h2>{restaurant?.name}</h2>

        <p>{restaurant?.cuisines?.join(", ")}</p>
        <p>
          {restaurant?.areaName}, {restaurant?.info?.city}
        </p>
      </div>
      <div className="restaurant-basics">
        <h4>
          <i className="fa fa-star"></i> {restaurant?.avgRating}{" "}
        </h4>
        <p>{restaurant?.totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
