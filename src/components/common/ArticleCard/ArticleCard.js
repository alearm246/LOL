import React, { useEffect, useState } from "react";
import style from "./ArticleCard.module.css";
import cardImage from "./cardimage.png";
import closeButtonImage from "./close button.png";
import articleArray from "../ArticleHolder/ArticleArray.js";
import Card from "../Card/Card.js";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function ArticleCard(props) {
  /*
    checks if article already exists in the localStorage and if it does
    retrieve the data
  */

  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  let [showArticle, setShowArticle] = useState(true);

  localStorage.setItem("articles", JSON.stringify(articleData));

  //notifues the user that the article has been deleted
  const notifyUser = () => {
    console.log("you clicked the button");
    toast("Article Has been deleted", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000
    });
  };

  //retrieve article data from localStorage
  const getArticleData = () => {
    return JSON.parse(localStorage.getItem("articles"));
  };

  //removes individual article from the article array
  const removeArticle = () => {
    console.log("clicked");

    //retrieve article data from localStorage
    let articleData = getArticleData();

    //notify the user that the article has been removed
    notifyUser();

    /*
      loop through the article array and check if the article's uid equals the uid passed down through props
      if it does remove that article from the array and to stop displaying it
    */
    for (let i = 0; i < articleData.length; i++) {
      let article = articleData[i];
      console.log("compare", article.uid, props.uid);
      console.log("i", i);
      console.log("length", articleData.length);
      if (article.uid === props.uid) {
        let articleIndex = articleData.indexOf(article);
        articleData.splice(articleIndex, 1);
        localStorage.setItem("articles", JSON.stringify(articleData));
        setShowArticle(false);
        break;
      }
    }
  };

  return (
    <>
      {/*if showArticle is true then display the article cards if it's false display nothing*/}
      {showArticle ? (
        <Card
          link={props.link}
          uid={props.uid}
          title={props.title}
          subTitle={props.subTitle}
          closeButtonImage={closeButtonImage}
          cardImage={cardImage}
          removeArticle={removeArticle}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ArticleCard;
