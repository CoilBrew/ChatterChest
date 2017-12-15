import React, { Component } from 'react';

const OnlineUsers = (props) => {
    return (
        <div className="OnlineUsers">
            <h3>Online Users</h3>
            <ul>
                {props.online.map((x) => <li>{x}</li>)}
            </ul>
        </div>
    );
}

export default OnlineUsers;