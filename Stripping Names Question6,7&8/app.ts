// Question6. Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning 
// and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed.
//  Then print the name after striping the white spaces.


var personName:string = "\n\t Sir, Zia Khan \t\n";
console.log(personName);
var stripped:string= personName.trim();
console.log(stripped); 

// Using String Concatenation and Trim Method:

// let Name: string = "\t\t Sir,ZiaKhan \n"
// console.log("Name with whitspace:",Name);
// console.log("Stripped Name:",Name.trim());


//Using String Templates (Template Literals) and Trim Method:

// let Name: string = "\t\t Sir,Zia Khan \n"
// console.log(`Name withspace: ${Name}`);
// console.log(`Stripprd NAme: ${Name.trim()}`);

//Using Regular Expressions to Replace Whitespace and Trim Method:
// let Name:string="\t\t Sir,ZiaKhan\n";
// console.log("Name whitspace:",Name);
// console.log("Stripeed Name:", Name.replace(/^\s+|s+$/g,''));

// // /Using Function with Parameters and Trim Method:
// function printName(name:string): void{
//     console.log("Name with whitespace: ", name);
//     console.log("Stripped Name:", name.trim());
// }
// let Name:string = "\t\t Sir,Zia Khan\n";
// printName(Name); 