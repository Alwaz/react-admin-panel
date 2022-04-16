import React from "react";
import "./List.scss";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import DataTable from "../../Components/Data/DataTable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
