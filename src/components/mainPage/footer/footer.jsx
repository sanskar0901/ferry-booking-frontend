import React from 'react'
import classes from './footer.module.css'

import img1 from '../../../assets/logoMain.svg'
import icon1 from '../../../assets/locationIcon.png'
import icon2 from '../../../assets/mailIcon.png'
import icon3 from '../../../assets/phoneIcon.png'

import { GrLocation, GrMailOption, GrPhone } from 'react-icons/gr'

export const FooterTop = () => {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.main}>
                <div className={classes.L}>
                    <img src={img1} />
                    <p>Your hassle-free water transportation solution</p>
                </div>
                <div className={classes.R}>
                    <ul>
                        <li>
                            <img src={icon1} /> <a>8502  Preston Rd. South West Gate Toronto, Canada 237884</a>
                        </li>
                        <li>
                            <img src={icon2} /> <a href="mailto:testing123@yahoo.com">testing123@yahoo.com</a>
                        </li>
                        <li>
                            <img src={icon3} /> <a href="tel:+912934569483">+91 29345 69483</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.cr}>
                <p>© Copyright 2023, All Rights Reserved</p>
            </div>
        </div>
    )
}
