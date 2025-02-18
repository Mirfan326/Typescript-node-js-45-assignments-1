// 18. Seeing the World Think of at least five places in the world
//  you’d like to visit.

// • Store the locations in a array. Make sure the array is not in
//  alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the
//  actual list.

// • Show that your array is still in its original order by printing it.


// • Print your array in reverse alphabetical order without changing
//  the order of the original list.

// • Show that your array is still in its original order by printing it
//  again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s 
// back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the
//  array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical
//  order. Print the list to show that its order has changed.

// Print your array in its original order
let travelPlaces : string [] = [ "Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log('original : ' + travelPlaces);

// • Print your array in alphabetical order without modifying the
//  actual list.
// console.log('copy '+ [...travelPlaces].sort());

// // • Show that your array is still in its original order by printing it.
// console.log('original ' + travelPlaces);

// • Reverse the order of your list. Print the array to show that its
// order has changed.
console.log('copy '+ [...travelPlaces].sort().reverse());

// • Show that your array is still in its original order by printing it
//  again.
console.log('copy '+ [...travelPlaces].sort().reverse());


// • Reverse the order of your list. Print the array to show that its
// order has changed.
console.log('original : ' + travelPlaces.sort());


// • Reverse the order of your list again. Print the list to show it’s 
// back to its original order.

console.log('original : ' + travelPlaces.sort().reverse);

// • Sort to change your array so it’s stored in reverse alphabetical
//  order. Print the list to show that its order has changed.

console.log('copy '+ [...travelPlaces].sort().reverse(), "alphabetical order:");
