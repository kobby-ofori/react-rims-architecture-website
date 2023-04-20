import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="location">
        <ul>
          <h3>Location</h3>
          <li>Lakeside Estate Community1</li>
          <li>Accra, Ghana</li>
          <li>P.O.Box LG 600</li>
        </ul>
      </div>
      <div className="summary">
        <ul>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Join</li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <h3>Contact Us</h3>
          <li>+233 50 108 1707</li>
          <li>rimsarchitecture@gmail.com</li>
          <li>social-media handles</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer