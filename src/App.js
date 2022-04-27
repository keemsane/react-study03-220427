import logo from './logo.svg';
import './App.css';

// 리액트용 부트스트랩 사용하기
// 리액트용 부트스트랩 설치
// > yarn add react-bootstrap bootstrap

// 리액트용 부트스트랩 로드 방법 2 가지
// 1. import Button from 'react-bootstrap/Button';
// 2. import { Button } from 'react-bootstrap';

// <Button>부트스트랩 버튼</Button>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
