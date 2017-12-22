import React, { Component } from 'react';

const Messages = ({messages}) => {

    return (
        <div>
            {messages.map((message) => <p>{message}</p>)}
        </div>
    )
}

export default Messages;
