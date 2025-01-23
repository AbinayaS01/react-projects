export function TodoItem({todo,removeTodo,toggleChecked}){
    return <>
    <tr>
        <td>
        <input 
            type="checkbox" 
            checked={todo.checked} 
            onChange={() => toggleChecked(todo.todoId)} 
          />
        </td>
        <td>{todo.todoId}</td>
        <td>{todo.todoText}</td>
        <td><button type="button"
         className="btn btn-danger"
        onClick={()=>removeTodo(todo.todoId)}>Delete
            </button></td>
            <td>
            {todo.checked ? (
            <span style={{ color: 'green' }}>✔</span> // Green check for checked
          ) : (
            <span style={{ color: 'red' }}>✘</span> // Red cross for unchecked
          )}
            </td>
    </tr>

    </>
}