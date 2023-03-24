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

/* 
Snack2

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

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
    },
];

soccerTeams.forEach((team) => {
    team.point = getRndInteger(0, 90)
    team.sufferdFoul = getRndInteger(0, 40)
});

const teamNameAndFoul = [];

soccerTeams.forEach((team) => {
    const {name, sufferdFoul} = team;
    
    const newObj = {name, sufferdFoul};
    teamNameAndFoul.push(newObj);
});


console.log(teamNameAndFoul, soccerTeams);


//////////////////////////////////
// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }