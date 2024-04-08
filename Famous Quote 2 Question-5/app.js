//String Interpolation (Template Literals)
// let quote:string = "A person who never made a mistake never tried anything new";
// let famous_person:string="Albert Enstien";
// let message=(`${famous_person} once said, "${quote}" `);
// console.log(message);
// String Concatenation
// let famous_person:string = "Albert Enstien";
// let quote:string= '"A person who never made a mistake never tried anything new"';
// let message:string=famous_person + "once said, .\"" + quote +"\". ";
// console.log(message);
//Using String Formatting:
// let quote:string = "A person who never made a mistake never tried anything new";
// let famous_person: string =" Albert Enstein";
// console.log("%s once said, \"%s\" ", famous_person,quote);
// Using Function with Parameters:
function printMessage(person, quote) {
    console.log("".concat(person, " once siad, \"").concat(quote, "\""));
}
var quote = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Enstein";
printMessage(famous_person, quote);
