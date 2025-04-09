// funções básicas

// 1 função simples sem parâmetros e sem retorno
function saudacao () {
    console.log("Olá, bem vindo ao estudo de funções");
}

// Chamar a função
saudacao;

// 2.Função com parâmetros
    function cumprimentar(nome) {
        console.log(`Olá, ${nome}! Como você está?`);
}

// Chamar a função com argumento
cumprimentar("Jamile")
cumprimentar("Willian")
cumprimentar("Felipe")
     
// 3. função com parâmetros e retorno
function soma (a,b) {
    return a + b;
}

// usando o valor retornado pela função
const resultado = soma(5,3);
 console.log(`a soma é: ${resultado}`);

 //4 função com parâmetros padrão(default)
 function multiplicar (a, b =2) {
    return a*b;
 }

 console.log(multiplicar(4));   //usa o valor padrão b=2
 console.log(multiplicar(4*5)); //subscreve o valor padrão

 // 5. Declaração de função 

 let nome = "Ana";
 let sobrenome = "Haitzman";
 let nomeCompleto = nome + " " + sobrenome;

 console.log("o nome completo é:", nomeCompleto)

 // 6. declaração de função
 function subtrair  (a,b) {
    return a - b;
 }

 // 6.1 expressão de função
const dividir = function(a,b) {
    if (b === 0); {
        return "Não é possível dividir por zero";
    }
    return a/b;
};

console.log(dividir(10, 2));
console.log(dividir(10,0));
