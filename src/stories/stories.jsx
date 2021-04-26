import React from 'react';
import style from "./stories.css";


const Pet = (props) => {
    
    const imgDesc = "a " + props.pet.category + " named " + props.stories.name;
    

    if (!props.pet) {
        return <div>There pet you are requesting does not exist.</div>;
    } else {
        return (
            <div className={style.storiesInfoContainer}>
                <div className={style.imgContainer}><img className={style.storiesImg} src={props.pet.image} alt={imgDesc}/></div>
                <div className={style.storiesInfo}>
                    <div className={style.nameAdoptBtnWrapper}>
                        <h1>{props.stories.name}</h1>
                        
                    </div>
                    <dl className={style.petTable}>
                       
                        <dd>{props.storis.Born}</dd>
                        <dt>Born</dt>
                        <dd>{props.pet.Died}</dd>
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

export default Pet
