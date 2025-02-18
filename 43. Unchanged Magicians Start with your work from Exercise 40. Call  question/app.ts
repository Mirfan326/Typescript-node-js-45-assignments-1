// 43. Unchanged Magicians Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’
//  names. Because the original array will be unchanged, return the new 
//  array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = []; // Initialize empty array
  
    for (const magician of magicians) {
      greatMagicians.push(magician + " the Great"); // Add 'the Great' with a space
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["Ali", "Bal", "Calt"];
  
  // Create a copy of the original array
  const greatMagicians: string[] = make_great(magicians.slice());  // Use slice() to copy
  
  show_magicians(magicians); // Show original magicians
  show_magicians(greatMagicians); // Show modified magicians
  
  