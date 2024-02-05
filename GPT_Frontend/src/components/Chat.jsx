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
}) => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: userInput,
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
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
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
        <h2>29.10.2023</h2>
      </div>
      <div className="chat-middle-part">
        <div className="chatbot">
          {currentChat && currentChat.length > 0 ? (
            <ul>
              {currentChat.map((chatMessage, index) => (
                <li key={index}>
                  <h1>{chatMessage.role}</h1>
                  <p>{chatMessage.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="chat-middle-intro">
              <img src="/media/black-hole.png" alt="No Messages" />
              <h1>
                Bonjour, je suis votre 'MyChat'. Jonathan m'a conçu pour vous
                aider dans la vie quand vous ne savez plus réfléchir par vous
                même...
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
