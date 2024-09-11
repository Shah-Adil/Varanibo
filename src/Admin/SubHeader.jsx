import React from 'react'
import {NavLink , Link } from 'react-router-dom'


const SubHeader = () => {
  return (
    <>
         <div className="post-nav mt-4">
            <div className="container-xl">
                <div className="post-nav-content">
                <li>
                    <NavLink to="/Admin"   className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                      All Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Booking"   className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>Booking</NavLink>
                </li>
               
                <li>
                    <Link to="/create">Create Post</Link>
                </li>
            
                </div>
            </div>
        </div>
    </>
  )
}

export default SubHeader
