// Ler 2 valores e escrevê-los em ordem crescente.
let valor1 =  Math.round(Math.random() * 100);
let valor2 = Math.round(Math.random() * 100);

let menor = 0;
let maior = 0;

if (valor1 > valor2){
    maior = valor1
    menor = valor2
}
else {
    menor = valor1
    maior = valor2
}
console.log("Os valores em ordem crescente são:", menor, "e", maior);