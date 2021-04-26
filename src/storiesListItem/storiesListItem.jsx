import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./storiesListItem.css";

const storiesListItem = (props) => {
    const storiesLink = "/id/" + props.stories.id;
    const imgDesc = "a " + props.stories.category +  " named " + props.stories.name;
    return (
        <Link className={style.link} to={storiesLink}>
            <div className={style.card}>
                <p className={style.hiddenMsg}>LEARN MORE</p>
                <div className={style.imgContainer}><img src={props.stories.image} alt={imgDesc}/></div>
                <div className={style.shortInfo}>
                    <span className={style.name}>{props.stories.name}</span> {props.stories.Born}
                </div> 
            </div>
        </Link>
    )
}

storiesListItem.propTypes = {
    stories: PropTypes.object.isRequired
}

export default storiesListItem
