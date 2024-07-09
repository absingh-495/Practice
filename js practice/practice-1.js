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