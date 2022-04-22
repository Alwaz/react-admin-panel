import React from "react";
import "./SinglePage.scss";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import UserProfile from "../../Components/ProfileCard/UserProfile";
import Chart from "../../Components/Charts/Chart/Chart";
import TableList from "../../Components/Table/TableList";
const SinglePage = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="pageContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h2 className="title">Information</h2>
            <UserProfile />
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending Last Month" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
