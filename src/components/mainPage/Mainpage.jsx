import React from 'react'
import { Aboutus } from './aboutus/aboutus'
import { Header } from './header/header'
import BookingWrapper from './bookingSection/booking'
import { FooterTop } from './footer/footer'
import { Intro } from './intro/intro'

function Mainpage() {
  return (
    <div>
        <Header/>
        <Intro/>
        <BookingWrapper/>
        <Aboutus/>
        <FooterTop/>
    </div>
  )
}

export default Mainpage