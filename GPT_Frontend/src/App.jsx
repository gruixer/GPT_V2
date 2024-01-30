import React from "react";
import Categories from "./components/Categories";
import History from "./components/History";
import Chat from "./components/Chat";
import "./styles_components/App.css";

const App = () => {

  return(
    <div className="main">
    <Categories></Categories>
    <History></History>
    <Chat></Chat>
    </div>
  )
}

export default App;