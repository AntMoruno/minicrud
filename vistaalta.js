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
	constructor(div,controlador){
		super(div)
		this.controlador = controlador
		
		//Cojo referencias a los elementos del interfaz
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iFecha = this.div.getElementsByTagName('input')[1]
		this.iTipo = this.div.getElementsByTagName('input')[2]
		this.iDescripcion = this.div.getElementsByTagName('input')[3]
		this.iUrl = this.div.getElementsByTagName('input')[4]
		this.iImagen = this.div.getElementsByTagName('input')[5]
		
		this.btnCancelar = this.div.getElementsByTagName('button')[0]
		this.btnAceptar = this.div.getElementsByTagName('button')[1]
		
		this.btnCancelar.onclick = this.cancelar.bind(this)
		this.btnAceptar.onclick = this.aceptar.bind(this)
	}
	
	cancelar(){
		this.controlador.pulsarBtnCancelar()
	}
	aceptar(){
		this.controlador.pulsarBtnAceptar(this.iNombre.value, this.iFecha.value, this.iTipo.value, this.iDescripcion.value, this.iUrl.value, this.iImagen.value)
	}
	
	
}