// stabilisco il prezzo al kilometro
const prezzoKm = 0.21;

// stabilisco sconto per età

// chiedo il chilometraggio
let chilometraggio = prompt("quanti Km devi viaggiare?");

console.log("il chilometraggio scelto dall'utente è:",chilometraggio);

// calcolo il prezzo in base alla distanza

// chiedo l'età
let eta = prompt("quanti anni hai?");

console.log("l'età dell utente è:",eta);

// calcolo se applicare sconti per l'età
if(eta<18){

    console.log("Hai diritto a uno sconto del 20%!")
}else if(eta>65){

    console.log("Hai diritto a uno sconto del 40%!")
}else{

    console.log("Non hai diritto a uno sconto!")
}
// approssimo il numero a due decimali

// do il prezzo finale
