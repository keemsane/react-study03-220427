import React from "react";

function click() {
    alert('YOU CLICKED');
}
function BSTest02() {
    return(
        <div>
            <h1>CDN 방식으로 부트스트랩 사용하기</h1>
            <button type = 'button' class = 'btn btn-primary' onClick={click}> primary 버튼 </button>
            <button type = 'button' class = 'btn btn-success' onClick={click}> success 버튼 </button>
            <button type = 'button' class = 'btn btn-info' onClick={click}> info 버튼 </button>
            <button type = 'button' class = 'btn btn-warning' onClick={click}> warning 버튼 </button>
            <button type = 'button' class = 'btn btn-outline-danger' onClick={click}> outlint danger 버튼 </button>
            <button type = 'button' class = 'btn btn-link' onClick={click}> link 버튼 </button>
            <button type = 'button' class = 'btn btn-light' onClick={click}> light 버튼 </button>
            <button type = 'button' class = 'btn btn-dark' onClick={click}> dark 버튼 </button>

        </div>
    );
}

export default BSTest02;