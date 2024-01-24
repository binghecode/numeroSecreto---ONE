alert('Boas-vindas ao jogo de adivinhação');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute 
console.log('Valor do chute:', chute);

let tentativas = 1;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', numeroSecreto == chute);

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se chute for igual ao número secreto
    if (numeroSecreto == chute){
        break;
    } else {
        if(numeroSecreto > chute){
            alert(`O número é maior que ${chute}`);
        } else {
                alert(`O número secreto é menor que ${chute}`);
            }
            // tentativas = tentativas + 1;
            tentativas++;
        }
    }

// if (tentativas > 1){
    // alert(`Isso aí! Você descobriu o número correto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
   // alert(`Isso aí! Você descobriu o número correto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número correto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


