// dialog boxes in javascript

// alert ("hello")
// const isconfirmed = confirm("are sure u want to proceed ?")
// // const userInput = prompt ("please enter your name ")
// console.log(isconfirmed)

// template literals in javascript

// const multi_string = `this is 
//   multi string in javascript`;
//   console.log(multi_string)

// .length
// .lengthuppercase()

  
// const message = 'hello! comostas'
// const capitalMessage = message.toUpperCase()

// const faltuMessage = `     hi, i'am tikku ji     `
// const trimedMessage = faltuMessage.trim()
// faltuMessage.trim() 
// // So, basically it trims out extra spaces
// faltuMessage.trimStart()
// "hi, i'am tikku ji     "
// faltuMessage.trimEnd()
// "       hi, i'am tikku ji"

// methods ( with arguments)
 
// finalMessage.includes("abhishek")
// it checks wheather any string is contained using
// include("i'm")

// const finalMessage = "hi i'm abhishek singh"
// console.log(finalMessage)

// length thats checks number of strings (including space)
// indexOff()
// finalMessage.indexOf("i'm")
// 3
// in case if that string doesn't exist it'll show -1

// replace and replaceall

// finalMessage.replace("hi","hello")
// "hello i'm abhishek singh"

// it replaces the string and even it targets the the singh characters as well s,a etc.
// const replacedMessage = finalMessage.replace('hi','hello')

// the result

// replacedMessage
// "hello i'm abhishek singh"

// .concat method it adds two or more strings like
// Message.concat(finalMessage)

// padstart(to add in the starting) and padend (to add in the end)

// const lastFourDigits = '7856'
 
// result

// lastFourDigits.padStart(16,'*')
// '************7856'
// lastFourDigits.padStart(8,'*')
// '****7856'


// charcodeat it will give any symbol or alphabet's ascii code or number like A has 65 so on ()

// Split()
// Split is a function that split the given string into an array of substrings. The split method doesn't change the original string array and will return the new array.

// const message = ("hello my name is abhishek singh") 
// result 
// message.split()
// ['hello my name is abhishek singh']

// input message.split('')
// output message.split('')
// (31) ['h', 'e', 'l', 'l', 'o', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'a', 'b', 'h', 'i', 's', 'h', 'e', 'k', ' ', 's', 'i', 'n', 'g', 'h']
// length of array 31 
// given string into an array of substring !

// template literals

// const concatenatedMessage = `my last four digit account number is `.concat(7856)
// .concat method used here to add string

// now we will use template literals 
// const lastFourDigit = '7856'
// const templateString = `hello my last four digit account number is ${lastFourDigit.padEnd(16,'*')}`
// result 
// 'hello my last four digit account number is 7856'
// here we have used template literal , string method and just for sake of practice we add padstart & padEnd fun as well inside that !

//  another great example of it

// const name = "John"; // can change name without adding or .conCat method useful in case of different names !
// const age = 30;  // can change age without adding or .conCat method useful in case of dynamic nature of age !
// const Message = `My name is ${name} and I am ${age} years old.`;
// console.log(Message); // Output: My name is John and I am 30 years old.

// another great example
// now the value is pretty easy to play with rather than hard coded 

// let bankBalance = '78900'
// const Message = `i have ${bankBalance} in my account`
// console.log(Message);

// result
// i have 78900 in my account

// mathematical operators in javascript 

// addition operator +
// Substraction operator -
// multiplication operator *
// division operator /
// remainder operator %
// exponentiation operator ** 5 ** 2 = 25 added in 2016 ecma update !


// math object in javascript 

// properties
// method

// Math.floor(2.99)
// result 2 

// Math.floor(-2.99)
// result -3 degraded the value 

// let num = Math.ceil(4.2) 
// console.log(num)

// let num1 = Math.ceil(4) 
// console.log(num1)
// result it increase the number like from 2.5 to 3 but in integer without decimal it won't iterate !

// console.log (Math.round(2.4)) it make number round of like before 2.4 = 2 after 2.5 = 3
// result 2
// console.log (Math.round(2.5))
// result 3

