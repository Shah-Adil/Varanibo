import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Gallery from "../Gallery"
import { IoBed } from "react-icons/io5";


import { MdOutlineBedroomParent } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

import  HouseRentData  from "./HouseRent.json";

import { useParams    } from "react-router-dom";





const HouseRentPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (index) => setShow(index);


  const [bshow, bsetShow] = useState(false);

  const bhandleClose = () => bsetShow(false);


  let [bdata  , setBdata ]  = useState() ; 

  const bhandleShow = (name) => {
    bsetShow(true);
    setShow(false); 
    setBdata(name)
  };

  const {hotelId} = useParams();
  

  // const HotelData = HotelData.find((i) => i.id === hotelId)



  return (
    <>

    {HouseRentData.map(i => {

        return (
          <div key={i.id} className='container-xl'>
            <div className='hotel-page-top row mt-5'>
            <div className="hotel-page-top-left col-md-6">
              <Gallery hotelImage={i.hotelImages}  />
            </div>
            <div className="hotel-page-top-right col-md-6">
              <h3 className='mb-1 mt-4'>{i.name}</h3>
              <small className='d-flex align-items-center gap-1'>
                <FaLocationDot/>
                 {i.location}
              </small>
              <div className='hotel-star mt-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                
              </div>
              <h4 className='mt-2 mb-2'> {i.roomPriceDiscount}TK <del><i>{i.roomPriceReg}TK</i></del></h4>
              <div className='  d-flex align-items-center gap-3 mb-3'>
                <button className='share-btn'><FaRegHeart/></button>
               
                <Dropdown >
                  <Dropdown.Toggle  id="dropdown-basic" className='share-btn'>
                  <FaShareNodes/>
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">FaceBook</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Whatsapp</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Imo</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
  
              </div>
              <a href='#see-price' className="btn btn-success btn-main">Reserve Now</a>
  
            </div>
          
            </div>
  
            <div className='hotel-page-top p-4 mt-4'>
              <h5 className='mb-2'>{i.hotelSubtitle}</h5>
              <p>{i.hotelDescribtion}</p>
  
      
              <h5 className='mt-4 mb-2'>Most popular facilities</h5>
               <ul className="more-fac d-flex align-items-center flex-wrap" style={{gap: "8px 20px "}}>
                    
                  {i.hotelFac.map((f , index ) => {
                    return (
                      <li key={index}><i className={f.icon}></i> <span>{f.name}</span></li>
      
                    )   
                  })}  
                  
                  </ul>
            </div>
  
                  
            <div className='hotel-page-top p-4 mt-4'>
              <h5 className='mb-3'>Gallery</h5>

              <div className='row'>
              {i.hotelImages.map((g , index ) => {
                return (
                  <div key={index} className='col-md-4'>
                    <img src={g} alt="img" style={{height: "200px" , objectFit: "cover"}} />
                  </div>
                )
              })}
              </div>
  
      
          
            </div>
  
            <div className='hotel-page-top p-4 mt-4 mb-5' id='see-price'>
              <h5 className='mb-3'>Availability</h5>
              <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className=''>
                      <tr >
                        <th className='ps-3' >Room Type</th>
                        <th className='text-center'>Number of guests</th>
                        <th className='text-center'>Price</th>
  
                      </tr>
                    </thead>
                    <tbody>
  
                      {i.hotelRooms.map((h , index   ) => {
                        return (
                          <tr key={index}>
                          <td className='ps-3'>
                            <h6 style={{color: "#111" , fontSize: "var(--font-16px)" , fontWeight: 600 }}>{h.roomName}</h6>
                            <small className='d-flex align-items-center gap-1' style={{fontSize: "var(--font-14px)"}}>{h.roombed} <IoBed/></small>
                          </td>
                          <td className='d-flex align-items-center gap-1 justify-content-center pt-3'>
                            <p className='m-0' style={{color: "var(--main-color)"}}>{h.roomGuest} </p>
                            
                            <span>+</span>
                            <p className='m-0' style={{color: "var(--main-color)"}}>{h.roomExtraGuest} </p>
                          
    
                          </td>
                          <td className='text-center'>
                            <button className="btn btn-success" onClick={() => handleShow(h.roomId)}>Show Price</button>
                            <Modal  show={show === h.roomId   ? show : ""} onHide={handleClose} size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                    
                              <Modal.Body >
                                <div className='row'>
                                  <div className="col-md-7">
                                    <Gallery hotelImage={h.roomImage}  />
                                  </div>
                                  <div className="col-md-5">
                                    <h3 className='mt-4 fw-semibold ' style={{fontSize: "var(--font-24px)"}}>{h.roomName}</h3>
                                    <ul className='more-fac d-flex align-items-center gap-2 my-2'>
                                      <li>
                                          <MdOutlineBedroomParent/> 
                                          <span>{h.roomSize}</span>
                                      </li>
                                      <li>
                                          <FaWifi/> 
                                          <span>Free Wifi</span>
                                      </li>
                                      <li>
                                        <IoBed/>
                                        <span>{h.roombed}</span>
                                      </li>
                                    </ul>
                                    <h5 style={{color: "var(--main-color)" , fontSize: "var(--font-20px)"}} className='mb-2 fw-semibold'>{h.roomPrice} TK</h5>
                                    <p style={{color: "#777"}}>
                                      {h.roomDescribtion}
                                    </p>
                                    <button className="btn btn-success btn-main" onClick={() => bhandleShow(h.roomName)} >Reserve Now</button>
                                  </div>
                                </div>
                              </Modal.Body>
                          
                            </Modal>
                          </td>
                        </tr>
                        )
                      })}
  
                     
                     {/* booking modal  */}
  
                     <Modal show={bshow} onHide={bhandleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{fontSize: "var(--font-18px)"}}>{bdata}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form action="">
                       
                          <div className="row">
                            <div className="col-6">
                              <div className="filter-input">
                                <label htmlFor="" style={{fontSize: "var(--font-14px)"}}>Name</label>
                                <input type="text" placeholder='Type Your Name ' />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="filter-input">
                               <label htmlFor="" style={{fontSize: "var(--font-14px)"}}>Phone</label>
                                <input type="tel" placeholder='Type Your Phone ' />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="filter-input">
                               <label htmlFor="" style={{fontSize: "var(--font-14px)"}}>Checkin</label>
                                <input type="date"  />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="filter-input">
                               <label htmlFor="" style={{fontSize: "var(--font-14px)"}}>Checkout</label>
                                <input type="date" />
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="filter-input">
                                <label htmlFor="" style={{fontSize: "var(--font-14px)"}}>Address</label>
                                  <textarea placeholder='Type Your Address' style={{height: "100px"}}></textarea>
                                </div>
                            </div>
                          </div>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                       
                        <button className='btn btn-success btn-main' onClick={bhandleClose}>
                          Confirm
                        </button>
                      </Modal.Footer>
                    </Modal>
                      
  
                    </tbody>
                </table>
              </div>
          
            </div>
          
          
          
           </div>
        )
    
     
    })}
   

 
    </>
  )
}

export default HouseRentPage
