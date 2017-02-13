var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var textElement = document.getElementById("initial");
var transform = document.getElementById("transform");
var pasElement = document.getElementById("pas");

function cripter() {
    var pas = parseInt(pasElement.value);
    text = textElement.value;
    var resultat = "";
        for (var i = 0; i < text.length; i++) {
            if(text[i] == " ") {
                resultat += " ";
            }
            else {
                var indice = alphabet.indexOf(text[i].toUpperCase());
                var nouvelIndice = indice + pas;

                resultat += alphabet[nouvelIndice % 26];
            }

    }
    transform.value = resultat;
}
