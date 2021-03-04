// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


// chiedo cognome
var promptInput = prompt("quale è il tuo cognome???")
console.log("prompt", promptInput);

promptInput = promptInput[0].toUpperCase() + promptInput.substring(1) // var = "stringa" --> var = ["s", "t", "r", "i", "n", "g", "a"]

//creo array
var archivio = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
console.log("archivio", archivio);

archivio.push(promptInput)
console.log("archivio dopo il push", archivio);

var sorted = archivio.sort(); // inserire uppercase e lowercase per la giusta organizazione delle lettere
console.log("sorted", sorted);

for (var i = 0; i < sorted.length; i++) {
  document.getElementById("result").innerHTML += "<span>" + sorted[i] + " " + "</span>";
  console.log("sorted detro il for", sorted[i]);
}

document.getElementById("result").innerHTML += "<div>" + "Nella lista sei nella " + (sorted.indexOf(promptInput)+1) + " posizione." + "</div>"
console.log("indexOf", sorted.indexOf(promptInput));

// uso promptInput in un for confronto ogni valore e se è uguale lo stampo piu uno per il valore umano
// for (var i = 0; i < sorted.length; i++) {
//   sorted[i] == promptInput
// }
