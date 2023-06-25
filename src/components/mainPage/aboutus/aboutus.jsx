import React from 'react'
import classes from './aboutus.module.css'
import { Link } from 'react-router-dom'


export const Aboutus = () => {
    return (
        <div className={`${classes.majorContainer} head_print`} id="about">
            <div className={classes.content}>
                <h1 className='text-[#FFC60B]'>ABOUT THE SERVICE</h1>
                <br />
                <ul className='flex flex-col gap-3'>

                    <li>
                        The Otter Guy offers <b className="text-[#FFC60B]">reservation-based water taxis to the Toronto Island</b> Ward's terminal.
                    </li>
                    <li>
                        <Link to='/directions'>Click here for<b className="text-[#FFC60B] underline cursor-pointer"> Service Location and Directions</b></Link>
                    </li>

                    <li>
                        We value your time - purchase online for your selected date and time, and <b className="text-[#FFC60B]">your departure time is guaranteed - skip the lines, no waiting at all.</b>

                    </li>

                    <li>
                        <b className="text-[#FFC60B]">If you miss</b> your departure time, you can still travel that day on the next available taxi that has available seats.
                    </li>

                    <li>
                        The<b className="text-[#FFC60B]"> return trip</b> tickets are <b className="text-[#FFC60B]">$35 including taxes</b>, per person. We do not offer one-way tickets.

                    </li>
                    <li>
                        You can buy your ticket at the dock and travel without a reservation at any time if there are available seats.
                    </li>



                    <li>
                        On the way back from the island just show up at our Ward’s Island terminal at any time, without committing to a specific departure time. Full schedule is here.

                    </li>
                    <li>
                        We operate our <b className="text-[#FFC60B]">water taxis late into the night</b> - enjoy your parties and events !

                    </li>
                    <li>
                        Save the <b className="text-[#FFC60B]">Electronic ticket</b> to your smartphone - as a file or a screenshot. Present the e-ticket on your phone, or as a printout, during boarding.

                    </li>
                    <li>
                        Tickets are non-refundable but <b className="text-[#FFC60B]">fully transferable</b> - simply email unused ticket(s) to anyone you choose.

                    </li>
                    <li>
                        The mainland departure terminal is at the cool venue of the Docks Driving Range, next to the outdoor entertainment complex of the Docks Club - you can <b className="text-[#FFC60B]">bypass the construction zone of downtown waterfront</b> by departing from our dock.

                    </li>
                    <li>
                        Toronto Island Ward’s terminal is within a couple minutes walk to the beaches, island village and restaurants on the east side of the Toronto Island. Centre Island is about a 15 min walk and Hanlan’s Point is a longer walk through nature or a comfortable bike ride.

                    </li>
                    <li>
                        <b className="text-[#FFC60B]">Ample parking</b> available nearby. A <b className="text-[#FFC60B]">short walk from a TTC bus stop</b>.

                    </li>
                    <li>
                        In the event of inclement weather or police water emergency the service may be cancelled - you’ll be notified through email and your purchase <b className="text-[#FFC60B]">refunded</b> - you may re-book right away for another available departure time.

                    </li>
                    <li>
                        The public Toronto Island Ferry sells ticket online but does not assign you a departure time - this results in hours-long wait times on weekends. Private water taxis from various points can not be reserved and see weekend lineups and difficulty with parking. <b className="text-[#FFC60B]">Use the Otterguy water taxi and Skip the Lines!</b> - you're welcome 🙂
                    </li>


                </ul>

            </div>

        </div>
    )
}
