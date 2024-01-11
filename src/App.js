/* eslint-disable */
import './App.css';

import {useEffect, useState} from "react";
import Container from './Container';
import Dropdown from "./Dropdown";
import MenuList from "./MenuList";
import MenuList1 from "./MenuList1";

function App() { // 메인 페이지임 HTML 짜는 부분이라고 보면 좋을것 같은데

   const[ishiddenMenu,sethiddenMenu] = useState(false)

    const handleClickMenu =() =>{
       sethiddenMenu(!ishiddenMenu)
    }
    const handleBlurMenu = () =>{
       setTimeout(()=>{
           sethiddenMenu(false)
       },200);
    }
    const[ishiddenList,sethiddenList] = useState(false)

    const handleClickList =() =>{
        sethiddenList(!ishiddenList)
    }
    const handleBlurList = () =>{
        setTimeout(()=>{
            sethiddenList(false)
        },200);
    }

    /*const styleWrap2 = {
       width : ishiddenMenu ? '70%' : '100%'

    }*/
    const styleWrap1 ={
       flexdirection : ishiddenMenu ? 'row-reverse' : 'row'

    }



    return (
        <div className="wrap1" style={styleWrap1}>
            <div className="wrap2" >
                <div className="header">
                    <div className="Menu"onBlur={handleBlurMenu}> {/*블러 부분이 필요한 이유 생각해보자.*/}
                        <label onClick={handleClickMenu}>
                        <button className="Button">목록{ishiddenMenu ? '◀':'▶'}</button>
                        </label>

                     {/*이부분 고쳐야 할듯
                    목록 버튼은 클릭시 wrap의 width의 크기를 70%로 바꾸고 오른족 정렬하고
                    나머지 30%가 이제 무언가 나오는 ㅇㅇ. 그런형태를 생각해야할거같은데.
                    */}
                    </div>
                    <div className="title"><div>처음개발</div></div>
                    <div className="Menu" onBlur={handleBlurList}>
                        <label onClick={handleClickList}>
                        <button className="button">메뉴{ishiddenList ? '▶':'◀'}</button>
                        </label>
                    </div>
                </div>
                <div className="content">

                    <div className="main">애</div>

            </div>
            </div>
            <div className="Menubar">
                {ishiddenMenu && <MenuList/>}
            </div>
            <div className="Menubar1">
                {ishiddenList && <MenuList1/>}
            </div>
        </div>


        /*
        <div className="App">
            <nav>
                <div className="black-nav">
                    <h4>처음 개발</h4>
                    <div className="Container">
                        <Container/>
                    </div>
                </div>
            </nav>

            <div className="list">
                <h4>남자 코드 추천</h4>
                <p> 01월 03일</p>
            </div>
            </div>*/
            )

}

export default App;
