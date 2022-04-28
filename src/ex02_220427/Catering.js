import React from 'react';
import './Catering.css';

function Catering() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-white navbar-light fixed-top shadow-lg">
        <div class = "container-fluid">
        <a class="navbar-brand" href="#">
          Gourmet au Catering
        </a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href = "#menu">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href = "#contact">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
      <main class="container">
        {/* 메인이미지 */}
        {/* <div>
          <div class="col-md-10"> */}
            <figure class = 'figure position-relative mt-5'>
              <img
                src="https://www.w3schools.com/w3images/hamburger.jpg"
                alt="HamBurger"
                class="figure-img img-fluid"
                width={1600}
                height={800}
                
              />
              <figcaption class ='figure-caption'>
              <h1 class="">Le Catering</h1>
              </figcaption>
            </figure>
          {/* </div>
        </div> */}
        {/* about */}
        <div class="row mt-5" id = "about">
          <div class="col mx-auto">
            <div class="row">
              <div class="col-sm-4 offset-sm-2 p-3 mt-5">
                <img
                  src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-sm-4 p-3  mt-5" >
                <h1>About Catering</h1>
                <h5>Tradition since 1889</h5>
                <p class="text-sm-start">
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
                  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.We only use seasonal ingredients. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <kbd class = 'bg-secondary opacity-50'>seasonal</kbd> ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* menu */}
        <div class="row mt-5" id = "menu">
          <div class="col mx-auto">
            <div class="row">
              <div class="col-sm-4 offset-sm-2 p-3 mt-5" >
                <h1 class="p-3">Our Menu</h1>
                <h5 class="text-sm-start">Bread Basket</h5>
                <p class="text-sm-start">Assortment of fresh baked fruit breads and muffins 5.50</p>
                <h5 class="text-sm-start">Honey Almond Granola with Fruits</h5>
                <p class="text-sm-start">
                  Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
                </p>
                <h5 class="text-sm-start">Belgian Waffle</h5>
                <p class="text-sm-start">Vanilla flavored batter with malted flour 7.50</p>
                <h5 class="text-sm-start">Scrambled eggs</h5>
                <p class="text-sm-start">
                  Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
                </p>
                <h5 class="text-sm-start">Blueberry Pancakes</h5>
                <p class="text-sm-start">With syrup, butter and lots of berries 8.50</p>
              </div>
              <div class="col-sm-4 p-3 mt-5">
                <img 
                  src="https://www.w3schools.com/w3images/tablesetting.jpg" 
                  alt=""
                  class = "img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* contact */}
        <div class="p-5 mt-5" id = "contact">
          <div>
            <h1>Contact</h1>
            <p>어쩌구 저쩌구</p>
          </div>
          <div>
            <input type="text" class="form-control-plaintext" placeholder="Name" />
          </div>
          <div>
            <input type="text" class="form-control-plaintext" placeholder="How Many People" />
          </div>
          <div>
            <input type="text" class="form-control-plaintext" placeholder="오늘 날짜" />
          </div>
          <div>
            <input
              type="text"
              class="form-control-plaintext"
              placeholder="Message | Special requirements"
            />
          </div>
          <button type="button" class="btn btn-secondary">
            Send Message
          </button>
        </div>
      </main>
      <footer class="footer text-black text-link">Powered by w3.css</footer>
    </div>

    // <div>
    //   {/* header
    //   <div class="bg-primary text-white text-center p-5">
    //     <h1>My First Bootstrap 5 Page</h1>
    //     <p>Resize this responsive page to see the effect!</p>
    //   </div> */}
    //   {/* navigation bar */}
    //   <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    //     <div class="container-fluid">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" href="#">
    //             Active
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled" href="#">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   {/* main */}
    //   <div class="container mt-5">
    //     <div class="row">
    //       {/* main content */}
    //       <div class="col-sm-12">
    //         <h2>TITLE Heading</h2>
    //         <h5> Title description, Apr 27, 2022</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>마음은 예쁘게 표정은 산뜻하게</p>
    //         <h2 class="mt-5">제목.</h2>
    //         <h5> 글 설명.. 2022. 04. 27</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>하룰 시작하면서 잊지 말아야하죠</p>
    //         <p>시사상식은 선택 다 끊임없는 노력이죠~</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="container mt-5">
    //     <div class="row">
    //       {/* main content */}
    //       <div class="col-sm-12">
    //         <h2>TITLE Heading</h2>
    //         <h5> Title description, Apr 27, 2022</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>마음은 예쁘게 표정은 산뜻하게</p>
    //         <h2 class="mt-5">제목.</h2>
    //         <h5> 글 설명.. 2022. 04. 27</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>하룰 시작하면서 잊지 말아야하죠</p>
    //         <p>시사상식은 선택 다 끊임없는 노력이죠~</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="container mt-5">
    //     <div class="row">
    //       {/* main content */}
    //       <div class="col-sm-12">
    //         <h2>TITLE Heading</h2>
    //         <h5> Title description, Apr 27, 2022</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>마음은 예쁘게 표정은 산뜻하게</p>
    //         <h2 class="mt-5">제목.</h2>
    //         <h5> 글 설명.. 2022. 04. 27</h5>
    //         <div class="fakeimg">FAKE IMAGE</div>
    //         <p>하룰 시작하면서 잊지 말아야하죠</p>
    //         <p>시사상식은 선택 다 끊임없는 노력이죠~</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* footer */}
    //   <div class="mt-5 p-4 bg-dark text-white text-center">
    //     <p>Footer</p>
    //   </div>
    // </div>
  );
}

export default Catering;

// 문제 1) Home.js, Home.css 파일을 활용하여 Home2.js, Home2.css 파일을 생성, Home.js에 있는 소스의 내용을 header, main, footer 파일로 구분해 각각의 파일로 분리 및 저장, Home2.js 에서 통합해서 최종 출력하는 프로그램으로 작성

// 문제 2) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.html 로 접속하여 출력되는 웹 화면을 부트스트랩을 통해서 작성
// 하나의 파일에서 모두 작성해도 되고, 여러 컴포넌트 파일로 나누어서 작성해도 됨.
