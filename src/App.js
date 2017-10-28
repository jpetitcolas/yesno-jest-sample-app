import React, { Component } from 'react';

import './App.css';

import askApi from './Api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { answer: null };
    }

    ask = () => askApi().then(answer => this.setState({ answer }));

    render() {
        return (
            <div className="App">
                <div className="question">
                    <input type="text" />
                    <button type="submit" onClick={this.ask}>Ask to the Gods of the Internet!</button>
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
