"use strict";
//Question 1
console.log("Question 1: \n Hello World");
//Question 2
console.log("\n\nQuestion 2:");
let temprature = 15;
if (temprature < 20) {
    console.log("Tempratue is less than 20 so it is cold");
}
else {
    console.log("tempratue is more than 20 so It is hot");
}
//Question 3
console.log("\n\nQuestion 3:");
let totalAppls = 10;
console.log("Total Applear are " + totalAppls);
console.log("After give away 3 apples remaining are " + (totalAppls - 3));
//Question 4
console.log("\n\nQuestion 4:");
let firstName = "Mehtab";
let lastName = "Hussain";
let fullName = console.log("Full Name: " + `${firstName}` + `${lastName}`);
//Question 5
console.log("\n\nQuestion 5:");
let value = 5;
if (value >= 3) {
    console.log("Value is " + value + " and it is greater than 3 so it is YES");
}
else {
    console.log("Value is " + value + " lass than 3 so It is NO");
}
//Question 6
console.log("\n\nQuestion 6");
function calculateArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
let radius = 2;
let area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is:", area);
//Question 7
console.log("\n\nQuestion 7");
let num = 1;
for (num; num <= 50; num++) {
    if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}
//Question 8
console.log("\n\nQuestion 8");
let temperatures = [25, 28, 30, 22, 27];
let highestTemperature = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i];
    }
}
console.log("The highest temperature is:", highestTemperature);
//Question 9
console.log("\n\nQuestion 9");
let userAge = 18;
if (userAge < 18) {
    console.log("User age is " + userAge + " so it is minor");
}
else {
    console.log("User age is " + userAge + " so it is adult");
}
//Question 10
console.log("\n\nQuestion 10");
let numbersAry = [-3, -2, -1, 1, 2, 3];
console.log("Number are:" + numbersAry);
let counter = 0;
for (let i = 0; i < numbersAry.length; i++) {
    if (numbersAry[i] > 0) {
        counter++;
    }
}
console.log("Positive number are " + counter);
//Question 11
console.log("\n\nQuestion 11");
const words = ["apple", "banana", "orange", "avocado", "grape"];
console.log("Words in Array: " + words);
const filteredWords = [];
for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() === 'a') {
        filteredWords.push(words[i]);
    }
}
console.log("Words starting with 'a':", filteredWords);
//Question 12
console.log("\n\nQuestion 12");
const fruits = ["apple", "banana", "orange", "kiwi", "pineapple"];
console.log("Words in Array: " + fruits);
console.log("The second to last item is:", fruits[fruits.length - 2]);
//Question 13
console.log("\n\nQuestion 13");
const tNubers = [2, 3, 4, 5];
console.log("Words in Array: " + tNubers);
const square = [];
for (let i = 0; i < tNubers.length; i++) {
    square.push(tNubers[i] * tNubers[i]);
}
console.log("Square Numbers are in array " + square);
//Question 14
console.log("\n\nQuestion 14");
const arrayNum = [2, 3, 4, 5];
console.log("Words in Array: " + arrayNum);
const reverseArryNim = [];
for (let i = arrayNum.length - 1; i >= 0; i--) {
    reverseArryNim.push(arrayNum[i]);
}
console.log("Square Numbers are " + reverseArryNim);
//Question 15
console.log("\n\nQuestion 15");
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function countResult(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedingCount = 0;
    let fallCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            exceedingCount++;
        }
        else if (scores[i] < minScore) {
            minScore = scores[i];
            fallCount++;
        }
    }
    console.log(`score exceeded the maximum score: ${exceedingCount}`);
    console.log(`score fell below the minimum score: ${fallCount}`);
}
countResult(scores);
//Question 16
console.log("\n\nQuestion 16");
//Question 17
console.log("\n\nQuestion 17");
function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatArrays(array1, array2);
console.log("Concatenated array:", concatenatedArray);
