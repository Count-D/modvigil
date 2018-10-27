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


import '../components/index.css'

const IndexPage = () => (
	<div>
      <Navbar />
      <hr />
	<div id="hero">
		<div id="hero-overlay"></div>
		<div class="jumbotron">
  <div class="jumbotron--content">
  	<h1>Poručite Modafinil!</h1>
    <p>Sredstvo za povećanje kognitivnih sposobnosti. Pomaže studentima pri učenju ili pri radu u poslovima u kojima je potreban visok nivo Koncentracije.</p></div>
</div>
	</div>

  <Layout>
    <WhatIs />
    <Effect />
    <Safety />
    <Interesting />
  </Layout>
 	<Footer />
    </div>
)

export default IndexPage
