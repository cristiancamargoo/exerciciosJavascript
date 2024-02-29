// Ler 2 valores e escrever o maior deles.

let num1 =  Math.round(Math.random() * 100);
let num2 =  Math.round(Math.random() * 100);

if (num1 > num2) {
    console.log(`foi digitado o  ${num1} e ${num2} o maior é o ${num1}`)
}
else {
    console.log(`foi digitado o  ${num1} e ${num2} o maior é o ${num2}`)
}