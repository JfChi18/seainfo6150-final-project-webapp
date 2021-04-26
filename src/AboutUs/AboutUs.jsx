import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={style.aboutUsPageContainer}>
            
             <div className={style.column}>
                    <div >
                        <h2 className={style.subTitle}>What’s the purpose of this site?</h2>
                        <p>Our original intention to build this site is to create an online space where we can know more history
                             decades-long fight for women’s right to vote was at times a ferocious one. 
                             Socially transformative times their due in a colorfully illustrated history 
                             that includes many of the important faces of the movement in portraiture and scenes that both dignify and enliven </p>
                    </div>

                    <div>                      
                        <p>
                        Contributes a foreword that speaks to the relationship and differences between the British and American suffrage efforts.
                        </p>
                    </div>
                    <div >
                        <h2 className={style.subTitle}>Who are the authors?</h2>
                        <p>
                        The authors are all kinds of position from all around world.
                        </p>
                      
                    </div>

                    <div >
                        <h2 className={style.subTitle}>Why the we build this website?</h2>
                        <p>
                        We want to promote to the everone that on March 22, 1972, the Equal Rights Amendment is 
                        passed by the U.S. Senate and sent to the states for ratification. First proposed by 
                        the National Woman's political party in 1923, the Equal Rights Amendment was to provide for the
                         legal equality of the sexes and prohibit discrimination on the basis of sex.
                        </p>
                      
                    </div>
                </div>
        </div>
               
    )
}

export default AboutUs