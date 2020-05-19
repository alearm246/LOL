import React, { useEffect } from "react";
import style from "./Article.module.css";

function Article(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.article}>
      <div className={style.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={style.subTitleArea}>
        <h3>{props.subTitle}</h3>
      </div>
      <img className={style.articleImg} src={props.href} alt={props.alt} />
      <div className={style.articleBody}>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Article;
