//String Interpolation (Template Literals):
// let quote:string="A person who never made a mistake never tried anything new";
// let author:string="Albert Enstine once said";
// console.log(`${author}, "${quote}"`);
// or
// let quote:string="A person who never made a mistake never tried anything new";
// let author:string="Albert Enstine";
// console.log(`${author} once said,"${quote}"`);
//   String Concatenation:
// let author:string="A person who never made a mistake never tried anything new"";
// let quote:string='"Albert Enstine "';
// let message:string = " " + "author " +"once said " + "quote" +".";
// console.log(message);
// Function with Parameters:
// function printQuote(author:string, quote:string){
//     console.log(`${author} once said, ${quote}`);
// }
// printQuote("Albert Enstine",'"A person who never made a mistake never tried anything new"')
//Using String Formatting:
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Enstine";
console.log("%s once said , %s\"", author, quote);
