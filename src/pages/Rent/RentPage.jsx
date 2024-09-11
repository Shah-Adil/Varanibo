import React  ,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RentPage = () => {

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
          <h3>🏠রুমমেট আবশ্যক</h3>
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
            🏠রুমমেট আবশ্যক <br />
            <small style={{ fontSize: 11, color: "#8393aa" }}>
              <i className="fa-solid fa-calendar-days" />
              &nbsp;3 hours ago
            </small>
          </h4>
          <p>
            🏠রুমমেট আবশ্যক ★ছাত্র/চাকুরিজীবি আবশ্যক ★ ১লা সেপ্টেম্বর ২০২৪ ইং
            থেকে ফ্ল্যাট বাসার ৫ষ্ঠ তলায় সুন্দর ও মনোরম পরিবেশ ৩ সিটের ১ রুমে ২
            টি সিট ভাড়া হবে। সিট ভাড়া ২৫০০। অন্যান্য বিল আলাদা 👉🏻সার্বক্ষণিক
            পানি, গ্যাস, ওয়াইফাই সু্ব্যবস্থা রয়েছে। ** পড়াশোনার জন্য শান্ত ও
            নিরিবিলি পরিবেশ। ঠিকানাঃ৯৯১/১এ পূর্ব মনিপুর। মিরপুর ১০ ও ২ হেটে যেতে
            সময় লাগে ৮/১০ মিনিট। যোগাযোগঃ 01791433722
          </p>
          <h6>
            Contact:{" "}
            <a href="tel:যোগাযোগঃ 01791433722">যোগাযোগঃ 01791433722</a>
          </h6>
          <div className="seller-info">
            <h4>
              <i className="las la-map-marker" /> Location
            </h4>
            <ul>
              <li>
                Adabor | আদাবর, Adabor | আদাবর, Dhaka | ঢাকা, Dhaka, Bangladesh,
                <br />
                <span style={{ color: "#686868", fontWeight: 400 }}>
                  {" "}
                  ঠিকানাঃ৯৯১/১এ পূর্ব মনিপুর। মিরপুর ১০ ও ২ হেটে যেতে সময় লাগে
                  ৮/১০ মিনিট।
                </span>
              </li>
              <li className="pl-1"> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default RentPage
