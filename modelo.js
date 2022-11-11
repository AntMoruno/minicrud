
export class Modelo{
	constructor(){
		this.lista = []
		this.callbacks = [] //Array de callbacks para implementar el observador
		this.db = null		
		let peticion = window.indexedDB.open("BBDDPersonajes",1)
		peticion.onsuccess = (evento) => {
			this.db = evento.target.result
			this.avisar() //Informo al controlador que he terminado
		}
		peticion.onupgradeneeded = (evento) => {
			this.db = evento.target.result
			const objectStore = this.db.createObjectStore('tablaPersonajes',{autoIncrement:true})

			this.avisar() //Informo al controlador que he terminado
		}
		
	}
	/**
	* Registra un objeto para informarle de los cambios en el Modelo
	* @param {Function} Función de callback que será llamada cuando cambien los datos
	**/
	registrar(callback){
        this.callbacks.push(callback)
	}
	/**
	* Ejecuta todos los callback registrados.
	**/
	avisar(){
		for(let callback of this.callbacks)
			callback()
	}
	/**
		Inserta un nuevo registro.
		@param nombre {String} Atributo nombre del nuevo registro
		@param email {String} Atributo email del nuevo registro
	**/
	insertar(nombre, fecha, tipo, descripcion, url, imagen){
		this.lista.push({'nombre': nombre, 'fecha': fecha, 'tipo': tipo, 'descripcion': descripcion, 'url': url, 'imagen': imagen, })
		this.avisar()
		console.log(this.lista)
	}
	/**
		Elimina un registro.
		@param dato {Object} Dato a eliminar
	**/
	borrar(dato){
		for(let i=0; i<= this.lista.length; i++)
			if (dato == this.lista[i]) 
				this.lista.splice(i,1)
		this.avisar()
	}
	/**
	*Funciones IndexedDB
	**/
	insertDB(nombre, fecha, tipo, descripcion, url, imagen){
		const objectStore = this.db.transaction('tablaPersonajes', 'readwrite').objectStore('tablaPersonajes')
		const peticion = objectStore.get(1)
		let personaje = {
			nombre: nombre,
			fecha: fecha,
			tipo: tipo,
			descripcion: descripcion,
			url: url,
			imagen: imagen
		}
		objectStore.add(personaje)
		
		this.avisar()
	}
	
	
	
	
	
	
	
	
	/**
	* Devuelve los datos del modelo.
	* En este modelo tan simple, es fácil. En proyectos más complejos, será más elaborado
	* #return {Array} Datos del modelo
	**/
	getDatos(){
	    return this.lista
	}
}