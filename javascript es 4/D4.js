/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let area = function (l1,l2) {
    return(l1*l2);
}
let resultarea = area (15,10)
console.log("l'area del rettangolo è di: " + resultarea) 


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (crazynum1, crazynum2) {
    if( crazynum1 === crazynum2){
        return(crazynum1+crazynum2) *3
    }
    return(crazynum1+crazynum2);
}
const totale = crazySum(10,20)
console.log("la crazySum è : "+ totale)


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num) {
    if(num > 19)
        return(Math.abs(num-19) *3);
    return(Math.abs(num-19));
}
const crazytotale = crazyDiff(10)
console.log("la crazyDiff è : "+ crazytotale)


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let boundary = function (n) {
    return (n >= 20 && n <= 100 || n == 400);
}
let n = 23
console.log("il risultato della funzione è: " + boundary(n))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epify = function (stringa){
    if(stringa.startsWith('EPICODE'))
        return(stringa);
    return("EPICODE " + stringa)
}
console.log(epify("ciao"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (positivo){
    if(positivo % 3 === 0 || positivo % 7 === 0){
        return(true);

    }return(false);
    
}
const tot = check3and7(13)
console.log(tot)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    let arrStr = str.split("");
    /* let strReverse = "";
    for(let i=arrStr.length; i>0; i--) {
        strReverse += arrStr[i-1]
    } 
    return strReverse
    */
    let strReverse = arrStr.reverse();
    return strReverse.join('')
}

const resultReverseString = reverseString("EPICODE");
console.log("Il risultato della funzione reverseString è: " + resultReverseString)


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(str) {
    let arrStr = str.split(" ");
    let stringaCompleta = []
    for(let i=0; i<arrStr.length; i++) {
        let parola = arrStr[i];
        let firstLetter = parola.charAt(0).toUpperCase()
        let parolaSenzaLaPrimaLettrera = parola.slice(1)
        let parolaFinale = firstLetter + parolaSenzaLaPrimaLettrera
        stringaCompleta.push(parolaFinale)
    } 

    return stringaCompleta.join(' ')
}

const resultUpperFirst = upperFirst("ciao a tutti come va javascript");
console.log("Il risultato della funzione upperFirst è: " + resultUpperFirst)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
