import React  ,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const IndoorPage = () => {

  const [ value , setValue ] = useState("https://varanibo.com/assets/img/uploaded/2024082006041.jpg");


  return (
    <>

<div className="search-details">
  <div className="container-xl">
    <div className="search-details-content">
      <div className="search-content-add">
        {/* add slider  */}
        <div>

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
            
        <SwiperSlide><img src="https://varanibo.com/assets/img/uploaded/ads/202405070905Dort-For-Varanibo.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://varanibo.com/assets/img/uploaded/ads/202405070905Dort-For-Varanibo.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://varanibo.com/assets/img/uploaded/ads/202405070905Dort-For-Varanibo.jpg" alt="img" /></SwiperSlide>
    
      </Swiper>
        </div>
        <form action="https://varanibo.com/homerent" className='mt-3' method="GET">
          <div className="select_mobile_dev_flex">
            
          <div className="division-dd mb-1">

          <Select  options={[{ value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }]} />

          </div>

          <div className="division-dd mt-2 mb-2">
          <Select  options={[{ value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }]} />
          </div>
           
          
          </div>
          <button className='mt-1' type="submit">Search</button>
        </form>
      </div>
      <div className="add_con_right">
        <div className="search-content-left">
          <div className="room-img">
            <img
              src={value}
              alt="room2"
              style={{height: "210px"}}
            />
          </div>
          <div className="room-img-change">
            <img
              src="https://varanibo.com/assets/img/uploaded/2024082006041.jpg"
              alt="room2"
              style={{height: "60px"}}
              onClick={(e) => setValue(e.target.src)}
            />
            <img
              src="https://varanibo.com/assets/front/images/img2.jpg"
              alt="img"
              style={{height: "60px"}}
              onClick={(e) => setValue(e.target.src)}

            />
            <img
              src="https://varanibo.com/assets/front/images/img2.jpg"
              alt="img"
              style={{height: "60px"}}
              onClick={(e) => setValue(e.target.src)}

            />
            <img
              src="https://varanibo.com/assets/front/images/img2.jpg"
              alt="img"
              style={{height: "60px"}}
              onClick={(e) => setValue(e.target.src)}

            />
            <img
              src="https://varanibo.com/assets/front/images/img2.jpg"
              alt="img"
              style={{height: "60px"}}
              onClick={(e) => setValue(e.target.src)}

            />
          </div>
          <h3>Soccer Football Indoor</h3>
          <div className="tags">
            <a href="#" className='py-2'>
              <i className="fa-regular fa-eye" /> 19
            </a>
          
          <Dropdown>
            <Dropdown.Toggle className='m-0 p-0' id="dropdown-basic">
                <p className="share-btn2 m-0  py-2" style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-share" />
                </p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <div id="social-links">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                              className="social-button "
                              id=""
                              title=""
                              rel=""
                            >
                              <span className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/intent/tweet?text=Default+share+text&url=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                              className="social-button "
                              id=""
                              title=""
                              rel=""
                            >
                              <span className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://wa.me/?text=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                              className="social-button "
                              id=""
                              title=""
                              rel=""
                            >
                              <span className="fab fa-whatsapp" />
                            </a>
                          </li>
                        </ul>
                      </div>
            </Dropdown.Menu>
          </Dropdown>
            <a href="tel:যোগাযোগঃ 01791433722" className="py-2">
              <i className="fa-solid fa-phone" /> call Now{" "}
            </a>
          </div>
        </div>
        <div className="search-content-right">
  <h4>
    Soccer Football Indoor
    <p className="search_content_right_p">
      <i className="fa-solid fa-calendar-days" />
      &nbsp;3 months ago
    </p>
    <p className="search_content_right_p">
      Ground Fee : &nbsp;800 <i className="fa-solid fa-bangladeshi-taka-sign" />
    </p>
    <p className="search_content_right_p">
      Minimum Booking : &nbsp;300{" "}
      <i className="fa-solid fa-bangladeshi-taka-sign" />
    </p>
  </h4>
  <p />
  <p>Soccer&nbsp; Football indor ,Shibgonj,Sylhet.</p>
  <p />
  <h6>
    Contact: <a href="tel:01787408089">01787408089</a>
  </h6>
  <div className="seller-info">
    <h4>
      <i className="las la-map-marker" /> Location
    </h4>
    <ul>
      <li>
        Shibganj | শিবগঞ্জ, Sylhet City, Sylhet, Sylhet, Bangladesh,
        <br />
        <span style={{ color: "#686868", fontWeight: 400 }}>
          {" "}
          Shibgonj,Sylhet.{" "}
        </span>
      </li>
      <li className="pl-1"> </li>
    </ul>
    <div>
      <div
        className="card-box card  p-0 border-0"
        style={{ borderRadius: 7 , boxShadow: "0px 0px 9px 2px #ccc" }}
      >
        <div
          className="card-header border-0"
          style={{ background: "#e5e8ea", color: "#454748", fontWeight: 700 }}
        >
          Booking Now
        </div>
        <div className="px-3" style={{ padding: "0 1rem" }}>
          <p
            className="form-label mt-3 mb-2"
            style={{ marginBottom: ".5rem", marginTop: "1rem" }}
          >
            Select Date
          </p>
          <div className="input-group mb-3" style={{ width: "100%" }}>
            <input
              name="time_slot"
              type="date"
              id="date"
              className="form-control tayef1"
              min="2024-08-24"
            />
            <input
              name="user_id"
              type="hidden"
              className="form-control  tayef1"
              defaultValue={381}
            />
          </div>
          <div className="" id="ajaxtest">
            <h5 className="form-label" style={{ margin: "10px 0px"  , color: "#777" }}>
              Time Slot
            </h5>
            <div className="search">
              <input
                className="search-input form-control mb-3"
                type="text"
                placeholder="Search"
              />
            </div>
            <p className="form-label" style={{ margin: "10px 0px" }}>
              Select Time :
            </p>
            <p className="btn btn-sm btn-outline-dark title-name m-1" id="d2d">
              9:00 AM
            </p>
            <p className="btn btn-sm btn-outline-dark title-name m-1" id="d3d">
              10:00 AM
            </p>
   
          
          </div>
        </div>
        <div
          className="card-footer mb-1 border-0"
          style={{ background: "transparent" }}
        >
          <button
            onclick="CalcAdd()"
            style={{
              background: "#0FC599",
              width: "100%",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 6,
              lineHeight: 0
            }}
            className="float-right btn pt-2 pb-2 btn-sm"
            id="book"
            data-toggle="modal"
            data-target="#bookingModal"
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default IndoorPage
