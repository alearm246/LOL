import React, { useState, useEffect } from "react";
import PageBody from "../../common/PageBody/PageBody.js";
import style from "./HomePage.module.css";
import Intro from "../HomePage/Intro/Intro.js";
import articleArray from "../../common/ArticleHolder/ArticleArray.js";
import ArticleHolder from "../../common/ArticleHolder/ArticleHolder.js";
import HeroImage from "../HomePage/HeroImage/HeroImage.js";
import { Link } from "react-router-dom";

function HomePage() {
  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  localStorage.setItem("articles", JSON.stringify(articleData));

  const clearAll = () => {
    localStorage.clear();
  };

  return (
    <div className={style.homePage}>
      <PageBody>
        <Intro />
        <ArticleHolder />
      </PageBody>
    </div>
  );
}

export default HomePage;
