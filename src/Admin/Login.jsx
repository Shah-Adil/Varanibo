import React from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className=" position-relative d-flex align-items-center justify-content-center p-3 w-100 " style={{marginTop: "-100px"  ,  background: "var(--main-color)" , height: "100vh"}}>
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
        <span className="invalid-feedback" role="alert">
          <strong style={{ color: "red", textAlign: "center" }}> </strong>
        </span>
        <input
          type="hidden"
          name="_token"
          defaultValue="yVvgfaJHtJQjkyJoD6Ru5WGurkAvikxjukbldZPy"
        />{" "}
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required=""
          autoComplete="current-password"
        />
         <a
            className="forget-btn"
            href=""
          >
            Forgot Password?
          </a>
       
        <div className="login_btn">
          <button type="submit">Login</button>
      
        </div>
        
        <div className="change-password text-center">
          Don't have an account?{" "}
          <Link to="/NewAccount">Sign Up</Link>
        </div>
       
      </form>
    </div>
  </div>
</div>

  )
}

export default Login
