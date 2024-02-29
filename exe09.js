// Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este
// número é par ou ímpar. Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.

let impar_Par = Math.round(Math.random() * 100);

if (impar_Par % 2 === 0) {
    console.log(impar_Par + " é par.");
} else {
    console.log(impar_Par + " é ímpar.");
}