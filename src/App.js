import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AI事实核查员
        </p>
        <a
          className="App-link"
          href="https://chat.openai.com/g/g-pAwDFQj1H-aishi-shi-he-cha-yuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChatGPT版 点我
        </a>
      </header>
    </div>
  );
}

export default App;
