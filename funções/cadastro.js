const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let salário = parseFloat(prompt('Salário:'));

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Salário: R$ ${salário.toFixed(2)}`);

//Para confirmar
let continuar = prompt('Deseja continuar o cadastro? (s/n)');
if (continuar.toLowerCase() === 'n'){
    console.log('Cadastro realizado com sucesso');
} else (continuar.toLowerCase() === 's');
    console.log('vamos continuar');


 