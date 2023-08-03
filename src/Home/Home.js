import "../css/home.scss";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <span>Kingsman</span> is Wellcome you!
      </div>
      <div className="home-contents">
        Kingsman은 스마트 우산 대여 시스템입니다
      </div>
      <div className="my-website">
        <div className="my-website-title">USA - Kingsman</div>
      </div> 
      <div >
        <Link to="/Login" className="tologin">로그인하러 가기</Link>
      </div>
    </div>
  )
}
export default Home;