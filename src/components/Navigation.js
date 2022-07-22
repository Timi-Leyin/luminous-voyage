import React from 'react';

import {Link} from 'react-router-dom'
import logo from "../assets/logo.png"

function Navigation(props) {
    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link className="navbar-brand text-brand" to="/"><img src={logo} width="150px" alt='logo'/></Link>
    
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
    
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
    
              <li className="nav-item">
                <Link className="nav-link " to="/about">About</Link>
              </li>
    
              <li className="nav-item">
                <Link className="nav-link " to="/holiday">Holiday</Link>
              </li>
    
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item " to="/">Another Action</Link>
                  <Link className="dropdown-item " to="/"> Single</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">More Deal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">Another Deal</Link>
              </li>
            </ul>
          </div>
    
          <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
            <i className="bi bi-search">search</i>
          </button>
    
        </div>
      </nav>
    );
}

export default Navigation;