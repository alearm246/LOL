import React, { useState } from "react";
import Form from "../../common/Form/Form.js";
import style from "./Create.module.css";
import articleArray from "../../common/ArticleHolder/ArticleArray.js";

function Create() {
  return (
    <div className={style.form}>
      <Form />
    </div>
  );
}

export default Create;
