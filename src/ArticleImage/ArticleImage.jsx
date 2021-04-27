import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
  return (
        <img className={styles.img} src={props.image} alt={props.title} />
  );
};

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default ArticleImage;