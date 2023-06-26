import React from 'react'
import classes from './intro.module.css'

import logo from '../../../assets/img1.svg'
import logo1 from "../../../assets/logoMain.svg"

export const Intro = () => {
    return (
        <div className={`${classes.majorContainer} head_print`}>
            <div className='flex flex-col items-center justify-between md:gap-56 h-[60vh]'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={logo1} className='md:w-[8vw] md:hidden w-[20vw]' />
                    <p className='text-[#FFC60B] text-[28px] font-bold text-center w-[100vw] md:text-[34px] md:w-[65vw]'>Reserve your Water </p>
                    <p className='text-[#FFC60B] text-[28px] font-bold text-center w-[100vw] md:text-[34px] md:w-[65vw]'> Taxi to Toronto Island</p>
                </div>
                <img src={logo} className={classes.logo} />

            </div>
            <div>
                <a href="#book">Book Now</a>
                <a href='#about'>Learn More</a>
            </div>
        </div>
    )
}
