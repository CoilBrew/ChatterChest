import React from 'react';

const WelcomeMessage = (props) => (
    <div className="Welcome underline">
        <h3>Welcome {props.username}</h3>
    </div>
);

export default WelcomeMessage;