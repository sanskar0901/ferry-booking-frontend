import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Mainpage from './components/mainPage/Mainpage';

function App() {



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
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
