import {Vista} from './vista.js'

export class VistaInspeccionar extends Vista{
	constructor(div, controlador){
		super(div)
		this.controlador = controlador

		
		//Cojo referencias a los elementos del interfaz
		this.pNombre = this.div.getElementsByTagName('p')[0]
		this.pFecha = this.div.getElementsByTagName('p')[1]
		this.pTipo = this.div.getElementsByTagName('p')[2]
		this.pDescripcion = this.div.getElementsByTagName('p')[3]
		this.pURL = this.div.getElementsByTagName('p')[4]
		this.divImagen = this.div.getElementsByTagName('p')[1]
		
	}
	crearInspeccionar(dato){
		this.pNombre.appendChild(document.createTextNode(dato.nombre))
		this.pFecha.appendChild(document.createTextNode(dato.fecha))
		this.pTipo.appendChild(document.createTextNode(dato.tipo))
		this.pDescripcion.appendChild(document.createTextNode(dato.descripcion))
		this.pURL.appendChild(document.createTextNode(dato.url))
		this.divImagen.appendChild(document.createTextNode(dato.imagen))
	}
}