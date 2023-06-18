import React from 'react'
import classes from './header.module.css'
import logo from "../../../assets/logoMain.svg"

export const Header = () => {
    return (
        <div className={`${classes.majorContainer} head_print`}>
            <img src={logo} className={classes.logo} />
            <h3>
                The Otter Guy
            </h3>
            <ul className={classes.list} >
                <li className={classes.opt}><a href="#footer">Contact And Charters</a></li>
                {/* <li className={classes.opt}><a href="#book">Destinations</a></li>
                <li className={classes.opt}><a href="#book">Calendar</a></li> */}
            </ul>
        </div>
    )
}
