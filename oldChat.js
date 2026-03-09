import React from 'react';
export default function oldChat({selectedChat}){
    return (
        <div className="oldchat">
            {selectedChat?(<div className='chatContent'> 
            <h2>{selectedChat.title}</h2>
        <p>Chat messages will appear here</p>
        </div>
        ):(
            <div className='welcomeScreen'> <h1> Welcome to FloatChat 🌏</h1>
            <p> Select a chat from history to view</p>
            </div>
        )}
        </div>
    );
}