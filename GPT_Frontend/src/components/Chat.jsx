import React, { useEffect, useState } from "react";
import "../styles_components/Chat.css";

const Chat = ({
  userInput,
  message,
  historyChats,
  currentTitle,
  setCurrentTitle,
  setHistoryChats,
  setMessage,
  setUserInput,
  getFormattedDate,
  getFormattedTime
}) => {


  const getMessages = async () => {

    const currentDate = new Date();
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: userInput,
        date: currentDate.toISOString()
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //"https://gpt-v2-6y9v.vercel.app/" "http://localhost:8000/aichatbot"
      const response = await fetch(
        "https://gpt-v2-6y9v.vercel.app/aichatbot",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
      
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getMessages();
    }
  };
  useEffect(() => {
    console.log(currentTitle, userInput, message);
    if (!currentTitle && userInput && message) {
      setCurrentTitle(userInput);
    }
    if (currentTitle && userInput && message) {
      setHistoryChats((previousChats) => [
        ...previousChats,
        {
          title: currentTitle,
          role: "user",
          content: userInput,
          date: getFormattedDate(new Date()),
          time: getFormattedTime(new Date()),
          
          
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
          date: getFormattedDate(new Date()), 
          time: getFormattedTime(new Date()),
        },
      ]);
    }
  }, [message, currentTitle]);

  const currentChat = historyChats.filter(
    (historyChat) => historyChat.title === currentTitle
  );

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>{!currentTitle ? "New Chat..." : currentTitle} </h1>
        <h2>{getFormattedDate(new Date())}</h2>
      </div>
      <div className="chat-middle-part">
        <div className="chatbot">
          {currentChat && currentChat.length > 0 ? (
            <ul>
              {currentChat.map((chatMessage, index) => (
                <li key={index}>
                  {chatMessage.role === "user" ? (
                    <div className="chat-middle-part-role">
                      <img src="/media/user.png" alt="User" />
                      <p>{chatMessage.time}</p>
                    </div>
                  ) : (
                    <div className="chat-middle-part-role">
                      <img src="/media/black-hole.png" alt="chatbot" />
                      <p>{chatMessage.time}</p>
                      
                    </div>
                  )}
                  <p>{chatMessage.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="chat-middle-intro">
              <img src="/media/black-hole.png" alt="No Messages" />
              <h1>
                Hello, I am your 'MyChat'. Jonathan designed me for you help in
                life when you no longer know how to think for yourself...
              </h1>
              <h2></h2>
            </div>
          )}
        </div>
      </div>
      <div className="chat-input">
        <input
          type="search"
          placeholder="ask me anything ..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <img
          alt="search-icon"
          src="/media/angle-left.png"
          onClick={getMessages}
        ></img>
      </div>
    </div>
  );
};
export default Chat;
