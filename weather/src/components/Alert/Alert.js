import React from 'react'
import './alert.scss'

const Alert = () => {
  
    return (
        <div className="alert">
           <div className="alert-body">
               <h2>City is required</h2>
               <span>Please enter the correct city name !</span>
               <button>&times;</button>
           </div>
        </div>
    )
}

export default Alert
