import NewTodoForm from "./NewTodoFrom/NewTodoForm";

function Header() {
  return (
    <header className="header">
		<h1>todos</h1>
		<NewTodoForm/>
	</header>
  );
}

export default Header;
