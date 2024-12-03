/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
let a = 10
let b = 23
if (a > b) {
  console.log("il numero maggiore è: " + a);
}
else if(b > a) {
  console.log("il numero maggiore è: " + b);
}
else {
  console.log("i numeri sono uguali: ");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
let x = 89
if (x !== 5){
  console.log(x + " not equal 5");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
let y= 25
if (y % 5 === 0){
  console.log("divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
let c = 10
let d = 20
if(c === 8 || d === 8 || c + d === 8 || c - d === 8 || d - c === 8) {
  console.log("algoritmo verificato");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");

let totalShoppingCart = 40;
if(totalShoppingCart <= 50){
  totalShoppingCart += 10
}
console.log(totalShoppingCart)




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");

let carrello = 40 * 0.8; 
if(carrello <= 50){
  carrello += 10
}
console.log(carrello)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
const num1= 57;
const num2= 62;
const num3= 61;

if( num1 >= num2 && num1 >= num3) {
  if( num2 >= num3){
    console.log("l'ordine dei numeri è: ", num1 , num2 , num3)
  } else{
    console.log("l'ordine dei numeri è: ", num1 , num3 , num2)
  }
} else if( num2 >= num1 && num2 >= num3 ) {
  if( num3 >= num1){
    console.log("l'ordine dei numeri è: ", num2 , num3 , num1)
  } else{
    console.log("l'ordine dei numeri è: ", num2 , num1 , num3)
  }
} else{
  if( num2 >= num1){
    console.log("l'ordine dei numeri è: ", num3 , num2 , num1)
  } else{
    console.log("l'ordine dei numeri è: ", num3 , num1 , num2)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
let input = "WWW"
if( typeof input === "number" ){
  console.log( input + " è di tipo number")
} else{
  console.log( input + " non è di tipo number ma di tipo " + typeof input)
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
let numGenerico = 10
if( numGenerico % 2 === 0){
  console.log(numGenerico + " è un numero pari ")
} else{
  console.log(numGenerico + " è un numero dispari ")
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");
let val = 7
if(val < 5){
  console.log(val + ' è minore di 5')
} else if(val > 5 && val < 10){
  console.log(val + ' è un valore compreso tra 5 e 10')
} else {
  console.log("Uguale a 10 o maggiore");
}

//lolli bravo
let valLolli = 7
  if (valLolli < 5) {
      console.log("Meno di 5");
    } else if (valLolli < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 11");
me.city="Toronto"
console.log(me);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 12");
delete me.lastName
console.log( me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 13");
me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 14");
let myArr = []
myArr = [1,2,3,4,5,6,7,8,9,10]
console.log( myArr)




/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 15");
myArr.pop()
myArr.push(100)
console.log(myArr)

// matte solu
let matteArr = [1,2,3,4,5,6,7,8,9,10];
matteArr.splice(-1, 1, 100)
console.log(matteArr)
