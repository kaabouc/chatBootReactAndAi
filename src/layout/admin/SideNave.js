import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNave() {
  return (
    <div>{/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="assets/images/logo irisi.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light"> irisiChatbot</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      
      <div className="info">
        <a href="#" className="d-block">irisiChatbot</a>
      </div>
    </div>

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              <Link to='/reponse'>Reponse</Link>
              
              
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          
        </li>
        <li >
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              <Link to='/contact_login'>contact</Link>
              
              
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          
        </li>
      
      </ul>
    </nav>
  </div>
</aside>
</div>
  )
}
