var listaMercado = [frutas, legumes, laticinios, congelados, doces, carnes, massas];

var frutas = [];
var legumes = [];
var laticinios = [];
var congelados = [];
var doces = [];
var carnes = [];
var massas = [];
var outros = [];


var adicionar = "";
var adicionarTipo = "";
var adicionando = "";

var simOuNao = "";

while(simOuNao != "não") {
    simOuNao = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'.");
    while (simOuNao != "sim" && simOuNao != "não") {
        simOuNao = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'."); 
    }
    if (simOuNao == "sim") {        
    adicionar = prompt("Qual comida você deseja inserir?");
    console.log(adicionar);
    adicionarTipo = prompt("Digite o número da categoria? \n0 => FRUTAS; \n1 => LEGUMES; \n2 => LATICÍNIOS; \n3 => CONGELADOS; \n4 => DOCES; \n5 => CARNES; \n6 => MASSAS; \n7 => OUTROS.");
    console.log(adicionarTipo);
    } else {
        break;
    }
    
    if (adicionarTipo === "0") {
        frutas.push(` ${adicionar}`);
    } else if (adicionarTipo === "1") {
        legumes.push(` ${adicionar}`);
    } else if (adicionarTipo === "2") {
        laticinios.push(` ${adicionar}`);
    } else if (adicionarTipo === "3") {
        congelados.push(` ${adicionar}`);
    } else if (adicionarTipo === "4") {
        doces.push(` ${adicionar}`);
    } else if (adicionarTipo === "5") {
        carnes.push(` ${adicionar}`);
    }   else if (adicionarTipo === "6") {
        massas.push(` ${adicionar}`);
    } else if (adicionarTipo === "7") {
        outros.push(` ${adicionar}`);
    } else {
        alert("ERRO! Você deve digitar um número entre '0' e '7'.")
    }

}

alert(`LISTA DO MERCADO: \nFRUTAS: ${frutas} \nLEGUMES: ${legumes} \nLATICINIOS: ${laticinios} \nCONGELADOS: ${congelados} \nDOCES: ${doces} \nCARNES: ${carnes} \nMASSAS: ${massas} \nOUTROS: ${outros}`);

console.log(frutas);
console.log(legumes);
console.log(laticinios);
console.log(congelados);
console.log(doces);
console.log(carnes);
console.log(listaMercado);
