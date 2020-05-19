import React, { useEffect } from "react";
import style from "./ArticleCard.module.css";
import cardImage from "./cardimage.png";
import closeButtonImage from "./close button.png";
import articleArray from "../ArticleHolder/ArticleArray.js";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function ArticleCard(props) {
  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  localStorage.setItem("articles", JSON.stringify(articleData));

  const notifyUser = () => {
    console.log("you clicked the button");
    toast("Article Has been deleted", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000
    });
  };

  const removeArticle = () => {
    console.log("clicked");
    let getArticleData = JSON.parse(localStorage.getItem("articles"));

    notifyUser();

    for (let i = 0; i < getArticleData.length; i++) {
      let article = getArticleData[i];
      if (article.uid === article.key) {
        getArticleData.splice(getArticleData.indexOf(article), 1);
        localStorage.setItem("articles", JSON.stringify(getArticleData));
        window.location.reload();
        break;
      }
    }
  };

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link to={`${props.link}/${props.id}`}>
          <img
            className={style.articleImg}
            src={cardImage}
            alt="articleImage"
          />
        </Link>
      </div>
      <div className={style.textcontainer}>
        <Link
          to={`${props.link}/${props.id}`}
          className={style.articleLink}
          style={{ color: "white" }}
        >
          {props.title}
        </Link>
        <Link
          to={`${props.link}/${props.id}`}
          className={style.articleLinksubtitle}
          style={{ color: "white" }}
        >
          <h3>{props.subTitle}</h3>
        </Link>
        <div className={style.closeButton}>
          <img
            className={style.closeButtonImage}
            src={closeButtonImage}
            alt="close button"
            onClick={removeArticle}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
