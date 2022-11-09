
export class Modelo{
	constructor(){
		this.lista = []
	}
	insertar(nombre, email){
		this.lista.push({'nombre': nombre, 'email': email})
	}
}