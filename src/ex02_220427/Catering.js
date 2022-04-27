import React from 'react';
// import './Home06.css';

function Home() {
  return (
    <div>
      {/* header
      <div class="bg-primary text-white text-center p-5">
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div> */}
      {/* navigation bar */}
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* main */}
      <div class="container mt-5">
        <div class="row">
          {/* side bar */}
          {/* <div class="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me : </h5>
            <div className="fakeimg">Fake IMAGE</div>
            <p>If you wanna pretty, every wanna pretty 안된다는 말은 No No No No</p>
            <h3 class="mt-4"> Some Links </h3>
            <p>어디서나 당당하게 걷기</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div> */}
          {/* main content */}
          <div class="col-sm-12">
            <h2>TITLE Heading</h2>
            <h5> Title description, Apr 27, 2022</h5>
            <div class="fakeimg">FAKE IMAGE</div>
            <p>마음은 예쁘게 표정은 산뜻하게</p>
            <h2 class="mt-5">제목.</h2>
            <h5> 글 설명.. 2022. 04. 27</h5>
            <div class="fakeimg">FAKE IMAGE</div>
            <p>하룰 시작하면서 잊지 말아야하죠</p>
            <p>시사상식은 선택 다 끊임없는 노력이죠~</p>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          {/* side bar */}
          {/* <div class="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me : </h5>
            <div className="fakeimg">Fake IMAGE</div>
            <p>If you wanna pretty, every wanna pretty 안된다는 말은 No No No No</p>
            <h3 class="mt-4"> Some Links </h3>
            <p>어디서나 당당하게 걷기</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div> */}
          {/* main content */}
          <div class="col-sm-12">
            <h2>TITLE Heading</h2>
            <h5> Title description, Apr 27, 2022</h5>
            <div class="fakeimg">FAKE IMAGE</div>
            <p>마음은 예쁘게 표정은 산뜻하게</p>
            <h2 class="mt-5">제목.</h2>
            <h5> 글 설명.. 2022. 04. 27</h5>
            <div class="fakeimg">FAKE IMAGE</div>
            <p>하룰 시작하면서 잊지 말아야하죠</p>
            <p>시사상식은 선택 다 끊임없는 노력이죠~</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Home;

// 문제 1) Home.js, Home.css 파일을 활용하여 Home2.js, Home2.css 파일을 생성, Home.js에 있는 소스의 내용을 header, main, footer 파일로 구분해 각각의 파일로 분리 및 저장, Home2.js 에서 통합해서 최종 출력하는 프로그램으로 작성

// 문제 2) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.html 로 접속하여 출력되는 웹 화면을 부트스트랩을 통해서 작성
// 하나의 파일에서 모두 작성해도 되고, 여러 컴포넌트 파일로 나누어서 작성해도 됨.
