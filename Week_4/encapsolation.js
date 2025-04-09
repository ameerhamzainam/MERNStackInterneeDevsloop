class BankAccount {
    constructor(balance = 0) {
      this._balance = balance; 
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (this._balance >= amount) {
        this._balance -= amount;
      } else {
        console.log('Insufficient balance');
      }
    }
  
    // getBalance() {
    //   return this._balance;
    // }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
//   console.log(account.getBalance()); 
//   account.withdraw(200);
//   console.log(account.getBalance());
 
  console.log((account._balance));
  
