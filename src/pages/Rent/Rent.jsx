import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'



const Rent = () => {
  return (
    <>
        <div className="service-form">
  <div className="container">
    <div className="service-form-content">
      <h2>Find a Location for the House</h2>
      {/* select_flex  */}
      <form
        className="select_flex"
        action="https://varanibo.com/homerent"
        method="GET"
      >
        <select id="" name="country" className="form-control d-none country-dd">
          <option value="">Select Country</option>
          <option selected="" value={2}>
            Bangladesh
          </option>
        </select>
        <select className="division-dd" required="" name="division">
          <option selected="" disabled="" value="">
            Select Division
          </option>
          <option value={2}>Sylhet</option>
          <option value={10}>Dhaka</option>
          <option value={11}>Chittagong</option>
          <option value={12}>Barisal</option>
          <option value={13}>Khulna</option>
          <option value={14}>Mymensingh</option>
          <option value={15}>Rajshahi</option>
          <option value={16}>Rangpur</option>
        </select>
        <select name="district" className="district-dd">
          <option selected="" disabled="" value="">
            Select District
          </option>
        </select>
        <select
          name="upazila"
          className="select_search_tow upazila-dd select2-hidden-accessible"
          data-select2-id={1}
          tabIndex={-1}
          aria-hidden="true"
        >
          <option selected="" disabled="" value="" data-select2-id={3}>
            Select Upazila
          </option>
        </select>
    
        <select
          name="area"
          className="select_search_tow area-dd select2-hidden-accessible"
          data-select2-id={5}
          tabIndex={-1}
          aria-hidden="true"
        >
          <option selected="" disabled="" value="" data-select2-id={7}>
            Select Area
          </option>
        </select>
        
        {/* chack box flex */}
        <div className="checkbox_flex" action="">
          <div className="checkbox_area">
            <div className="checkbox">
              <div className="main_box">
                <input
                  className="check"
                  type="checkbox"
                  name="ids[13]"
                  defaultValue={13}
                  style={{ accentColor: "#3ab195" }}
                />
                <label htmlFor="">Apartment</label>
              </div>
              <div className="main_box">
                <input
                  className="check"
                  type="checkbox"
                  name="ids[11]"
                  defaultValue={11}
                  style={{ accentColor: "#3ab195" }}
                />
                <label htmlFor="">Sublate</label>
              </div>
              <div className="main_box">
                <input
                  className="check"
                  type="checkbox"
                  name="ids[10]"
                  defaultValue={10}
                  style={{ accentColor: "#3ab195" }}
                />
                <label htmlFor="">Bachelor</label>
              </div>
              <div className="main_box">
                <input
                  className="check"
                  type="checkbox"
                  name="ids[9]"
                  defaultValue={9}
                  style={{ accentColor: "#3ab195" }}
                />
                <label htmlFor="">Family</label>
              </div>
              <div className="main_box">
                <input
                  type="checkbox"
                  className="check mr-1"
                  id="checkAll"
                  name=""
                  defaultValue=""
                  style={{ accentColor: "#3ab195" }}
                />
                <label htmlFor="">All</label>
              </div>
            </div>
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  </div>
        </div>

        <div className="adds-rent ">
  <div className="container-xl">
    <h2>Latest Classified Adds/Rent</h2>
    <div className="rent-container" style={{ marginTop: 20 }}>
    <div className="rent-box title-name">
  <Link to="/Rent/page">
    <div className="rent-img">
      <img
        src="https://varanibo.com/assets/img/uploaded/2024082006041.jpg"
        alt="img"
      />
    </div>
  </Link>
  <div className="rent-text">
    <Link to="/Rent/page">
      <h3>
        🏠রুমমেট আবশ্যক <small style={{ fontSize: 12 }}>(Room:)</small>
      </h3>
      <div className="rent-date">
        <small>
          <i className="fa-solid fa-calendar-days" />1 hour ago
        </small>
      </div>
      <p style={{ color: "#686868" }}>
        ঠিকানাঃ৯৯১/১এ পূর্ব মনিপুর। মিরপুর ১০ ও ২ হেটে যেতে সময় লাগে ৮/১০ মিনিট।
      </p>
    </Link>
    <Link to="/Rent/page">
      View Details <i className="la la-angle-right" />
    </Link>
    <div className="rent-eng">
      <div className="rent-view">
        <p>
          <i className="fa-regular fa-eye" /> 1
        </p>
      </div>
      <div className="dropdown-content " style={{ position: "relative" }}>
       
      <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                    <p className="share-btn " style={{ cursor: "pointer" }}>
                        <i class="fa-solid fa-share"></i>
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

export default Rent
