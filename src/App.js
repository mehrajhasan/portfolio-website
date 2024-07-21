import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Skills from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
    </div>
  );
}

export default App;
