import React from "react";
import PropTypes from "prop-types";
import storiesListItem from "../storiesListItem/storiesListItem.jsx";
import styles from "./storiesList.css";

const storiesList = (props) => {
  return (
    <div className={styles.listContainer}>
      <ul>
        {props.stories.map((stories) => (
          <storiesListItem stories={stories} key={stories.id} />
        ))}
      </ul>
    </div>
  );
};

storiesList.propTypes = {
    stories: PropTypes.array.isRequired
}
export default storiesList;
