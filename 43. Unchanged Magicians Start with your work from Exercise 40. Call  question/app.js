// 43. Unchanged Magicians Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’
//  names. Because the original array will be unchanged, return the new 
//  array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    var greatMagicians = []; // Initialize empty array
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great"); // Add 'the Great' with a space
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians = ["Ali", "Bal", "Calt"];
// Create a copy of the original array
var greatMagicians = make_great(magicians.slice()); // Use slice() to copy
show_magicians(magicians); // Show original magicians
show_magicians(greatMagicians); // Show modified magicians
