import React from 'react'
import classes from './header.module.css'
import logo from "../../../assets/img1.svg"

export const Header = () => {
    return (
        <div className={classes.majorContainer}>
            <img src={logo} className={classes.logo} />
            <ul className={classes.list} >
                <li className={classes.opt}>About</li>
                <li className={classes.opt}>Destinations</li>
                <li className={classes.opt}>Calendar</li>
                <li>
                    <button>
                        Book Now!
                    </button>
                </li>
            </ul>
        </div>
    )
}
