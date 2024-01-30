import React from "react";
import "../styles_components/Categories.css";


const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-header">
        <img src="/media/black-hole.png" alt="MyChat Logo" />
        <h1>My Chat</h1>
      </div>
      <div className="categories-middle-part">
        <ul>
          <li>
            <img alt="Personnal" src="/media/user.png" />
            <h2>Personnal</h2>
            
            <div className="categories-circle">11</div>
          </li>
          <li >
            <img alt="work" src="/media/briefcase.png" />
            <h2>Work</h2>
            
            <div className="categories-circle">1</div>
            
          </li>
          <li>
            <img alt="health" src="/media/hearts.png" />
            <h2>Health</h2>
            
           <div className="categories-circle">32</div>
          </li>
        </ul>
      </div>
      <div className="categories-footer">
        <p>made by Jonathan Christinat</p>
      </div>
    </div>
  );
};

export default Categories;
