import React , {useState}  from 'react'
import SharwaniSearch from "./SharwaniSearch";
import SharwaniBox from "./SharwaniBox";
import SharwaniAside from "./SharwaniAside";
import  SharwaniData  from "./Sharwani.json";
import { CiFilter } from "react-icons/ci";



const Sharwani = () => {


  const [filter  , setFilter ] = useState(false);


  return (
    <div className='container-xl'>

<h2 className='text-center mt-5 fw-semibold' style={{color: "var(--main-color)"}}>Sharwani</h2>

      <SharwaniSearch />

      <div className="search-result mt-4">
          <div className="row">
            <div className="col-md-3">
                <SharwaniAside  filter={filter}  setFilter={setFilter} />
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
                  <SharwaniBox  HotelData={SharwaniData} />
                
                </div>
            </div>

          </div>
        </div>

  
        
    </div>
  )
}

export default Sharwani
