// we dont use var anymore, only let or const. Const can't be changed
// to use constant you have always to add de value when you write const

//const name = 'Jhon';
//const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;

//console.log(typeof y);

// Concatenation
//console.log('My name is ' + name + ' and I am ' + age);

//template strings

//const hello = (`My name is ${name} and I am ${age}`);
//console.log(hello);

//const s = 'Technology, computer, it, code';

//length of constant
//console.log(s.length);

// edit strings

//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//substring = s.substring(0,5);
//console.log (substring.toUpperCase());
//divide
//console.log(s.split(', '));

//ARRAYS - Variables that hold multiple values

//const numbers = new Array(1,2,3,4,5);
//console.log(numbers);

const fruits = ['apple', 'banana', 'oranges', 'pears']

//index of arrays
//console.log(fruits[1]);
//to add in arrays in final
fruits.push('mangos');

//to add in beginning
fruits.unshift('strawberries');

console.log(fruits.indexOf('mangos'));
