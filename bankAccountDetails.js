function BankAccount(accountNumber, name, type, balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`Successfully deposited: ${amount}`);
    }

    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Successfully Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    this.checkBalance = function() {
        console.log(`Account balance: ${this.balance}`);
    }

    this.isActive = function() {
        return this.balance > 0;
    }
}

function getTotalBalance(){
    let totalBalance = 0;
    for (let account of accounts){
        if(account.isActive()){
            totalBalance += account.balance;
        }
       }
        return totalBalance;
}


let account1 = new BankAccount(12345, "Bal Govind", "Saving", 1000);
let account2 = new BankAccount(1235, "Akash", "Saving",1500);
let account3 = new BankAccount(1236, "Vivek", "Saving", 3000);

account1.deposit(500);
account1.withdraw(1000);
account1.checkBalance();    
console.log(account1.isActive());

account2.deposit(600);
account2.withdraw(1600);
account2.checkBalance();
console.log(account2.isActive());

account3.deposit(100);
account3.withdraw(3500);
account3.checkBalance();
console.log(account3.isActive());


let accounts = [account1, account2 , account3];
let total = getTotalBalance(accounts);
console.log("Total Balance : ",total);


