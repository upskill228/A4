const TAXACAMBIO = 0.92; // Taxa Euro - Dólar

const MOEDAORIGEM = "Euro";

const MOEDADESTINO = "Dólar";

let valorEmEuro = "500";

let valorEmDolar = valorEmEuro * TAXACAMBIO;

console.log(valorEmDolar);

console.log("Tipo de dados antes da conversão:", typeof valorEmEuro);
console.log("Tipo de dados depois da conversão:", typeof valorEmDolar);
console.log(valorEmEuro, MOEDAORIGEM, "equivalem a", valorEmDolar, MOEDADESTINO,".");
