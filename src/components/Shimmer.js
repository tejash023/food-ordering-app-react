export const ShimmerCards = () => {
  return (
    <div className="restaurant-lists">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export const ShimmerBlock = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-block"></div>
      {Array(5)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-lines"></div>
        ))}
    </div>
  );
};
