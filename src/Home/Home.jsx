import React from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom';



const Home = (props) => {

    

    return (
        <div className={style.homePageContainer}>
            <div className={style.homeTop}>
                <div className={style.homeDesc}>
                 <h1><span>Researched history of the suffragettes <br/>in the US and UK</span></h1>  
    
                </div>
  
                <Link className={style.moreBtn} to="/petlist"><span>Learn More</span></Link>
            </div>

            <div className={style.homeCenter}>
                     
                  

            </div>

            <div className={style.homeBottom}>
            
                 <h1><span>Above all else, we are a community </span></h1>  
                 <h2>We should know more about our history<br/>We connect each all around world</h2>
               
            </div>

        </div>
    )
}

export default Home
