// 3. Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.


let personName:string ="MIrfan";
// console.log("lowercase:", personName.toLowerCase());

// //  UpperCase

// console.log("UpperCase", personName.toUpperCase());

// //Title case
// console.log("titlecase", personName.replace(/\bw/g,c => c.toUpperCase()));



// Title Case

let titleCaseName:string=personName
.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(" ");
console.log("Title Case:", titleCaseName); // output Title Case: 




