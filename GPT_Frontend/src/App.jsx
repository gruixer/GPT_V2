import React, {useState }from "react";
import Categories from "./components/Categories";
import HistoryChatContainer from "./components/HistoryChatContainer";
import "./styles_components/App.css";

const App = () => {

  return (
    <div className="main">
      <Categories></Categories>
      <HistoryChatContainer></HistoryChatContainer>
    </div>
  );
};

export default App;
