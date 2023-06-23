import React, { useState, useEffect, useRef, createRef } from 'react'
import classes from './booking.module.css'
import axios from 'axios'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import logo from '../../../assets/logoMain.svg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const stripePromise = loadStripe('pk_live_51LDybfBrOXvhxCejooWLbqdvYeSj2oVKWmdJwr6q1Jm1n7v95Pl0Z8BJRQrlsn6rpjWUUYqvHYcJaBiDSpMqkggq003FuZCrIj');
import mapImg1 from '../../../assets/map1.svg'
import mapImg2 from '../../../assets/map2.svg'
import { API_URI } from '../../constants/apiUrl.constant';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const Booking = () => {
  const departureTimeRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [travellers, setTravellers] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState(new Date())
  const [from, setFrom] = useState('DocksDrivingRange Water Taxi')
  const [to, setTo] = useState(`Ward's Island`)
  const [time, setTime] = useState('0:00')
  const [availibility, setAvailibility] = useState('')
  const [capacity, setCapacity] = useState()
  const [price, setPrice] = useState(0);
  const [ferryId, setFerryId] = useState();
  const [modal, setModal] = useState(false);
  const [ferry, setFerry] = useState([])

  const datePickerCtn = () => {
    setIsOpen(!isOpen);
  };

  const departurePickerCtn = () => {
    departureTimeRef.current.click()
  }



  const handleSearch = () => {


  }
  const handleDateChange = (date) => {
    setIsOpen(false);
    setDate(date);
    const data = {
      to,
      from,
      date: date.toDateString(),
      time_slot: time,
      capacity: travellers

    }
    axios.post(`${API_URI}/ferry/searchFerry`, data).then(res => {
      console.log(res.data)
      if (!res.data.success) {
        setAvailibility(res.data.alertmsg)
        alert("No ferry available")
      }
      else {
        setFerry(res.data.ferry)
        console.log(ferry)
        setAvailibility(res.data.alertmsg)
      }
    })
  };
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
  //email regex 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!name || !email) {
      window.alert('Please Fill All The Fields')
      return
    }
    else if (!re.test(email)) {
      window.alert('Please Enter Valid Email')
      return
    }
    else if (!time || !date || time === '0:00') {
      window.alert('Please Select Date And Time')
      return
    }
    window.alert('You Will Get Only 5 Min To Complete Your Payment')
    console.log('Submit')

    const data = {
      date: date,
      seats: travellers,
      name,
      email,
    }
    console.log(ferryId)
    axios.post(`${API_URI}/booking/newBooking/${ferryId}`, data)
      .then(async (res) => {
        console.log(res.data)
        const sessionId = await res.data.sessionId;
        console.log(sessionId)
        axios.post(`${API_URI}/booking/time-exceed/${res.data.bookingId}`)
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId }).then(async (response) => {
          console.log(response.data)
          setResp(response.data)
        }).catch(async (err) => {
          console.log(err.message)
        })
      }).catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className={classes.majorContainer} id="book">
      {
        modal &&
        <div className={classes.modalMaj}>
          <div className={classes.modalBackdrop} onClick={() => setModal(false)}></div>
          <div className={classes.box}>
            <div className={classes.content}>
              <h4>Date</h4>
              <p>{new Date(date).getDate() + "/" + (new Date(date).getMonth() + 1) + "/" + new Date(date).getFullYear()}</p>
              <h4>Travellers</h4>
              <p>{travellers}</p>
              <h4>Time</h4>
              <p>{time}</p>
              <h4>Total Price</h4>
              <p>{price * travellers}</p>
              <h4>Enter Name</h4>
              <input type="text" onChange={(e) => setName(e.target.value)}></input>
              <h4>Enter Email</h4>
              <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button className={classes.button1} onClick={(e) => { handleSubmit(e) }} disabled={travellers > capacity}>Book Now</button>
          </div>
        </div>

      }
      <div className='flex items-center justify-center'>
        <a href='/directions' className='underline text-[18px] text-[#484eb5] font-[700] py-2'>Location and Directions</a>
      </div>
      <div className={classes.map}>
        <div className={classes.origin}>
          <img src={mapImg1} />
          <div className={classes.cover}>
            <p>From</p>
            <select value={from} onChange={(e) => { setFrom(e.target.value) }}>
              <option value="DocksDrivingRange Water Taxi">DocksDrivingRange Water Taxi</option>
              <option value="Ward's Island">Ward's Island</option>
            </select>
          </div>
        </div>
        <div className={classes.dateP}>
          <p><p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>15</p>mins</p>
          <p style={{ fontSize: 12 }}>Estimated Time</p>
        </div>
        <div className={classes.dest}>
          <img src={mapImg2} />
          <div className={classes.cover}>
            <p>To</p>
            <select value={to} onChange={(e) => { setTo(e.target.value) }}>
              <option value="Ward's Island">Ward's Island</option>
              <option value="DocksDrivingRange Water Taxi">DocksDrivingRange Water Taxi</option>
            </select>
          </div>
        </div>
      </div>
      <div className={classes.inputField}>
        <div className="flex border-[1px] border-[#BEBEBE]  items-center justify-between">
          <div className='p-[10px]'>
            <p>Travellers Count</p>
            <div className={classes.inp}>
              <p className='flex gap-3 items-end'><p style={{ fontSize: 34, fontWeight: 600 }}>{travellers}</p>Travellers</p>
            </div>

          </div>
          <div className='flex gap-1'>
            <button style={{ fontSize: '44px', lineHeight: '40px', border: "1px solid #BEBEBE", color: "#000000", width: "4rem", height: "6rem" }} onClick={() => travellers !== 1 && setTravellers(travellers - 1)}>-</button>
            <button style={{ fontSize: '44px', lineHeight: '40px', border: "1px solid #BEBEBE", color: "#000000", width: "4rem", height: "6rem" }} onClick={() => setTravellers(travellers + 1)}>+</button>
          </div>
        </div>
        <div className={classes.inpCtn} onClick={datePickerCtn}>
          <p>Select Date</p>
          {isOpen && (
            <Calendar
              onChange={handleDateChange}
              value={date}
              className={`absolute p-4 text-black ${classes.calendar}`}
            />
          )}

          <p className='flex items-end'>
            <p style={{ fontSize: 28, fontWeight: 600, display: 'inline-block' }}>{date.toLocaleString('en-us', { day: 'numeric' })}</p><p>{date.toLocaleString('en-us', { month: 'long' })}'{date.toLocaleString('en-us', { year: 'numeric' })}</p>
          </p>
        </div>

        <div className={classes.inpCtn} onClick={departurePickerCtn}>
          <p>Departure Time</p>
          <div className={classes.inp}>
            <p style={{ fontSize: 34, fontWeight: 600, display: 'inline-block' }}>{time}</p>
            <select id="time-slot" value={time} onChange={(e) => {
              setTime(e.target.value);
              setPrice(e.target.options[e.target.selectedIndex].getAttribute("data-price"));
              setCapacity(e.target.options[e.target.selectedIndex].getAttribute("data-capacity"));
              setFerryId(e.target.options[e.target.selectedIndex].getAttribute("data-ferryId"));
            }} className={`grid grid-col-3 w-[2vw] px-1 py-2 leading-tight text-black placeholder:text-blue-400 focus:outline-none focus:shadow-outline hover:cursor-pointer bg-white ${classes.mblbtn}`} ref={departureTimeRef}>
              <option value="">Select a time slot</option>
              {ferry.map((ferr, index) => (
                <option className={`p-2 flex justify-between gap-5  ${ferr.capacity < 10 ? 'text-rose-700' : `${ferr.capacity < 20 ? 'text-yellow-400' : 'text-green-500'}`}`} key={index} value={ferr.time_slot} data-price={ferr.fare} data-ferryId={ferr._id}
                  data-capacity={ferr.capacity}>
                  {ferr.time_slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes.inpCtn}>
          <p><b>Availability:</b> <p style={{ fontSize: 24, fontWeight: 500, display: 'inline-block', color: `${availibility == 'Yes' ? '#19CC56' : '#B90E0A'}` }}>{availibility}</p></p>
          <p><b>Total:</b> <p style={{ fontSize: 20, fontWeight: 400, display: 'inline-block' }}>{price * travellers} $CDN</p></p>

        </div>
        <button className={classes.button} onClick={(e) => { setModal(true) }} disabled={travellers > capacity && ferryId == "" && time == "" && date == ""}>Book Now</button>
      </div>



    </div >
  )
}
function PaymentSuccess({ session, success, setModal }) {

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "e-ticket", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  console.log("session=", session);
  const [data, setData] = useState({})
  const [qr, setQr] = useState("")
  useEffect(() => {
    axios.get(`https://api.stripe.com/v1/checkout/sessions/${session}`, { headers: { Authorization: `Bearer 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 ` } })
      .then(async (res) => {
        console.log("data===", res.data.metadata)
        setData(res.data.metadata)
        console.log("data===", data)
        await axios.post(`${API_URI}/booking/bookingadd/${res.data.metadata.booking_id}`).then((res) => {

          setQr(res.data.url)

        })
      })
  }, [session])
  return (
    <div className='flex flex-col items-center h-[100vh]'>
      <AiOutlineCloseCircle className='text-3xl absolute right-0 cursor-pointer' onClick={() => setModal(false)} />
      <center ref={ref} className='p-4'>
        <img src={logo} alt="logo" />
        <h1 className='text-black' style={{ fontSize: 30 }}>Payment Success</h1>
        <p className='text-black'>

          <div className='grid grid-cols-2 gap-2 items-between justify-between '>
            <p><b>From:</b> {data.from}</p>
            <p><b>To:</b> {data.to}</p>
            <p className='text-[20px]'><b>Date: {new Date(data.date).getDate() + "/" + (new Date(data.date).getMonth() + 1) + "/" + new Date(data.date).getFullYear()}</b></p>
            <p className='text-[20px]'><b>Time:{data.time}</b> </p>
            <p><b>Ferry No.:</b> {data.ferryNo}</p>
            <p><b>No. of seats:</b> {data.seats}</p>
            <p><b>Name:</b> {data.name}</p>
          </div>
          <br />
          <img src={`data:image/png;base64,${qr}`} alt="qr" />
        </p >
      </center>
      <p className=' text-red-500 text-[12px] text-center'>Take a screenshot of this ticket <br />or download it to your phone's Files/Downloads folder</p>
      <button className={classes.button} onClick={downloadScreenshot}>Download</button>

    </div >
  );

}


function BookingWrapper() {
  const location = useLocation();

  const [modal, setModal] = useState(true)

  const searchParams = new URLSearchParams(location.search);
  searchParams.get('session_id') && Cookies.set('session_id', searchParams.get('session_id'));
  const session_id = Cookies.get('session_id');
  const seats = parseInt(searchParams.get('seats'));
  const ferryId = searchParams.get('ferryId');
  const success = searchParams.get('success');
  console.log("success===", success, "seats===", seats, "ferryId===", ferryId)

  const newPathname = location.pathname;
  window.history.replaceState(null, '', newPathname);
  if (success === 'false') {
    useEffect(() => {
      axios.post(`${API_URI}/ferry/cancle/${ferryId}`, { seats: seats }).then((res) => {
        console.log(res.data)
      })
    }, [success])
    return (
      <>
        <Booking />
      </>
    );
  }
  else {
    return (
      <>
        {
          session_id && modal &&
          <div className={classes.modalMaj} id="section-to-print">
            <div className={classes.modalBackdrop} onClick={() => setModal(false)}></div>
            <div className={classes.box}>
              <Elements stripe={stripePromise}>
                <PaymentSuccess session={session_id} setModal={setModal} />
              </Elements>

            </div>
          </div>

        }

        <Booking />
      </>
    );
  }
}

export default BookingWrapper;
