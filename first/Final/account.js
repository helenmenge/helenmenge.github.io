class Account{
    constructor(number){
        this.number=accNumber
    }
    getNumber(){
        return this.accNumber;
    }
    getBalance(){
        return currentBalance;
    }
    deposite(amount){
        if(amount>0){
       return this.curentBalance+amount;
        }
        else
        return "please enter again"
    }
    withdraw(amount){
        if(amount>0)
        return this.currentBalance-amount;
        if(amount>currentBalance || amount<0)
        return "please enter again";
    }
    toString(){
        return this.accNumber.toString;
    }
    endOfMonth(){
        return " ";
    }
}
class SavingAccount extends Account{
    constructor(number,interest){
        this.number=number
        this.interest=interest
    }
    intersetGeter(){
        return this.interest;
    }
    addInterest(){
        return totalInterest;
    }
    toString(){
        return SavingAccount;
    }

}
class CheckingAccount{
    constructor(number,overdraft){
        this.number=number;
        this.overdraft=overdraft;
    }
    
}