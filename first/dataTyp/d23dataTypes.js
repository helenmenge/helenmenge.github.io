"use strict";
module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  } 

  function checkSpam(str) {
    let lowCaStr = str.toLowerCase();

  return lowCaStr.includes('viagra') || lowCaStr.includes('xxx');
  }

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
 }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0; 
    for (let i = 0; i < arr.length; i++) {
      let sumFixStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixStart += arr[j];
        maxSum = Math.max(maxSum, sumFixStart);
      }
    }
    return maxSum;
}


function camelize(str) {
    return str.split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
  }