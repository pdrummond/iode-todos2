import todoReducer from "./todoReducer";
import { addTodo, toggleTodo, deleteTodo } from "../actionCreators/todoActionCreators";

describe("todoReducer", () => {
  it("should return initial state", () => {
    expect(todoReducer(undefined, {})).toEqual({
      nextTodoId: 2,
      todos: [
        {
          id: 1,
          text: "Todo 1",
          completed: false
        }
      ]
    });
  });

  it("should handle ADD_TODO", () => {
    const state = todoReducer(undefined, addTodo("Todo 2"));
    expect(state.todos.length).toBe(2);
    expect(state.nextTodoId).toBe(3);
    expect(state.todos[1]).toEqual({
      id: 2,
      text: "Todo 2",
      completed: false
    });
  });

  it("should handle TOGGLE_TODO", () => {
    const state = todoReducer(undefined, toggleTodo(1));
    expect(state.todos[0].completed).toBe(true);
  });

  it("should handle DELETE_TODO", () => {
    const state = todoReducer(undefined, deleteTodo(1));
    expect(state.todos.length).toBe(0);
  });
});
