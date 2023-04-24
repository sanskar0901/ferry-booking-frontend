import React, { useState } from 'react'
import classes from './booking.module.css'

import mapImg1 from '../../../assets/map1.svg'
import mapImg2 from '../../../assets/map2.svg'

export const Booking = () => {

    const [travellers, setTravellers] = useState(1)

    // for (let i = 0; i < 24; i++) {
    //     for (let j = 0; j < 60; j += 20) {
    //       let hour = i.toString().padStart(2, "0");
    //       let minute = j.toString().padStart(2, "0");
    //       timeSlots.push(`${hour}:${minute}`);
    //     }
    //   }

    return (
        <div className={classes.majorContainer}>
            <div className={classes.dateP}>
            </div>
            <div className={classes.map}>
                <div className={classes.origin}>
                    <img src={mapImg1}/>
                    <div className={classes.cover}>

                    </div>
                </div>
                <div className={classes.dest}>
                    <img src={mapImg2} />
                    <div className={classes.cover}>
                        
                    </div>
                </div>
            </div>
            <div className={classes.inputField}>
                <div className={classes.inpCtn}>
                    <p>Travellers Count</p>
                    <div className={classes.inp}>
                        <p><p style={{fontSize:34, fontWeight: 600, display:'inline-block'}}>{travellers}</p>Travellers</p>
                        <div>
                            <button style={{borderRight:"1px solid #BEBEBE"}} onClick={()=>setTravellers(travellers+1)}>+</button>
                            <button onClick={()=>travellers!==1&&setTravellers(travellers-1)}>-</button>
                        </div>
                    </div>
                </div>
                <div className={classes.inpCtn}>
                    <p>Departure Date</p>
                    <div className={classes.inp}>
                        <p><p style={{fontSize:34, fontWeight: 600, display:'inline-block'}}>10</p>Apr'23</p>
                    </div>
                </div>
                <div className={classes.inpCtn}>
                    <p>Departure Time</p>
                    <div className={classes.inp}>
                        <p><p style={{fontSize:34, fontWeight: 600, display:'inline-block'}}>4:30</p>PM</p>
                    </div>
                </div>
                <div className={classes.inpCtn}>
                    <p>Availability</p>
                    <div className={classes.inp}>
                        <p><p style={{fontSize:34, fontWeight: 600, display:'inline-block', color:'#19CC56'}}>Yes</p></p>
                    </div>
                </div>
            </div>
            <center>
                <button className={classes.button}>Book Now</button>
            </center>
        </div>
    )
}
