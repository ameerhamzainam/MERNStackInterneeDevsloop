"use strict";
console.log("Hello World");
let a = 5;
console.log(a);
let b = 10;
console.log(b);
console.log((a * b));
if (a < 10) {
    a += 100;
}
console.log(a);
let c = 123;
let d;
function render(document) {
    console.log(document);
}
// let array1 :number[] = [1,2,'3']
let array1 = [1, 2, 3];
let array2 = [];
//intelicence
// array2.forEach((value)=>{
//     value.toFixed(3,)
// })
//tuples
let user = [1, "AmeerHamza"]; //specify the type of array values with in an array
// console.log(user[0].valueOf());
user.push("xd");
console.log(user); //maybe they fix this soon?
;
let mySize = 0 /* Size.Small */; //by default compiler set the values of these variables to 0,1,2
console.log(mySize);
function CalculcateIncome(balance) {
    if (balance < 0) {
        return 0;
    }
    return balance;
}
// for defining the specific return type we use : notation after parameters and before the function brackets
function CalculcateIncome1(balance) {
    if (balance < 0) {
        return 0;
    }
    return balance;
    //  return 'a';
}
CalculcateIncome1(10000);
//Objects
let employee = {
    id: 1,
    name: "Ameer Hamza",
    // age: 24
};
console.log(employee);
//# sourceMappingURL=index.js.map