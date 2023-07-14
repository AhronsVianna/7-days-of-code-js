var frutas = [];
var legumes = [];
var laticinios = [];
var congelados = [];
var doces = [];
var carnes = [];
var massas = [];
var outros = [];
var listaMercado = [frutas, legumes, laticinios, congelados, doces, carnes, massas, outros];

var adicionar = "";
var adicionarTipo = "";
var simOuNao = "";

while(simOuNao != "não") {
    simOuNao = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'.");
    while (simOuNao != "sim" && simOuNao != "não") {
        alert("Você deve responder 'sim' ou 'não'!");
        simOuNao = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'."); 
    }
    if (simOuNao == "sim") {        
    adicionar = prompt("Qual comida você deseja inserir?");
    adicionarTipo = prompt("Digite o número da categoria? \n1 => FRUTAS; \n2 => LEGUMES; \n3 => LATICÍNIOS; \n4 => CONGELADOS; \n5 => DOCES; \n6 => CARNES; \n7 => MASSAS; \n8 => OUTROS.");
    } else {
        break;
    }
    if(adicionarTipo >= 1 && adicionarTipo <= 8) {
        listaMercado[adicionarTipo - 1].push(` ${adicionar}`);
    } else {
        alert("ERRO! Você deve digitar um número de 1 a 8!");
    }
}

alert(`LISTA DO MERCADO: \nFRUTAS: ${frutas} \nLEGUMES: ${legumes} \nLATICINIOS: ${laticinios} \nCONGELADOS: ${congelados} \nDOCES: ${doces} \nCARNES: ${carnes} \nMASSAS: ${massas} \nOUTROS: ${outros}`);
