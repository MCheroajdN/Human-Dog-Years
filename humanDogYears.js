const myAge = 40;
//assign the number 40 to myAge
let earlyYears = 2;
//assign the value 2 to earlyYears
earlyYears *= 10.5;
let laterYears = myAge - 2;
//subract 2 from myAge and assign result to laterYears
laterYears *= 4;
//multiply the result of laterYears by 4

//console.log(earlyYears)
//console.log(laterYears)
const myAgeInDogYears = earlyYears + laterYears;
let myName = 'Mfon Christopher'
myName = myName.toLowerCase();
//console.log(myName);
//changed myName to all lowercase 
console.log( `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//displayed my name and age in Dog years using interpolation.

//to display on the web use document.write

document.write( `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//displayed my name and age in Dog years using interpolation method.

//to concatnate 2nd method

document.write("My name is " + myName + " ." + " I am " + myAge + " years  old in human years which is " + myAgeInDogYears + " years old in dog years.")