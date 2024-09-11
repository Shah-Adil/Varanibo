import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <>
        {/* footer  */}

        <div className="footer-nav">
            <ul className="footer-nav-content">
                <div className="container">
                <li>
                    <Link to="/">
                    <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/create" className="active">
                        <i className="fa-solid fa-plus"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/Admin">
                    <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                </div>
                <p className='mb-0'>
                Developed By{" "}
                <a href="https://opstelit.com/" target="_blank">
                    Opstel IT{" "}
                </a>{" "}
                2024{" "}
                </p>
            </ul>
        </div>
    </>
  )
}

export default Footer
