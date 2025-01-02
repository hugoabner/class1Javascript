import {SimpleNode} from './SimpleNode.mjs';

export class SimpleLinkedList {
	constructor () {
		/*inicializamos la cabecera, como null o vacio*/		
		this.head = null; 
	}
	/**@Metodo insertNode para insertar un nuevo nodo */
	insertNode (value) {
		const newNode = new SimpleNode(value)
		if (!this.head) { /*si no existe la cabecera insertamos el nuevo nodo*/
			this.head = newNode;
			return;
		}
		let currentNode = this.head; 
		while (currentNode.next) { /* Mientras haya referencia hacia al siguiente nodo*/
			currentNode = currentNode.next; 
		}
		/*cuando ya no haya referencia a nodos siguientes,*/
		/*(quiere decir que estamos al final de la llista) */
		currentNode.next = newNode; /*insertamos un newNodo a currentNode.next*/
	}

	/**@Metodo para mostrar los valores de la lista */
	displayList () {
		let current = this.head; 
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}

	/**@Metodo para ubicar un valor dentro de la lisra */
	findValue (value) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}
		return "No se encontro el elemento.";
	}

	/**@Metodo para eliminar un nodo de la lista */
	deleteNode (value) {
		if (this.head.value === value) {
			this.head = this.head.next;
			return;
		}
		let current = this.head;
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next; 
				return;
			}
			current = current.next;
		}
	}

	/**@Metodo para limpiar la lista*/
	clearList () {
		this.head = null;
		if (!this.head) {
			console.log("Lista vacia");
		}
	}


}