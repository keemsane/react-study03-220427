import React from 'react';
import { Button } from 'react-bootstrap';

function BSTest01() {
  return (
    <div>
      <h1> 기본 방식대로 부트스트랩 사용하기 </h1>
      <Button variant="btn"> 기본 버튼 </Button>
      <Button variant="primary"> primary 타입 </Button>
      <Button variant="success"> success 타입 </Button>
      <Button variant="info"> info 타입 </Button>
      <Button variant="warning"> warning 타입 </Button>
      <Button variant="outline-info"> outline info 타입 </Button>
      <Button variant="outline-warning"> outline warning 타입 </Button>
      <Button variant="danger"> 테마 색상 danger </Button>
      <Button variant="light"> 테마 색상 light </Button>
      <Button variant="dark"> 테마 색상 dark </Button>
      <Button variant="link"> link 버튼 </Button>
      <hr/><hr/>
      {/* <Button className='btn'> 기본 버튼 </Button> */}
    </div>
  );
}

export default BSTest01;
