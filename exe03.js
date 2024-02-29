// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que
// diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a
// pessoa nasceu

let anoAtual = new Date().getFullYear();
let anoNascimento = 2000;

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log(`Você tem  ${idade} anos  e pode votar`)
} else {
    console.log(`Você tem  ${idade} anos  não votar`)
}
