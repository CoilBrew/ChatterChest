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
            message: null,
            messages: []
        });
    }

    componentDidMount(){
        this.handleMessageUpdate()
    }

    handleSubmit(event) {
        event.preventDefault()
        socket.emit('chat message', this.state.message)
            this.setState({ message: '' })
        }

    handleMessageUpdate() {
        socket.on('chat message', (msg) => {
        var currentMessages = this.state.messages
        currentMessages.push(msg);
        this.setState({messages: currentMessages});
        });
    }

    render() {
        return (
            <div>
                <Header header="ChatterChest" />
                <div className="BelowTitle">
                    <WelcomeMessage username={this.state.username} />
                    <Messages
                        messages={this.state.messages}
                    />
                    <MessageForm
                        message={this.state.message}
                        handleMessageChange={(event) => this.setState({message:event.target.value})}
                        handleSubmit={(event) => this.handleSubmit(event)}
                    />
                    <OnlineUsers online={this.state.online} />
                </div>
            </div>
        );
    }
}

export default App;
