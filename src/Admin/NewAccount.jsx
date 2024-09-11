import React from 'react'
import {Link} from 'react-router-dom'


const NewAccount = () => {
  return (
    <div className=" position-relative d-flex align-items-center justify-content-center p-3 w-100 " style={{ marginTop: "-100px"  ,   background: "var(--main-color)" , height: "100vh"}}>
  <div className="card">
    <div className="container-label text-center">
        <img src="https://varanibo.com/assets/img/uploaded/202310051041logo%201.png" alt="img" />
    </div>
    <div className="container-icon">
      <div className="circle">
        <i className="bi bi-chevron-right" />
      </div>
    </div>
    <div className="container-form">
      <form method="POST" action="https://varanibo.com/login">

        
        <div className='row'>
            <div className='col-sm-6'>
                <label htmlFor="email">Username</label>
                <input
                type="text"
                name="email"
                id="email"
                defaultValue=""
                required=""
                autoComplete="email"
                autofocus=""
                />
            </div>
     
            <div className='col-sm-6'>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                required=""
                autoComplete="email"
                autofocus=""
                />
            </div>
        </div>

        <label htmlFor="password">Phone</label>
        <input
          type="tel"
          required=""
          autoComplete="current-password"
        />

        <div className='row'>
            <div className='col-sm-6'>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                id="password"
                required=""
                autoComplete="current-password"
                />
            </div>
            <div className='col-sm-6'>
                <label htmlFor="password">Confirm Password</label>
                <input
                type="password"
                name="password"
                id="password"
                required=""
                autoComplete="current-password"
                />
            </div>
        </div>

        <div className='mt-3'>
             <label >Which Category Do You Want to Use?</label>

            <div className='d-flex align-items-center gap-4 mt-2 mb-2'>
                <div className='d-flex align-items-center gap-1'>
                    <input type="radio" className='m-0' name="v1" id=""  style={{width: "fit-content"}} />
                    <label htmlFor="">User</label>
                </div>
                <div className='d-flex  align-items-center gap-1'>
                    <input type="radio" className='m-0' name="v1" id=""  style={{width: "fit-content"}}/>
                    <label htmlFor="">Vendor</label>
                </div>
            </div>

            <div className='d-flex align-items-center gap-4 mt-2 mb-2'>
                <div className='d-flex align-items-center gap-1'>
                    <input type="checkbox" className='m-0' name="v2" id=""  style={{width: "fit-content"}} />
                    <label className='m-0' htmlFor="">Home</label>
                </div>
                <div className='d-flex  align-items-center gap-1'>
                    <input type="checkbox" className='m-0' name="v2" id=""  style={{width: "fit-content"}}/>
                    <label className='m-0' htmlFor="">Commercial</label>
                </div>
            </div>
        </div>
         
       
        <div className="login_btn">
          <button type="submit">Create Account</button>
      
        </div>
        
        <div className="change-password text-center">
          Already have an account?
          <Link to="/Login">Sign In</Link>
        </div>
       
      </form>
    </div>
  </div>
</div>
  )
}

export default NewAccount
