import React from "react";
import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";

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
      </div>
    </div>
  );
};

export default Home;
