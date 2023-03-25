import RestaurantMenu from "../RestaurantMenu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="item-category">
      <div className="item-category-header">
        <p className="subheading-text">{itemCategory.title}</p>

        {isVisible ? (
          <FaChevronUp onClick={() => setIsVisible(false)} />
        ) : (
          <FaChevronDown onClick={() => setIsVisible(true)} />
        )}
      </div>
      {!isVisible && <div className="section-border"></div>}

      {isVisible && <RestaurantMenu menuItems={itemCategory.itemCards} />}
    </div>
  );
};
export default RestaurantItemCategory;
