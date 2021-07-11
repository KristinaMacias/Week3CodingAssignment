/*

Programmatically subtract the value of the first element in the array from the value in the last element of the array 
(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
Print the result to the console.



let ages = [3, 9, 23, 64, 2, 8, 28, 93];

var lastElement = ages.pop();
var firstElement = ages.shift();
function difference (lastElement, firstElement) {
    console.log (lastElement -= firstElement);
}
difference (lastElement, firstElement);


//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push (31);

console.log (ages);


var lastElement = ages.pop();
var firstElement = ages.shift();

console.log (ages);

difference (lastElement, firstElement);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}

var avg = total / ages.length;

console.log (avg);

/*Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

Use a loop to iterate through the array and calculate the average number of letters per name. 
Print the result to the console.


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Create the nameLengths array based on
// the length of each name
let nameLengths = []
names.forEach(function(element) {
  nameLengths.push(element.length)
})
console.log(nameLengths);


// Sum all the lengths of each name
let sum = 0
nameLengths.forEach(function(element) {
  sum = sum + element
})

console.log(sum);

// The average nameLength
let avg = sum / names.length;
console.log(avg);

// Concatenate all the names with a space
// between
let concatenatedNames = ''
names.forEach(function(name, index) {
  concatenatedNames = concatenatedNames + name

  let lastIndex = names.length - 1

  if(index != lastIndex)
    concatenatedNames = concatenatedNames + ' '
})

console.log(concatenatedNames);

/*Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, 
and print the result to the console.



let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function(element) {
    return element.length;
    //this creates a new array that provides the length of each name
});
console.log (lengths);

let sum = lengths.reduce (function (accumulator, currentValue) {
    return accumulator + currentValue;
    //this sums all the charcters of of my new lengths variable
});
console.log (sum);


for (sum + lengths) {
    let avg = sum / names.length;
}
console.log (avg);


Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.


//for each over every element in the array


//use for each / function
//push 

/*Write a function that takes two parameters, word and n, as arguments and returns the word 
concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect 
the function to return ‘HelloHelloHello’).


let concatenated = ''
function myFunction(word, n) {
    for (let i = 0 ; i < n; i++) {
        concatenated = concatenated + word;
 
    }
    console.log(concatenated);
}
myFunction('coffee', 9);





Write a function that takes two parameters, firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space).



function fullName (firstName, lastName) {
    console.log (firstName + ' ' + lastName);
}

fullName ('Kristina', 'Macais');

Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.




let myArray = [60, 5, 10, 10, 20, 30];

let sum = myArray.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue
});

console.log(sum);

if (sum > 100) {
    console.log (true);
} else {
    console.log(false);
}


Write a function that takes an array of numbers and returns the average of all the elements in the array.


let myArray = [100, 200, 300, 400];

let sum = myArray.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;

});
console.log(sum);

let avg = sum / myArray.length;

console.log (avg);


Write a function that takes two arrays of numbers and returns true if the average of the 
elements in the first array is greater than the average of the elements in the second array.



let arrayOne = [100, 200, 300, 400];
let arrayTwo = [200, 300, 100];

let sumArrayOne = arrayOne.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log (sumArrayOne);

let sumArrayTwo = arrayTwo.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log (sumArrayTwo);

let avgOne = sumArrayOne / arrayOne.length;
let avgTWo = sumArrayTwo / arrayTwo.length;

if (avgOne > avgTWo) {
    console.log (true);

}


Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log(true);
    }
}

willBuyDrink (true, 11);


Create a function of your own that solves a problem. In comments, write what the function does and why you created it.



// I will go on vacation if I have over 500 dollars and have PTO available. 


function goOnVacation(haveMoney, havePTO) {
if (haveMoney >= 500 && havePTO == true) {
    console.log('I will go on vacation!')
} else {
    console.log('Maybe next year.')
}
}

goOnVacation (true, 700);


*/