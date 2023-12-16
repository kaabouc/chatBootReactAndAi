import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div>
    
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h6>Welcome to IRSICHATBOT</h6>
                    <h3>Your Gateway to Database Administration Knowledge!</h3>
                    <p>
At IRSICHATBOT, we specialize in delivering comprehensive information and guidance on all things related to database administration. Whether you're a seasoned professional or someone exploring the realm of databases, our platform is designed to be your go-to resource for valuable insights and support.
</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="border-first-button scroll-to-section">
                      <Link to="/chatbot">Get Start</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="about section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/about-dec.png" alt=""/>
              </div>
            </div>
            <div class="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <div class="about-right-content">
                <div class="section-heading">
                  <h6>About Us</h6>
                  <h4> your dedicated platform for all things database administration.</h4>
                  <div class="line-dec"></div>
                </div>
                <p>What sets IRSICHATBOT apart is its commitment to providing user-friendly, easily accessible information. Our chatbot interface ensures that you can quickly navigate through a wealth of database administration topics. From fundamental concepts to advanced techniques, our aim is to empower you with the knowledge needed to excel in managing databases efficiently.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  
  <div id="free-quote" class="free-quote text-center">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-heading fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <h6>Get Your Free chatbot</h6>
          <h4>Welcome to IRSICHATBOT, your dedicated platform for all things database administration.</h4>
          <div class="line-dec"></div>
        </div>
      </div>
    </div>
  </div>
</div>



 

<div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <h6>Contact Us</h6>
            <h4>Get In Touch With Us <em>Now</em></h4>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-dec">
                  <img src="assets/images/contact-dec.png" alt=""/>
                </div>
              </div>
              <div class="col-lg-5">
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.285337871404!2d-8.0138047!3d31.638741899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9eb5090999%3A0x2dca05e37a64f83b!2sFacult%C3%A9%20des%20Sciences%20et%20Techniques!5e0!3m2!1sfr!2sma!4v1702723211955!5m2!1sfr!2sma" width="100%" height="636px" frameborder="0"  allowfullscreen></iframe>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src="assets/images/phone-icon.png" alt=""/>
                          <a href="#">0600000000</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src="assets/images/email-icon.png" alt=""/>
                          <a href="#">IRISI22.25@email.com</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src="assets/images/location-icon.png" alt=""/>
                          <a href="#"> FSTG MARRAKECH, MOROCCO </a>
                        </div>
                      </div>
                    </div>
                   
                    <div class="col-lg-12">
                      <fieldset>
                        
                      <h3 style={{ fontFamily: "monospace" , color:"blue"}}>
                    "IRSICHATBOT is here to assist you every step of the way."<br />
                    "If you have any issues, you can contact us via email or phone number."
                  </h3>

                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
