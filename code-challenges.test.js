// ASSESSMENT 2: Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { indexOf } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// describe-it-expect syntax to describe that the code should test if the unputted numbers are divisible by 3

describe ("divBy3", () => {
    it("returns whether or not the number is equally divisible by 3", () => { //the description of the test
        expect(divBy3(15)).toEqual("15 is divisible by three") //testing a case of a number that is actually divisible by 3
        expect(divBy3(0)).toEqual("0 is divisible by three")// testing if the input number is 0
        expect(divBy3(-7)).toEqual("-7 is not divisible by three") // testing if a number not evenly divisible by 3 will return 'not divisible by 3'
    })
})

// // // b) Create the function that makes the test pass.

const divBy3 = (num) => { 
    if (num === 0){  // evaluates if the number input is 0
        return `${num} is divisible by three`
    }else if (num % 3 === 0){ //evaluates if the remainder of unput number is 0, therefore divisible by 3
        return `${num} is divisible by three`
    }else if (num % 3 !== 0){ // evaluates if the remainder of input number is NOT 0, therefore divisible by 3
        return `${num} is not divisible by three`
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// describe-it-expect syntax to describe that the code should return the inputted array with all the values capitalized
describe ("allCaps", () => {
    it("returns an array fo words with all words capitalized", () => { //the description of the test
        expect(allCaps(randomNouns1)).toEqual(['STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW']) //testing if var randomNums1 array valuea are all capitalized
        expect(allCaps(randomNouns2)).toEqual(['TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO', 'DEDUCTION']) //testing if var randomNums2 array values are all capitalized
    })
})

// b) Create the function that makes the test pass.

const allCaps = (array) => {
    return array.map(value =>{ // using .map() to iterate over the array and return the same array length
        return value.toUpperCase() //returns an array with all the values in upper case
    })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

describe ("firstVowel", () => {
    it("returns an array fo words with all words returns the index of the first vowel in the inputted string", () => { //the description of the test
        expect(firstVowel(vowelTester1)).toEqual(1) //testing if index of "e" in "learn" returns 1
        expect(firstVowel(vowelTester2)).toEqual(0) //testing if the index of the first instance of "a" in "academy" returns 0
        expect(firstVowel(vowelTester3)).toEqual(2) //testing if index of "a" in "challenges" returns 2
    })
})

// b) Create the function that makes the test pass.

const firstVowel = (str) => {

    for (var i = 0 ; i < str.length ; i++){ //using for loop to loop over inputted strings
        if (str[i] === "a"){
            return str.indexOf('a') // compares if string at current index is equal to "a" and using indexOf to return the index 
        }else if (str[i] === "e"){
            return str.indexOf('e') // compares if string at current index is equal to "e" and using indexOf to return the index 
        }else if (str[i] === "i"){
            return str.indexOf('i') // compares if string at current index is equal to "i" and using indexOf to return the index 
        }else if (str[i] === "o"){
            return str.indexOf('o') // compares if string at current index is equal to "o" and using indexOf to return the index 
        }else if (str[i] === "u"){
            return str.indexOf('u') // compares if string at current index is equal to "u" and using indexOf to return the index 
        }
        
    }
    return firstVowel(str);
}
