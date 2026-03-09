import React,{useState} from "react";
import Sidebar from "./SideBar";
import  OldChat from "./oldChat";
import "./HistoryPage.css";
// import { Sidebar } from "lucide-react";
// import {Link} from 'react-router-dom'

export default function HistoryPage(){
const[chats,setChats]=useState([
    {id:1,title:" this is the chat history page of this website"},
    {id:2,title:"chat number 2"},
    {id:3,title:"chat number 3"}
]);
const[selectedChat,setSelectedChat] = useState(null);

const openChat=(chat)=>{setSelectedChat(chat);
};
const deleteChat =(index)=>{
    setChats(chats.filter(chat=>chat.index!==index));
   
};
// const newChat=()=>{
//     const newChatName="New Chat"+(chats.length+1);
//      const updatedChats=[...chats,newChatName];
//      setChats(updatedChats);
//     setSelectedChat(newChatName);
// };
const newChat = () => {
  const newId = chats.length > 0 ? Math.max(...chats.map(c => c.index)) + 1 : 1;
  const newChatObj = {
    index: newId,
    title: "New Chat " + (chats.length + 1)
  };
  
  setChats([...chats, newChatObj]);
  setSelectedChat(newChatObj); // Pass the whole object, not just the string
};

return (
    <div className="History-Container">
        <Sidebar chats={chats} openChat={openChat} deleteChat={deleteChat} newChat={newChat}/>
        <OldChat selectedChat={selectedChat}/>

    </div>
    
);
}