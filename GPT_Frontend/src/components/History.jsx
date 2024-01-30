import React from "react";
import "../styles_components/History.css";



const History = () => {

    return(
        <div className="history-container">

            <div className="history-header">
                <h1>Chat History</h1>
            </div>
            <div className="history-searchbar">
            <input type="search" placeholder="Search here ..."></input>
            <img alt="search-icon" src="/media/search.png"></img>
            
            </div>
            <div className="history-chat-history">
                <ul>
                    <li>
                        <div className="history-circle">1</div>
                        <div className="history-info">
                        <h2>I have a problem with ... </h2>
                        <h3>29.10.2023</h3>
                        </div>
                    </li>
                    <li>
                        <div className="history-circle">2</div>
                        <div className="history-info">
                        <h2>How to build a rocket ...</h2>
                        <h3>29.10.2023</h3>
                        </div>
                    </li>
                    <li>
                        <div className="history-circle">3</div>
                        <div className="history-info">
                        <h2>How to build a rocket ...</h2>
                        <h3>29.10.2023</h3>
                        </div>
                    </li>
                    <li>
                        <div className="history-circle">3</div>
                        <div className="history-info">
                        <h2>How to build a rocket ...</h2>
                        <h3>29.10.2023</h3>
                        </div>
                    </li>
                   
                    
                </ul>
            </div>
            
        
     
            

        </div>
    )
}

export default History;