var buttonGenera = document.getElementById("genera");
buttonGenera.addEventListener("click",
  function() {
    var nomeUtente = document.getElementById("nome-utente");
    var nome = nomeUtente.value;
    
    console.log(nome);

    var chilometriUtente = document.getElementById("chilometri-utente");
    var kmDaPercorrere = chilometriUtente.value;
    console.log(kmDaPercorrere);
      // // eta del passeggero
    var etaPasseggero = document.getElementById("eta-passeggero");
    var fasciaEta = etaPasseggero.value;
    console.log(fasciaEta);
    // // prezzo totale del biglietto
    var prezzoKm = 0.21;
    var costoBiglietto = kmDaPercorrere * prezzoKm;
    console.log(costoBiglietto);

    var offerta = "Tariffa Standard"


    // // condizioni sconto Biglietto
    if (fasciaEta == "minorenne"){
      //   // minorenne sconto del 20%
      costoBiglietto -= (costoBiglietto * 20 / 100);
      offerta = "Sconto minorenne";
      //   // over 65 anni di eta' sconto 40%
    } else if (fasciaEta == "over65") {
      costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
      offerta = "Sconto over 65";
    }
     // assegnazione carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById("carrozza").innerHTML = carrozza;

     // codice cp
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
    document.getElementById("codice-cp").innerHTML = cp;


    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("costo").innerHTML = costoBiglietto.toFixed(2) + ' Euro';


    var bottonAnnulla = document.getElementById('sparisci');
    bottonAnnulla.classList.remove('hidden');


  }
)
var buttonAnnulla = document.getElementById("annulla");
buttonAnnulla.addEventListener("click",
function() {
  var bottonAnnulla = document.getElementById("sparisci");
  bottonAnnulla.classList.add("hidden");


 } );
