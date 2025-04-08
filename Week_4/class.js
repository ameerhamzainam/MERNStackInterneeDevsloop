class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
     display() {
        return console.log(`Name of Employee is ${this.name} and age is ${this.age}`)
    }
}

const person = new Person("AmeerHamza",24);
person.display();


//class inheritance

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        return console.log(`The animal name ${this.name} and age is ${this.age}`);
    }
}
class Dog extends Animal{ //we will be able to override the methods of the super class
    // constructor ( dname,dage){
    //     this.dname = dname;
    //     this.dage = dage;
    // }
    displayDog(){
        return console.log(`This Dog name ${this.name} and age is ${this.age}`);
    }
}
const lion = new Animal("Zimba",20);
// console.log(lion);
lion.display();
const d = new Dog("zuma",5);
d.display();
d.displayDog();