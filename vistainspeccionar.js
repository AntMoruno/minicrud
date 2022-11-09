import {Vista} from './vista.js'

export class VistaInspeccionar extends Vista{
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		
		//Hacemos que la VistaCRUD "obvserve" al Modelo
		//this.controlador.getModelo().registrar(this)
		
		//Cojo referencias a los elementos del interfaz
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iEmail = this.div.getElementsByTagName('input')[1]
		this.btnCancelar = this.div.getElementsByTagName('button')[0]
		this.btnAceptar = this.div.getElementsByTagName('button')[1]
		
		//Asigno eventos
		this.btnAceptar.onclick = this.aceptar.bind(this)
	}
	aceptar(controlador){
		//Validar los campos
		
		
		//Llamar al controlador
		this.controlador.aceptarCRUD(this.iNombre.value, this.iEmail.value)
	}
}