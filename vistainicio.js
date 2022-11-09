import {Vista} from "./vista.js"

export class VistaInicio extends Vista{
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		this.btnAlta = document.getElementsByTagName('button')[0]
		this.btnInspeccionar = document.getElementsByTagName('button')[1]
		
		this.btnAlta.onclick = this.pulsarAlta.bind(this)
		this.btnInspeccionar.onclick = this.pulsarInspeccionar.bind(this)
	}
	
	pulsarAlta(){
		this.controlador.pulsarBtnAlta()
	}
	pulsarInspeccionar(){
		this.controlador.pulsarBtnInspeccionar()
	}
}