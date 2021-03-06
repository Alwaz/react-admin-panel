import React from "react";
import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Charts/Featured/Featured";
import Chart from "../../Components/Charts/Chart/Chart";
import TableList from "../../Components/Table/TableList";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last (9 months) Revenue" />
        </div>

        <div className="tableContainer">
          <div className="tableTiltle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
