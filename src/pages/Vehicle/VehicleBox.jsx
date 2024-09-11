import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRadio } from "react-icons/fa6";
import { FaWheelchairMove } from "react-icons/fa6";
import { Link } from 'react-router-dom'
// import FaCoffee from 'react-icons/fa'



const VehicleBox = (props) => {
  return (
    <>
      {props.HotelData.map(i => {
        return (
          <div className="hotel-list-box white-bg" key={i.id}>
          <div className="hotel-list-box-img">
            <img src={i.mainImage} alt="image" />
          </div>
          <div className="hotel-list-box-text">

            <div className='hotel-list-box-text-left'>
            <h3 className='mb-md-2 mt-md-2'>{i.name} </h3>
            <ul className='d-flex align-items-center gap-2'>
              <li className="hotel-rate">
                <FaStar/>
                <span>{i.rating} Star</span>
              </li>
              <li className='hotel-loc'>
                <FaLocationDot/>
                <span>{i.location} </span>
              </li>
            </ul>
            <ul className='d-flex align-items-center flex-wrap mt-2 mt-md-3 gap-2  hotel-service-btn'>
              {i.hotelFac.map(f => {
                return (
                  <li>
                    
                    <i className={f.icon}></i>
                    <span>{f.name}</span>
                  </li>
                )
              })}

              </ul>
             
             
            </div>

            <div className='hotel-list-box-text-right text-end pb-2'>
                <small className="rate2rate">
                   3.9/5.0 
                </small>
                <div className="hotel-discount mt-2 mb-2">
                   49% off 
                </div>
                <h4 className='mb-2'>*Extra 5% discount for bKash payment.</h4>
                <h6>Start From</h6>
                <del> BDT {i.roomPriceReg}</del>
                <h5 className='my-1'> BDT {i.roomPriceDiscount} </h5>
                <h6 className='mb-3'> for 1 Night , per room </h6>

                <Link to={`/Vehicle/page`}>Select</Link>
            </div>

          </div>

</div>
        )
      } )}
     
    </>
  )
}

export default VehicleBox
