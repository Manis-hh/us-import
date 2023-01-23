import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
  
export default function Nav() {
  return (
    <>   
    <nav className=" navbar navbar-expand-lg navbar-light text-danger " >
    
  <div className="container-fluid mx-lg-5 ">
    
    <img  alt="" />

   <Link to="/"> <a class="navbar-brand shadow" href="#">
      <img src="/imgs/Original on Transparent.webp" alt="" width="100px"  className="d-inline-block align-text-top"/>
      
    </a>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end px-5" id="navbarNavDropdown">
      
      <ul className="navbar-nav text-right">
        
        <li className="nav-item">
         <Link to="/about" > <a className="nav-link" href="#">About Us</a></Link>
        </li>
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DATA
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/import-data"> <li><a className="dropdown-item fw-bold" href="#">IMPORT DATA </a></li></Link>
          <Link to="/export-data"> <li><a className="dropdown-item fw-bold" href="#">EXPORT DATA </a></li></Link>
          </ul>
        </li>
        
        <Link to="/select-live-data">      <li className="nav-item">
          <a className="nav-link" href="#">Search Live Data</a>
        </li></Link>
        <li className="nav-item">
        <Link to="/contact"> <a className="nav-link" href="#">Contact</a></Link>
        </li>
        <li className="nav-item">
         <Link to="/faq" > <a className="nav-link" href="#">FAQS</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>

     )
}
