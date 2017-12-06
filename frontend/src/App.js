import React, { Component } from 'react';
import './App.css';

const Header = () => <h1 className="MainHeader">ChatterChest</h1>

const WelcomeMessage = (props) => <h3>Welcome {props.username}</h3>

const Messages = (props) => {
    return (
        <div><ul></ul></div>
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
            username: "user01"
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
                </div>
            </div>
        );
    }
}

export default App;
