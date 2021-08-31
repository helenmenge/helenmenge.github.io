
let prompt=require('prompt-sync')();

    
    let initialAmout = prompt("please enter initial amount:");
    const INTEREST_RATE = prompt("please enter intrest rate:");
    let numberOfYearsToCompound = prompt("please enter number of years to compund:");
    let totalBalance=initialAmout+(INTEREST_RATE*initialAmout*numberOfYearsToCompound);
    console.log(totalBalance);
