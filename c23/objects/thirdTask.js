let bankAccount ={
    owner: "Alice",
     balance : 500 ,
    deposit (amount){
        if(amount < 1){
            console.log("Amount is less than 1");
        }
        this.balance += amount;
        },
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            console.log("Withdrawal successful");
        } else
            console.log("Insufficient balance");
    }
}

bankAccount.deposit(1000);
bankAccount.withdraw(500);
bankAccount.withdraw(1000);
bankAccount.deposit(0);
console.log(bankAccount.balance);