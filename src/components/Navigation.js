import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
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
          <a className="navbar-brand text-brand" href="index.html"><img src={logo} width="150px"/></a>
    
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
    
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
    
              <li className="nav-item">
                <a className="nav-link " href="about.html">About</a>
              </li>
    
              <li className="nav-item">
                <a className="nav-link " href="property-grid.html">Property</a>
              </li>
    
              <li className="nav-item">
                <a className="nav-link " href="blog-grid.html">Blog</a>
              </li>
    
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item " href="property-single.html">Property Single</a>
                  <a className="dropdown-item " href="blog-single.html">Blog Single</a>
                  <a className="dropdown-item " href="agents-grid.html">Agents Grid</a>
                  <a className="dropdown-item " href="agent-single.html">Agent Single</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
    
          <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <i className="bi bi-search">search</i>
          </button>
    
        </div>
      </nav>
    );
}

export default Navigation;