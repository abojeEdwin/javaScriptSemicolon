let bankAccount ={
    owner: "Alice",
     balance: 500 ,
    deposit (amount){
        this.balance += amount;},
    withdraw(amount) {
        if (this.balance > amount) {
            amount -= this.balance
        } else
            console.log("Insufficient balance");
    }
}

bankAccount.deposit(200);
//console.log(bankAccount.balance);
bankAccount.withdraw(1000);
console.log(bankAccount.balance);