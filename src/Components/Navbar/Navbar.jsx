import React, { useContext, useState } from "react";
import "./Navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import Avatar from "../../assests/profile-img.png";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [icon, setIcon] = useState(<DarkModeOutlinedIcon />);

  const toggleIcon = () => {
    return setIcon(<LightModeOutlinedIcon />);
  };

  return (
    <div className="navbar">
      <div className="wraper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img src={Avatar} className="avatar" />
          </div>

          <div className="item">
            <SettingsOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
