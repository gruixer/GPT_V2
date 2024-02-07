
import React, { useState,useEffect } from "react";
import History from "./History";
import Chat from "./Chat";
import "../styles_components/HistoryChatContainer.css";

const HistoryChatContainer = ({ categoriesArray, selectedCategory,setCategoriesArray }) => {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [historyChats, setHistoryChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  
  console.log(historyChats)

  const getFormattedDate = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const getFormattedTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(date).toLocaleTimeString(undefined, options);
  };

  const onHistoryCreateNewChat = () => {
    createNewChat();
  };

  const createNewChat = () => {
    setUserInput("");
    setMessage("");
    setCurrentTitle("");
    console.log("New chat created !");
  };

  return (
    <div className="history-chat-container-main">
      <History
        onCreateNewChat={onHistoryCreateNewChat}
        historyChats={historyChats}
        setCurrentTitle={setCurrentTitle}
        setMessage={setMessage}
        setUserInput={setUserInput}
        getFormattedDate={getFormattedDate}
        getFormattedTime={getFormattedTime}
        categoriesArray={categoriesArray}
        setCategoriesArray={setCategoriesArray}
        selectedCategory={selectedCategory}
        
      />
      <Chat
        userInput={userInput}
        message={message}
        historyChats={historyChats}
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        setHistoryChats={setHistoryChats}
        setUserInput={setUserInput}
        setMessage={setMessage}
        getFormattedDate={getFormattedDate}
        getFormattedTime={getFormattedTime}
      
      />
    </div>
  );
};
export default HistoryChatContainer;
