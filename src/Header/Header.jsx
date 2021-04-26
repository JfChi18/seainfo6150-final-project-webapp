import React from 'react';
import style from "./Header.module.css";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <a className={style.logo} href="/"><h3> The Battle for Equality</h3></a>


            <div className={style.navBarContainer}>
                <div className={style.navBarRow}>
                  <Link to="/aboutus" className={style.rowBtn}>About Us</Link>
                  <Link to="/storieslist" className={style.rowBtn}>Stories</Link>
                  <Link to="/storieslist" className={style.rowBtn}>Events</Link>
                  <Link to="/form" className={style.rowBtn} >Join Us</Link>
                </div>
            </div>
      </header>
    )
}

export default Header