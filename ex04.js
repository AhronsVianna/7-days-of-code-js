
var numeroSorteado = Math.round(Math.random() * 10);
console.log(numeroSorteado);
var chute = "";

for (var tentativas = 0; tentativas < 3; tentativas++) {
    var chute = prompt("Advinhe o número sorteado, de 0 a 10. Você tem " + (3 - parseInt(tentativas)) +  " tentativas.");
    if(chute == numeroSorteado) {
        alert(`Você acertou! O número sorteado foi o ${numeroSorteado}.`);
        break;
    } else if (chute > numeroSorteado) {
        alert("Você errou! Número Sorteado é menor.");                
    } else {
        alert("Você errou! Número Sorteado é maior.");                
    } 
}

if (chute != numeroSorteado) {
    alert(`O número sorteado foi ${numeroSorteado}.`);
}

