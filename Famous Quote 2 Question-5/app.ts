//Question 5. Famous Quote 2: Repeat Exercise 4,
//  but this time store the famous person’s name in 
//  a variable called famous_person. Then compose your message 
//  and store it in a new variable called message. Print your message.

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

function printMessage(person:string, quote:string): void{
    console.log(`${person} once siad, "${quote}"`);
}
let quote:string="A person who never made a mistake never tried anything new";
let famous_person:string = "Albert Enstein";
printMessage(famous_person,quote);