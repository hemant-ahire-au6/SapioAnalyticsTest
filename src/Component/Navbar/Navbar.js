import React from "react";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <h1 onClick={() => navigate("/Home")}>SAPIO</h1>

      <div className={style.innerDiv}>
        
        <h5 onClick={() => navigate("/Liked")}>Liked</h5>

        <h5 onClick={() => navigate("/Home")}>Home</h5>
      </div>
    </div>
  );
}

export default Navbar;
