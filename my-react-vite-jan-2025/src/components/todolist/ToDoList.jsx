import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
  const [newTodo, setNewTodo] = useState(""); // Holds the new todo input value
  const [allToDo, setAllToDo] = useState([]); // Holds the list of todos
  const [currentId, setCurrentId] = useState(1); // Holds the next available ID for todos
  const [filterText, setFilterText] = useState(""); // Holds the filter text

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newToDoItem = {
        toDoId: currentId, // Use the currentId for the unique ID
        text: newTodo,
        checked: false, // Initial state is unchecked
      };

      setAllToDo([...allToDo, newToDoItem]);
      setNewTodo(""); // Clear the input field after adding the todo
      setCurrentId(currentId + 1); // Increment the ID for the next todo
    }
  };

  // Function to handle deleting a todo by its ID
  const deleteTodo = (id) => {
    setAllToDo(allToDo.filter((todo) => todo.toDoId !== id));
  };

  // Function to toggle the checked state of a todo
  const toggleChecked = (id) => {
    setAllToDo(
      allToDo.map((todo) =>
        todo.toDoId === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Function to handle filtering todos based on the filter text
  const filteredTodos = allToDo.filter((todo) =>
    todo.text.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter tasks"
        />
      </div>

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>ToDo</th>
            <th>Checkbox</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <ToDoItem
                key={todo.toDoId}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleChecked={toggleChecked}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Tasks Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
