import {compose, pipe} from 'lodash/fp'; 
import { Map } from 'immutable';
import { produce } from 'immer';
/*
function sayHello(){
    return function() {
        return console.log(' output returned from function')
    }
}
let fn = sayHello();
let message = fn();

*/

/*
    HIGHER ORDER FUNCTION: it is a function which returns another function or
    takes another function as an argument
 */

let numbers = [1, 2, 3, 4];
numbers.map((number) => console.log(number * 8));
// ex.2
setTimeout((console.log('THIS IS Higher Order Function ')), 100);

//function compossion: converting codes into small undestandable functions
//ex. 1

//trim a string 
// wrap it in division

let input = "     JavaScript ";
let output = "<div>" + input.trim() + "</div>";
//decomposed function

const trim = str => str.trim();
const wrap =  type => str => `<${type}>${str}< /${type}>`;
const toLowerCase = str => str.toLowerCase();

//using compose
const transform = compose(wrap("span"), toLowerCase, trim); //read the codes from right to left
console.log(transform(input));

/*
//using pipe
const transform2 = pipe(trim, toLowerCase, wrapInDiv);
transform2(input);

//using higher order function 
const result = wrapInDiv(toLowerCase(trim(input))); //read the codes from right to left
*/

/*  Immutability: unable to be changed to change data we make a copy of object and then update that copy
    -----------------
*/

const person = { name: 'John Doe' };
//By usign Object.assign();
const updated = Object.assign({}, person, {name: 'Janvier Jz'}); //(Arguments 1,2, 3) 1st arg: new object, 2nd is our current object, 3rd is our property we modified 
console.log(updated);

// Changing object using spread operator

const updated2 = { ...person, name:'Nahimana' };
console.log(updated2);

//updating data in immutability
const numberz = [1, 2, 3];

//adding 
const index = numberz.indexOf(2);
const added = [...numberz.slice(0, index), 4, ...numberz];
console.log(added);

//removing
const removed = numberz.filter(n => n !== 2);
console.log(removed);

//update
const updatednbr = numberz.map(n => n ===2 ? 20: n);
console.log(updatednbr);

//Immutable.Js (enforcing immutability)

let book = Map({ title: 'Hary potter' });

function publish(book) {
    return book.set("isPublished", true);
}
book = publish(book);

//console.log(book.get('title')); //to access object title
console.log(book.toJS());  //to convert output to javascript object

//enforcing immutability using immer

let secondBook = {title: 'clean code'};
function secondPublish(secondBook){
   return produce(secondBook, draftBook => {
    draftBook.isPublished = true;
});
}
const updatedBook = secondPublish(secondBook);
console.log(updatedBook);

