import React from "react";
import "./Header.css";
import { CgMenuGridO } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="leftSection">
        <Link to="/">About</Link>
        <Link to="/">Store</Link>
      </div>
      <div className="rightSection">
        <Link to="/">Gmail</Link>
        <Link to="/">Images</Link>
        <CgMenuGridO className="square" />
        <BsPersonCircle className="profilePicContainer" />
      </div>
    </div>
  );
}

export default Header;
