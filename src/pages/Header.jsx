import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>

      {/* header  */}

        <header className='header-main'>
            <div className=" container-xl">
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
      
    </>
  )
}

export default Header
