import React, { Component } from 'react';
import Header from './Components/Header';
import WelcomeMessage from './Components/WelcomeMessage';
import Messages from './Components/Messages';
import OnlineUsers from './Components/OnlineUsers';
import MessageForm from './Components/MessageForm';
import './css/main.css';
import io from 'socket.io-client'
let socket = io()

// IK, this is horrible
// Let's think of a better way of naming and sorting all this
const changeCSS = (id) => document.getElementById(id).className = "textbox textbox--highlighted";
const changeCSS2 = (id) => document.getElementById(id).className = "textbox textbox--unhighlighted";

const submitButtonEffect = (id) => document.getElementById(id).className = "submitButton submitButton--effect";
const submitButtonEffect2 = (id) => document.getElementById(id).className = "submitButton";
// End

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
                        handleClick={() => changeCSS("textbox1")}
                        handleBlur={() => changeCSS2("textbox1")}
                        styleSubmit={() => submitButtonEffect("submitButton")}
                        removeStyledSubmit={() => submitButtonEffect2("submitButton")}
                    />
                    <OnlineUsers online={this.state.online} />
                </div>
            </div>
        );
    }
}

export default App;
