const nomePrimeiraAula = "Algoritmos";
console.log(typeof nomePrimeiraAula);

let numeroDeAlunos = 15;
console.log(typeof numeroDeAlunos);

let estaFrio = false;
console.log(typeof estaFrio);

const valor = "10" + 20;
console.log(typeof valor);


let anoFuturo = 2025 - 5;
console.log(typeof anoFuturo);

let valorVazio = null;
console.log(typeof valorVazio);

// --

let a = 10; //number
let b = "5"; //string
let c = 2; //number

console.log("Resultado de 10 + '5':", a + b) // string = 105; 
console.log("Tipo resultante:", typeof (a + b)); 

// Preveja: O que acontece quando se junta mais um número?
console.log("Resultado de 10 + '5' + 2:", a + b + c); // string = 1052;

// --

let x = "50";
let y = "10";
let z = 5;

console.log("Resultado de '50' - '10':", x - y); //number 40
console.log("Tipo resultante:", typeof (x - y)); 

// Preveja: O que acontece se a conversão falhar?
console.log("Resultado de '50a' * 2:", "50a" * 2); // number NaN

// --

// Valores iniciais:
const saldo = 50; 
const precoItem = "35"; // Atenção: Está como String!

// Lógica (Preencher com a condição correta):
const possoComprar = (saldo > precoItem);

console.log("Posso comprar o item?", possoComprar); 
// Deve resultar em true`
