import React from "react";
import "./MainBody.css";
import Logo from "../Images/googleLogo.png";
import Search from "./Search";

function MainBody() {
  return (
    <div className="body">
      <div className="bodyWraper">
        <img src={Logo} height="110" width="272" alt="" id="logo" />
        <Search />
        <div className="textContainer">
          <p className="text" id="textOne">
            Explore the history of vaccines
          </p>
          <p className="text textTwo">Google offered in:</p>
          <p className="text textTwo">
            हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
