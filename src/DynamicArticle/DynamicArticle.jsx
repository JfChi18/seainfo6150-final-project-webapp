import React from "react";
import { Link } from "react-router-dom";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";
import styles from "./DynamicArticle.module.css";

const DynamicArticle = (props) => {

  return (
    <div>
      
      <article className={styles.article}>
        <header>
          <ArticleImage url={props.article.image} title={props.article.title} />
          <dl className={styles.content}>
                        <dt>Name:</dt>
                        <dd>{props.article.title}</dd>
                        <dt>Category:</dt>
                        <dd>{props.article.category}</dd>
                        <dt>Born:</dt>
                        <dd>{props.article.Born}</dd>
                        <dt>Died:</dt>
                        <dd>{props.article.Died}</dd>
                        <dt>Description:</dt>
                        <dd>{props.article.description}</dd>
                    </dl>
     

        </header>
 
      </article>
    </div>
  );
};

export default DynamicArticle;