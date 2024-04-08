// // Lowercase
var personName = "MIrfan";
// console.log("lowercase:", personName.toLowerCase());
// //  UpperCase
// console.log("UpperCase", personName.toUpperCase());
// //Title case
// console.log("titlecase", personName.replace(/\bw/g,c => c.toUpperCase()));
// Title Case
var titleCaseName = personName
    .split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(" ");
console.log("Title Case:", titleCaseName); // output Title Case: 
