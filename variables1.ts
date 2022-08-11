// Varriables ts. Explicitly typed 
let movieTitle: string = 
"Robots";
movieTitle = "Harry Potter";
// error examples
// movieTitle = 9;
// this type is an error because its not a string. ts will call you out on your bs. 
// movieTitle.upper();
// not a method 

// Numbers and Booleans 
// numbers will always be numbers 
// bools will always be truthy or falsy

let numDogLives: number =20;
numDogLives += 1;
// numDogLives ="zero"

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

// Type Inference 
// type annotations not always needed ts will infer 
let tvShow = "Sandman";
tvShow = "Good Trouble";
// tvShow = false;

let isCool = true;
isCool = false;
// isCool = "Roger"


// unique type Any its a catch all doesnt do type checking use all lower case any 
let thing: any ="hiiii";
thing = 1;
thing = false;
thing ()
thing.toUppercase()

// let thing = "hello";
// thing ()

// declaring a var before initialization

const movies = ["Alien", "Troy", "Star Wars"]
let foundMovie: string;
// undefined so inferred as any
for(let movie of movies){
    if(movie === "Troy"){
        foundMovie = "Troy";
    }
};

// foundMovie();
// foundMovie =1;
// foundMovie.assfds()

// the purpose is to be explicit in type annotations with TS.


