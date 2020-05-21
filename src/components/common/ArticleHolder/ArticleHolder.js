import React, { useState, useEffect } from "react";
import style from "./ArticleHolder.module.css";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import articleArray from "./ArticleArray.js";

function ArticleHolder() {
  const [articleCard] = useState(articleArray);

  const [showArticle, setShowArticle] = useState(true);

  /*
    checks if article already exists in the localStorage and if it does
    retrieve the data
  */
  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  localStorage.setItem("articles", JSON.stringify(articleData));

  //we loop through the articl data from the local storafe and render all the articles from the storage
  const articlesCards = showArticle
    ? articleData.map(individualArticle => (
        <ArticleCard
          body={individualArticle.body}
          uid={individualArticle.uid}
          key={individualArticle.uid}
          link={individualArticle.link}
          subTitle={individualArticle.subTitle}
          title={individualArticle.title}
        />
      ))
    : "";

  const clearAll = () => {
    localStorage.clear();
    setShowArticle(false);
  };

  return (
    <div className={style.articleHolder}>
      <div className={style.article}>
        {articleData.length === 0 ? (
          <h1>Oh no it looks like you need to create some new articles!</h1>
        ) : (
          articlesCards
        )}
      </div>
      {articleData.length === 0 ? (
        ""
      ) : (
        <button className={style.button} onClick={clearAll}>
          clear all
        </button>
      )}
    </div>
  );
}

export default ArticleHolder;
