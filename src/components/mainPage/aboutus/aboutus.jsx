import React from 'react'
import classes from './aboutus.module.css'

import img3 from '../../../assets/img3.svg'

export const Aboutus = () => {
    return (
        <div className={classes.majorContainer} id="about">
            <div className={classes.content}>
                <h1>ABOUT THE SERVICE</h1>
                <br/>
                <p>
                    The <b>Otter Guy water taxi</b> offers you guaranteed departure time to Toronto Island Ward's terminal. Purchase desired number of tickets in advance for a selected date and time, and your departure time is guaranteed
                </p>
                <br/>
                <h2>
                    Skip the lines, No waiting at all.
                </h2>
                <br/>
                <br/>
                <br/>
                <ul>
                    <li><b>Guaranteed departure time</b> when purchasing tickets in advance for a selected date and time Skip the lines and avoid waiting</li>
                    <li><b>Return trip tickets cost $30 per person</b>. On the way back from the island, show up at the dock at any time without committing to a specific departure time</li>
                    <li><b>Electronic QR code tickets</b> will be emailed to you upon purchase</li>
                    <li>Non-refundable but <b>fully transferable.</b></li>
                    <li><b>QR code ticket for scanning</b> Bring your smartphone or printed  before on-boarding</li>
                    <li>The taxi operates between The Docks Driving Range water taxi terminal and Ward's Island. <b>Ample parking</b> available nearby and a short walk from TTC bus stops</li>
                </ul>
                <br/>
                <br/>
                <br/>
                <h3>Please <b>NOTE</b>:</h3>
                <br/>
                <ul>
                    <li>In case of inclement weather or police emergency, <b>service may be cancelled</b>, You'll be notified through your <b>provided contact method</b> and your purchase will be refunded</li>
                    <li>Please re-book for another available departure time</li>
                    <li>On weekends, the public Toronto Island ferry cannot be reserved and has long wait times. Private water taxis also cannot be reserved and have long lineups and parking difficulties</li>
                    <li>Use The Otter Guy for a hassle-free experience and enjoy beautiful summer days on Toronto Island</li>
                </ul>
            </div>
            
        </div>
    )
}
