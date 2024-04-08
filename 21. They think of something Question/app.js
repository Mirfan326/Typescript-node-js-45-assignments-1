// 21. They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
var favoriteMovies = [
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
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log("Title: ".concat(movie.title));
    console.log("Director: ".concat(movie.director));
    console.log("Year Released: ".concat(movie.yearReleased)); // Use yearReleased (lowercase) as defined in the interface
    console.log("---");
}
