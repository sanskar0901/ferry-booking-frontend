import React from 'react'
import classes from './intro.module.css'

import logo from '../../../assets/img1.svg'

export const Intro = () => {
    return (
        <div className={classes.majorContainer}>
            <div className='flex flex-col items-center justify-center gap-4'>
                <img src={logo} className={classes.logo} />
                <p className='text-[#FFC60B] text-[16px] font-bold text-center w-[100vw] md:text-[28px] md:w-[65vw]'>Reservable water taxi to Toronto Island</p>

            </div>
            <div>
                <a href="#book">Book Now</a>
                <a href='#about'>Learn More</a>
            </div>
        </div>
    )
}
