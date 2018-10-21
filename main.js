function pyramid() {
    var response = prompt('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?');
    if (!Number.parseInt(response) || Number.parseInt(response) > 25){
        console.log('We can build only to 25 storeys. try again ')
        pyramid();
    }else {
        console.log('Voici la pyramide :\n');
        for (let i = 1; i <= response; i++) {
            pyramidLayer(response, i);
        }
    }
}
function pyramidLayer(totalEtages , etage) {
    console.log(' '.repeat(totalEtages - etage) + '#'.repeat(etage*2 - 1))
}
pyramid();