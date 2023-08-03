import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Button, TextField, Color} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import "./css/register.scss";
import logo from './img/logo.png'
import Maintitle from "./Title"
import Login from "./login";


const SignUp = () => { // yup을 통한 회원가입 유효성 검사
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    id: Yup.string()
      .min(3, "아이디는 최소 3글자 이상입니다!")
      .max(10, "아이디는 최대 10글자입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "아이디에 특수문자가 포함되면 안됩니다!"
      )
      .required("아이디를 입력하세요!"),
    name: Yup.string()
      .min(2, "이름은 최소 2글자 이상입니다!")
      .max(10, "이름은 최대 10글자입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "이름에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
      )
      .required("이름을 입력하세요!"),
    password: Yup.string()
      .min(6, "비밀번호는 최소 6자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .required("패스워드를 입력하세요!")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "알파벳, 숫자, 특수문자를 모두 포함해야 합니다!"
      ),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
      .required("필수 입력 값입니다!"
      ),
      phone: Yup.string()
      .required("필수 입력 값입니다!"
      ),
  });

  const submit = async (values) => {
    const {id, password, name, email, phone} = values;
    try {
      await axios.post("/register", {//axios를 통해 spring으로 post
        id,
        password,
        name,
        email,
        phone
      });
      toast.success(<h3>회원가입이 완료되었습니다.<br/>로그인 하세요</h3>, {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(()=> {
        navigate("/Home/Home");
      }, 2000);

    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "X﹏X", {
        position: "top-center",
      });
    }
  };

  return (
    <Formik //formik를 통한 데이터 전달
      initialValues={{
        id: "",
        name: "",
        password: "",
        password2: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({values, handleSubmit, handleChange, errors}) => (
        <div className="signup-wrapper">
          <ToastContainer/>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">  {/*내용 입력 폼*/}
            <Maintitle/>
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
                {/* <div className="input-label">이름</div> */}
                <TextField
                  value={values.username}
                  name="name"
                  label="이름"
                  variant="standard"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.name}
                </div>
              </div>
              <div className="input-forms-item">
                {/* <div className="input-label">비밀번호</div> */}
                <TextField
                  value={values.password}
                  name="password"
                  label="비밀번호"
                  variant="standard"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password}
                </div>
              </div>
              <div className="input-forms-item">
                {/* <div className="input-label">비밀번호 확인</div> */}
                <TextField
                  value={values.password2}
                  name="password2"
                  label="비밀번호 확인"
                  variant="standard"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password2}
                </div>
              </div>
              <div className="input-forms-item">
                {/* <div className="input-label">이메일</div> */}
                <TextField
                  value={values.email}
                  name="email"
                  label="이메일"
                  variant="standard"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.email}
                </div>
              </div>
              <div className="input-forms-item">
                {/* <div className="input-label">이메일</div> */}
                <TextField
                  value={values.phone}
                  name="phone"
                  label="전화번호"
                  variant="standard"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.phone}
                </div>
              </div>
              <button className="register-btn">
                회원가입
              </button>
              <div className="go-login">
                    <span className="link">Welcome</span>
                </div>
              <img className="logo" src={logo}></img>
              
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;