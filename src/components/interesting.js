import React from 'react'
import '../components/interesting.css'
import soldiers from '../images/soldiers.jpg'
import programer from  '../images/programer.jpg'
import hirurg from  '../images/hirurg.jpg'
import bredli from  '../images/bredli.png'

const Interesting = () => (
	<div>
	<h2>Zanimljivosti</h2>
	<div class="container">
	<div class="inter row">
	<div class="bredli col-md-3 col-sm-12">
		<img src={bredli} />
		<p>Poslužio je kao inspiracija za film Limitless sa Bredli Kuperom u glavnoj ulozi.</p>
	</div>
	<div class="military col-md-3 col-sm-12">
		<img src={soldiers} />
		<p>Modafinil se koristi u vojskama SAD, Velike Britanije, Kine i Juzne Koreje.</p>
	</div>
	<div class="programer col-md-3 col-sm-12">
		<img src={programer} />
		<p>Koriste ga Programeri koji svakodnevno resavaju kompleksne logičke Probleme.</p>
	</div>
	<div class="hirurg col-md-3 col-sm-12">
		<img src={hirurg} />
		<p>Pomaže Hirurzima tokom noćnih Dežurstava.</p>
	</div>
	</div>
	</div>
	</div>
	)
	
export default Interesting