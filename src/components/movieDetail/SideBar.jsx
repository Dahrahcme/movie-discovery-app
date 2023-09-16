import React from "react";
import Logo from "../assets/img/Logo.svg";
import home from "../assets/img/Home.svg";
import movie from "../assets/img/Movie Projector.svg";
import series from "../assets/img/TV Show.svg";
import upcoming from "../assets/img/Calendar.svg";
import logout from "../assets/img/Logout.svg";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <img src={Logo} alt="movie-box-logo" className="logo" />
      <div className="links">
        <div className="link-image">
          <img src={home} alt="" />
          <img src={movie} alt="" className="active" />
          <img src={series} alt="" className="img3" />
          <img src={upcoming} alt="" className="img4" />
        </div>
        <div className="link-text">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" className="active">Movies</Link>
            </li>
            <li>
              <Link to="/">TV show</Link>
            </li>
            <li>
              <Link to="/">Upcoming</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="aside">
        <p className="main-text">Play movie quizes and earn free tickets</p>
        <p className="small-text">50k people are playing now</p>
        <button>Start playing</button>
      </div>
      <div className="links">
        <div className="image">
          <img src={logout} alt="" />
        </div>
        <div className="text">Logout</div>
      </div>
    </div>
  );
};

export default SideBar;
