import React from "react";
import "../styles_components/Chat.css";

const Chat = () => {


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
              
            <input type="search" placeholder="ask me anything ..."></input>
            <img alt="search-icon" src="/media/angle-left.png"></img>
            
            
              </div>
            </div>
          
        
        

        
    )
}
export default Chat;