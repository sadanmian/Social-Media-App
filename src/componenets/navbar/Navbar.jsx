import React from "react";
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
} from "@mui/icons-material";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>The Social</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
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
          <img
            src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
            alt=""
          />
          <span>Sadan Mian</span>
        </div>
      </div>
    </div>
  );
};
