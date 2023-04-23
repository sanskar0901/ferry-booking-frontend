import React from 'react'
import classes from './booking.module.css'
import GoogleMapReact from 'google-map-react';

export const Booking = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
      
    return (
        <div className={classes.majorContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            />
            
        </div>
    )
}
