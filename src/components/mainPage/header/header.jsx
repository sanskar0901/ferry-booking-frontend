import React from 'react'
import classes from './header.module.css'
import logo from "../../../assets/logoMain.svg"

export const Header = () => {
    return (
        <div className={classes.majorContainer}>
            <img src={logo} className={classes.logo} />
            <ul className={classes.list} >
                <li className={classes.opt}><a href="#about">About</a></li>
                <li className={classes.opt}><a href="#book">Destinations</a></li>
                <li className={classes.opt}><a href="#book">Calendar</a></li>
                <li>
                    <a href="#book">
                        <button>
                            Book Now!
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    )
}
