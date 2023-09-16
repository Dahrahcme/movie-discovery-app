import React from "react";
import Logo from "../../assets/img/Logo.svg"
import signIn from "../../assets/img/Menu.svg"
import search from "../../assets/img/Search.svg"
import "./Header.css";
import { Link } from "react-router-dom";
// import search from "./Search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="navBar">
        <Link to="/" className="header_icon" src="">
          <img src={Logo} alt="logo" />
        </Link>
         <Link to="/serarch" className="header_icon" src="">
          <input type="text" placeholder="What do you want to watch?" />
          <div className="search">
            <img src={search} alt="" />
          </div>
        </Link>
        <Link to="/signin" className="header_icon" src="">
          Sigin 
          <img src={signIn} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
