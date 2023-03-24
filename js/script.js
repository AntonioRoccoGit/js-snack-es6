/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

////////////////////////////////////////////////////////
///////////////////////////SNAK 1///////////////////////

const bikes = [
    {
        name: "Carrera",
        weight: 10
    },
    {
        name: "Bmx",
        weight: 8
    },
    {
        name: "Mountain Bike",
        weight: 11
    },
    {
        name: "Downhill",
        weight: 6
    }
];

//prelevo i pesi delle bici
const bikesWeight = bikes.map((curBike) => curBike.weight)
console.log(bikesWeight);

//prendo la bici con il peso piu basso
let minorWeight = Math.min(...bikesWeight);
console.log(minorWeight);

bikes.forEach((bike) => {
    if (bike.weight === minorWeight) {
        theChoosenOne = document.querySelector(".container");
        theChoosenOne.innerHTML = `La bici più leggera è una ${bike.name} e pesa ${bike.weight}Kg`
    }

});

/////////////////////////
//FUNCTIONS 

function minorNumber(numb1, numb2, numb3){
    let minor;
    

};