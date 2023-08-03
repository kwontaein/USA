import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
  const idRef = useRef();
  const nameRef = useRef();
  const pwRef = useRef();
  const emailRef = useRef();
  const numRef = useRef();

  const navigate = useNavigate();

  const handleMember = () => {
    // if (idRef.current.value === "" || idRef.current.value === undefined) {
    //   alert("아이디를 입력하세요!!!");
    //   idRef.current.focus();
    //   return false;
    // }
    // if (pwRef.current.value === "" || pwRef.current.value === undefined) {
    //   alert("패스워드를 입력하세요!!!");
    //   pwRef.current.focus();
    //   return false;
    // }
    // if (emailRef.current.value === "" || emailRef.current.value === undefined) {
    //   alert("이메일을 입력하세요!!!");
    //   emailRef.current.focus();
    //   return false;
    // }
    // if (nameRef.current.value === "" || nameRef.current.value === undefined) {
    //     alert("이름을 입력하세요!!!");
    //     emailRef.current.focus();
    //     return false;
    //   }
    //   if (numRef.current.value === "" || numRef.current.value === undefined) {
    //     alert("번호를 입력하세요!!!");
    //     emailRef.current.focus();
    //     return false;
    //   }

    axios
      .post("http://localhost:8080/register", {
        id: idRef.current.value,
        name: nameRef.current.value,
        psword: pwRef.current.value,
        email: emailRef.current.value,
        num: numRef.current.value,
      })
      .then((res) => {
        console.log("handleMember =>", res);
        // 로그인 성공여부는 res.data.affectedRows가 0인지 1인지 확인하면 됨
        if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
        else alert("회원가입 실패!!!");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div>
      <p></p>
      <form>
        <table border="1" width="300px" align="center">
          <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="id"
                size="20"
                defaultValue=""
                ref={idRef}
                placeholder="아이디를 입력하세요"
              ></input>
            </td>
          </tr><tr>
            <td width="100px">이름</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="name"
                size="20"
                defaultValue=""
                ref={nameRef}
                placeholder="이름을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">패스워드</td>
            <td align="left" width="200px">
              <input
                type="psword"
                name="psword"
                size="20"
                defaultValue=""
                ref={pwRef}
                placeholder="비밀번호를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">이메일</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="email"
                size="20"
                defaultValue=""
                ref={emailRef}
                placeholder="이메일을 입력하세요"
              ></input>
            </td>
          </tr><tr>
            <td width="100px">번호</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="num"
                size="20"
                defaultValue=""
                ref={numRef}
                placeholder="번호를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input
                type="button"
                value="회원등록"
                onClick={handleMember}
              ></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default MemberForm;