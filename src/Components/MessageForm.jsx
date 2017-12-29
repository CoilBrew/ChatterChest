import React from 'react';

const MessageForm = (props) => {
    return (
        <div className="messageForm">
            <form onSubmit={props.handleSubmit}>
                <input
                    id="textbox1"
                    className="textbox textbox--unhighlighted"
                    type="text"
                    value={props.message}
                    onChange={props.handleMessageChange}
                    onClick={props.handleClick}
                    onBlur={props.handleBlur}
                />
                <input 
                    id="submitButton" 
                    className="submitButton" 
                    type="submit" 
                    value="Submit" 
                    onClick={props.styleSubmit}
                    onBlur={props.removeStyledSubmit}
                />
            </form>
        </div>
    );
}

export default MessageForm;