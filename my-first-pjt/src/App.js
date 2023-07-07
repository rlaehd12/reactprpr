import logo from './logo.svg';
import './App.css';  // 자기 컴포넌트 + 하위 컴포넌트까지 적용
import Test from './components/test';


function App() {
  function clickk() {  // app function 내 메서드로 정의
    alert('click!!!!!!!!!!')
  }
  return (  // 리턴 이후 jsx 문법 사용
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          asdfggasdg
        </h1>

        <Test />
        {/* <button onClick={()=>{alert('sadg')}}>asdfsadf</button> */}
        <button onClick={clickk}>asdfsadf</button>

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
