import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import './index.css';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
         <Header />
         <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
