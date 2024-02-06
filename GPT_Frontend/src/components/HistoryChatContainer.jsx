import React, { useState } from "react";
import History from "./History";
import Chat from "./Chat";
import "../styles_components/HistoryChatContainer.css";

const HistoryChatContainer = () => {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [historyChats, setHistoryChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  
  
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

  const createNewChat = () => {
    setUserInput("");
    setMessage("");
    setCurrentTitle("");
    console.log("New chat created !");
  };

  const onHistoryCreatNewChat = () => {
    createNewChat();
  };



  return (
    <div className="history-chat-container-main">
      <History
        onCreateNewChat={onHistoryCreatNewChat}
        historyChats={historyChats}
        setCurrentTitle={setCurrentTitle}
        setMessage={setMessage}
        setUserInput={setUserInput}
        getFormattedDate={getFormattedDate}
        getFormattedTime={getFormattedTime}
       
      ></History>
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
        
      ></Chat>
    </div>
  );
};
export default HistoryChatContainer;
