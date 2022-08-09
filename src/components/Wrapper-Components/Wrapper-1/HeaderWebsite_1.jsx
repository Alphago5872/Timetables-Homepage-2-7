import Nont_Profile from "../../../image/Icons/User_logo.webp";
import Newton_Timetable_logo from "../../../image/Icons/Newton_Timetable_logo.png";
import CBT_LOGO from "../../../image/cbt1logo.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const HeaderWebsite = (props) => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={CBT_LOGO} alt="Newton Timetables BETA" />
      </Link>
      {/* <div className="header__navi">
        <Link
          to="/moreteacherstimetable"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>Teacher Timetable</h3>
        </Link>
        <Link
          to="/yeartimetable"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>Year Timetables</h3>
        </Link>
        <h3>News</h3>
        <Link
          to="/Developers"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>About Us</h3>
        </Link>
      </div> */}

      <div className="header__menu">
        <h3> hello</h3>
      </div>

      <div className="header__user">
        <h3 className="header__user--text">
          Good Morning,
          <br />
          Username Here
        </h3>
        <Link to="/settings" className="header__user--profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Profile Picture"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderWebsite;
