import React from "react";
import style from "./Intro.module.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className={style.intro}>
      <h3>Want to start posting?</h3>
      <Link to="/create">
        <button type="button" className={style.button}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Intro;
