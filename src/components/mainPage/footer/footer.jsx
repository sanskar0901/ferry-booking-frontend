import React from 'react'
import classes from './footer.module.css'

import img1 from '../../../assets/logoMain.svg'
import icon1 from '../../../assets/locationIcon.png'
import icon2 from '../../../assets/mailIcon.png'
import icon3 from '../../../assets/phoneIcon.png'

export const FooterTop = () => {
    return (
        <div className={`${classes.majorContainer} head_print`} id="footer">
            <div className={classes.main}>
                <div className={classes.L}>
                    <img src={img1} />
                    <p>Your hassle-free water transportation solution</p>
                </div>
                <div className={classes.R}>
                    <h1 className='text-[2rem] font-bold md:pt-12'>Contact Info.</h1>
                    <ul>
                        <li>
                            <img src={icon1} /> <a>The Otter Guy Inc.
                                The Docks Driving Range, 176 Cherry St,
                                Toronto, ON M5A 3L2</a>
                        </li>

                        <li>
                            <img src={icon2} /> <a href="mailto:info@otterguy.com">info@otterguy.com</a>
                        </li>
                        <li>
                            <img src={icon3} /> <a href="tel:+1-416-995-6809">+1-416-995-6809</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.cr}>
                <p>The Otter Guy Inc. © Copyright 2023, All Rights Reserved</p>
            </div>
        </div>
    )
}
