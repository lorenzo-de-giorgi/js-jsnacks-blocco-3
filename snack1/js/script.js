// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Creo un array vuoto
let numbers = [];
let somma = 0;
while(somma < 50){
    const num = parseInt(prompt('Inserisci un nuovo numero'));
    if(!isNaN(num)){
        sum += num;
        numbers.push(num)
    }
    //console.log(sum);
}
console.log(numbers, sum);