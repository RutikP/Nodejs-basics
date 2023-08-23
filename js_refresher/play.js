// let age = 30;
// const name = "Rutik";
// const hobbies = true

// console.log(age);

// age = 45;
// console.log(age);

// name = 'Rahul';
// console.log(name);

// Normal Function
// function summary(UserAge, UserName, UserHobbies) {
//     return ('My name is '+UserName+', '+'and I am '+UserAge+' and my hobbies are: '+UserHobbies);
// }

// console.log(summary(age, name, hobbies))

// Using Anonymous Function
// let summary = function(UserAge, UserName, UserHobbies) {
//     return ('My name is '+UserName+', '+'and I am '+UserAge+' and my hobbies are: '+UserHobbies);
// }

// console.log(summary(age, name, hobbies))

//Arrow Function
// let summary = (UserAge, UserName, UserHobbies) => {
//     return ('My name is '+UserName+', '+'and I am '+UserAge+' and my hobbies are: '+UserHobbies);
// }

// console.log(summary(age, name, hobbies))

// const add = (a,b) => a+b;
// console.log(add(1,2));

// const addOne = a => a+1;
// console.log(addOne(1));

// Objects, properties and methods
// const person = {
//     name: 'Rutik',
//     age: 23,
//     greet() {
//         console.log('Hi I am '+ this.name);
//     },
//     greet1 : function(){
//         console.log('Hi I am '+ this.name);
//     }
// }
// person.greet1()

// Array and array methods
// let hobbies = ['sports', 'dancing'];
// console.log(hobbies);

// console.log(hobbies.map(hobby => 'hobby:'+ hobby));
// hobbies.push('Programming');
// console.log(hobbies);

// let copiedArr = hobbies.slice();
// console.log(copiedArr);

// copiedArr.push('guitar');
// console.log(copiedArr);

// Using Spread operator
// let mynewarr = [...hobbies];
// console.log(mynewarr);
// mynewarr.push('driving');
// console.log(mynewarr);

// let mynewObject = {...person,
// color: "white"};
// console.log(mynewObject);


// Rest operator example
// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1,2,3,4));



// Destructuring in arrays and objects

// const {name, age} = person;
// console.log(name, age);

// const person1 = ({name, age}) => {
//     console.log(name, age);
// }
// person1(person)

// let hobbies = ['sports', 'dancing'];
// let [hobb1, hobby2] = hobbies;
// console.log(hobb1,hobby2);


// Async and Promise example

// Asynchronous
// const fetchData = callback => {
//       setTimeout(() => {
//         callback('Done!');
//       }, 1500);
//     };
  
//   setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
//   }, 2000);
  
// //   synchronous 
//   console.log('Hello!');
//   console.log('Hi!');


// const mydata = (text) => {
//     setTimeout(()=>{
//         text("inside mydata");
//     }, 1500);
//     // return text("inside mydata");
// }

// setTimeout(() => {
//     console.log("This runs first");
//     mydata(text => 
//         console.log(text));
// },2000);
// // console.log('hello world');

// ----------------------------------------------------------------------------------

