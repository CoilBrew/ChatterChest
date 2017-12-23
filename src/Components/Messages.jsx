import React from 'react';

const Messages = ({messages}) => {
    return (
        <div>
            {messages.map((message) => <p>
                <span className="messageContent">{message[0]}</span>
                <span className="timestamp">[{message[1]}]</span>
            </p>)}
        </div>
    );
}

export default Messages;
