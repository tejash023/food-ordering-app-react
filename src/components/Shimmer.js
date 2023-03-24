export const ShimmerCards = () => {
  return (
    <div className="restaurant-lists">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards">
            <div className="shimmer-cards-img loading-animation"></div>
            <div className="shimmer-cards-lines ">
              {Array(4)
                .fill("")
                .map((e, index) => (
                  <div className="shimmer-cards-line loading-animation"></div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerLines = () => {
  return (
    <div className="shimmer">
      {Array(7)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-lines"></div>
        ))}
    </div>
  );
};
