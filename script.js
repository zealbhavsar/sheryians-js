// // // var let const 
// // // var 
// // // var a = 12;
// // // var a = 13;
// // //  do not use let , var is use call the same name variable after thousand of line with same "a" name

// // //    const
// // // const dulha = "laba";
// // // const dulhan = "laby";
// // //  when u use cosnt you can not change the value of variable

// // // scope
// // // functional , global , block


// // // reassignment, redeclaration

// // //  var a(declare) = 12(initialization);
// // //  a = 32;(updated value)

// // // below v redeclare the var

// // //  var b = 12;
// // //  b = 32;  redeclaratiion is only possible with var not with let and const

// // // bracket values called reference values and without bracket called primitive values



// // // data types-- 11 zeal true () data can be any
// // // (1)primitive                     //(2) reference
// // // 1. string                         // 1. object
// // // 2. number                         // 2. array
// // // 3. boolean                        // 3. function  
// // // 4. null
// // // 5. undefined

// // // let a = 12; // primitive value
// // // let b = a ;// b is a copy of a, so changing b does not affect a

// // // a = b + 12;



// // // let a = [1,2,3]; // primitive value
// // // let b = a; 


// // // symbole -> unique immutable value

// // // truthy vs falsy statment 
// // //they r -> "", 0, null, undefined, NaN, false
// // // to check in console -> put !! before the value, eg !!
// // // !!"hello" -> true
// // // !!0 -> false
// // // !!null -> false
// // // !!undefined -> false
// // // !!NaN -> false
// // // !!false -> false 

// // // arithmetic done 
// // // ternary operator ?:

// // // condition?// value if true

// // // 12>13 ? "yes" : "no"; // if 12 is greater than 13 then return yes else return no
// // // console.log("true") : console.log("false"); 


// // for (let i = 1; i < 101, i++) {
// //   consol.log("smash it"); 
// // }

// start 
// while (end ) {
//   // code 
//   change 
  
// let i = 1; 
// while (i < 32) {
//   console.log(i);
//   i++; 
// }


// Q1) print num form 1 to 10 using for loop 

// for (let i =1; i <= 10; i++) {
//   console.log(i);
// }

// print num form 10 to 1 using while  loop 

// fro( let i = 10; i >=1 ;)

// even num 1 - 20 

//  for(let i = 1; i <=20; i++) {
//   if(i%2 === 0) {
//     console.log(i);
//   } 


//multiplication table of 5 
// for(let i=1; i <=10; i++) {
//   console.log(`5 * ${i}` => ${5 * i}`);
 // }

//  let fnc = function() { // let variable n fumction banai didho
//     console.log("yoo sup");

//  };
//  fnc(); // call karyu atle cosnol n shwo thase

//  function dance(value1){
//     console.log(`${value1} naach raha hai`);


//  }

//  dance("horse");
//  dance("deer");

// functions 
// paramaters and arguments

// function add(v1, v2) {
// console.log(v1, v2);
// }

// add(2, 3);
// add(9, 7);

// function abcd(yp){
//     console.log(yp );

// }
// abcd(2,3,5);


// use rest parameter to accept any number of score and retuirn total 

// function getScore(...scores) {
//     let total = 0;
//      scores.forEach(function (val) {
//         total = total + val;
//      });
//     return total;
// }
// console.log (getScore(10, 12, 14, 100));  //ans in consol 


// function checkAge(age) {
//     if (age < 19) return "Young Boii";
//     return "Allowed";
// }
// console.log(checkAge(44));


                // ARRAYSSSSSSSSSSSSSS

// let arr = [1, 2, 3, 4 ];
// arr.push(8999); // last value add 

// let arr = [1, 2, 3, 4 ];
// arr.pop(); // pop means last value removed 

// let arr = [1, 2, 3, 4 ];
// arr.shift(); // means first value remove hoo jati hai 

// let arr = [1, 2, 3, 4 ];
// arr.unshift(2345); // the value add infront 

// let arr = [1, 2, 3, 4 ];
// arr.splice(2,1); // from above 0,1,2 toh 3rd value remove hoo jayge and 1means 

// let arr = [1, 2, 3, 4];
// let newarr = arr.slice (0, 2);

// let arr = [15, 25, 34, 41 ];
// let sr = arr.sort(function (a, b) {  // sr will put values in ass or dec order if a-b ass and b-a dess
//     return a - b;
// });


// let arr = [15, 25, 34, 41 ];
// arr.forEach(function(val){  // foreach line by line value show thase and for each value it run the function show in next code 
//     console.log(val);

// });
  

// let array= [15, 25, 34, 41 ];
// arr.forEach(function(val){   //15+5 same for all 
//  console.log(val + 5);
//     console.log(val);

// });
   

// use map only when u want to make new array with the help of previous array data must have to use return only it works 
// let array= [15, 25, 34, 41];
// let newarr = array.map(function(val){

//     return 12; 
// }
//)

// filter 

// let array= [15, 25, 34, 41 ];
// let newarr = array.filter(function (val) {

//     if (val > 30 ) return true; 

//  });

//         objects 

let obj = { 
     name: "Zeal",
     age: 20,
     food: "rice",

};

