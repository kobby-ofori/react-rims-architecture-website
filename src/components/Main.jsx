import React from 'react'
import "./Main.css"
import property from '../images/property.jpg'
import business from '../images/business.png'

const Main = () => {
  return (
    <div className="main">
      <div className="left-side">
        <h1>RIMS<span style={{fontSize: 15}}>Architecture</span></h1>
        <p>
          <span style={{fontSize: 50}}>L</span>ooking lands or houses to buy? Look no further.
          At Rims Architecture we provide our customers with
          good and quality services. We also help individuals/clients
          to sell their lands & buildings. We abide by all 
          neccessary legal procedures involved with buying and selling
          of lands and buildings in the country. 
        </p>
        <p><span style={{fontSize: 30}}>O</span>ur services include:
          <ul>
            <li>Selling of lands & buildings</li>
            <li>Renting of Appartments</li>
            <li>Architectural Drawings</li>
            <li>Building Construction</li>
            <li>Quantity Surveying</li>
            <li>Demolishing and Renovation</li>
            <li>Structural Engineering.</li>
          </ul>
        </p>
        <img src={business} alt="" width={250}/>
        <p>Rims Architecture is developed by Rims Ghana Limited.</p>
        <h1>At Rims:</h1>
      </div>
      <div className="right-side">
        <img src={property} alt="" width={250}/>
      </div>
    </div>
  )
}

export default Main