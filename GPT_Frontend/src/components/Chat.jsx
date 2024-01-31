import React, { useEffect, useState } from "react";
import "../styles_components/Chat.css";

const Chat = () => {

    const[userInput ,setUserInput] = useState('');
    const [message, setMessage] = useState("");
    const[historyChats, setHistoryChats] =useState([]);
    const [currentTitle, setCurrentTitle] =useState([]);


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
        const response = await fetch("https://gpt-v2-6y9v.vercel.app/aichatbot" , options);
        const data = await response.json();
        setMessage(data.choices[0].message)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(()=>{
      console.log(currentTitle,userInput,message)
    }, [message,currentTitle]);
    
    return (


     
            <div className="chat-container">
              <div className="chat-header">
                
                <h1>How would you build a rocket ...</h1>
                <h2>29.10.2023</h2>
              </div>
              <div className="chat-middle-part">
                <div className="chatbot">
                     <ul >
                         <li>
                             <p>test </p>
                         </li>
                         <li>
                             <p> test1</p>
                         </li>
                     </ul>
                </div>
               
                <ul className="user">
                    <li>
                        <p>user input 1</p>
                    </li>
                    <li>
                        <p> userinput2</p>
                    </li>
                </ul>
              </div>
              <div className="chat-input">
              
            <input type="search" placeholder="ask me anything ..." value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
            <img alt="search-icon" src="/media/angle-left.png" onClick={getMessages}></img>
            
            
              </div>
            </div>
          
        
        

        
    )
}
export default Chat;