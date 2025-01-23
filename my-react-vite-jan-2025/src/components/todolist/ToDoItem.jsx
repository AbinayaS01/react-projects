export function ToDoItem({ todo, deleteTodo, toggleChecked }) {
    return (
      <tr>
        <td>{todo.toDoId}</td>
        <td>{todo.text}</td>
        <td>
          <input 
            type="checkbox" 
            checked={todo.checked} 
            onChange={() => toggleChecked(todo.toDoId)} 
          />
        </td>
        <td>
          {todo.checked ? (
            <span style={{ color: 'green' }}>✔</span> // Green check for checked
          ) : (
            <span style={{ color: 'red' }}>✘</span> // Red cross for unchecked
          )}
        </td>
        <td>
          <button onClick={() => deleteTodo(todo.toDoId)}>Delete</button>
        </td>
      </tr>
    );
  }