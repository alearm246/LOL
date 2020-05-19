import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";
import articleArray from "../../common/ArticleHolder/ArticleArray.js";
import PageBody from "../../common/PageBody/PageBody.js";
import Article from "../../common/Article/Article.js";
import Form from "../../common/Form/Form.js";

import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function Blog(props) {
  const articleId = props.articleId;
  let { id } = useParams();

  /*The map function will run through the article array and check 
  if the article unique id of each article matches the article id
  and if it equals true then it should return the Article component with the data 
  for that specific article
  */

  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  localStorage.setItem("articles", JSON.stringify(articleData));

  return (
    <div className={style.blog}>
      <PageBody>
        {articleData.length >= 0
          ? articleData.map(article => {
              if (article.uid === id) {
                return (
                  <div className={style.article}>
                    <Article
                      title={article.title}
                      href={article.href}
                      alt={article.alt}
                      body={article.body}
                    />
                  </div>
                );
              }
              return "";
            })
          : console.log("Oh no it looks like you need to make more articles")}
      </PageBody>
    </div>
  );
}

export default Blog;
