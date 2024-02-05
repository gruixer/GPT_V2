import React, { useRef, useState } from "react";
import Categories from "./components/Categories";
import History from "./components/History";
import Chat from "./components/Chat";
import "./styles_components/App.css";

const App = () => {
  const chatRef = useRef();
  const onHistoryCreatNewChat = () => {
    chatRef.current.createNewChat();
  };
  return (
    <div className="main">
      <Categories></Categories>
      <History onCreateNewChat={onHistoryCreatNewChat}></History>
      <Chat ref={chatRef}></Chat>
    </div>
  );
};

export default App;
