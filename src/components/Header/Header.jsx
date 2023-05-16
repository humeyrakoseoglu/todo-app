import NewTodoForm from "./NewTodoFrom/NewTodoForm";

function Header() {
  return (
    <header className="header">
		<h1>To Do List</h1>
		<NewTodoForm/>
	</header>
  );
}

export default Header;
