import React from 'react';
import img from './../images/icon-thank-you.png';
import './../CSS/thankyou.css';

const ThankYou = () => {
  
  return (
    <div className="page5">
      <div className="thankYou">
        <img src={img} alt="Tick-icon." />
        <h1>Thank you!</h1>
        <p className="description">
          Thanks for confirming your subscription! We hope you have fun using 
          our platform. If you ever need support, please feel free 
          to email us at support@xyz.com.
        </p>
      </div>
    </div>
  )
}

export default ThankYou;