import React from 'react'
import '../assets/css/home.css'

import { Link } from "react-router-dom";

const Home = () => {
  return (


    <div>

        
        <header >
            <div className="container">
                <h1 className="logo">
                <Link to="/">
                    <img
                    src="https://varanibo.com/assets/img/uploaded/202310051041logo%201.png"
                    alt="logo"
                    />
                </Link>
                </h1>
                <Link to="/Login" className="header-profile">
                <i className="fa-solid fa-user"></i>
                <span>Login</span>
                </Link>
            </div>
        </header>
        {/* create  */}

        <div className="top-banner-mobile ">
          <div className="container">
            <div className="top-banner-content-mobile">
              <div className="top-banner-img">
                <img
                  src="https://varanibo.com/assets/img/uploaded/banner/202310051028varanibo-banner.jpg"
                  alt="Banner"
                />
              </div>
              <Link to="/create" id="create-post-btn">
                + Create Post
              </Link>
            </div>
          </div>
        </div>

        {/* all cat  */}

        <div className="our-service">
          <div className="container">
            <h2>Select Your Cateory From Below</h2>
            <div className="our-service-content">
              {/* modal btn */}
              <Link
                data-toggle="modal"
                to="/Rent"
                role="button"
                className="our-service-box"
              >
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group1.png"
                    alt="Service"
                  />
                </div>
                <h4>Home Rent</h4>
                <p>(4104) Ads</p>
                
              </Link>
              <Link
                data-toggle="modal"
                to="/com"
                role="button"
                className="our-service-box"
              >
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-2.png"
                    alt="Service"
                  />
                </div>
                <h4>Commercial Rent</h4>
                <p>(408) Ads</p>
                
              </Link>
              {/*<a data-toggle="modal" href="#" role="button" class="our-service-box box-dis">*/}
              <Link
                data-toggle="modal"
                to="/Indoor"
                role="button"
                className="our-service-box "
              >
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-1.png"
                    alt="Ind0oe"
                  />
                </div>
                <h4>Indoor Game</h4>
                <p>(2) Ads</p>
                
              </Link>
              <Link to="/hotel" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-3.png"
                    alt="Service"
                  />
                </div>
                <h4>Hotel Booking</h4>
                <p>00 Ads</p>
              </Link>
              {/* <Link to="/" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-5.png"
                    alt="Service"
                  />
                </div>
                <h4>Restaurant</h4>
                <p>00 Ads</p>
              </Link> */}
              <Link to="/EventMan" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-6.png"
                    alt="Service"
                  />
                </div>
                <h4>Management</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/Vehicle" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group.png"
                    alt="Service"
                  />
                </div>
                <h4>Vehicle Rent</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/houserent" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>House Rent</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/party" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>Party</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/EventPhoto" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>photogarpy</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/EventChecf" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>Chef</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/Furniture" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>Furniture</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/Plant" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>Plant</h4>
                <p>00 Ads</p>
              </Link>
              <Link to="/Sharwani" className="our-service-box ">
                <div className="our-service-box-img">
                  <img
                    src="https://varanibo.com/assets/img/uploaded/icon/Mask group-4.png"
                    alt="Service"
                  />
                </div>
                <h4>Sharwani</h4>
                <p>00 Ads</p>
              </Link>
            </div>
          </div>
        </div>

    </div>
  
  )
}

export default Home
