const marvel_heros =["thor", "Ironman"," spiderman"]
const dc_heros = ["Superman", "Flash","Batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHEros = marvel_heros.concat(dc_heros)
// console.log(allHEros);

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);
//console.log(Array.isArray("Hitesh"));
//console.log(Array.from("Hitesh"));
console.log(Array.from({name: "vishal"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));