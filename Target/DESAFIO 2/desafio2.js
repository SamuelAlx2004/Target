/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e 
o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
linguagem que desejar onde, informado um número, ele calcule a 
sequência de Fibonacci e retorne uma mensagem avisando se o 
número informado pertence ou não a sequência.
*/

function Fibonacci(num) {
  let a = 0
  let b = 1

 if(num === 0 || num === 1) {
    return `${num} pertence á sequência de Fibonacci.`
 }

 while(b < num) {
    let somaFibonacci = b;    
    b = a + b;
    a = somaFibonacci;
 } 

if (b === num) {
      return `${num} pertence á sequência de Fibonacci.`
   } else {
   return `${num} não pertence á sequência de Fibonacci.`
   }
}

let nuumero = 4;
console.log(Fibonacci(nuumero))

