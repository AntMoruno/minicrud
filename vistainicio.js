import {Vista} from "./vista.js"

export class VistaInicio extends Vista{
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
		//Hacemos que la VistaInicio "observe" al Modelo
		this.modelo = this.controlador.getModelo()
		this.modelo.registrar(this.actualizar.bind(this))
		
		
		
		this.btnAlta = this.div.getElementsByTagName('button')[0]
		
		this.tabla = this.div.getElementsByTagName('tbody')[0]
		
		/*this.btnInspeccionar = this.td.getElementsByTagName('button')[2]*/
		
		this.btnAlta.onclick = this.pulsarAlta.bind(this)
		/*this.btnInspeccionar.onclick = this.pulsarInspeccionar.bind(this)*/
		
		
	}
	/**
	*Cambia la vista a vistaAlta, en la que está el formulario
	*/
	pulsarAlta(){
		console.log("entra")
		this.controlador.pulsarBtnAlta()
	}
	/*
		pedirDatos(){
			let datos = this.controlador.getModelo().getDatos(this.actualizarTabla)
		}
	
	*/
	actualizar(){
	    this.borrarTabla()
	    for(let dato of this.modelo.getDatos()){
	        let tr = document.createElement('tr')
	        this.tabla.appendChild(tr)
	        let td1 = document.createElement('td')
	        tr.appendChild(td1)
	        td1.textContent = dato.nombre
	        let td2 = document.createElement('td')
	        tr.appendChild(td2)
	        td2.textContent = dato.tipo
			let td3 = document.createElement('td')
			tr.appendChild(td3)
			td3.textContent = dato.fecha
	        let td4 = document.createElement('td')
	        tr.appendChild(td4)
			let spanEliminar = document.createElement('span')
			td4.appendChild(spanEliminar)
			spanEliminar.classList.add('icono')
			spanEliminar.textContent = '🗑'
			spanEliminar.onclick = this.eliminar.bind(this, dato)
			let spanEditar = document.createElement('span')
			td4.appendChild(spanEditar)
			spanEditar.classList.add('icono')
			spanEditar.textContent = '✏'
			/*spanEditar.onclick = this.editar.bind(this, dato)*/
			let spanInspeccionar = document.createElement('span')
			td4.appendChild(spanInspeccionar)
			spanInspeccionar.classList.add('icono')
			spanInspeccionar.textContent = '👁'
			spanInspeccionar.onclick = this.inspeccionar.bind(this, dato)
       	}
	}
	/**
	* Borra las filas de la tabla
	*/
	borrarTabla(){
	    while (this.tabla.firstElementChild)
	        this.tabla.firstElementChild.remove()
	}
	/**
	* Atención al evento eliminar de una fila.
	* @param dato {Object} Dato contenido en la fila
	**/
	eliminar(dato){
		//Llamada al controlador
		this.controlador.eliminarCRUD(dato)
	}
	/**
	* Cambia la vista a la página del personaje
	*/
	inspeccionar(dato){
		this.controlador.pulsarIconoInspeccionar(dato)
		console.log("He pulsado icono ojo")
	}
}