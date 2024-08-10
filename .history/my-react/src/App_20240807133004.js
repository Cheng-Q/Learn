import logo from './logo.svg';
import './App.css';
function MyButton(){
  return (
    <button>这是测试按钮</button>
  )
}
function App() {
  return (
    <div className="App">
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
          开始学习啦
          <MyButton />
        </a>
      </header>
    </div>
  );
}

export default App;
