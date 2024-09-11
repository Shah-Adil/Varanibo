import React from 'react'


const HouseRentSearch = () => {
  return (
    <>

        <div id="searchbar" className="search-content  nav gap-3">
          <div className="hotel">
            <div className="hotel-search ">
              <div className="box location">
                <span className="label">Select Division</span>
                <select className="value">
                     <option value="Cox'sBazar">Cox's Bazar</option>
                     <option value="Cox'sBazar">Cox's Bazar</option>
                     <option value="Cox'sBazar">Cox's Bazar</option>
                     <option value="Cox'sBazar">Cox's Bazar</option>
                     <option value="Cox'sBazar">Cox's Bazar</option>
                  </select>
                <span className="sub-value">Bangladesh</span> 
              </div>
              <div className="box checkin">
                <span className="label">Select District</span>
                <select className="value">
                     <option value="">Assending Price</option>
                     <option value="">Dessending Price</option>
                  </select>
     
               
                <span className="sub-value">District</span> 
              </div>
              <div className="box checkout">
                <span className="label">Select Upazila</span>
                <select className="value">
                     <option value="">5 Star</option>
                     <option value="">4 Star</option>
                     <option value="">3 Star</option>
                     <option value="">2 Star</option>
                     <option value="">1 Star</option>
                  </select>
                <span className="sub-value">Upazila</span>
              </div>
              <div className="box guests">
                <span className="label">Select Area</span>
                <select className="value">
                    <option value="">1<span>Room,</span>2<span>Guests</span></option>
                    <option value="">2<span>Room,</span>4<span>Guests</span></option>
                </select>
                <span className="sub-value">Area</span> 
              </div>
            
            </div>
          
          </div>
  
          <div className="search-btn-container">
            <button type="button" className="search-btn">
              Modify <br /> Search
            </button>
          </div>
        </div>
      
    </>
  )
}

export default HouseRentSearch
