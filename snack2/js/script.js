/*
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
*/

let numberArray = parseInt(prompt('Inserisci quante array vuoi creare:'));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomArray(){
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(getRndInteger(1, 100));
    };
    return array;
}

for(let i = 0; i < numberArray; i++){
    console.log(randomArray())
}