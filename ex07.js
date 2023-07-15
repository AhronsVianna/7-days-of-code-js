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

var firstValue = "";
var secondValue = "";
var iniciar = "";

while(iniciar != "s") {
    alert("Bem vindo a sua CALCULADORA, vamos começar?");
    
    iniciar = prompt("Digite a opção que deseja: \n'+' => Adição; \n'-' => Subtração; \n'*' => Multiplicação; \n'/' => Divisão; \n's' => Sair");

    if(iniciar == "s") {
        break;
    }

    while(iniciar != "+" && iniciar != "-" && iniciar != "*" && iniciar != "/" && iniciar != "s") { 
        iniciar = prompt("SOMENTE UMA DESTAS OPÇÕES: \n'+' => Adição; \n'-' => Subtração; \n'*' => Multiplicação; \n'/' => Divisão; \n's' => Sair");
    }
    
    if(iniciar == "s") {
        break;
    }

    firstValue = parseInt(prompt("Digite o primeiro número da operação"));
    
    while(isNaN(firstValue)) {
        firstValue = parseInt(prompt("Você deve digitar um número valido!"));
    }

    secondValue = parseInt(prompt("Digite o segundo número da operação"));

    while(isNaN(secondValue)) {
        secondValue = parseInt(prompt("Você deve digitar um número valido!"));
    }

    switch (iniciar) {
        case "+":
            addFunction(firstValue,secondValue);
            break;
        case "-":
            subtractFunction(firstValue,secondValue);
            break;
        case "*":
            multiplyFunction(firstValue,secondValue);
            break;
        case "/":
            divideFunction(firstValue,secondValue);
            break;        
    }          
}
