import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
    return (
        <div>
            <h1>ChatterChest</h1>
            <h3>Welcome {props.username}</h3>
        </div>
    );
}

const Messages = (props) => {
    return (
        <div><ul></ul></div>
    );
}

const SubmitMessage = (props) => {
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
                <Header username={this.state.username} />
                <Messages />
                <SubmitMessage />
            </div>
        );
    }
}

export default App;
