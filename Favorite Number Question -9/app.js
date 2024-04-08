// Question 9. Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. 
// Print that message.
//Using String Templates (Template Literals):
// let favoriteNumber:number=7;
// console.log(`My favorite number is ${favoriteNumber}`);
// //Using String Concatenation:
// let favouriteNumber:number=13;
// console.log("My favourite numbe is: "+favouriteNumber)
//Using String Formatting:
// let favouriteNumber:number=11;
// console.log("My favourite number is: %d", favouriteNumber);
//Using Function with Parameters:
// function favouriteNmber(number:number): void{
//     console.log("My favourite number is:" +number);
// }
// let favouriteNumber:number=43;
// console.log(favouriteNumber);
//Using Array Join:
var favouriteNumber = 41;
var message = ["My favourite number is:", favouriteNumber.toString()];
console.log(message.join(" "));
