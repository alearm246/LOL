import React from "react";
import style from "./Toastify.module.css";

function Toastify() {
  console.log("toastify works!!!");
  return (
    <div className={style.toast}>
      <h3>Article has been created</h3>
    </div>
  );
}

export default Toastify;
