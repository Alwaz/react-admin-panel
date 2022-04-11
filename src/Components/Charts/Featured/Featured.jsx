import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <p className="heading">Total Revenue</p>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={`70%`} strokeWidth={5} />
        </div>

        <div className="chartContent">
          <p className="title">Total sales made today</p>
          <p className="price">$420</p>
          <p className="description">
            Previous tansactions proccessing.Last payments may not be included
          </p>
        </div>

        <div className="sumary">
          <div className="item">
            <div className="item__title">Target</div>
            <div className="item__result increment">
              <KeyboardArrowUpIcon fontSize={"small"} />
              <div className="result__amount ">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Week</div>
            <div className="item__result increment">
              <KeyboardArrowUpIcon fontSize={"small"} />
              <div className="result__amount ">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Month</div>
            <div className="item__result increment">
              <KeyboardArrowUpIcon fontSize={"small"} />
              <div className="result__amount ">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
