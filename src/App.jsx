import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import WelcomeMessage from './Components/WelcomeMessage.jsx';
import Messages from './Components/Messages.jsx';
import OnlineUsers from './Components/OnlineUsers.jsx';
import MessageForm from './Components/MessageForm.jsx';
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
        // When messages recieved, updates the state
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
                <div className="grid">
                    <div className="grid-row">
                        <div className="grid-1-3">
                            <WelcomeMessage className="grid-1-3" username={this.state.username} />
                        </div>
                        <div className="grid-1-3">
                            <Messages className="grid-1-3"
                                messages={this.state.messages}
                            />
                        </div>
                        <div className="grid-1-3">
                            <MessageForm className="grid-1-3"
                                message={this.state.message}
                                handleMessageChange={(event) => this.setState({message: event.target.value})}
                                handleSubmit={(event) => this.handleSubmit(event)}
                            />
                        </div>
                        <div className="grid-1-3">
                            <OnlineUsers online={this.state.online} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
