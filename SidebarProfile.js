import React from "react";
export default function SidebarProfile({userName}){
    const getShortForm =(name)=>{
        return name.split(" ").map(word=>word[0]).join("").toUpperCase();
    };
    const getShortFormColor = (name) => {
    const colors = [
      "#FF6B6B",
      "#6BCB77",
      "#4D96FF",
      "#FFD93D",
      "#845EC2",
      "#00C9A7"
    ];

    let hash = 0;

    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };
    return(
        <div className="sidebar-profile">
            <div className="shortForm" style={{backgroundColor:getShortFormColor(userName)}}>{getShortForm(userName)}</div>
            <span className="user-name">{userName}</span>
        </div>
    );
}