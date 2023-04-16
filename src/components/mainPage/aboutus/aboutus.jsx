import React from 'react'
import classes from './aboutus.module.css'

import img3 from '../../../assets/img3.svg'

export const Aboutus = () => {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.header}>
                <p>
                    ABOUT THE SERVICE
                </p>
            </div>
            <div className={classes.main}>
                <div className={classes.adjust}>

                </div>
                <img src={img3}/>
                <div className={classes.forBlur}>
                    <p className={classes.quote}>“ At Toronto Water Taxi, your safety is our top priority. We adhere to strict safety protocols, including routine vessel maintenance, regular safety checks, and highly trained and experienced captains.“</p>
                    <p className={classes.name}>Mr. Andrew Samuel</p>
                    <p className={classes.pos}>Managing director (MD)</p>
                </div>
            </div>
        </div>
    )
}
