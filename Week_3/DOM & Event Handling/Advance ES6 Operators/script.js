let person = {
    fname : "Ameer Hamza",
    age: 24,
    address:{
        city:"xyz",
        postalCode:10,
        area:"xyz"
    }
}
let array1= [1,2,3,4,5,[6,7,8,9,10]];
let [first,second,...rest] = array1
console.log(first)
console.log(second)
console.log(...rest)
console.log("\n")
console.log("*****Now for Objects*****")
let {fname,age,...rest1} = person;
// console.log(fname,age);
console.log(rest1);

console.log(`My name is ${fname} and im ${age} year old`)
console.log(person.address?.area)
console.log(person.phone?.contactnumber)
let contactnumber = person.address.contactnumber ?? "No Contact found"
console.log(contactnumber)

