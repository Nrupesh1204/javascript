const marvel_heros=["thor","Ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];
// marvel_heros.push(dc_heroes);
// const allHeroes=marvel_heros.concat(dc_heroes);
// console.log(allHeroes);


//       By using spread method
const all_new_heroes=[...marvel_heros,...dc_heroes];
console.log(all_new_heroes);
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
