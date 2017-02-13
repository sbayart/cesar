var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var textElement = document.getElementById("initial");
var transform = document.getElementById("transform");
function cripter() {
    text = textElement.value;
    var resultat = "";
        for (var i = 0; i < text.length; i++) {
            var indice = alphabet.indexOf(text[i])
            resultat += alphabet[indice+1]
    }
    transform.value = resultat;
}
