// 37. Large Shirts Modify the make_shirt() function so that
//  shirts are large
// by default with a message that reads I love TypeScript.
//  Make a large shirt and a
// medium shirt with the default message, and a shirt of any 
// // size with a different message.


function makeshirt(size:string = 'large', text: string= 'I love Typescript'):void{
    console.log(`you have order ${size}, shirt that says ${text}`);
}
// makeshirt();
// makeshirt('medium');

// different messge
makeshirt('small', 'I need a big shirt to wear');