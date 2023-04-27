import React, { useState,useEffect } from 'react'
import classes from './booking.module.css'
import DatePicker from 'react-datepicker';
import axios from 'axios'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'


const stripePromise = loadStripe('pk_test_51MwPq1SB27RQWA1pF86ZOljFE3IWwg5p5lN2ZltOna4T4MrVUsvNjWu61s1LtiQd7o7NmNbMYeggPYB1bqGYHZyc00Raj2RPlu');

import mapImg1 from '../../../assets/map1.svg'
import mapImg2 from '../../../assets/map2.svg'
import { API_URI } from '../../constants/apiUrl.constant';


export const Booking = () => {

    const [travellers, setTravellers] = useState(1)
    const [name, setName]= useState("") 
    const [date, setDate] = useState(new Date())
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [time, setTime] = useState('12:00')
    const [availibility, setAvailibility] = useState('')
    const [capacity, setCapacity] = useState()
    const [price,setPrice]=useState();
    const [ferryId,setFerryId]=useState();
    const [modal,setModal]=useState(false);
    console.log(date)
    const timeSlots = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 20) {
            let hour = i.toString().padStart(2, "0");
            let minute = j.toString().padStart(2, "0");
            timeSlots.push(`${hour}:${minute}`);
        }
    }

    const handleSearch=()=>{
        console.log(date.toDateString())
        const data={
            to,
            from,
            date:date.toDateString(),
            time_slot:time,
            capacity:travellers

        }
        axios.post(`${API_URI}/ferry/searchFerry`,data).then(res=>{
            console.log(res.data)
            setAvailibility(res.data.message)
            res.data.success?setCapacity(res.data.ferry[0].capacity):setCapacity(0)
            res.data.success?setPrice(res.data.price):setPrice(0)
            res.data.success?setFerryId(res.data.ferry[0]._id):setFerryId(0)               

    })
}
useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const session_id = searchParams.get('session_id');
    const payment_success = searchParams.get('payment_success');
    if (session_id && payment_success === 'true') {
      retrieveCheckoutSession(session_id)
        .then((data) => {
          setPaymentDetails(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.search]);

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit')

    const data = {
      date: date,
      seats: travellers
      name, 
    }
    axios.post(`${API_URI}/booking/newBooking/${ferryId}`, data)
      .then(async (res) => {
        console.log(res.data)
        const sessionId = await res.data.sessionId;
        console.log(sessionId)

        // Redirect to the Stripe checkout page
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId }).then(async (response) => {
          console.log(response.data)
          setResp(response.data)
        //   console.log(resp)
        }).catch(async (err) => {
          console.log(err.message)
        })
      }).catch((err) => {
        console.log(err)
      })

  };

    return (
        <div className={classes.majorContainer}>
          
            {/* <div className={classes.dateP}>
                <p><p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>46</p>mins</p>
                <p style={{ fontSize: 12 }}>Estimated Time</p>
            </div> */}
            {
              modal &&
              <div className={classes.modalMaj}>
                <div className={classes.modalBackdrop} onClick={()=>setModal(false)}></div>
                <div className={classes.box}>
                  <div className={classes.content}>
                    <h4>Date</h4>
                    <p>{date.getDate()}</p>
                    <h4>Travellors</h4>
                    <p>{travellers}</p>
                    <h4>Time</h4>
                    <p>{time}</p>
                    <h4>Total Price</h4>
                    <p>{price}</p>
                    <h4>Enter Name</h4>
                    <input type="text" onChange={(e)=>setName(e.target.value)></input>
                  </div>  
                  <button className={classes.button1} onClick={(e)=>{handleSubmit(e)}} disabled={travellers>capacity}>Book Now</button>
                </div>
              </div>

            }
            <div className={classes.map}>
                <div className={classes.origin}>
                    <img src={mapImg1} />
                    <div className={classes.cover}>
                        <p>From</p>
                        <select value={from} onChange={(e) => {setFrom(e.target.value)}}>
                            <option value="">Select starting point</option>
                            <option value="Starting point 1">Starting point 1</option>
                            <option value="Starting point 2">Starting point 2</option>
                            <option value="Starting point 3">Starting point 3</option>
                        </select>
                    </div>
                </div>
                <div className={classes.dateP}>
                    <p><p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>46</p>mins</p>
                    <p style={{ fontSize: 12 }}>Estimated Time</p>
                </div>
                <div className={classes.dest}>
                    <img src={mapImg2} />
                    <div className={classes.cover}>
                        <p>To</p>
                        <select value={to} onChange={(e) => {setTo(e.target.value)}}>
                            <option value="">Select destination</option>
                            <option value="Destination 1">Destination 1</option>
                            <option value="Destination 2">Destination 2</option>
                            <option value="Destination 3">Destination 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={classes.inputField}>
                <div className={classes.inpCtn}>
                    <p>Travellers Count</p>
                    <div className={classes.inp}>
                        <p><p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>{travellers}</p>Travellers</p>
                        <div>
                            <button style={{ borderRight: "1px solid #BEBEBE" }} onClick={() => setTravellers(travellers + 1)}>+</button>
                            <button onClick={() => travellers !== 1 && setTravellers(travellers - 1)}>-</button>
                        </div>
                    </div>
                </div>
                <div className={classes.inpCtn}>
                    <div className='flex'><p>Departure Date</p><DatePicker
                        className="w-[2vw] px-1 py-2 leading-tight text-blue-700 placeholder:text-blue-400 focus:outline-none focus:shadow-outline hover:cursor-pointer bg-white"
                        onChange={(date) => { setDate(date) }}
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"⬇"}
                        required
                    /></div>
                    <p className='flex items-end'>
                        <p style={{ fontSize: 28, fontWeight: 600, display: 'inline-block' }}>{date.toLocaleString('en-us', { day: 'numeric' })}</p><p>{date.toLocaleString('en-us', { month: 'long' })}'{date.toLocaleString('en-us', { year: 'numeric' })}</p>
                    </p>
                </div>
                <div className={classes.inpCtn}>
                    <p>Departure Time</p>
                    <div className={classes.inp}>
                        <p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>{time}</p>
                        <select id="time-slot" value={time} onChange={(e) => setTime(e.target.value)} className=' grid grid-col-3 w-[2vw] px-1 py-2 leading-tight text-blue-700 placeholder:text-blue-400 focus:outline-none focus:shadow-outline hover:cursor-pointer bg-white'>
                            <option value="">Select a time slot</option>
                            {timeSlots.map((time, index) => (
                                <option className='p-2' key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={classes.inpCtn}>
                    <p>Availability: <p style={{ fontSize: 28, fontWeight: 600, display: 'inline-block', color:`${availibility=='Yes'?'#19CC56':'#B90E0A'}` }}>{availibility}</p></p>
                    <p>Seats: <p style={{ fontSize: 28, fontWeight: 600, display: 'inline-block', color:'#07567B'}}>{capacity}</p></p>
                    
                </div>
                
                <div className={classes.inpCtn}>
                    <p><b>Total:</b> <p style={{ fontSize: 28, fontWeight: 600, display: 'inline-block', color:'#19CC56'}}>{price} USD</p></p>
                    
                </div>
            </div>
            <center>
                <button className={classes.button} onClick={(e)=>{e.preventDefault();handleSearch()}}>Check Availability</button>

            </center>
            <center>
                <button className={classes.button} onClick={(e)=>{setModal(true)}} disabled={travellers>capacity}>Book Now</button>
            </center>
        </div>
    )
}
function PaymentSuccess(session) {
    console.log("session=", session);
    const [data, setData] = useState({})
    const [qr, setQr] = useState("")
    useEffect(() => {
      axios.get(`https://api.stripe.com/v1/checkout/sessions/${session.session}`, { headers: { Authorization: `Bearer sk_test_51MwPq1SB27RQWA1pGKmMCb8Zu6ZuLFi8aZ7yIa43bz7DP15Zqf1phUuNDen2nWOES4A4armJjS3uQqq2nVjuPkm900d4egNacl ` } })
        .then(async (res) => {
          console.log("data===", res.data.metadata)
          setData(res.data.metadata)
          console.log("data===", data)
          await axios.post(`${API_URI}/booking/bookingadd/${res.data.metadata.booking_id}`).then((res) => {
            console.log(res.data)
            setQr(res.data.url)
  
          })
        })
    }, [session])
    return (
      <>
      <center>

        <h1 className='text-black' style={{ fontSize: 30 }}>Payment Success</h1>
        <p className='text-black'>
          <b>Date:</b> {data.date}<br></br>
          <br></br>
          <b>No. of seats:</b> {data.seats}<br></br>
          <br></br>
          <img src={`data:image/png;base64,${qr}`} alt="qr" />
        </p >
      </center>
      </>
    );
  
  }
  
  function PaymentCancelled() {
    return <h1>Payment Cancelled</h1>;
  }
  
  function BookingWrapper() {
    const location = useLocation();

    const [modal, setModal] = useState(true)

    // Extract the session ID and payment success status from the query params
    const searchParams = new URLSearchParams(location.search);
    searchParams.get('session_id')&&Cookies.set('session_id', searchParams.get('session_id'));
    const session_id = Cookies.get('session_id');
    const paymentSuccess = searchParams.get('payment_success');
  
    // Do something with the query params (e.g. display a success message)
    // ...
  
    // Truncate the query params from the URL
    const newPathname = location.pathname;
    window.history.replaceState(null, '', newPathname);
    
    // const session_id = query.get('session_id');
  
    // if (session_id) {
    //   return (
    //     <Elements stripe={stripePromise}>
    //       <PaymentSuccess session={session_id} />
    //     </Elements>
    //   );
    // }
  
    if (window.location.pathname === '/payment-cancelled') {
      return <PaymentCancelled />;
    }
  
    return(
      <>
        {
          session_id && modal &&
          <div className={classes.modalMaj}>
            <div className={classes.modalBackdrop} onClick={()=>setModal(false)}></div>
            <div className={classes.box}>
              <Elements stripe={stripePromise}>
                <PaymentSuccess session={session_id} />
              </Elements>
            </div>
          </div>

        }
        <Booking />
      </>
    );
  }
  
  export default BookingWrapper;
