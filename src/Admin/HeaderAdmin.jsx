import React from 'react'
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const HeaderAdmin = () => {
  return (
    <>
      <header style={{boxShadow : "0px 0px 20px rgba(0, 0, 0, 0.1)"}}>
        <div className="container-xl">
            <div className="navbar">
                <h1 className="logo"><Link to="/"><img src="https://varanibo.com/assets/img/uploaded/202310051041logo%201.png" alt="logo" /></Link></h1>
            </div>
            <ul className='nav gap-4'>
                
                <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic">
                        <li className='d-flex align-items-center gap-2'>
                                <img style={{width : 50 , height: 50 }} src="https://varanibo.com/assets/front/useradmin/image/index.png" alt="img" />
                                <div>
                                    <h4 className='fs-6 fw-bold text-dark' >User Name</h4>
                                    <small className='d-block fw-semibold' style={{fontSize: 14 , marginTop : "-1px" , color: "var(--main-color)"}}>User Status</small>
                                </div>
                        </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><i className="fa-solid fa-user mb-2 me-2"></i> Profile</Dropdown.Item>
                        <Dropdown.Item ><i className="fa-solid fa-sack-dollar mb-2 me-2"></i>Home Rent</Dropdown.Item>
                        <Dropdown.Item ><i className="fa-solid fa-sack-dollar mb-2 me-2"></i>Hotel Booking</Dropdown.Item>
                        <Dropdown.Item ><i className="fa-solid fa-sack-dollar mb-2 me-2"></i>Indoor</Dropdown.Item>
                        <Dropdown.Item ><i className="fa-solid fa-sack-dollar mb-2 me-2"></i>Party</Dropdown.Item>
                        <Dropdown.Item ><i className="fa-solid fa-right-from-bracket mb-2 me-2"></i>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </div>
      </header>
    </>
  )
}

export default HeaderAdmin
