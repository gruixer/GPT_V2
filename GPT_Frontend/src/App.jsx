
import React, { useState } from "react";
import Categories from "./components/Categories";
import HistoryChatContainer from "./components/HistoryChatContainer";
import "./styles_components/App.css";

const App = () => {
  const [categoriesArray, setCategoriesArray] = useState([
    { name: "Personal", icon: "/media/user.png", chats: [] },
    { name: "Work", icon: "/media/briefcase.png", chats: [] },
    { name: "Health", icon: "/media/hearts.png", chats: [] },
  ]);
  const [selectedCategory,setSelectedCategory] = useState([0]);

 console.log(selectedCategory.name)

  return (
    <div className="main">
      <Categories
        categoriesArray={categoriesArray}
        setSelectedCategory={setSelectedCategory}
      />
      <HistoryChatContainer
      setCategoriesArray={setCategoriesArray}
      categoriesArray={categoriesArray}
      selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default App;
