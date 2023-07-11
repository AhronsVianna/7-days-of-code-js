const area = prompt('Qual area da programação você gostria de seguir? Front-End ou Back-End? Digite Front-End ou Back-End.'); 

if (area == 'Front-End' || area == 'Back-End') {
    if (area == 'Front-End') {
        prompt('Em Front-End você gostaria de aprender Ract ou Vue?');
    } else {
        prompt('Em Back-End você gostaria de aprender C# ou Java?');
    } 
    
    const escolha = prompt('Você gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite Espe ou Full.')
    
    if (escolha == 'Espe') {
        alert(`Continue estudando e evoluindo para se tornar um desenvolvedor ${area}.`);
    } else {
        alert('Continue estudando e evoluindo para se tornar um desenvolvedor Fullstack.');
    } 
    
    var i = true;
    while (i != false) {
        var quaisTec = prompt('Quais tecnologias você gostaria de se especializar ou conhecer?');
        if (quaisTec == null) {
            i = false;
        }
    } 
    
    alert('Bons estudos!');
    
    
} else {
    alert('Você deve digitar, Front-End ou Back-End');
}


