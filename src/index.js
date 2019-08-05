import React, { Component } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.css";

import { listen, unlisten } from "./listener";

const listenerElementId = "listener";

class App extends Component {
  state = {
    events: [],
    listening: false
  };

  componentDidMount() {
    listen(listenerElementId, this.appendEvent);
  }

  componentWillUnmount() {
    unlisten(listenerElementId, this.appendEvent);
  }

  appendEvent = event => {
    event.preventDefault();
    this.setState(
      {
        events: [
          ...this.state.events,
          `EVENT (${new Date().getTime()}): ${event.type}`
        ]
      },
      () => {
        const logElement = document.getElementById("log");
        const logContainerElement = document.getElementById("log-container");
        logContainerElement.scrollTop = logElement.scrollHeight;
      }
    );
  };

  listen = () => {
    this.setState({
      listening: true
    });
  };

  unlisten = () => {
    this.setState({
      listening: false
    });
  };

  render() {
    const { events, listening } = this.state;
    const listenerClassName = classNames("interactor", {
      "interactor--active": listening
    });

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div
          id="listener"
          className={listenerClassName}
          onMouseOver={this.listen}
          onMouseOut={this.unlisten}
          onTouchStart={this.listen}
          onTouchEnd={this.unlisten}
        >
          <p>Mouse or Touch here</p>
          <input placeholder="Focus here" />
        </div>
        <div id="log-container" className="log-container">
          <pre id="log" className="log">
            {events.map(event => `${event}\n`)}
          </pre>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
