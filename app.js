const NOMEALUNO = "João Silva";
console.log("Nome do Aluno:", NOMEALUNO);
// NOMEALUNO = "Pedro";

let contador = 0;
console.log("Contador Inicial", contador);
contador = 1; // Reatribuição permitida
console.log("Contador atualizado:", contador);

let idade = 28; // Number
let mensagem = "Variáveis são o futuro!"; // String
let temCarro = true; // Boolean

console.log("Tipo de idade:", typeof idade);       // number
console.log("Tipo de mensagem:", typeof mensagem); // string
console.log("Tipo de temCarro:", typeof temCarro); // boolean

const n1 = "10";
const n2 = 5;
// Concatenação
console.log("Soma (String + Number):", n1 + n2); // "105"

// Substração
console.log("Subtração (String - Number):", n1 - n2); // 5

let idadeTexto1 = "42";
console.log(typeof idadeTexto1); // string
let idadeNumero1 = Number(idadeTexto1);
console.log(typeof idadeNumero1); // number

let nome = prompt("Qual é o teu nome?");
console.log("Olá,", nome);

let idadeTexto = prompt("Qual é a tua idade?");
console.log("Tipo original:", typeof idadeTexto); // string

let idadeNumero = Number(idadeTexto);
console.log("Tipo convertido:", typeof idadeNumero); // number
console.log("Daqui a um ano terás:", idadeNumero + 1);

// ----

let birthDate = prompt("Qual é o ano do seu nascimento?");
let age = 2025 - birthDate;
console.log("A tua idade é:", age, "anos");
