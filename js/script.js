////////////////////////////////////////////////////////
///////////////////////////SNAK 1///////////////////////

// const bikes = [
//     {
//         name: "Carrera",
//         weight: 10
//     },
//     {
//         name: "Bmx",
//         weight: 8
//     },
//     {
//         name: "Mountain Bike",
//         weight: 11
//     },
//     {
//         name: "Downhill",
//         weight: 6
//     }
// ];

// //prelevo i pesi delle bici
// const bikesWeight = bikes.map((curBike) => curBike.weight)
// console.log(bikesWeight);

// //prendo la bici con il peso piu basso
// let minorWeight = Math.min(...bikesWeight);
// console.log(minorWeight);

// bikes.forEach((bike) => {
//     if (bike.weight === minorWeight) {
//         theChoosenOne = document.querySelector(".container");
//         theChoosenOne.innerHTML = `La bici più leggera è una ${bike.name} e pesa ${bike.weight}Kg`
//     }

// });

////////////////////////////////////////////////////////
///////////////////////////SNAK 2///////////////////////

const soccerTeams = [
    {
        name: "Napoli",
        point: 0,
        sufferdFoul: 0
    },
    {
        name: "Milan",
        point: 0,
        sufferdFoul: 0
    },
    {
        name: "Inter",
        point: 0,
        sufferdFoul: 0
    },
    {
        name: "Juventus",
        point: 0,
        sufferdFoul: 0
    },
    {
        name: "Sampdoria",
        point: 0,
        sufferdFoul: 0
    }
];

soccerTeams.forEach((team) => {
    team.point = getRndInteger(0, 90)
    team.sufferdFoul = getRndInteger(0, 40)
});

let teamNameAndFoul2 = [];
const teamNameAndFoul = [];

soccerTeams.map(({name, sufferdFoul}) => teamNameAndFoul2.push({name, sufferdFoul}));

soccerTeams.forEach(({name, sufferdFoul}) =>  teamNameAndFoul.push({name, sufferdFoul}));

console.log(teamNameAndFoul, teamNameAndFoul2, soccerTeams);


//////////////////////////////////
// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

////////////////////////////////////////////////////////
///////////////////////////SNAK 3///////////////////////

// const numbersArray = [23, 14, 6, 8, 10];

// const numbersArrayFunc = snackBonus2(numbersArray, 1, 3);
// console.log(numbersArrayFunc);
// //dato un array 
// //prendere gli indici compresi tra A e B 
// //stampare nuovo array con soli gli indici indicati

// function snackBonus(array, a, b){
//     const newArray = [];
//     for(let i = a; i <= b; i++){
//         newArray.push(array[i]);
//     }
//     return newArray;
// };
// //implemented the same function with a different method
// function snackBonus2 (array, a, b){
//     const newArray = [];
//     array.forEach((numb, index) => {
//         if(index >= a && index <= b){
//             newArray.push(numb);
//         }
//     });
//     return newArray;
// };