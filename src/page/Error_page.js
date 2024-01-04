import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function Errore() {
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
                                                <h1>Oups !</h1>
                                                <h3>La page que vous recherchez semble introuvable.</h3>
                                                <p style={{fontSize:'20px'}}>Nous sommes désolés pour le désagrément. Il se peut que la page ait été déplacée, supprimée ou qu'elle n'ait jamais existé.</p>
                                                <p style={{fontSize:'20px'}}>Vous pouvez retourner à la <a href="/" style={{color:'red' }}>page d'accueil</a> ou utiliser notre barre de recherche pour trouver ce que vous cherchez.</p>
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
                                        <img src="assets/images/chatbot3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />

        </div>
    )
}
