// Ler 3 valores e escrever a soma dos 2 maiores.

let num_1 =  Math.round(Math.random() * 100);
let num_2 =  Math.round(Math.random() * 100);
let num_3 =  Math.round(Math.random() * 100);

let menor_num = Math.min(num_1, num_2, num_3);

let somarMaiores = (num_1 + num_2 + num_3) - menor_num;

console.log(`foi digitado o  ${num_1} , ${num_2} e ${num_3}, a soma dos dois maiores é ${somarMaiores} `)