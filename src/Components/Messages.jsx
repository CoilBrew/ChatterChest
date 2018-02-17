import React from 'react';

const Messages = ({messages}) => {
    return (
        <div>
            {messages.map((message) => <p className="message">
                <span className="messageContent">{message.content}</span>
                <span className="timestamp">[{message.timestamp}]</span>
            </p>)}
        </div>
    );
}

export default Messages;
