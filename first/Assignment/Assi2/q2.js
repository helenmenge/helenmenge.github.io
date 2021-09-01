const MONTHS = 12
function savingAccount(initialAmount,interest,years){
    let p=initialAmount,r=interest/100,n=MONTHS,t=years;
    let balance = p*(1+r/n)**(n*t);
    return balance;
}
let totalBalance = savingAccount(10000,5,10);
console.log(totalBalance);