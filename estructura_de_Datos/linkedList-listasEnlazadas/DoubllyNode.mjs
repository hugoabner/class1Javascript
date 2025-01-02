/*DOUBLY LINKED LIST _ LISTAS ENLAZADAS DOUBLES*/
export class DoublyNode {
	constructor (value) { 
		/**@value creamos una propiedad que obtendra y almacenara el valor al instanciar la clase */
		this.value = value; 
		/**@next un puntero que apuntara a la siguiente posicion  */
		this.next = null;
		/**@prev un puntero que apuntara a la anterior posicion  */
		this.prev = null;
	}
}