import RestaurantMenu from "../RestaurantMenu";

const RestaurantItemCategory = ({ itemCategory }) => {
  return (
    <div className="item-category">
      <p>{itemCategory.title}</p>
      <RestaurantMenu menuItems={itemCategory.itemCards} />
    </div>
  );
};
export default RestaurantItemCategory;
