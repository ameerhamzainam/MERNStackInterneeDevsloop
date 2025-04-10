console.log("Hello World");
let a:number = 5;
console.log(a);

let b:number = 10;

console.log(b);

console.log((a*b));

if(a<10){
    a+=100;
}
console.log(a);

let c = 123
let d;

function render(document:any){
    console.log(document);
    
}
// let array1 :number[] = [1,2,'3']

let array1 :number[] = [1,2,3];

let array2:number[] = [];

//intelicence
// array2.forEach((value)=>{
//     value.toFixed(3,)
// })


//tuples

let user:[number,string] = [1,"AmeerHamza"]  //specify the type of array values with in an array
// console.log(user[0].valueOf());
user.push("xd");
console.log(user); //maybe they fix this soon?

//ENUMS

// const small = 1;
// const medium = 2;
// const large = 3;

//Pascal naming Convention where you make sure every word starts with Capital letter for more readability


const enum Size{Small , Medium , Large };

let mySize : Size = Size.Small //by default compiler set the values of these variables to 0,1,2
console.log(mySize);

function CalculcateIncome(balance:number){    // Hover at function name and you will see the return type will be void if you dont return anything and if you return just like this its return type will be change from void to number
   if(balance<0){
    return 0;
   }
    return balance;
}

// for defining the specific return type we use : notation after parameters and before the function brackets

function CalculcateIncome1(balance:number) : number {
 if(balance<0){
    return 0;
 }
return balance;
    
//  return 'a';
}

CalculcateIncome1(10000);


//Objects

let employee :{
    id:number,
    name:string,
    age?:number
}= {
    id:1,
    name:"Ameer Hamza",
    // age: 24
}
// console.log(employee);
employee.age = 24; 

let employee1 :{
    id:number,
    name:string,
    age:number
}= {
    id:1,
    name:"Ameer Hamza",
    age: 0
}
// console.log(employee);
employee1.age = 24; 







