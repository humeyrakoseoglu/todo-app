import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <>
    <section class="todoapp">
       <Header />
       <Content />
    </section>
    <Footer />
    </>
  );
}

export default App;
