import React , {useState}  from 'react'
import PartySearch from "./PartySearch";
import PartyBox from "./PartyBox";
import PartyAside from "./PartyAside";
import  PartyData  from "./Party.json";
import { CiFilter } from "react-icons/ci";



const HouseRent = () => {


  const [filter  , setFilter ] = useState(false);


  return (
    <div className='container-xl'>

<h2 className='text-center mt-5 fw-semibold' style={{color: "var(--main-color)"}}>Party</h2>

      <PartySearch />

      <div className="search-result mt-4">
          <div className="row">
            <div className="col-md-3">
                <PartyAside  filter={filter}  setFilter={setFilter} />
            </div>
            <div className="col-md-9">
              <div className="hotel-list-header mb-3 d-flex align-items-center justify-content-between">
                <h3>68 properties found </h3>
                <div className="filter-input  d-flex align-items-center gap-2">
                  <select name="" id="" className='bg-white' style={{width: 150}}>
                    <option value="">Price</option>
                    <option value="">Price</option>

                  </select>
                  <div className='filter-btn' onClick={() => setFilter(true)}>
                     <CiFilter />
                  </div>
                </div>

       
              </div>

              {/* hotel-list-body */}

              <div className="hotel-list-body">
                  <PartyBox  HotelData={PartyData} />
                
                </div>
            </div>

          </div>
        </div>

  
        
    </div>
  )
}

export default HouseRent
