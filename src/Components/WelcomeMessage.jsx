import React from 'react';

const WelcomeMessage = (props) => (
    <div className="text-align-center">
        <h3>Welcome {props.username}</h3>
    </div>
);

export default WelcomeMessage;
