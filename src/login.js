import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Color } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/login.scss";
import logo from './img/logo.png'
import Maintitle from "./Title"
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";

const Login = () => { // yup을 통한 로그인 유효성 검사

  const [Name, setName] = useState("login_ok");

  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    id: Yup.string()
      .required("아이디를 입력하세요!"),

      psword: Yup.string()
      .required("비밀번호를 입력하세요!"),

  });


  const submit = async (values) => {
    const { id, psword } = values;
    await axios.post("http://localhost:8080/login", {//axios를 통해 post
      id,
      psword,
    }).then(function (res) {//response로 모든걸 가져옴
      const lmsg2 = res.success;
      console.log(res);
      if (lmsg2 !== false && lmsg2 !== 'false') {
        window.alert("로그인실패" + res.msg);
        return false;
      } else {
        window.alert("어서오세요!", {
          position: "top-center",
          autoClose: 2000
        });
      }
    }
    );
  };

  return (
    <Formik //formik를 통한 데이터 전달
      initialValues={{
        id: "",
        psword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <div className="signup-wrapper">
          <ToastContainer />
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">  {/*내용 입력 폼*/}
              <Maintitle />
              <div className="input-forms-item">
                {/* <div className="input-label">아이디</div> */}

                <TextField    //텍스트필드 - material ui
                  value={values.id}
                  name="id"
                  label="아이디"
                  variant="standard"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.id}
                </div>
              </div>
              <div className="input-forms-item">
                {/* <div className="input-label">비밀번호</div> */}
                <TextField
                  value={values.psword}
                  name="psword"
                  label="비밀번호"
                  variant="standard"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.psword}
                </div>
              </div>
              <button className="register-btn">
                로그인
              </button>
              <div className="other-page">
                <div className="link-frame"><Link to="/" className="to-page">유저 페이지</Link></div>
                <div className="link-frame2"><span to="/sign-up" className="to-page2">U.S.A</span></div>
                <div className="link-frame"><Link to="/" className="to-page">문의 사항</Link></div>
              </div>
              <div>
                <p className="contact">contact us</p>
                <p className="e-contact">Kosq3964@naver.com</p>
                <p className="e-contact">010-2502-3964</p>
              </div>
              <img className="logo" src={logo}></img>
            </div>
          </form>
        </div>
      )}

    </Formik>
  );
};

export default Login;