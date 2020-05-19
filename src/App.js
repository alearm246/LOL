import React from "react";
import HomePage from "./components/pages/HomePage/HomePage.js";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import About from "./components/pages/About/About";
import Blog from "./components/pages/Blog/Blog";
import Create from "./components/pages/Create/Create";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Article from "./components/common/Article/Article.js";

import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/create" component={Create} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
