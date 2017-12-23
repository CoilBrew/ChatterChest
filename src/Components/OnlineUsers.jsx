import React from 'react';

const OnlineUsers = (props) => {
    return (
        <div className="OnlineUsers leftline">
            <h3>Online Users</h3>
            <h3>THIS IS HARDCODED ATM</h3>
            <ul>
                {props.online.map((x) => <li>{x}</li>)}
            </ul>
        </div>
    );
}

export default OnlineUsers;
