"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    return arr.map(item=>item.age*2);
}

function filterEven(arr){
   return arr.filter(item=> item%2===0);
}

function filterOver10(arr) {
    return arr.filter((item)=>item.age>10);
}

function findEvenNum(arr){
    return arr.find(item=> item%2===0);
}

function findEvenAge(arr){
    return arr.find((item)=>item.age%2===0);
}

function includesEvenNum(arr){
    for(let i=0;i<arr.length;i++){
        return arr.includes(arr[i]%2===0);
}
}

function includesEvenAge(arr){
    for(let i=0;i<arr.length;i++){
        return arr.includes(arr[i].age%2===0);
}
}
function sum(arr){
    let sumNum=arr.reduce(function(sum,current){
           return sum+=current;
    },0);
    return sumNum;
}
    