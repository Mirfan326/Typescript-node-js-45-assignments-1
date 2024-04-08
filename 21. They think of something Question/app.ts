// 21. They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

// TypeScript

interface Movie {
    title: string;
    director: string;
    yearReleased: number; // Changed YearRelease to yearReleased for consistency with interface
  }
  
  let favoriteMovies: Movie[] = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      yearReleased: 1994,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      yearReleased: 1972,
    },
    {
      title: "Spirited Away",
      director: "Hayao Miyazaki",
      yearReleased: 2001,
    },
  ];
  
  console.log("My favourite movies:");
  for (let movie of favoriteMovies) {
    console.log(`Title: ${movie.title}`);
    console.log(`Director: ${movie.director}`);
    console.log(`Year Released: ${movie.yearReleased}`); // Use yearReleased (lowercase) as defined in the interface
    console.log("---");
  }
  