import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
  <span className='text-white px-2'><i className="bi bi-house-add-fill fs-2"></i></span>
    <Link className="navbar-brand" to="/">SMIT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
        
      </ul>
      <div className="d-flex" >
      
        <Link to='/Auth/Register' className="btn btn-outline-success" >SignUp</Link>
        <Link to='/Auth/Login' className="btn btn-outline-success" >LogIn</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
