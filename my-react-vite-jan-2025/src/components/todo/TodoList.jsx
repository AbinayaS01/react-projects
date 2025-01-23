import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  let [newTodo, setNewTodo] = useState("");
  let [allTodo, setAllTodo] = useState([]);
  let [currentId, setCurrentId] = useState(1);

  let mappedAllTodos = allTodo.map((eachTodo) => (
    <TodoItem
      key={eachTodo.todoId}
      todo={eachTodo}
      removeTodo={(todoId) => deleteTodo(todoId)}
      toggleChecked={(tid) => toggleChecked(tid)}
    ></TodoItem>
  ));

  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function addTodo() {
    let newTodoItem = {
      todoId: currentId,
      todoText: newTodo,
      checked: false,
    };
    setAllTodo([...allTodo, newTodoItem]);
    setNewTodo("");
    setCurrentId(currentId + 1);
  }
  function deleteTodo(tid) {
    setAllTodo(allTodo.filter((eachTodo) => eachTodo.todoId != tid));
  }
  function toggleChecked(id) {
    setAllTodo(
      allTodo.map((todo) =>
        todo.todoId == id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  return (
    <>
      <div className="container m-5">
        <h2 className="text-center">MY TODOS</h2>
        <div className="form-control-group">
          <label htmlFor="text-box" className="form-label">
            <b>Type a TODO</b>
          </label>
          <input
            type="text"
            id="text-box"
            placeholder="Enter the task"
            className="form-control"
            value={newTodo}
            onChange={(event) => handleChange(event)}
          ></input>
          <button
            type="button"
            className="btn btn-success my-2"
            onClick={addTodo}
          >
            ADD
          </button>
        </div>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>CHECKBOX</th>
              <th>ID</th>
              <th>TASK</th>
              <th>DELETE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>{mappedAllTodos}</tbody>
        </table>
      </div>
    </>
  );
}
