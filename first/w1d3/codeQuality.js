module.exports={isVowel,computeSalesCommission,calcDownpayment};

function isVowel(x){
    if(x =="a" || x =="e"|| x =="i"|| x =="o" ||x =="u"){
        return true;
    } else{
        return false;
    }
}

function computeSalesCommission(salared,salesAmount){
    let salesCommission;
    if(salared==true){
        if(salesAmount<300){
            return "0 commission";
        }
        else if(salesAmount>=300 && salesAmount<=500){
             salesCommission = 0.01*salesAmount;
            return salesCommission;
        }
        else{
            salesCommission = 0.02*salesAmount;
            return salesCommission;
        }
    }
    else{
        if(salesAmount<300){
            return "0 commission";
        }
        if(salesAmount>=300 && salesAmount<=500){
            salesCommission = 0.02*salesAmount;
           return salesCommission;
       }
       else {
        salesCommission = 0.03*salesAmount;
       return salesCommission;
    }
    }  
    }
    console.log(computeSalesCommission(false,200));
    

function calcDownpayment(cost){
    let downPayment;
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
    let netDownPayment = calcDownpayment(250000);
    console.log(netDownPayment);