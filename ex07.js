function addFunction() {
    return firstValue + secondValue;
}

function subtractFunction() {
    return firstValue - secondValue;    
}

function multiplyFunction() {
    return firstValue * secondValue;    
}

function divideFunction() {
    return firstValue / secondValue;    
}

function textoInicial(texto) {
    var inicio = prompt(`${texto}: \n'+' => Adição; \n'-' => Subtração; \n'*' => Multiplicação; \n'/' => Divisão; \n's' => Sair`);
    return inicio;
}

function numeroValido(numero) {
    var valido = parseInt(prompt(`Digite o ${numero} número da operação`));
    
    while(isNaN(valido)) {
        valido = parseInt(prompt("Você deve digitar um número valido!"));
    }
    return valido;    
}

function alertResposta(operacao, funcao) {
    alert(`O resultado de ${firstValue} ${operacao} ${secondValue} é ${funcao()}.`);
}

var firstValue = "";
var secondValue = "";
var iniciar = "";

alert("Bem vindo a sua CALCULADORA, vamos começar?");
while(iniciar != "s") {
        
    iniciar = textoInicial("Digite a opção que deseja");
    
    while(iniciar != "+" && iniciar != "-" && iniciar != "*" && iniciar != "/" && iniciar != "s") { 
        iniciar = textoInicial("SOMENTE UMA DESTAS OPÇÕES");
    }
    
    if(iniciar == "s") {
        break;
    }

    firstValue = numeroValido("primeiro");

    secondValue = numeroValido("segundo");

    switch (iniciar) {
        case "+":
            alertResposta('+', addFunction);
            break;
        case "-":
            alertResposta('-', subtractFunction);
            break;
        case "*":
            alertResposta('*', multiplyFunction);
            break;
        case "/":
            alertResposta('/', divideFunction);
            break;        
    }          
}

alert("Você está saindo da CALCULADORA, até mais!")