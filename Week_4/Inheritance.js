// OOps concept in js

//Encapsolation

class BankAccount{
    #balance = 0;
    // #initialBalance = 0 ;
    constructor(initialBalance=0){
        this.#balance = initialBalance; 
    }
    deposit(money){
        this.#balance += money;
    }
    withDraw(money){
        this.#balance -= money;
    }
    display(){
        return console.log(`Bank Balance is: ${this.#balance}`)
    }
}
const AsaanAccount1 = new BankAccount();
AsaanAccount1.display();
const AsaanAccount2 =  new BankAccount(5000);
AsaanAccount2.display();
console.log("****************************************");
AsaanAccount1.deposit(19000);
AsaanAccount1.display();
AsaanAccount2.deposit(2000);
AsaanAccount2.display();
AsaanAccount1.withDraw(10000);
AsaanAccount1.display();
console.log("****************************************");

let Employee = {
    name:"Ameer Hamza",
    age:24,
    getSalary(){
        return `Salary of Employee ${this.name} and ${this.age} is `;
    }
}
console.log(Employee.getSalary());

class FreeLancerAccount extends BankAccount{
    
    constructor(_freelancername, _link){
        super();
        this._freelancername = _freelancername;
        this._link = _link;
    }
    get freelancername(){
        return this._freelancername;
    }
    display(){
        return `Freelancer Name : ${this._freelancername} and Account link is : ${this._link}`
    }

}

const Account  =  new FreeLancerAccount("AmeerAmeer","https://upwork.com/ameerameer"); //this is not my actual account though :)
console.log(Account.display());
console.log('Account',Account._freelancername);
console.log(AsaanAccount1.balance);

