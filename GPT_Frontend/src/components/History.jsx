import React from "react";
import "../styles_components/History.css";

const History = ({ onCreateNewChat,historyChats,setCurrentTitle,setMessage,setUserInput}) => {
  const handleCreateNewChat = () => {
    onCreateNewChat();
  };
  const handleSelectedChat = (uniqueTitles) => {
    setCurrentTitle(uniqueTitles)
    setMessage('')
    setUserInput('')

  }
  const uniqueTitles =  Array.from(new Set (historyChats.map(historyChat => historyChat.title)));
  console.log(uniqueTitles)

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Chat History</h1>
      </div>
      <div className="history-searchbar">
        <input type="search" placeholder="Search here ..."></input>
        <img alt="search-icon" src="/media/search.png"></img>
      </div>
      <div className="history-button">
        <button type="button" onClick={handleCreateNewChat}>
          New Chat
        </button>
      </div>
      <div className="history-chat-history">
        <ul>
          {uniqueTitles?.map((uniqueTitles,index) => <li key={index} onClick={() => handleSelectedChat(uniqueTitles)}>
          <div className="history-circle">{index + 1}</div>
            <div className="history-info">
              <h2>{uniqueTitles} </h2>
              <h3>29.10.2023</h3>
            </div></li>)}
        </ul>
      </div>
    </div>
  );
};

export default History;
