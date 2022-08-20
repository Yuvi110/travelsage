import React from 'react'
import './style4.css'
import home from '../assets/home.png'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



const Login = () => {
  return (
    <>
    
    <div className="body">
    <div className="form1">
        
      <div className="title1">Welcome To TravelSage</div>
      <div className="subtitle1">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="password" className="placeholder">Password</label>
      </div>
      <button type="text" className="submit">submit</button>
    </div>
    </div>
    
     
    </>
  )
}

export default Login



