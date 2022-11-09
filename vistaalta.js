/**
	@file Contiene la vista del CRUD de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

import {Vista} from './vista.js'

/**
	Vista del Juego
	Contiene el formulario de inserción y la tabla de listado.
**/
export class VistaAlta extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		this.crear()
	}
	/**
	* Crea el interfaz de juego
	**/
	crear(){
		this.divAreaJuego = document.createElement('div')
		this.div.appendChild(this.divAreaJuego)
		this.divAreaJuego.style.width = '400px'
		this.divAreaJuego.style.height = '600px'
		this.divAreaJuego.style.backgroundColor = 'black'
	}
}