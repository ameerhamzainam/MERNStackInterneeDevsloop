class Account{
    constructor(balance = 0){
        this.balance = balance;
    }
    deposit(money){
        this.balance +=money;
    }
    withdraw(money){
        if(this.balance<=money){
            console.log("Insufficent Balance!");
        }
        else{
            this.balance  -= money;
        }
    }

    getbalance(){
        return console.log("Balance: ", this.balance);
    }
}

const bankaccount1 = new Account(5000);
bankaccount1.getbalance();
bankaccount1.deposit(200);
bankaccount1.getbalance();
bankaccount1.withdraw(3000);
bankaccount1.getbalance();
bankaccount1.withdraw(10000);
// bankaccount1.getbalance();


