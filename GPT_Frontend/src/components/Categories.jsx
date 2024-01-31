import React from "react";
import "../styles_components/Categories.css";

const Categories = () => {
  const categoriesArray = [
    { category: "Personnal", icon: "/media/user.png" },
    { category: "Work", icon: "/media/briefcase.png" },
    { category: "Health", icon: "/media/hearts.png" }
  ];

  return (
    <div className="categories-container">
      <div className="categories-header">
        <img src="/media/black-hole.png" alt="MyChat Logo" />
        <h1>My Chat</h1>
      </div>
      <div className="categories-middle-part">
          
        <ul>
          {categoriesArray.map((category, index) => (
            <li key={index}>
              <img alt={category.category} src={category.icon} />
              <h2>{category.category}</h2>
              <div className="categories-circle">11</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="categories-footer">
        <p>made by Jonathan Christinat</p>
      </div>
    </div>
  );
};

export default Categories;
