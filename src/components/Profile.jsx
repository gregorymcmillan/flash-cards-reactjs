import React from "react";
import "./Profile.css";
import profile from "../profile.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={profile} alt="" />
      </div>
      <div className="tally-scores">
        <div className="correct-scores">
          <span className="dot"></span>
          <span>12</span>
        </div>
        <div className="wrong-scores">
          <span className="dot"></span>
          <span>3</span>
        </div>
      </div>
      <div className="grades">
        <p className="label">GRADE</p>
        <p className="total">80%</p>
      </div>
      <div className="reset-button">
        <button>RESET</button>
      </div>
    </div>
  );
};

export default Profile;
