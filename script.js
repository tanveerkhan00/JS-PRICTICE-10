  // JS PRICTICE 10

//assignment 1 day of week

// let dayNumber = +prompt("Enter your day number");
// dayNumber = (1-7);
// let dayName;

// switch(dayNumber) {
//     case 1:
//         dayName = 'Sunday';
//         break;
//     case 2:
//         dayName = 'Monday';
//         break;
//     case 3:
//         dayName = 'Tuesday';
//         break;
//     case 4:
//         dayName = 'Wednesday';
//         break;
//     case 5:
//         dayName = 'Thursday';
//         break;
//     case 6:
//         dayName = 'Friday';
//         break;
//     case 7:
//         dayName = 'Saturday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }

// console.log(dayName);

////////////////////////////////////////////////////////////////////////////////////////////////////////
          //Assignment 2 // Month Name

// let monthNumber = +prompt("Enter your birthdate month");
// let monthName;

// switch(monthNumber) {
//     case 1:
//         monthName = 'January';
//         break;
//     case 2:
//         monthName = 'February';
//         break;
//     case 3:
//         monthName = 'March';
//         break;
//     case 4:
//         monthName = 'April';
//         break;
//     case 5:
//         monthName = 'May';
//         break;
//     case 6:
//         monthName = 'June';
//         break;
//     case 7:
//         monthName = 'July';
//         break;
//     case 8:
//         monthName = 'August';
//         break;
//     case 9:
//         monthName = 'September';
//         break;
//     case 10:
//         monthName = 'October';
//         break;
//     case 11:
//         monthName = 'November';
//         break;
//     case 12:
//         monthName = 'December';
//         break;
//     default:
//         monthName = 'Invalid month';
// }

// console.log(monthName);
////////////////////////////////////////////////////////////////////////////////////////////////////////


//Assignment 3 // vehicle type

// let vehicle = +prompt("Enter your vehicle(car,Truck,Motorcycle,Bicycle)");
// let vehicleType;

// switch(vehicle) {
//     case 'car':
//         vehicleType = 'Car';
//         break;
//     case 'truck':
//         vehicleType = 'Truck';
//         break;
//     case 'motorcycle':
//         vehicleType = 'Motorcycle';
//         break;
//     case 'bicycle':
//         vehicleType = 'Bicycle';
//         break;
//     default:
//         vehicleType = 'Unknown vehicle type';
// }

// console.log(vehicleType);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//Assignment 4: Shipping Cost

// let weight =+prompt("Enter your shipping weight(1kg to 30kg)");
// let cost;

// switch(true) {
//     case (weight >= 0 && weight <= 10):
//         cost = '$5';
//         break;
//     case (weight >= 11 && weight <= 20):
//         cost = '$10';
//         break;
//     case (weight >= 21 && weight <= 30):
//         cost = '$15';
//         break;
//     default:
//         cost = 'Weight exceeds limit';
// }

// console.log(cost);
////////////////////////////////////////////////////////////////////////////////////////////////////////


//Assignment 5: Student Grade

// let score =+prompt("Enter your score(1-100)");
// let grade;

// switch(true) {
//     case (score >= 90 && score <= 100):
//         grade = 'A';
//         break;
//     case (score >= 80 && score <= 89):
//         grade = 'B';
//         break;
//     case (score >= 70 && score <= 79):
//         grade = 'C';
//         break;
//     case (score >= 60 && score <= 69):
//         grade = 'D';
//         break;
//     case (score >= 0 && score <= 59):
//         grade = 'F';
//         break;
//     default:
//         grade = 'Invalid score';
// }

// console.log(grade);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//While Loop 
//Assignment 1: Fibonacci Sequence


// let n1 = 0, n2 = 1, nextTerm;
// let count = 0;

// console.log('Fibonacci Sequence:');
// while (count < 10) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     count++;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 2: Guessing Game

// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guess;
// let attempts = 0;

// while (guess !== numberToGuess) {
//     guess = parseInt(prompt('Guess a number between 1 and 100:'));
//     attempts++;
//     if (guess > numberToGuess) {
//         console.log('Too high!');
//     } else if (guess < numberToGuess) {
//         console.log('Too low!');
//     } else {
//         console.log(`Correct! It took you ${attempts} attempts.`);
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Assignment 3: Reverse String

// let str = 'hello';
// let reversedStr = '';
// let i = str.length - 1;

// while (i >= 0) {
//     reversedStr += str[i];
//     i--;
// }

// console.log(reversedStr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 4: Find Prime Numbers

// let num = +prompt("Enter a number(number<=100)");

// while (num <= 100) {
//     let isPrime = true;
//     let i = 2;
//     while (i <= Math.sqrt(num)) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
//     if (isPrime) {
//         console.log(num);
//     }
//     num++;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 5: Power of a Number

// let base = 2;
// let exponent = 3;
// let result = 1;
// let count = 0;

// while (count < exponent) {
//     result *= base;
//     count++;
// }

// console.log(result);
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 6: Palindrome Checker

// let word = 'radar';
// let isPalindrome = true;
// let start = 0;
// let end = word.length - 1;

// while (start < end) {
//     if (word[start] !== word[end]) {
//         isPalindrome = false;
//         break;
//     }
//     start++;
//     end--;
// }

// if (isPalindrome) {
//     console.log(`${word} is a palindrome.`);
// } else {
//     console.log(`${word} is not a palindrome.`);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////

//Do-While Loop
//Assignment 1: Print Numbers

// let number = 1;

// do {
//     console.log(number);
//     number++;
// } while (number <= 10);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 2: Sum of Numbers

// let sum = 0;
// let num = 1;

// do {
//     sum += num;
//     num++;
// } while (num <= 10);

// console.log(sum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 3: Guessing Game

// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guess;
// let attempts = 0;

// do {
//     guess = parseInt(prompt('Guess a number between 1 and 100:'));
//     attempts++;
//     if (guess > numberToGuess) {
//         console.log('Too high!');
//     } else if (guess < numberToGuess) {
//         console.log('Too low!');
//     } else {
//         console.log(`Correct! It took you ${attempts} attempts.`);
//     }
// } while (guess !== numberToGuess);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 4: Factorial

// let number = 5;
// let factorial = 1;

// do {
//     factorial *= number;
//     number--;
// } while (number > 0);

// console.log(factorial);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Assignment 5: Multiplication Table

// let num = 5;
// let i = 1;

// do {
//     console.log(`${num} * ${i} = ${num * i}`);
//     i++;
// } while (i <= 10);




