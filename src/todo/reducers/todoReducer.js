import * as TodoActions from "../actionTypes/todoActionTypes";
import update from "immutability-helper";

const initialState = {
  nextTodoId: 2,
  todos: [
    {
      id: 1,
      text: "Todo 1",
      completed: false
    }
  ]
};

export default function todoReducer(state = initialState, action) {
  console.log("TODO REDUCER");
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      return update(state, {
        todos: { $push: [{ id: state.nextTodoId, text: action.text, completed: false }] },
        nextTodoId: { $set: state.nextTodoId + 1 }
      });
    }
    case TodoActions.TOGGLE_TODO: {
      const index = state.todos.findIndex(t => t.id === action.id);
      return update(state, {
        todos: { [index]: { completed: { $set: !state.todos[index].completed } } }
      });
    }
    case TodoActions.DELETE_TODO: {
      const index = state.todos.findIndex(t => t.id === action.id);
      return update(state, {
        todos: { $splice: [[index, 1]] }
      });
    }
    default:
      return state;
  }
}
