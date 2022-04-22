import React from "react";
import "./New.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const New = () => {
  return (
    <div className="new">
      <Sidebar />

      <div className="new__container">
        <Navbar />
      </div>
    </div>
  );
};

export default New;