//  in case of negative
// console.log (Math.round(-2.6))
// result -3
// understand these concept through number line (link Below)
// https://cdn1.byjus.com/wp-content/uploads/2021/02/Operations-Of-Integers-On-Number-Line-1.png

// console.log (Math.round(-2.3))
// result -2

// Math.random it gives random number from 0 to less than 1

// console.log(Math.floor(Math.random()* 21))

// explanation 
// now we will get random number from 0 to 20 integers with decimals to get rid off decimals we have used Math.floor() method

// Math.floor(Math.random() * 101 ) 
// here we want random numbers from 0 to 100

// to get random number from 10 to 20
// console.log(Math.floor(Math.random( ) * 10)+10)


// write a function in javascript to generate random number let say from min -x to max-y

// to get random from 12 to 45 
// let min = 12
// let max = 45
// console.log(Math.floor(Math.random() * (max - min + 1 )) + min);

// not understood yet !

// getting input from user through prompt add + to take it as number not in string '9' then console it on 


// comparison operator

// const userAge1 = 18
// const userAge2 = 24
 
 
 



// let js = 'amazing';
// console.log(js)
// console.log(29-35+42+65);
// let firstName = 'bob'
// console.log(firstName);

// let years3 = 'nick'
// console.log(years3);

// assignment

// let country = 'India';
// let continent = 'asia';
// let population = '2 billion';

// console.log(country);
// console.log(continent);
// console.log(population);

//assignment

// let island = false ;
// const language = 'hindi' ;
// console.log(typeof island);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
 
 
// language = 'portuguese';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;
// isIsland = true;

// typeof "John"         // Returns string
// typeof ("John"+"Doe") // Returns string
// typeof 3.14           // Returns number
// typeof 33             // Returns number
// typeof (33 + 66)      // Returns number
// typeof true           // Returns boolean
// typeof false          // Returns boolean
// typeof 1234n          // Returns bigint
// typeof Symbol()       // Returns symbol
// typeof x              // Returns undefined
 

// let javascriptIsFun = true; //if write "true" like this then it will consider as string not boolean 
// console.log( typeof javascriptIsFun);

// typeof operator

// console.log(typeof 'hello' ); string
// console.log(typeof true); Boolean
// console.log(typeof 12345n ); BigInt
// console.log(typeof 3.14); Number
// console.log(typeof x ); undefined

//  dynamic typing = a variable can start as a number, then be reassigned as a string without an error. 

// javascriptIsFun = 'yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2005;
// console.log(year);
// console.log(typeof year);


// console.log(null);
// console.log(typeof null);


// let const and var 

// let lets you change or reassign the value in future (mutable variable)

// let age = 30;
// age = 35;
// console.log(age);

// const (also known as constant variable) can't change the value or reassign it in future (immutable variable)

// const birthYear = 2009;
// birthYear = 2010;

// also we can't declare empty const variable
// const job;

// var is old method of defining variable prior to es6.

// var job = 'programmer';
// job = 'tutor'
// console.log(job)

// concept related global and blocked scope w'll study further !
// this code ran despite not having variable cuz js created property on global object  !!

// lastName = 'Singh';
// console.log(lastName);

// basic math operator

// const currentYear = 2025
// const jonasAge = currentYear - 2002; //23
// const jennieAge = currentYear - 2005; // 20
// const williamAge = currentYear - 1998; // 27
// console.log('jonas age is :', jonasAge);
// console.log('jennie age is :',jennieAge );
// console.log('william age is :',williamAge );

// let averageAge = ( jonasAge + jennieAge + williamAge ) / 3;
// console.log(averageAge);


// console.log(jonasAge * 2 / 10 , 3 ** 3);

// concatenation of string using + plus operator

// const firstName = "Abhishek";
// const secondName = "Singh";
// console.log(firstName + ' ' + secondName);

// typeof operator already used

// const x = 10 + 15;
// console.log(x);

// all Assignment operators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// comparison operators to produce boolean values
// console.log(jonasAge > jennieAge); // >, >=, <, <= .
// console.log(williamAge >= 18 );

// const isFull = jennieAge >= 18;
// console.log(25 - 10 - 5);