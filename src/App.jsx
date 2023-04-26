import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import axios from 'axios'
const stripePromise = loadStripe('pk_test_51MwPq1SB27RQWA1pF86ZOljFE3IWwg5p5lN2ZltOna4T4MrVUsvNjWu61s1LtiQd7o7NmNbMYeggPYB1bqGYHZyc00Raj2RPlu');

import { Header } from './components/mainPage/header/header';
import { Intro } from './components/mainPage/intro/intro';
import { Aboutus } from './components/mainPage/aboutus/aboutus';
import { FooterTop } from './components/mainPage/footer/footer';
import BookingWrapper from './components/mainPage/bookingSection/booking';
import {Adminpage} from './components/adminPage/Adminpage'
import Mainpage from './components/mainPage/Mainpage';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [ferryId, setFerryId] = useState('');
  const [seats, setSeats] = useState(1);
  const [resp, setResp] = useState('');


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





  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
     </Router>
      {/* <Adminpage/> */}
    </div>
  );
}

// function PaymentSuccess(session) {
//   console.log("session=", session);
//   const [data, setData] = useState({})
//   const [qr, setQr] = useState("")
//   useEffect(() => {
//     axios.get(`https://api.stripe.com/v1/checkout/sessions/${session.session}`, { headers: { Authorization: `Bearer sk_test_51MwPq1SB27RQWA1pGKmMCb8Zu6ZuLFi8aZ7yIa43bz7DP15Zqf1phUuNDen2nWOES4A4armJjS3uQqq2nVjuPkm900d4egNacl ` } })
//       .then(async (res) => {
//         console.log("data===", res.data.metadata)
//         setData(res.data.metadata)
//         console.log("data===", data)
//         await axios.post(`http://localhost:5000/booking/bookingadd/${res.data.metadata.booking_id}`).then((res) => {
//           console.log(res.data)
//           setQr(res.data.url)

//         })
//       })
//   }, [session])
//   return (
//     <>
//       <h1>Payment Success
//       </h1>
//       <p>
//         <b>Date:</b> {data.date}<br></br>
//         <br></br>
//         <b>No. of seats:</b> {data.seats}<br></br>
//         <br></br>
//         <img src={`data:image/png;base64,${qr}`} alt="qr" />
//       </p >
//     </>
//   );

// }


// function PaymentCancelled() {
//   return <h1>Payment Cancelled</h1>;
// }

// function AppWrapper() {
//   const { search } = window.location;
//   const query = new URLSearchParams(search);
//   const session_id = query.get('session_id');

//   if (session_id) {
//     return (
//       <Elements stripe={stripePromise}>
//         <PaymentSuccess session={session_id} />
//       </Elements>
//     );
//   }

//   if (window.location.pathname === '/payment-cancelled') {
//     return <PaymentCancelled />;
//   }

//   return <App />;
// }

export default App;
