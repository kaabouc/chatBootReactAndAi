// src/App.js
import React from 'react';
 import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Service from './page/Service';
import About from './page/About_page';
import Home from './page/Home_page';
import Contact from './page/Contact_page';
import Footer from './layout/Footer';
import Chatbot from './components/Chatbot';
import Login from './page/Login_User';
import ListQst from './components/admin/ListQst';
import ListReponse from './components/admin/reponse/ListReponse';
function App() {


  return (
    <Router>

      <div className="App">
     
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/chatbot" element={<Chatbot/>} />
          <Route path="/listQst" element={<ListQst/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/test" element={<ListReponse/>} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;