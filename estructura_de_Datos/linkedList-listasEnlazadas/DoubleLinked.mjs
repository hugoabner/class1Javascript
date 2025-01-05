import { DoublyNode } from  './DoubllyNode.mjs'

export class DoubledLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
	}

	insertNode(value) {
		const newNode = new DoublyNode(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
	}
	displayList () {
		if (!this.head) return;
		let current = this.head; 
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}

	/**@Metodo para ubicar un valor dentro de la lisra */
	findValue (value) {
		if (!this.head) return;
		let current = this.head;
		do {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		} while (current !== this.head); 
		return "No se encontro el elemento.";
	}

	/**@Metodo para limpiar la lista*/
	clearList () {
		this.head = null;
		if (!this.head) {
			console.log("Lista vacia");
		}
	}

	deleteList (value) {
		if (!this.head) return;
		if (this.head.value === value) {
			this.head = this.head.next;
			this.head.prev = null;
			return;
		}
		let current = this.head;
		while (current && current.value !== value) {
			current = current.next;
		}
		/*si el valor que se va a eliminar existe*/
		if (current) {
			/*si el valor que se va a eliminar tiene un nodo siguiente*/
			if (current.next) {
				/*el valor previo del elemento proximo va a ser igual al valor previo del elemento que se va a eliminar */
				current.next.prev = current.prev;
			}
			/*si el valor que se va a eliminar tiene un nodo anterior*/
			if (current.prev) {
				/*el valor proximo del elemento anterio va a ser igual al valor proximo del elemento que se va a eliminar */
				current.prev.next = current.next;
			}
			/*si el nodo del elemento que se va a eliminar es igual al nodo final*/
			if (current === this.tail) {
				//entonces el valor proximo del elemento anterior va a ser igual a null
				current.prev.next = null;
				//entonces el nodo final va a ser igual al valor previo del nodo que se va a eliminar
				this.tail = current.prev; 
			}
		}
	}
}