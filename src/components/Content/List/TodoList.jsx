import {useTodo} from "../../../context/TodoContext"
import ListItem from "./Listtem";

let filtered = null;

function TodoList() {
  const {todos, filter} = useTodo();

  filtered = todos;

  if(filter !== "all"){
    filtered = todos.filter((todo)=>
    filter === 'active' 
    ? todo.completed === false 
    : todo.completed === true );
  }
  
  return (
    <ul className="todo-list">
      {//todos.map bize her defasında bir todo döndürecek
        filtered.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
        ))
      }
		</ul>
  );
}

export default TodoList;
