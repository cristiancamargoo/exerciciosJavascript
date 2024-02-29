//Ler 3 valores e escrevê-los em ordem crescente.

let numero_1 = Math.round(Math.random() * 100);
let numero_2 = Math.round(Math.random() * 100);
let numero_3 = Math.round(Math.random() * 100);

if (numero_1 > numero_2) {
    let temp = numero_1;
    numero_1 = numero_2;
    numero_2 = temp;
}

if (numero_2 > numero_3) {
    let temp = numero_2;
    numero_2 = numero_3;
    numero_3 = temp;
}

if (numero_1 > numero_2) {
    let temp = numero_1;
    numero_1 = numero_2;
    numero_2 = temp;
}

console.log("Os valores em ordem crescente são:", numero_1, numero_2, numero_3);