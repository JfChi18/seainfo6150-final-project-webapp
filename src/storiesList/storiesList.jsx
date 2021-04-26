import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../storiesItem/storiesItem.jsx";
import styles from "./storiesList.css";

const storiesList = (props) => {
  return (
    <div className={styles.listContainer}>
      <ul>
        {props.stories.map((stories) => (
          <ArticleListItem stories={stories} key={stories.id} />
        ))}
      </ul>
    </div>
  );
};

storiesList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default storiesList;