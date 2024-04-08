// 24. More Conditional Tests: You don’t have to limit the number 
// of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for 
// each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var car = 'Sabru';
var age = 25;
var numbers = [1, 2, 3, 4];
// string Tests 
// Test1: Equality  (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // False    (Case-Insensitive)
// Test 2: strict Equality  (False)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); // False   (Case-Sensitive)
// Test 3:  inequality  (True)
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru'); // True
// Test 4 strict:  inequality  (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False  (Case-Sensitive)
// ** LowerCase Function Tests**
// Test 5: LowerCase conversion (True)
console.log("Is car.tolowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'sabru'); //True (converted to Lowercase)
// Test 6: LowerCase conversion (False)
console.log("Is car=== car.tolowerCase()? 'subaru'? I predict True.");
console.log(car === car.toLowerCase()); //False (original value remain uppercase)
//  **Numerical Tests** 
// Test 7: Equality  (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //True
// Test 8: Inequality  (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); //True
// Test 9: Greater than  (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); //True
// Test 10: Less than than or equal  (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); //True
// Logical operator
// Test 11: AND Operator
console.log("Is age > 20 && age < 30? I predict True");
console.log(age > 20 && age < 30); // True (both condition met)
// Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict True.");
console.log(age > 30 || age < 18); // False (neither condition met)"
// Array Test
// Test 13: Not in array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in numbers); // True (checks fir index existence) 
// 14 Test: Not in arrary (False)
console.log("Is 5 not in number? I predict True");
console.log(" 5 not in numbers"); // True (negative of "in" operator)
