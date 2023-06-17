import React from 'react'
import classes from './aboutus.module.css'

import img3 from '../../../assets/img3.svg'

export const Aboutus = () => {
    return (
        <div className={`${classes.majorContainer} head_print`} id="about">
            <div className={classes.content}>
                <h1>ABOUT THE SERVICE</h1>
                <br />
                <br />
                <ul className='flex flex-col gap-3'>

                    <li>
                        <b>The Otter Guy</b> offers reservation-based water taxis to the Toronto Island Ward's terminal.
                    </li>

                    <li>
                        <b>We value your time </b> - purchase online for your selected date and time, and your departure time is guaranteed - skip the lines, no waiting at all.

                    </li>

                    <li>
                        If you miss your departure time, you can still travel that day on the next available taxi that has available seats.
                    </li>

                    <li>
                        You can buy your ticket at the dock and travel without a reservation at any time if there are available seats.
                    </li>


                    <li>
                        The<b> return trip tickets are $35</b> including taxes, per person. We do not offer one-way tickets.

                    </li>

                    <li>
                        On the way back from the island just show up at our Ward’s Island terminal at any time, without committing to a specific departure time. Full schedule is here.

                    </li>
                    <li>
                        We operate our water taxis late into the night - enjoy your parties and events !

                    </li>
                    <li>
                        <b>Save the Electronic ticket to your smartphone</b> - it will also be emailed to you. Present the email on your phone, or as a printout, during boarding.

                    </li>
                    <li>
                        Tickets are <b>non-refundable but fully transferable</b> - simply email unused ticket(s) to anyone you choose.

                    </li>
                    <li>
                        The mainland departure terminal is at the cool venue of the Docks Driving Range, next to the outdoor entertainment complex of the Docks Club - you can bypass the construction zone of downtown waterfront by departing from our dock.

                    </li>
                    <li>
                        Toronto Island Ward’s terminal is within a couple minutes walk to the beaches, island village and restaurants on the east side of the Toronto Island. Centre Island is about a 15 min walk and Hanlan’s Point is a longer walk through nature or a comfortable bike ride.

                    </li>
                    <li>
                        Ample parking available nearby. A short walk from a TTC bus stop.

                    </li>
                    <li>
                        In the event of inclement weather or police water emergency the service may be cancelled - you’ll be notified through email and your purchase refunded - you may re-book right away for another available departure time.

                    </li>
                    <li>
                        On weekends, the public Toronto Island Ferry, does not assign you a departure time when purchasing online, has hours-long wait times and typically sells out in the morning. Private water taxis from various points can not be reserved and see long lineups and difficulty with parking. Use the Otterguy water taxi and Skip the Lines! - you're welcome 🙂

                    </li>


                </ul>
                {/* <br />
                <br />
                <br />
                <h3>Please <b>NOTE</b>:</h3>
                <br />
                <ul>
                    <li>In case of inclement weather or police emergency, <b>service may be cancelled</b>, You'll be notified through your <b>provided contact method</b> and your purchase will be refunded</li>
                    <li>Please re-book for another available departure time</li>
                    <li>On weekends, the public Toronto Island ferry cannot be reserved and has long wait times. Private water taxis also cannot be reserved and have long lineups and parking difficulties</li>
                    <li>Use The Otter Guy for a hassle-free experience and enjoy beautiful summer days on Toronto Island</li>
                </ul> */}
            </div>

        </div>
    )
}
