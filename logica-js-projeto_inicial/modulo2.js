// Primeiro desafio
alert('Olá, usuário! :)');
let diaSemana = prompt('Qual é o dia de hoje?');

if (diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('Bom fim de semana! :D');
} else {
    alert('Boa semana!');
}
// Concluído

// Segundo desafio
let escolhaUsuario = prompt('Digite um número de -5 e 5:');

if (escolhaUsuario >= 0){
    alert('O seu número é positivo!');
} else {
    if (escolhaUsuario <= 0){
        alert('O seu número é negativo!');
    }
}
// Concluído

// Terceiro desafio
let pontuacaoUsuario = 99

if (pontuacaoUsuario == 100){
    alert('Parabéns! Você venceu :)');
} else {
    if (pontuacaoUsuario < 100){
        alert('Tente novamente...');
    }
}
// Concluído

// Quarto desafio
let saldo = 72 + ' reais';
alert(`O seu saldo disponível é: ${saldo}`);
// Concluído

// Quinto desafio
alert('Olá, usuário!');

let nome = prompt('Insira o seu nome:');
alert(`Seja bem-vindo(a) ${nome} :D`);
// Concluído
