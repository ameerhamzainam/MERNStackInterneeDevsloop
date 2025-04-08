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



