var distanza = parseInt(prompt("Quanti Km devi percorrere"));//km
var eta = parseInt(prompt("Quanti anni hai?"));//età

var price = (distanza * 0.21);//prezzo




if (eta < 18 ) {
  var finalprice = (price * 0.6);
  document.getElementById("ticket").innerHTML = "Il costo del tuo biglietto è di; " + finalprice + "euro";
} else if (eta > 65){
  var finalprice = (price * 0.8);
  document.getElementById("ticket").innerHTML = "Il costo del tuo biglietto è di; " + finalprice + "euro";
} else {
  document.getElementById("ticket").innerHTML = "Non usufruisci di sconto, il tuo prezzo è di: " + price + "euro";
}
