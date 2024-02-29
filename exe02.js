// Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e
// escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que se a nota
// for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.

let nota1 = Math.round(Math.random() * 10) ;
let nota2 = Math.round(Math.random() * 10) ;

let soma = (nota1 + nota2);
let media = soma / 2

if(media >= 7) {
    console.log(`Nota1 = ${nota1}, nota2 ${nota2}:  média = ${media} o aluno foi aprovado`)
}
else{
    console.log(`Nota1 = ${nota1}, nota2 ${nota2}: média = ${media} o aluno foi reprovado`)
}
