"use strict";
 
module.exports = {maxOfThree, sum, multiply,reverseArray,reverseArrayInPlace,scoreExams }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num1 is number;
 * @param {number} num2 is number;
 * @param {number} num3 is number;
 * @returns {number} larges of num1,num2,num3
 */
function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return  num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log(maxOfThree(1,1,1));

/**
 * 
 * @param {Array} arr is arr of numbers 
 * @returns {number} sum of arr elements
 */
function sum(arr){
    let toatl=0;
    for(let element of arr){
        toatl += element;
    }
    return toatl;
}
sum([1,2,3,4]);

/**
 * 
 * @param {Array} arr is arr of numbers 
 * @returns {number} product of arr elements
 */
function multiply(arr){ 
let mult=1;
    for(let element of arr){
        mult *= element;
    }
    return mult;
}
multiply([1,2,3,4]);

/**
 * 
 * @param {Array} arr is an array
 * @returns {Array} element reversed array
 */
function reverseArray(arr){
return arr.reverse();
}
console.log(reverseArray(["a","b","c"]));
/**
 * 
 * @param {Array} arr is an array
 * @returns {Array} element reversed array
 */
function reverseArrayInPlace(arr){
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
reverseArrayInPlace(["a","b","c"]);

/**
 * 
 * @param {Array} arrStudentAnsw is array of students answer array 
 * @param {Array} arrCorectAns is array of corect answer
 * @returns {Array} count of number of correct answer
 */
function scoreExams(arrStudentAnsw,arrCorectAns){
    let index = 0;
    let count = 0;
    for(let eachStudAnsw of arrStudentAnsw){
        for(let eachAnsw of eachStudAnsw){
            if(eachAnsw=arrCorectAns[index]);
            count++;           
        }
        return count;
            index++;       
    }
}
console.log(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]],[3, 1, 2,4]));