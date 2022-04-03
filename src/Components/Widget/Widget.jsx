import React from "react";
import "./Widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const Widget = ({ type }) => {
  let data;

  // dummy data
  let amount = 100;
  let diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ background: "#ffd5d7", color: "red" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ background: "#fbecd1", color: "#d4b763" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnings",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{ background: "#cde7cd", color: "#69af68" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "MY  BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ background: "#e5cde7", color: "#6f1f70" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="text">{data.title}</span>
        <div className="number">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="seeAll">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon className="counter" />
          +12%
        </div>
        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
