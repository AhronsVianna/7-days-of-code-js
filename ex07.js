function addFunction(x, y) {
    var add = x + y;
    alert(add);
}

function subtractFunction(x,y) {
    var subtract = x - y;
    alert(subtract);
}

function multiplyFunction(x,y) {
    var multiply = x * y;
    alert(multiply);
}

function divideFunction(x,y) {
    var divide = x / y;
    alert(divide);
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

var firstValue = "";
var secondValue = "";
var iniciar = "";

while(iniciar != "s") {
    alert("Bem vindo a sua CALCULADORA, vamos começar?");
    
    iniciar = textoInicial("Digite a opção que deseja");

    if(iniciar == "s") {
        break;
    }

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
            addFunction(firstValue, secondValue);
            break;
        case "-":
            subtractFunction(firstValue, secondValue);
            break;
        case "*":
            multiplyFunction(firstValue, secondValue);
            break;
        case "/":
            divideFunction(firstValue, secondValue);
            break;        
    }          
}
