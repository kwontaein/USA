import "./css/header.scss";
import { Link } from "react-router-dom";
import App from "./App";
import { useState } from "react";

const Header = ({name}) => {
  const [Name, setName] = useState(name);

  function Logout(){
    setName(false);
}

  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">
          <span className="ToMain">Kingsman</span>
        </Link>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="header-menu">
        <div className="header-content"><Link to="Dashboard">DashBoard </Link></div>
        <div className="header-content"><Link to="Member">Member </Link></div>
        <div className="header-content"><Link to="umbrella">Umbrella </Link></div>
        <div className="header-content"><Link to="sign-up">Register </Link></div>
      </div>
    </div>
  );
};

export default Header;