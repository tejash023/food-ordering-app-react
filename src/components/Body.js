const Body = () => {
  return (
    <div className="restaurant-lists">
      {restaurants.map((restaurant) => (
        <RestaurantCards {...restaurant.data} />
      ))}
    </div>
  );
};

export default Body;
