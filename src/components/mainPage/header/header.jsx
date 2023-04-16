import React from 'react'
import classes from './header.module.css'
import logo from "../../../assets/img1.svg"

export const Header = () => {
    return (
        <div className={classes.majorContainer}>
            <img src={logo} className={classes.logo} />
            <ul className={classes.list} >
                <li>About</li>
                <li>Destinations</li>
                <li>Calendar</li>
                <li>
                    <button>
                        Book Now!
                    </button>
                </li>
            </ul>
        </div>
    )
}
