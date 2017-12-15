import React, { Component } from 'react';
import Header from './Components/Header';
import WelcomeMessage from './Components/WelcomeMessage';
import Messages from './Components/Messages';
import './css/main.css';

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

const SubmitMessage = () => {
    return (
        <div>
            <form action="">
                <input id="m" /><button>Send</button>
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
                <Header header="ChatterChest" />
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
