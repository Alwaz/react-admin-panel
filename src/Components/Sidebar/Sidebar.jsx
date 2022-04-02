import React from "react";
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

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">admin</span>
        </div>
        {/* <hr /> */}

        <div className="middle">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dasboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
            <li>
              <Inventory2Icon className="icon" />
              <span>Product</span>
            </li>
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
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
