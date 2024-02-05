import React, { useState } from "react";
import History from "./History";
import Chat from "./Chat";
import "../styles_components/HistoryChatContainer.css";

const HistoryChatContainer = () => {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [historyChats, setHistoryChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");

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
      ></Chat>
    </div>
  );
};
export default HistoryChatContainer;
