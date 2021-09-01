
let salesCommission;
function computSalesCommission(salared,salesAmount){
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
let commissionAmount = computSalesCommission(false,200);
console.log(commissionAmount);
