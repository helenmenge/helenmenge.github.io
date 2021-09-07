"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(number){
    return 2*number;
}


/**
 * @returns {number} 100 times the input
 */
 function times100(number){
    return 100*number;
}


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr,fun){
    let newArr=[];
    for(let i=0; i<arr.length; i++){ 
        newArr[i]=fun(arr[i]);
    }
    return newArr;
}

let anon = function(num){
    return 3*num
};
function myMap(arr,fun){
    let newArr=[];
    for(let i=0; i<arr.length; i++){ 
      newArr[i]= fun(arr[i]);
    }
    return newArr;
}

anon = num => 3*num;