import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function service() {
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
                    <h2> Nos Services</h2>
                    <p>Le chatbot prend en charge la réception simultanée de messages par la voix et le texte. Les utilisateurs peuvent
                       alterner entre ces deux modes de communication sans interruption, offrant une expérience conversationnelle fluide.</p>
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
                <img src="assets/images/chatbot2.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="container mt-5">
  <h1 className="mb-4">more services</h1>
      <p> Envoi de Messages :

Par la Voix : Les utilisateurs ont désormais la possibilité de poser des questions par la voix. En utilisant la reconnaissance vocale, ils peuvent simplement prononcer leurs questions, et le chatbot les interprétera.
Par le Texte : Les utilisateurs peuvent également poser des questions en utilisant le champ de saisie de texte. Cette approche offre une flexibilité totale, permettant aux utilisateurs de choisir la méthode qui leur convient le mieux.</p>
      <p>
L'application a récemment évolué pour permettre l'envoi de messages par la voix ou le texte, offrant une flexibilité d'interaction. Cependant, la fonctionnalité de stockage des messages dans la base de données est en cours de développement pour garantir une préservation sécurisée des échanges. Nous travaillons activement sur cette amélioration pour assurer une expérience utilisateur complète, tout en prenant en charge la réception simultanée de messages vocaux et textuels, notamment en français, pour une communication plus fluide et personnalisée.




</p>
</div>
 <Footer/>
  </div>
 
  )
}
