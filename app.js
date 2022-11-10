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
		
		this.vistaInicio = new VistaInicio(this /*esto es el modelo*/ ,this.divInicio)
		//this.vistaNav = new VistaNav(this, this.nav)
		this.vistaAlta = new VistaAlta(this.divAlta,this)
		this.vistaInspeccionar = new VistaInspeccionar(this.divInspeccionar)
		
		this.vistaInicio.mostrar(true)
	}
	pulsarBtnCancelar(){
		this.vistaInicio.mostrar(true)
		this.vistaAlta.mostrar(false)
		this.vistaInspeccionar.mostrar(false)		
	}
	pulsarBtnAlta(){
		this.vistaInicio.mostrar(false)
		this.vistaAlta.mostrar(true)
		this.vistaInspeccionar.mostrar(false)
	}
	pulsarIconoInspeccionar(){
		this.vistaInicio.mostrar(false)
		this.vistaAlta.mostrar(false)
		this.vistaInspeccionar.mostrar(true)
	}

	/**
	*Atención al click en el botón Aceptar del formulario vistaAlta.
	*Inserta el elemento en el modelo.
	*@param nombre {String} Nombre del elemento a registrar
	*@param fecha {Date} Fecha del elemento a registrar
	*@param tipo {String} Tipo del elemento a registrar
	*@param descripcion {String} Descripción del elemento a registrar
	*@param url {String} URL del elemento a registrar
	*@param imagen {image} Imágen del elemento a registrar
	**/
	pulsarBtnAceptar(nombre, fecha, tipo, descripcion, url, imagen){
		console.log('btn aceptar')
		this.modelo.insertar(nombre, fecha, tipo, descripcion, url, imagen)
		this.pulsarBtnCancelar()
	}
	/**
	*Atención al click en el icono eliminar del CRUD.
	*Elimina el elemento en el modelo.
	*@param dato {Object} Dato a eliminar
	**/
	eliminarCRUD(dato){
		this.modelo.borrar(dato)
	}
	
	getModelo(){
		return this.modelo
	}
	
}

const app = new Controlador() //Objeto