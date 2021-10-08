//1a
const mcuShows = ["Loki", "What if?"]
//1b
const starWarsShows = ["The Mandalorian", "The Bad Batch"]
//1c
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    "Monsters At Work"
]
//1d
console.log(disneyPlusShows);
//Returns
/*
['Loki',
'What if?',
'The Mandalorian',
'The Bad Batch',
'Monsters At Work'
]

*/
//2a
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
}
//2b
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami"
}
//2c 
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
}
//2d 
console.log(streamingMovies);
//2d returns
/*
{action: 'Extraction',
drama: 'One Night In Miami'
crime: 'The Irishman',
musical: 'Hamilton'}
*/

//3a
const disneyJunior = [
    "Mickey Mouse Clubhouse",
    "Spidey and His Amazing Friends"
]
//3b
const [mickey, spidey] = disneyJunior;
//3c
console.log(disneyJunior);
/*3c returns
['Mickey Mouse Clubhouse', 'Spidey and His Amazing Friends']*/

//4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
}
//4b variableType [variableNames] = array;
let { warMachine, theHulk } = avengers
//4c 
console.log(warMachine, theHulk);
/* Returns:
James Rhodes, Bruce Banner */

//4d
const moreAvengers = {
    "blackWidow":"Natasha Romanoff",
    "hawkeye" : "Clint Barton",
    "ironMan" : "Tony Stark" };
//4e
let {blackWidow:nat, ...others} = moreAvengers;
//4f
console.log(nat, others);
/* Returns:
Natasha Romanoff { hawkeye; 'Clint Barton', ironMan; 'Tony Stark'}*/

//BONUS RETURN TO 5A, B...
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//5a 
 const all = ([...bonus .first, ...bonus .second, ...bonus.third]);
 console.log(all);
//5b...testing...
const (one, two, three, four, five, six, seven, eight, nine);
console.log(three);
