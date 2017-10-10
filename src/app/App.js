import React, { Component } from "react";
import logo from "./logo.svg";
import TodoList from "../todo/containers/TodoList/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
