// JavaScript is  a dynamically typed language which means that datatypes of variables 
// are determined by the value they hold at runtime and can change throughout the program
// as we assign different values to them


// Primitive   => Call By Value

// 7 types: String , Number , Boolean , null , undefined , Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

//const bigNumber = 3773681898794n

// Reference(Non primitive)

// Array , Objects ,Functions


//const heroes = ["shaktiman", "naagraj", "doga"];
//let myObj = {
  //  name: "piyush",
    //age: 21
//}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(anotherId));



//Primitive DataTypes:

//1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
//2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

//3. Boolean: Represents a binary value, either true or false, often used for conditional logic.

//4. Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

//5.Null:  standalone value it is representation of empty value it is special type and it is a object type. Example: let y = null; 

//6.Symbol (ES6): it is mostly used used to find uniqueness.

//7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//Reference (Object Data Types):

//1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

//2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

//3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

//4.Date: Represents dates and times.

//5.RegExp: Represents regular expressions for pattern matching.

// some facts about range

//1.Number:
//Represents both integers and floating-point numbers.
//Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//Smallest Increment: 2^(-52).

//2.String:
//Represents a sequence of characters.
//No specific range limit, but practical limits depend on memory and system resources.

//3.Boolean:
//Represents true or false.
//Only two possible values: true and false.

//4.Undefined:
//Represents a variable that has been declared but hasn't been assigned a value.
//It has only one possible value: undefined.

//5.Null:
//Represents the intentional absence of any object or value.
//It has only one possible value: null.

//6.Symbol (ES6):
//Represents a unique and immutable value.
//No specific range limit.

//7.BigInt (ES11):
//Represents large integers that cannot be represented by the Number type.
//The range is practically unlimited and depends on available memory.


// typeof Operator results  => Important for interviews

//Undefined => "undefined"
//Null  =>  "object"
//Boolean  => "boolean"
//Number =>  "number"
//String  => "string"
//Symbol  => "symbol"
//BigInt  => "bigint"
//Arrays  => "object"
//Function => "function"
//Object  => "object"
//Object (native and does not implement [[Call]])  => "object"
// Object (native or host and does implement [[Call]])  => "function"
//Object (host and does not implement [[Call]]) => 
// Implementation-defined except may not be "undefined", "boolean", "number", or "string".