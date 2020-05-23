import React from "react";
import style from "./Card.module.css";
import { Link, useParams } from "react-router-dom";

function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link to={`${props.link}/${props.uid}`}>
          <img
            className={style.articleImg}
            src={props.cardImage}
            alt="articleImage"
          />
        </Link>
      </div>
      <div className={style.textcontainer}>
        <Link
          to={`${props.link}/${props.uid}`}
          className={style.articleLink}
          style={{ color: "white" }}
        >
          {props.title}
        </Link>
        <Link
          to={`${props.link}/${props.uid}`}
          className={style.articleLinksubtitle}
          style={{ color: "white" }}
        >
          <h3>{props.subTitle}</h3>
        </Link>
      </div>
      <div className={style.buttonImageContainer}>
        <img
          className={style.closeButtonImage}
          src={props.closeButtonImage}
          alt="close button"
          onClick={props.removeArticle}
        />
      </div>
    </div>
  );
}

export default Card;
