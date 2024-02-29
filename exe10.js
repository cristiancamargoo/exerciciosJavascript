// Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B
// marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a
// palavra EMPATE.

let golsTimeA = Math.round(Math.random() * 10);
let golsTimeB = Math.round(Math.random() * 10);

if (golsTimeA > golsTimeB) {
    console.log(`Time A  ${golsTimeA} gols VS Time B ${golsTimeB} gols o vencedor é o Time A`)
} else if (golsTimeB > golsTimeA) {
    console.log(`Time B  ${golsTimeB} gols VS Time A ${golsTimeA} gols o vencedor é o Time B`)
} else {
    console.log("EMPATE.");
}