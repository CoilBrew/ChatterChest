import React, { Component } from 'react';
import Header from './Components/Header';
import WelcomeMessage from './Components/WelcomeMessage';
import Messages from './Components/Messages';
import OnlineUsers from './Components/OnlineUsers';
import MessageForm from './Components/MessageForm';
import './css/main.css';

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
                    <MessageForm />
                    <OnlineUsers online={this.state.online} />
                </div>
            </div>
        );
    }
}

export default App;
