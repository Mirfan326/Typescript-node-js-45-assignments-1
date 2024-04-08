// 23. Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction 
// for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand 
// why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to
//  True and another 5 tests evaluate to False.

// Test1: Equality comparision (true)
let car:string = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru') // True


// Test 2: strict Equality comparision (true)


console.log("Is car === 'subaru'? I predict True.")

console.log(car === 'subaru') // True


// Test 3:  inequality comparision (False)

console.log("Is car != 'subaru'? I predict False.")

console.log(car != 'subaru') // False


// Test 4 strict:  inequality comparision (False)

console.log("Is car !== 'subaru'? I predict False.")

console.log(car !== 'subaru') // False

// Test 5:Less than comparision (False)

console.log("Is car < 'subaru'? I predict fasle.")

console.log(car < 'subaru') // False (lexicographic comparison) 


// Test 6:greater than comparision (False)

console.log("Is car > 'subaru'? I predict False.")

console.log(car > 'subaru') // False (lexicographic comparison) 

// Test 7 :Less than or equal  comparision (True)

console.log("Is car <= 'subaru'? I predict True.")

console.log(car <= 'subaru') // True 

// Test 8 :Greater than or equal  comparision (True)

console.log("Is car >= 'subaru'? I predict True.")

console.log(car >= 'subaru') // True 


// Test 9 :checking truthiness  comparision (True)

console.log("Is car >= 'subaru'? I predict True.")

console.log(car) // True  (non-empty string is truty)



