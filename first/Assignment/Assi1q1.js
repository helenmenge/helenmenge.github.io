
let commession;
let prompt= require('prompt-sync')();
let salary =prompt("please enter your salary:");
let sales =prompt("please enter your sales:");
if(salary>0){
    if(sales<300){
        console.log("no commission");
    }
    if(sales>300 && sales<500){
        commession = 0.01*sales;
        console.log(commession);
    }
    else{
        commession=0.02*sales;
        console.log(commession);
    }
}
else{
    if(sales>300 && sales<500){
        commession=0.02*sales;
        console.log(commession);
    }
    else if(sales>=500){
        commession=0.03*sales;
        console.log(commession);
    }  
    
}