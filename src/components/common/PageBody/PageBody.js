import React from "react";
import style from "./PageBody.module.css";

function PageBody(props) {
  return (
    <div>
      <div className={style.pageBody}>{props.children}</div>
    </div>
  );
}

export default PageBody;
