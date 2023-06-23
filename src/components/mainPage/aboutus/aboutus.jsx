import React from 'react'
import classes from './aboutus.module.css'


export const Aboutus = () => {
    return (
        <div className={`${classes.majorContainer} head_print`} id="about">
            <div className={classes.content}>
                <h1>ABOUT THE SERVICE</h1>
                <br />
                <ul className='flex flex-col gap-3'>

                    <li>
                        The Otter Guy offers <b>reservation-based water taxis to the Toronto Island</b> Ward's terminal.
                    </li>
                    <li>
                        <a className='underline cursor-pointer' href='/directions'>Click here <b>for Service Location and Directions</b></a>
                    </li>

                    <li>
                        We value your time - purchase online for your selected date and time, and <b>your departure time is guaranteed - skip the lines, no waiting at all.</b>

                    </li>

                    <li>
                        <b>If you miss</b> your departure time, you can still travel that day on the next available taxi that has available seats.
                    </li>

                    <li>
                        The<b> return trip</b> tickets are <b>$35 including taxes</b>, per person. We do not offer one-way tickets.

                    </li>
                    <li>
                        You can buy your ticket at the dock and travel without a reservation at any time if there are available seats.
                    </li>



                    <li>
                        On the way back from the island just show up at our Ward’s Island terminal at any time, without committing to a specific departure time. Full schedule is here.

                    </li>
                    <li>
                        We operate our <b>water taxis late into the night</b> - enjoy your parties and events !

                    </li>
                    <li>
                        Save the <b>Electronic ticket</b> to your smartphone - it will also be emailed to you. Present the email on your phone, or as a printout, during boarding.

                    </li>
                    <li>
                        Tickets are non-refundable but <b>fully transferable</b> - simply email unused ticket(s) to anyone you choose.

                    </li>
                    <li>
                        The mainland departure terminal is at the cool venue of the Docks Driving Range, next to the outdoor entertainment complex of the Docks Club - you can <b>bypass the construction zone of downtown waterfront</b> by departing from our dock.

                    </li>
                    <li>
                        Toronto Island Ward’s terminal is within a couple minutes walk to the beaches, island village and restaurants on the east side of the Toronto Island. Centre Island is about a 15 min walk and Hanlan’s Point is a longer walk through nature or a comfortable bike ride.

                    </li>
                    <li>
                        <b>Ample parking</b> available nearby. A <b>short walk from a TTC bus stop</b>.

                    </li>
                    <li>
                        In the event of inclement weather or police water emergency the service may be cancelled - you’ll be notified through email and your purchase <b>refunded</b> - you may re-book right away for another available departure time.

                    </li>
                    <li>
                        The public Toronto Island Ferry sells ticket online but does not assign you a departure time - this results in hours-long wait times on weekends. Private water taxis from various points can not be reserved and see weekend lineups and difficulty with parking. <b>Use the Otterguy water taxi and Skip the Lines!</b> - you're welcome 🙂
                    </li>


                </ul>

            </div>

        </div>
    )
}
