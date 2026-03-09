import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import SidebarProfile from "./SidebarProfile";
export default function SideBar({ chats, openChat, deleteChat, newChat }) {
    const [search, setSearch] = useState('');
    //    const deleteChat=(id)=>{
    //     setChats(chats.filter(chat=>chat.id!==id));
    //    }
const user={
    name:"Laxmi Shukla",
    // name:"Pallavi Shukla"
};

  
    return (
        <div className="sidebar">
            <h2 className="logo">FloatChat</h2>
            <div className="searchchat" >&#128269;<input className="input" onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="search..." />  </div>
            <button className="newChat" onClick={newChat}><span className="span">+</span> New Chat</button>
            {/*recent chats or history*/}
            <div className="historyList">
                <h2>Recent Chats</h2>
                {chats.map(chat => (
                    <div key={chat.index} className="historyitem" onClick={() => openChat(chat)}>
                        <span> {chat.title}</span>
                        <button className="deleteBtn" onClick={() => deleteChat(chat.index)}><RiDeleteBin7Line className="deleteicon" /></button>

                    </div>
                ))}
            </div>
         
            <SidebarProfile userName={user.name}/>
        </div>
    );
}