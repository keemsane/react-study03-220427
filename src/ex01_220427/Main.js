import React from 'react';

function Main() {
  return (
    <div class="container mt-5">
      <div class="row">
        {/* side bar */}
        <div class="col-sm-4">
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
        </div>
        {/* main content */}
        <div class="col-sm-8">
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
  );
}

export default Main;