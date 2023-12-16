import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8 col-7">
          <ul class="info">
            <li><a href="#"><i class="fa fa-envelope"></i>irisi22.25@gmail.com</a></li>
            <li><a href="#"><i class="fa fa-phone"></i>0600000000</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-4 col-5">
          <ul class="social-media">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-behance"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
          
            <Link  class="logo">
              <img src="assets/images/logo-v1.png" alt=""/>
            </Link>
           
            <ul class="nav">
              <li class="scroll-to-section"><Link to="/" class="active">Home</Link></li>
              <li class="scroll-to-section"><Link to="/about">About</Link></li>
              <li class="scroll-to-section"><Link to="/service">Services</Link></li>
              
              
              <li class="scroll-to-section"><Link to="/contact">Contact</Link></li> 
              <li class="scroll-to-section"><div class="border-first-button"><Link to="/chatbot">chatbot</Link></div></li> 
            </ul>        
            <Link class='menu-trigger'>
                <span>Menu</span>
            </Link>
           
          </nav>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
}

export default Navbar;
