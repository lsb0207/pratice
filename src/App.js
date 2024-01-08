/* eslint-disable */
import './App.css';
import Menu from './Menu';
import {useState} from "react";

function App() { // 메인 페이지임 HTML 짜는 부분이라고 보면 좋을것 같은데
    function ASE(){
        return 100
    }

    let posts = '강남 고기 맛집'; // 서버에서 받아온 데이터라고 치자.
    //document.getElementById().innerHTML=''? 이런 코드로 HTML에서는 변경함
    // 하지만 jsx 문법에서는 해당하지않음.{} 를 사용
    let [글제목,b] = useState('남자 코드 추천') //자바스크립트의 Destructuring 문법 , 자동 재 랜더링
    let num = [1,2,3];



    return (
        <div className="App">
            <div className="black-nav">
                <h4>처음 개발</h4>
            </div>
            <div className="list">
                <h4>{글제목}</h4>
                <p> 01월 03일</p>
            </div>
            <Menu />
        </div> // 위와같이 {} 를 사용해서 변수 그대로 데이터 바인딩 가능
    );



}

export default App;
