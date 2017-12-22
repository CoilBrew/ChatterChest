import React from 'react';

const Messages = ({messages}) => {

    return (
        <div>
            {messages.map((message) => <p>{message}</p>)}
        </div>
    )
}

export default Messages;
