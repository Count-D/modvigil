import React from 'react'
import { Link } from 'gatsby'

import WhatIs from '../components/whatis'
import Effect from '../components/uticaj'
import Safety from '../components/bezbednost'
import Layout from '../components/layout'
import Navbar from '../components/navbar.js'
import Interesting from '../components/interesting'
import Footer from '../components/footer'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../components/index.css'

const IndexPage = () => (
	<div>
     
      
	<div class="bg">
	<div id="hero-overlay"></div>
		<div class="jumbotron">
  <h1 class="display-4">Modafinil</h1>
  <p class="lead">Nešto potpuno novo na domaćem tržištu suplemenata!</p>
  <hr class="my-4" />
  <p>Uklonite sve Distrakcije i težnju za Prokrastinacijom. Idealno za studente kao i ostale ljude kojima je potreban visok nivo Koncentracije</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Saznaj Više</a>
  </p>
</div>
	</div>

 <div class="container">
    <WhatIs />
    <Effect />
    <Safety />
    <Interesting />
  	</div>

    </div>
)

export default IndexPage
