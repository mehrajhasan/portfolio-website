import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
