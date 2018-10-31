import React from 'react'
import './uticaj.css'
import studenti from '../images/studenti.jpg'

const Effect = () => (
	<div>
	<h2>Kako Modafinil utice na Mozak i Raspolozenje?</h2>
	<div class="container">
	<div class="row">
	<div className="slika col-md-8 col-lg-8 col-sm-12">
	<p>
Povećava otpor na umor i utiče pozitivno na raspoloženje.
	</p>
	<p>
Modafinil ima pozitivan uticaj na Motivaciju, Brzinu reakcije, Koncentraciju i Budnost.
	</p>
	<p>
Na Univerzitetu Kembridž je dokazano da Modafinil smanjuje Impulsivne reakcije i Loše odluke.
	</p>	
	</div>
	<div class="studenti col-md-4 col-lg-4 col-sm-12">
	<img src={studenti} />
	</div>
	</div>
	</div>
	<hr />
	</div>
	)

export default Effect