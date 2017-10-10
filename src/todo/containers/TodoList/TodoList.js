import React from "react";
import { connect } from "react-redux";
import * as TodoActionCreators from "../../actionCreators/todoActionCreators";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    console.log("TodoList.render() props=", this.props);
    return (
      <div className="TodoList">
        <ul>{todos.map(({ text }, index) => <li key={index}>{text}</li>)}</ul>
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }

  onClick = () => {
    const { todos, addTodo } = this.props;
    addTodo(`Todo ${todos.length + 1}`);
  };
}

export default connect(state => state.todo, { ...TodoActionCreators })(TodoList);
