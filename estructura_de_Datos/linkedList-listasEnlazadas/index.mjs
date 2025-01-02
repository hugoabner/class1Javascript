import  {SimpleLinkedList}  from './SimpleList.mjs';
import { CircularLinkedList} from './CircularList.mjs';

/*Simple linkend list */
// const simpleLinkedList = new SimpleLinkedList();

// simpleLinkedList.insertNode("value 1");
// simpleLinkedList.insertNode("value 2");
// simpleLinkedList.displayList();
// console.log(simpleLinkedList.findValue("value 2"));
// simpleLinkedList.deleteNode("value 1");
// simpleLinkedList.displayList();
// simpleLinkedList.clearList();
// simpleLinkedList.displayList();


/*Circular linked list */
const circularLinkedList = new CircularLinkedList();

circularLinkedList.insertNode("circular 1");
circularLinkedList.insertNode("circular 2");
circularLinkedList.insertNode("circular 3");
circularLinkedList.displayList();
console.log(circularLinkedList.findValue("circular 2"));
circularLinkedList.deleteNode("circular 3");
circularLinkedList.displayList();
circularLinkedList.clearList();
circularLinkedList.displayList();