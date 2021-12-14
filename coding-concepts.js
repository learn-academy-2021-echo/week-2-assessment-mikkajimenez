// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer:['E', 'c', 'h', 'o', ' ', '2', '0', '2', '1']
// b) Verify and explain: .split() will return the values of "Echo 2021" into each index of an array with an empty splitter ("")


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`x
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: it is missing a return for the function


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:.map() will iterate over multBy2 array and multiply each value to 2. This returns the same length of the array


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: .filter() will filter through the array and evaluates if each value is an odd number. It will only return the values what meet the condition value % 2 !== 0


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: the dot(.) notation will access the key inside an object and [index] will return the value at the given index inside an array


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {name: 'George', cohort: 'Delta', year: 2021}
// b) Verify and explain: constructor(name) serves as a reference to populate "George" as a new value for the key name in the object. 
