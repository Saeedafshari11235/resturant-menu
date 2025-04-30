import React, { useState } from "react";

const Categories = ({ categories, filterMenu }) => {
  const [mainCategory, setMainCategory] = useState("All");

  return (
    <div className="btn-container">
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={`filter-btn ${mainCategory === item ? "highlight" : ""}`}
          onClick={() => {
            setMainCategory(item);
            filterMenu(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
