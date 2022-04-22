import React from "react";
import "./UserProfile.scss";
import Avatar from "../../assests/profile-img.png";

const UserProfile = () => {
  return (
    <div className="details">
      <div className="content">
        <img src={Avatar} alt="profile picture" className="imgContent" />
      </div>

      <div className="itemDetails">
        <h3 className="name">Alwaz Qazi</h3>
        <div className="items">
          <span className="itemKey">Email: </span>
          <span className="itemValue">alwazkazi7@gmail.com</span>
        </div>
        <div className="items">
          <span className="itemKey">Phone: </span>
          <span className="itemValue">090078601</span>
        </div>
        <div className="items">
          <span className="itemKey">Address: </span>
          <span className="itemValue">624 Princess Ave. Mebane, NC 27302</span>
        </div>
        <div className="items">
          <span className="itemKey">Country: </span>
          <span className="itemValue">PAK </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
