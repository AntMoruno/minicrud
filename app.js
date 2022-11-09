console.log('Cargado')
import {VistaInicio} from "./vistainicio.js"
import {VistaNav} from "./vistanav.js"
import {VistaAlta} from "./vistaalta.js"
import {VistaInspeccionar} from "./vistainspeccionar.js"
import {Modelo} from './modelo.js'

/**
* Controlador de la aplicación
*/
class Controlador{
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	iniciar(){
		this.modelo = new Modelo()
		
		this.divInicio = document.getElementById('divInicio')
		this.divAlta = document.getElementById('divAlta')
		this.divInspeccionar = document.getElementById('divInspeccionar')
		
		this.vistaInicio = new VistaInicio(this,this.divInicio)
		//this.vistaNav = new VistaNav(this, this.nav)
		this.vistaAlta = new VistaAlta(this.divAlta)
		this.vistaInspeccionar = new VistaInspeccionar(this.divInspeccionar)
		
		this.vistaInicio.mostrar(true)
	}
	pulsarBtnAlta(){
		this.vistaInicio.mostrar(false)
		this.vistaAlta.mostrar(true)
		this.vistaInspeccionar.mostrar(false)
	}
	pulsarBtnInspeccionar(){
		this.vistaInicio.mostrar(true)
		this.vistaAlta.mostrar(false)
		this.vistaInspeccionar.mostrar(false)
	}
	aceptarCRUD(nombre, email){
		//Dárselo al modelo
		this.modelo.insertar(nombre, email)
	}
}

const app = new Controlador() //Objeto