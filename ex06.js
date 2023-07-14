var frutas = [];
var legumes = [];
var laticinios = [];
var congelados = [];
var doces = [];
var carnes = [];
var massas = [];
var outros = [];
var listaMercado = [frutas, legumes, laticinios, congelados, doces, carnes, massas, outros];

var adiRem = "";
var adiRemTipo = "";
var questionador = "";
var verificador = "0";

function numCat(diferencial) {
    return prompt(`Digite o número da categoria que deseja ${diferencial} o item. \n1 => FRUTAS; \n2 => LEGUMES; \n3 => LATICÍNIOS; \n4 => CONGELADOS; \n5 => DOCES; \n6 => CARNES; \n7 => MASSAS; \n8 => OUTROS.`);    
}

function listMerc() {
    alert(`LISTA DO MERCADO: \nFRUTAS: ${frutas} \nLEGUMES: ${legumes} \nLATICINIOS: ${laticinios} \nCONGELADOS: ${congelados} \nDOCES: ${doces} \nCARNES: ${carnes} \nMASSAS: ${massas} \nOUTROS: ${outros}`);
}

function erro(){
    alert("ERRO! Você deve digitar um número de 1 a 8!");
}

while(questionador != "não") {
    if(verificador == "0") {
        questionador = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'.");
        while (questionador != "sim" && questionador != "não" && questionador != "remover") {
            alert("Você deve responder 'sim' ou 'não'!");
            questionador = prompt("Você deseja adicionar uma comida? Responda 'sim' ou 'não'. "); 
        } 

    } else {
        questionador = prompt("Você deseja adicionar uma comida? Ou remover? Responda 'sim', 'não' ou 'remover'.");
        while (questionador != "sim" && questionador != "não" && questionador != "remover") {
            alert("Você deve responder 'sim', 'não' ou 'remover!");
            questionador = prompt("Você deseja adicionar uma comida? Responda 'sim', 'não' ou 'remover'. "); 
        }
    }
    if (questionador == "não") {        
        break;

    } else if (questionador == "remover") {
        listMerc();
        adiRemTipo = numCat("REMOVER");       
        
        if(adiRemTipo >= 1 && adiRemTipo <= 8) {
            if(listaMercado[adiRemTipo - 1] = []) {
                alert("Lista vazia, nada para apagar");
            } else {
            listaMercado[adiRemTipo - 1].pop();
            listMerc();
            verificador--;
            }            
        } else {
            erro();
        }

    } else {
        adiRem = prompt("Qual comida você deseja inserir?");
        adiRemTipo = numCat("ADICIONAR");        

        if(adiRemTipo >= 1 && adiRemTipo <= 8) {
            listaMercado[adiRemTipo - 1].push(` ${adiRem}`);
            verificador++;
        } else {
            erro();
        }
    }    
}

listMerc();
