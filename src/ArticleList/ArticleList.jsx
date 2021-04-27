import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.listContainer}>
      <div className={styles.title}>
                 <h1><span>Key figures</span></h1>  
                 </div>
      <ul>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    </div>  
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;