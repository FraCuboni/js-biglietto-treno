// stabilisco il prezzo al kilometro
const prezzoAlKm = 0.21;

// sconto under18
const sconto18 = 0.80;

// sconto over65
const sconto65 = 0.60

// chiedo il chilometraggio
let chilometraggio = parseInt(prompt("quanti Km devi viaggiare?"));

console.log("il chilometraggio scelto dall'utente è:",chilometraggio);

// calcolo il prezzo in base alla distanza
let prezzoKm = prezzoAlKm * chilometraggio;

console.log("Il prezzo per il chilometraggio selezionato è:", prezzoKm)

// chiedo l'età
let etaUtente = parseInt(prompt("quanti anni hai?"));

console.log("l'età dell utente è:",etaUtente);

// calcolo se applicare sconti per l'età
if(etaUtente<18){

    let prezzo = prezzoKm * sconto18;
    console.log("Hai diritto a uno sconto del 20%! Nuovo prezzo:", prezzo)

}else if(etaUtente>65){

    let prezzo = prezzoKm * sconto65;
    console.log("Hai diritto a uno sconto del 40%! Nuovo prezzo:", prezzo)

}else{

    console.log("Non hai diritto a uno sconto!")
}
// approssimo il numero a due decimali

// do il prezzo finale
