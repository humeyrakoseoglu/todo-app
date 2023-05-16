import {useTodo} from "../../../context/TodoContext"
import ListItem from "./Listtem";

function TodoList() {
  const {todos} = useTodo();
  
  return (
    <ul className="todo-list">
      {//todos.map bize her defasında bir todo döndürecek
        todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
        ))
      }
		</ul>
  );
}

export default TodoList;
