// calcular o imc (Índice de massa corporal)

function calcularImc(peso, altura, mostrarCategoria = true);
const imc = peso / (altura * altura);
    if (!mostrarCategoria) {
        return imc.toFixed(2);
    }

//  Determinar a categoria do IMC

let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categororia = "Sobrepeso";
    } else if (imc < 35) {
        categoria = "Obesidade gral I";
    } else if (imc < 40) {
        categoria = "Obesidade gral II";
    } else {
        categoria = "Obesidade grau III";
    }

    return{
        imc:imc.toFixed(2),
        categoria: categoria
    };

    console.log();
