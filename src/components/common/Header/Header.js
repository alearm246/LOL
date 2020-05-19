import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header}>
      <Link to="/" className={style.logolink}>
        <h1 className={style.headerText}>Posted</h1>
      </Link>
      <nav>
        <ul className={style.navlinks}>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className={style.link}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={style.link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
