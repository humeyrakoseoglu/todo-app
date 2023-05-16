import {useTodo} from "../../../context/TodoContext"

function ListItem({todo}) {
	const {todos, setTodos, toggleTodo} =  useTodo();
  
  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
		<div className="view">
			<input className="toggle" 
			type="checkbox" 
			checked={todo.completed} 
			onChange={()=> toggleTodo(todo.id)}/>
			<label>{todo.text}</label>
			<button className="destroy"></button>
		</div>
	</li>
  );
}

export default ListItem;
