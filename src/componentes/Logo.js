import React from 'react'
import LogoFreeCodeCamp from '../imagenes/freeCodeCamp_logo.png'
import '../hojas-de-estilo/Logo.css'

export function Logo() {
	return (
		<div className="contenedor-freeCodeCamp-logo">
			<img src={LogoFreeCodeCamp} className="imagen" alt="Logo de Free Code Camp" />
		</div>
	);
}