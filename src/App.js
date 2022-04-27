import logo from './logo.svg';
import './App.css';
// 하나씩 가져올 때
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
// import CloseButton from 'react-bootstrap/CloseButton'
// import Dropdown from 'react-bootstrap/Dropdown'

// 여러 개 가져올 때
import { Button, Table, CloseButton, Dropdown } from 'react-bootstrap';
import BSTest01 from './bstest03';

// 리액트용 부트스트랩 사용하기
// 리액트용 부트스트랩 설치
// 기본 설치방식
// > yarn add react-bootstrap bootstrap

// CDN을 통해 설치
// index.html에 bootstrap 파일을 로딩(css, js)

// !주의사항!
// 기본 설치 방식으로 설치한 경우 
// bootstrap.min.css를 index.js에 import해서 사용해야 함
// CDN 방식으로 사용할 경우에는 index.js에 import 생략

// import 'bootstrap/dist/css/bootstrap.min.css';

// 리액트용 부트스트랩 태그 로드 방법 2 가지
// 1. import Button from 'react-bootstrap/Button';
// 2. import { Button } from 'react-bootstrap';

// 리액트용 부트스트랩 태그 사용
// <Button>부트스트랩 버튼</Button>
function App() {
  return (
    <div className="App">
      <br />
      <hr />
      <Button className= "btn btn-danger"> 리액트용 부트스트랩 </Button>
      <hr />
      <BSTest01 />

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
