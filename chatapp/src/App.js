import React, { Component } from 'react';
import './App.css';

const Header = () => <h1 className="MainHeader">ChatterChest</h1>

const WelcomeMessage = (props) => <h3>Welcome {props.username}</h3>

const Messages = (props) => {
    return (
        <div><ul></ul></div>
    );
}

const listify = (x) => <li>{x}</li>

const OnlineUsers = (props) => {
    return (
        <div className="OnlineUsers">
            <h3>Online Users</h3>
            <ul>
                {props.online.map(listify)}
            </ul>
        </div>
    );
}

const SubmitMessage = () => {
    return (
        <div>
            <form action="">  
                <input/><button>Send</button>
            </form>
        </div>
    );
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            username: "user01",
            online: ["user01", "user02"]
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="BelowTitle">
                    <WelcomeMessage username={this.state.username} />
                    <Messages />
                    <SubmitMessage />
                    <OnlineUsers online={this.state.online} />
                </div>
            </div>
        );
    }
}

export default App;
