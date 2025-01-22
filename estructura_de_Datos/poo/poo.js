const _private = new WeakMap();

class Book {
	//creamos el metodo constructor
	constructor  (title, author, price) {
		const properties = {
			_title: title,
			_author: author,
			_price: price
		}
		_private.set(this, properties);
	}
	get title () {
		return _private.get(this).properties['_title'];
	}

	set title (newTitle) {
		return _private.get(this).properties['_title'] = newTitle;
	}
}

//Instanciamos a la clase 
const book1 = new Book("titulo", "autor", "precio");
const book2 = new Book("titulo2", "autor2", "precio2");

console.log("book", 
	book1.title ); 
// 	book1._author,
// 	 book1._price);

// console.log("book2", 
// 	book2._title, 
// 	book2._author,
// 	 book2._price);