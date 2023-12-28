import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function about() {
  return (
    <div>
     <Navbar />
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h6> IRSI Chatbot</h6>
                    <h2> your dedicated platform </h2>
                    <p>Our cutting-edge chatbot service offers comprehensive information on database administration. Get insights into database management, optimization techniques, security protocols, and more.</p>
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
                <img src="assets/images/chatbot3.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="container mt-5">
  <div >
    <h1 class="display-7">Welcome to IRSICHATBOT - Your Gateway to Database Administration Knowledge!</h1>
    <p class="lead">Embark on a journey of database mastery with IRSICHATBOT, your dedicated source for comprehensive insights into the world of database administration...</p>


    <p>What makes IRSICHATBOT stand out is our unwavering commitment to delivering user-friendly, easily accessible information...</p>

  
    <ul>
      <li>Database Design Principles</li>
      <li>Query Optimization Techniques</li>
      <li>Data Security Measures</li>
      <li>Performance Tuning Strategies</li>
      <li>Troubleshooting and Maintenance Tips</li>
      <li>Latest Trends and Innovations in Database Technologies</li>
    </ul>

 
    <p>With IRSICHATBOT, learning about database administration transforms into an interactive and engaging experience...</p>


    <p>Stay abreast of the ever-evolving landscape of database administration by joining our vibrant community...</p>

  
    <p class="lead">Experience the convenience and depth of knowledge that IRSICHATBOT offers, and unlock your potential in the world of database administration today!</p>
  </div>
</div>
<Footer/>

  </div>
  )
}
