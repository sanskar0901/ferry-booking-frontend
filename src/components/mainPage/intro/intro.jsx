import React from 'react'
import classes from './intro.module.css'

import logo from '../../../assets/img1.svg'

export const Intro = () => {
    return (
        <div className={`${classes.majorContainer} head_print`}>
            <img src={logo} className={classes.logo}/>
            <div>
                <a>Book Now</a>
                <a>Learn More</a>
            </div>
        </div>
    )
}
