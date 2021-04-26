import React from 'react';
import style from "./stories.css";


const stories = (props) => {
    
    const imgDesc = "a " + props.stories.category + " named " + props.stories.name;
    

    if (!props.stories) {
        return <div>To be continued.</div>;
    } else {
        return (
            <div className={style.storiesInfoContainer}>
                <div className={style.imgContainer}><img className={style.storiesImg} src={props.stories.image} alt={imgDesc}/></div>
                <div className={style.storiesInfo}>
                    <div className={style.nameAdoptBtnWrapper}>
                        <h1>{props.stories.name}</h1>
                        
                    </div>
                    <dl className={style.storiesTable}>
                       
                        <dd>{props.storis.Born}</dd>
                        <dt>Born</dt>
                        <dd>{props.stories.Died}</dd>
                        <dt>Died</dt>
                    
                    </dl>
                    <div dangerouslySetInnerHTML={{ __html: props.stories.description }} />
                    <div>
                    <h4>Addtional Details</h4>
                        <ul>
                            {props.stories.characteristics.map((desc) => (
                                <li className={style.detail} key={desc}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div> 
        )
    }
}

export default stories
