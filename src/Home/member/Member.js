import React, { useState } from 'react';
import "../../css/member.scss";
import SearchIcon from '@mui/icons-material/Search';
import Newuser from './newuser';
import Intrucduce from './Intruduce';
import Usercontrol from './Usercontrol';
import Admincontrol from './Admincontrol';



const Member = () => {
  const [member_control1, setmember_control1] = useState("0");
  const [member_control2, setmember_control2] = useState("0");
  const [member_control3, setmember_control3] = useState("0");

  const ClickMenu1 = () => {
    setmember_control1("1")
    setmember_control2("0")
    setmember_control3("0")
  }

  const ClickMenu2 = () => {
    setmember_control1("0")
    setmember_control2("1")
    setmember_control3("0")
  }

  const ClickMenu3 = () => {
    setmember_control1("0")
    setmember_control2("0")
    setmember_control3("1")
  }

  var Member_control = document.getElementsByClassName("Member-control");

  function handleClick(event) {
    console.log(event.target);
  
    console.log(event.target.classList);
  
    if (event.target.classList[1] === "clicked") {
      event.target.classList.remove("clicked");
    } else {
      for (var i = 0; i < Member_control.length; i++) {
        Member_control[i].classList.remove("clicked");
      }
  
      event.target.classList.add("clicked");
    }
  }
  
  function init() {
    for (var i = 0; i < Member_control.length; i++) {
      Member_control[i].addEventListener("click", handleClick);
    }
  }
  init();
  
  return (
    <div className="Member-wrapper">
      <div className="Member-title">
        <span>사용자 관리</span>
      </div>
      <div className="Member-contents">
        <div className="Member-contents1">
          <div className="Member-list1">
            <div className="Member-header">
              <div className="Member-control" onClick={ClickMenu1}>신규 회원</div>
              <hr />
              <div className="Member-control" onClick={ClickMenu2}>회원 관리</div>
              <hr />
              <div className="Member-control" onClick={ClickMenu3}>관리자 관리</div>
            </div>
          </div>
          <div className="Member-dashboard">
            <div className="Member-search">
              <div className="Mimg-frame"><SearchIcon className="Member-img" /></div>
              <div className="Search-title">이름 검색 :  <input
                type="text"
                name="search"
                className="Search-input"
                id="search"
                placeholder="이름 입력"
              /></div>
            </div>
            <div className="Member-list2">
              {member_control1 === "0" && member_control2 === "0" && member_control3 === "0" ? <Intrucduce /> : null}
              {member_control1 === "1" ? <Newuser /> : null}
              {member_control2 === "1" ? <Usercontrol /> : null}
              {member_control3 === "1" ? <Admincontrol /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="my-website">
        <div className="my-website-title">USA - Kingsman</div>
      </div>
    </div>
  )
}
export default Member;