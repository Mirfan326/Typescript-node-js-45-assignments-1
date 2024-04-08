// 41. Magicians Make a array of magician’s names. Pass the array to 
// a function called show_magicians(), which prints the name of each 
// magician in the array.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      // Use the current magician's name for capitalization
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
  }
  
  const magicians: string[] = ["Ali", "Bal", "Calt"];
  show_magicians(magicians);
  