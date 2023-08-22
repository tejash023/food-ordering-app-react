import React from "react";

const CategoryMenu = ({ categoryMenu }) => {
  let CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  return (
    <div className="category">
      <h1 className="main-content-text">Inspiration for your first order</h1>
      <div className="category-menu">
        {categoryMenu !== undefined &&
          categoryMenu.map((item) => (
            <div className="category_menu_item">
              <img src={CDN_URL + item.imageId} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
