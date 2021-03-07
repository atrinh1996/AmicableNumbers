/*
 * main.js
 *
 * COMP20, Spring 2021
 * Amy Bui
 * 3/7/2021
 * 
 * Finds the factors of two numbers, and reports
 * if they are amicable (i.e. sum of their factors 
 * are equal to the other number).
 * 
 */

// Stores the factors of num in an array arr.
function getFactors(num, arr) {
    for (let i = 1; i < num; i++) {
        if (isAFactor(num, i)) {
            arr.push(i);
        }
    }
}

// Returns true if fact is a factor of num.
function isAFactor(num, fact) {
    return (num % fact == 0);
}

// returns the sum of elements in array factArr
function sumFactors(factArr) {
    let sum = 0;
    for (let i = 0; i < factArr.length; i++) {
        sum += factArr[i];
    }
    return sum;
}

// main driver
function main() {
    // Get numbers from Form
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);

    // Get Factors and store in array
    let num1Factors = new Array;
    let num2Factors = new Array;
    getFactors(num1, num1Factors);
    getFactors(num2, num2Factors);

    // Sum of Factors
    let sum1 = sumFactors(num1Factors);
    let sum2 = sumFactors(num2Factors);

    // Display Results
    let result = document.querySelector("#results");
    if (sum1 == num2 && sum2 == num1) {
        result.innerHTML = `<p>The numbers: 
                            ${num1} and ${num2} are 
                            amicable</p>`;
    } else {
        result.innerHTML = `<p>The numbers: 
                            ${num1} and ${num2} are 
                            not amicable</p>`;
    }

    // Check correctness by using console log
    console.log(`${num1}: factors = ${num1Factors}, sum = ${sum1}`);
    console.log(`${num2}: factors = ${num2Factors}, sum = ${sum2}`);
}