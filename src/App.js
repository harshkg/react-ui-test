import logo from './logo.svg';
import './App.css';
import Greet from './componenet/Greet';
import Greet1 from './componenet/Greet1';
import Welcome from './componenet/Welcome';
import Hello from './componenet/Hello';
import Hello1 from './componenet/Hello1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet/>
        <Greet1/>
        <Welcome/>
        <Hello/>
        <Hello1/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
