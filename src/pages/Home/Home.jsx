import React from "react";
import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">container</div>
    </div>
  );
};

export default Home;
