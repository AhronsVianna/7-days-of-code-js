var area = prompt("Qual area da programação você gostria de seguir? 'Front-End' ou 'Back-End'? Digite o nome da área."); 
var areaLing = "";

while (area != "Front-End" && area != "Back-End") {
    area = prompt("Você digitou algo errado! Digite 'Front-End' ou 'Back-End'.");
    }
    
if (area === "Front-End") {
    areaLing = prompt("Em Front-End você gostaria de aprender 'Ract' ou 'Vue'?");
    while (areaLing != "Ract" && areaLing != "Vue") {
        areaLing = prompt("Você deve digitar 'Ract' ou 'Vue'.");
    }
} else if (area === "Back-End") {
    areaLing = prompt("Em Back-End você gostaria de aprender 'C#' ou 'Java'?");
    while (areaLing != "C#" && areaLing != "Java") {
        areaLing = prompt("Você deve digitar 'C#' ou 'Java'.");
    }
} 

var escolha = prompt("Você gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 'Esp' ou 'Full'.")

while (escolha != "Esp" && escolha != "Full") {
    escolha = prompt("Você deve digitar 'Esp' ou 'Full'.");
}

if (escolha == "Esp") {
    alert(`Continue estudando e evoluindo para se tornar um desenvolvedor ${area}.`);
} else if (escolha == 'Full') {
    alert("Continue estudando e evoluindo para se tornar um desenvolvedor Fullstack.");
} 

while (true) {
    var quaisTec = prompt("Quais tecnologias você gostaria de se especializar ou conhecer?");
    if (quaisTec === null || quaisTec === "") {
        break;
    } else {
        alert(`${quaisTec} é realemnte uma tecnologia importante para se aprender`);        
    } 
} 

alert("Bons estudos!");

    



