import React from 'react'
import './whatis.css'
import image from '../images/modvigil.jpg'

const WhatIs = () => (
	<div>
	<h2>Šta je Modafinil?</h2>
	<div class="container">
		<div class="row">
	<div class="modvigil col-md-4 col-lg-4 col-sm-12">
	<img src={image} /></div>
	<div class="whatis col-md-8 col-lg-8 col-sm-12">
	<p>Modafinil je Eugeroik(Sredstvo za povećanje budnosti i koncentracije) odobren od strane FDA(Uprava za hranu i lekove SAD-a). Poznat je i pod nazivima: “Alertec”, “Provigil”, “Modvigil”, a ponakad i "Modalert".
	U publikaciji Oksfordskih neuropsihologa Ane Brem i R.M Betldej-a oni navode da su tokom istraživanja došli do zaključka da Modafinil povećava Egzekutivne Funkcije, a u 50% slučajeva takodje dolazi do znatno poboljšane pažnje i sposobnosti učenja i memorije.
	</p>
	</div>
	</div>
	</div>
	<hr />
	</div>

	)

export default WhatIs