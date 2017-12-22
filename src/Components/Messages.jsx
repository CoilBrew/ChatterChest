import React, { Component } from 'react';

const Messages = ({messages}) => {

    const messageLog = messages.map ( (message) => {
        return ( <p>{message}</p>)
    });

    return (
        <div>
            {messageLog}
        </div>
    )
}

export default Messages;
