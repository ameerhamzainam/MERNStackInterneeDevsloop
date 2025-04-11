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
// console.log(employee);
employee.age = 24;
let employee1 = {
    id: 1,
    name: "Ameer Hamza",
    age: 0
};
// console.log(employee);
employee1.age = 24;
const worker1 = {
    id: 1,
    name: "AmeerHamza",
    income: 1000,
    getwage: function (hours) {
        return hours * this.income;
    }
};
const pay1 = worker1.getwage(5);
console.log(pay1);
//Union Types
console.log("=====================================");
let person1 = {
    name: "",
    wieght: 0,
    kgsTolbs: function (wieght) {
        if (typeof wieght === "string") {
            // Remove "kg" or any non-numeric characters if user types "80kg"
            return 2.20462 * (parseFloat(wieght));
        }
        return wieght * 2.20462;
    }
};
const getwieght1 = person1.kgsTolbs(80);
const getwieght2 = person1.kgsTolbs("80kg");
console.log(`Person ${person1.name} has the wieght ${getwieght1}`);
console.log(`Person ${person1.name} has the wieght ${getwieght2}`);
console.log("**********************************************");
const Person2 = {
    name: '',
    email: '',
    role: '',
    accessLevel: 0,
    displaydetails: function (name, email, role, accessLevel) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.accessLevel = accessLevel;
        return `The ${this.name} has ${this.role} role with the access level of ${this.accessLevel}`;
    }
};
const result = Person2.displaydetails("AmeerHamza", "xyz@gmail.com", "admin", 5);
console.log(result);
//# sourceMappingURL=index.js.map