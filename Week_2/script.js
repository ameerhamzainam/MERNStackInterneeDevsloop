
// // var a = true;


// // function test(){
// //     let a =2;
// //     console.log("Inside Function let a =",typeof(a));
// // }
// // test();
// // console.log("Inside Function var a = ",typeof("a ="+a));
// // const b = 5;
// // console.log(typeof(b))

// // for ( i =1;i<10;i++){
// //     console.log(i)
// // }
// // console.log("This is ", i);

let profile = {
    name:"Ameer Hamza",
    age:24,
    Married:false
}
// // // 

// // for (const key in profile) {
// //     if (Object.prototype.hasOwnProperty.call(profile, key)) {
// //         const element = profile[key];
// //         console.log(key)
// //     }
// // }
// // let array = [1,2,3,4,5];
// // for (const e of array) {
// //     console.log(e);
// // }

// // let j = 0;
// // while(j<10){
// //     console.log(j)
// //     ++j;
// // }
// // console.log("Outside :",j)

// // let m = 0;
// // do{
// //     console.log(m);
// //     m++;
// // }
// // while(m<10){

// // }

// // check=(s)=>{
// //     console.log(s)
// // }

// // check("hello")

// let num1= prompt("Enter first value"); 
// let num2= prompt("Enter second value");
// let operator = prompt("Enter Operator");

// let rand = Math.floor(1 + Math.random() * 100-1);
// if( rand < 10){
//     console.log("Wrong operation is performed as Random number is :",rand);
// }
// else{
//     console.log("Correct operation is Performed as Random number is:",rand) 

// }

// let op = {
//     "+": "-",
//     "-": "/",
//     "*": "+",
//     "/": "**",
// }


// let myname = "Ameer Hamza";
// let words = myname.split(" "); // Split into words ["Ameer", "Hamza"]

// let reversedWords = words.map(word => word.split("").reverse().join("")); // Reverse each word

// let reversename = reversedWords.join(" "); // Join words back with space

// console.log(reversename);  // Output: "reemA azmaH"
//array methods > push, pop, shift unshift, to string

let array1 = [1,2,3,4,5];
// console.log(array1.toString());

// delete array1[0];
// console.log(array1.toString());
let array2 = [6,7,8,9,10];

// console.log("Concat Result "+typeof(array1.concat(array2)));
// console.log("Array1:",array1)
// console.log("Array2:",array2)
 let array3 = ["Ameer","Hamza","Ahmed","Faez","Uzair"]
// array3.splice(0,1,"Bilal","Ali","Bilal","Ali");
// let array4 = array3.slice(1,1)
// console.log(array4)

// array3.forEach((value , index , array) => {
// console.log(value,index,array)
// });

// for (const key in profile) {
//     if (Object.prototype.hasOwnProperty.call(profile, key)) {
//         const element = profile[key];
//         console.log(element)
//     }
// }

// let array4 = array1.map(e=>{
//     return e**2
// })
// console.log(array4);


// console.log(array4.filter(e=>{
//     if( e > 10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }));

// console.log(array4.reduce((a,b)=>{
//     return a+b;
// }))

// //To convert any object in to an array we use from method
// let array5 = Array.from(array1)
// console.log(array5);

// console.log(array1)

//Finding the Factorials using Reduce and for loops only

let number = 5;
// let array6 = [];
// for ( let i = 0 ; i<=number; i++){
//     array6 [i] = i
// }
// console.log(array6.reduce((a,b)=>{
//     return a*b;
// }))

// let array6 = Array.from(Array(number+1).keys())
// array6 = array6.slice(1,array6.length);
// let c = array6.reduce((a,b)=> a*b)
// console.log(array6);
// console.log(c);