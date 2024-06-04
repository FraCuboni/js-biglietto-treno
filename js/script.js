// stabilisco il prezzo al kilometro
const prezzoKm = 0.21;

// sconto under18
const sconto18 = 0.20;

// sconto over65
const sconto65 = 0.40

// chiedo il chilometraggio
let chilometraggio = parseInt(prompt("quanti Km devi viaggiare?"));

console.log("il chilometraggio scelto dall'utente è:",chilometraggio);

// calcolo il prezzo in base alla distanza
let prezzoAlKm = prezzoKm * chilometraggio;

console.log("Il prezzo per il chilometraggio selezionato è:", prezzoAlKm)

// chiedo l'età
let etaUtente = parseInt(prompt("quanti anni hai?"));

console.log("l'età dell utente è:",etaUtente);

// calcolo se applicare sconti per l'età
if(etaUtente<18){

    console.log("Hai diritto a uno sconto del 20%!")
}else if(etaUtente>65){

    console.log("Hai diritto a uno sconto del 40%!")
}else{

    console.log("Non hai diritto a uno sconto!")
}
// approssimo il numero a due decimali

// do il prezzo finale
