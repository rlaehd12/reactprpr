import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import RefTest from './components/RefTest';
import AxiosTest from './components/AxiosTest';
import RenderingTest from './components/RenderingTest';
import ListTest from './components/ListTest';
import CalendarTest from './components/CalendarTest';

function App() {
  return (
    <div className="App">
      <CalendarTest />
      <ListTest />
      <RenderingTest />
      <AxiosTest />
      <Test />
      <RefTest />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test />
      </header>
    </div>
  );
}

export default App;
