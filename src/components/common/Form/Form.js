import React, { useState } from "react";
import style from "./Form.module.css";
import articleArray from "../../common/ArticleHolder/ArticleArray.js";
import { toast, ToastContainer } from "react-toastify";

function Form(props) {
  let [articleId, setArticleId] = useState(5);

  let [form, setForm] = useState({ title: "", subTitle: "", body: "" });

  let newArticleId = localStorage.getItem("articleId")
    ? JSON.parse(localStorage.getItem("articleId"))
    : -1;

  let articleData = localStorage.getItem("articles")
    ? JSON.parse(localStorage.getItem("articles"))
    : articleArray;

  let articleKey = localStorage.getItem("articleKey")
    ? JSON.parse(localStorage.getItem("articleKey"))
    : -1;

  //set my articles array to the localstorage
  //we turn the articles array into a string because setItem only accepts strings
  localStorage.setItem("articles", JSON.stringify(articleData));

  //Set articleId from state into localstorage
  localStorage.setItem("articleId", JSON.stringify(newArticleId));

  localStorage.setItem("articleKey", JSON.stringify(articleKey));

  //generates a new string Id to createe uniqe id's for the articles
  const generateNewId = () => {
    let id = JSON.parse(localStorage.getItem("articleId"));
    id++;
    localStorage.setItem("articleId", JSON.stringify(id));
    const idString = JSON.stringify(localStorage.getItem("articleId"));
    console.log(idString);
    return idString;
  };

  const generateNewKey = () => {
    let key = JSON.parse(localStorage.getItem("articleKey"));
    key++;
    localStorage.setItem("articleKey", JSON.stringify(key));
    const keyString = JSON.stringify(localStorage.getItem("articleKey"));
    console.log(keyString);
    return keyString;
  };

  const notifyUser = () => {
    console.log("you clicked the button");
    toast("Article Has been created go to the homepage and see!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      form.title.length !== 0 &&
      form.subTitle.length !== 0 &&
      form.body.length !== 0
    ) {
      notifyUser();

      let newData = {
        alt: "new image alt",
        uid: generateNewId(),
        key: generateNewKey(),
        title: form.title,
        href:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fminecraft%2F&psig=AOvVaw1jIsHQ5y0dHluulfR2BsBV&ust=1589268814797000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiPyuylq-kCFQAAAAAdAAAAABAD",
        subTitle: form.subTitle,
        body: form.body,
        link: "/blog"
      };

      //pushes newly created articles into the articles array
      articleData.push(newData);
      //new artile array gets set into localstorage
      localStorage.setItem("articles", JSON.stringify(articleData));

      const data = JSON.parse(localStorage.getItem("articles"));

      console.log(data);
    } else {
      toast.warn("You need to fill out all forms");
    }
    //creates new article data based on user input
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  //generates a new id string for the

  //gets called when the submit button is pressed

  return (
    <div className={style.formContainer}>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={form.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          subTitle:
          <input
            type="text"
            value={form.subTitle}
            name="subTitle"
            placeholder="subTitle"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <textarea
            value={form.body}
            onChange={handleChange}
            name="body"
            placeholder="Type the body of your blog here"
            rows="5"
            cols="20"
          />
        </label>
        <br />
        <button className={style.button} onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
