import RestaurantNestedItemCategory from "./RestaurantCategory/RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantCategory/RestaurantItemCategory";

const RestaurantCategory = ({ menu }) => {
  console.log(menu);

  return (
    <div className="menu">
      {menu.map((item, index) => (
        <div className="menu-category" key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;
