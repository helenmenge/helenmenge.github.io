let downPayment;
function calcDownPayment(cost){
    if(cost>=0 && cost<50000){
        downPayment=0.05*cost;
        return downPayment;
    }
    else if(cost>=50000 && cost<100000){
        downPayment=2500+(0.1*(cost-50000));
        return downPayment;
    }
    else if(cost>=100000 && cost<200000){
        downPayment=7500+(0.15*(cost-100000));
        return downPayment;
    }
    else if(cost>=200000){
        downPayment=5000+(0.1*(cost-200000));
        return downPayment;
    }  
}
let netDownPayment = calcDownPayment(250000);
console.log(netDownPayment);