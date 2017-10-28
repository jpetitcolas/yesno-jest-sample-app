import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: {
                answer: "no",
                forced: false,
                image: "https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif"
            },
        };
    }

    render() {
        return (
            <div className="App">
                <div className="question">
                    <input type="text" />
                    <button type="submit">Ask to the Gods of the Internet!</button>
                </div>

                {this.state.answer && (
                    <div className="answer">
                        <h1>{this.state.answer.answer}</h1>
                        <img src={this.state.answer.image} alt={this.state.answer.answer} />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
