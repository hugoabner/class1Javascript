/*SIMPLE LINKED LIST _ LISTAS ENLAZADAS SIMPLES*/
export class SimpleNode {
	constructor (value) { 
		/**@value creamos una propiedad que obtendra y almacenara el valor al instanciar la clase */
		this.value = value; 
		/**@next un puntero que apuntara a la siguiente posicion  */
		this.next = null;
	}
}