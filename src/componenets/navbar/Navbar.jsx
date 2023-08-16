import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutline,
  SearchOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>The Social</span>
        </Link>
        <HomeOutlined />
        {!darkMode ? (
          <DarkModeOutlined style={{ cursor: "pointer" }} onClick={toggle} />
        ) : (
          <WbSunnyOutlined style={{ cursor: "pointer" }} onClick={toggle} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutline />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};
