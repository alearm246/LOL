import React from "react";
import style from "./HeroImage.module.css";
import image from "./HeroImage.png";

function HeroImage() {
  return (
    <div className={style.HeroImage}>
      <div className={style.ImageContainet}>
        <img src={image} alt="Hero" height="500px" width="1550px" />
      </div>
    </div>
  );
}

export default HeroImage;
