import React from "react";
import "./Profile.css";
import profile from "../profile.svg";

const Profile = ({ correctScore, incorrectScore, handleReset }) => {
  let grade = Math.round(
    (correctScore / (correctScore + incorrectScore)) * 100
  );

  return (
    <div className="profile">
      <div className="profile-image">
        <img src={profile} alt="" />
      </div>
      <div className="tally-scores">
        <div className="correct-scores">
          <span className="dot"></span>
          <span>{correctScore}</span>
        </div>
        <div className="wrong-scores">
          <span className="dot"></span>
          <span>{incorrectScore}</span>
        </div>
      </div>
      <div className="grades">
        <p className="label">GRADE</p>
        <p className="total">{Number.isNaN(grade) ? "0" : grade}%</p>
      </div>
      <div className="reset-button">
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};

export default Profile;
