import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";


const SharwaniAside = (props) => {
  return (

    <div className={`filter-modal  ${props.filter === true ? "active" : ""}`}>
    <div className='white-bg filter-box'>
             <div className='d-flex align-items-center justify-content-between  filter-header'>
               <h5>Filter</h5>
               <div >
                  <a href="#">Reset</a> 
                   <RxCrossCircled className='fs-3 ms-2 filter-close-btn' onClick={() => props.setFilter(false)}  />
               </div>
             </div>
             <div className="filter-body">
               <div className="filter-card">
                 <h6>Popular Filters</h6>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
               </div>
               <div className="filter-card">
                 <h6>Property Name</h6>
                 <form action="">
                   <div className="filter-input d-flex gap-2">
                     <input type="text" placeholder='Property Name' />
                     <button type='submit'><FaSearch/></button>
                   </div>
                 </form>
               </div>
               <div className="filter-card">
                 <h6>Price Range</h6>
                 <form action="">
                   <div className="filter-input d-flex gap-2 align-items-center">
                     <input type="number" placeholder='Min' />
                     <span style={{fontSize: "var(--font-14px)" , color: "#777"}}>To</span>
                     <input type="number" placeholder='Max' />

                     <button type='submit' style={{width: "160px"}}><RiArrowRightSLine /></button>
                   </div>
                 </form>
               </div>
               <div className="filter-card">
                 <h6>User Rating</h6>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
               </div>
               <div className="filter-card">
                 <h6>Star Rating</h6>
                 <ul className='star-rate  d-flex align-items-center flex-wrap gap-2'>
                   <li>
                     <a href="#"> <span>5</span> <FaStar/>  </a>
                   </li>
                   <li>
                     <a href="#"> <span>4</span> <FaStar/>  </a>
                   </li>
                   <li>
                     <a href="#"> <span>3</span> <FaStar/>  </a>
                   </li>
                   <li>
                     <a href="#"> <span>2</span> <FaStar/>  </a>
                   </li>
                   <li>
                     <a href="#"> <span>1</span> <FaStar/>  </a>
                   </li>
                 </ul>
               </div>

               <div className="filter-card">
                 <h6>Accommodation Type</h6>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
                 <div className='filter-check'>
                     <input type="checkbox" name="" id="" />
                     <label htmlFor="">Item Name</label>
                 </div>
               </div>

            
             </div>
     </div>
 </div>

  )
}

export default SharwaniAside
