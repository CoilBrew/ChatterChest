import React from 'react';

const MessageForm = ({handleMessageChange, handleSubmit, message}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MessageForm;