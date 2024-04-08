// 42. Great Magicians Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of 
// magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


// 41. Magicians Make a array of magician’s names. Pass the array to 
// a function called show_magicians(), which prints the name of each 
// magician in the array.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      // Use the current magician's name for capitalization
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
  }
  
//   const magicians: string[] = ["Ali", "Bal", "Calt"];
//   show_magicians(magicians);

function make_great(magicians:string[]): void {
    for(let i = 0; i < magicians.length;i++){
        magicians[i] + ' the great'

    }
}
const magicians2:string[]=["Loi","moni","choi"];  
make_great(magicians2);
show_magicians(magicians2);