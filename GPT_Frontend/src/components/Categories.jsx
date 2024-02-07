
import React from "react";
import "../styles_components/Categories.css";

const Categories = ({ categoriesArray,setSelectedCategory}) => {
  
const handleSelectedCategory = (category) =>{
      setSelectedCategory(category);
}
  return (
    <div className="categories-container">
      <div className="categories-header">
        <img src="/media/black-hole.png" alt="MyChat Logo" />
        <h1>My Chat</h1>
      </div>
      <div className="categories-middle-part">
        <ul>
          {categoriesArray.map((category, index) => (
            <li key={index} onClick={()=>handleSelectedCategory(category)}>
              <img alt={category.name} src={category.icon} />
              <h2>{category.name}</h2>
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
