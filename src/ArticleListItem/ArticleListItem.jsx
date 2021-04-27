import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

import ArticleImage from "../ArticleImage/ArticleImage.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {

  const articleLink = "/articlelist/" + props.article.slug;

  return (
    <li className={styles.item}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
          <ArticleImage url={props.article.image._url} title={props.article.title} />
          <Link to={articleLink} className={styles.title}><h2 className={styles.title}>{props.article.title}</h2></Link>
        </div>

      </article>
      
      
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;