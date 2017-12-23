import React, { Component } from 'react';
import Header from './Components/Header';
import WelcomeMessage from './Components/WelcomeMessage';
import Messages from './Components/Messages';
import OnlineUsers from './Components/OnlineUsers';
import MessageForm from './Components/MessageForm';
import './css/main.css';
import io from 'socket.io-client'
let socket = io()

class App extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            username: "user01",
            online: ["user01", "user02"],
            message: "",
            messages: []
        });
    }

    componentDidMount(){
        this.handleMessageUpdate();
    }

    handleSubmit(event) {
        event.preventDefault();
        socket.emit('chat message', this.state.message);
        this.setState({message: ""});
    }

    handleMessageUpdate() {
        //When the component mounts, sends out a request for messages
        socket.emit('request messages');
        // When the component mounts, sets up a listener for 'messages'
        socket.on('messages', (messages) => {
            this.setState({messages: messages});
        });
    }

    render() {
        return (
            <div>
                <div className="blue">
                    <Header header="ChatterChest" />
                </div>
                <div className="BelowTitle">
                    <WelcomeMessage username={this.state.username} />
                    <Messages
                        messages={this.state.messages}
                    />
                    <MessageForm
                        message={this.state.message}
                        handleMessageChange={(event) => this.setState({message: event.target.value})}
                        handleSubmit={(event) => this.handleSubmit(event)}
                    />
                    <OnlineUsers online={this.state.online} />
                </div>
            </div>
        );
    }
}

export default App;
