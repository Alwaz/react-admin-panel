import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InventoryIcon from "@mui/icons-material/Inventory";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">admin</span>
          </Link>
        </div>

        <div className="middle">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dasboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>

            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <Inventory2Icon className="icon" />
                <span>Product</span>
              </li>
            </Link>

            <li>
              <InventoryIcon className="icon" />
              <span>Order</span>
            </li>
            <li>
              <DeliveryDiningIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
              <QueryStatsIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
              <SettingsIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <SettingsIcon className="icon" />

              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <PermIdentityIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOptions"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOptions"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
