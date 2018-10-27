import React from 'react'
import './navbar.css'

const Navbar = () => (
	<div class="Navbar">
   <div class="Navbar__Link Navbar__Link-brand">
      Modafinil Modvigil
    </div>
    <div class="Navbar__Link Navbar__Link-toggle">
      <i className="fa fa-bars"></i>
    </div>
  
  <nav class="Navbar__Items Navbar__Items--right">
    <div class="Navbar__Link">
      <i className="fa fa-instagram"></i>
    </div>
    <div class="Navbar__Link">
    <i className="fa fa-facebook"></i>
    </div>
    <div class="Navbar__Link">
    <i className="fa fa-twitter"></i>
    </div>
    <div class="Navbar__Link">
    <i className="fa fa-whatsapp"></i>
    </div>
  </nav>
</div>
	)
export default Navbar