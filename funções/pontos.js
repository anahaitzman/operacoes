console.log("=== SISTEMA DE PONTUAÇÃO DO JOGO ===👌");
let pontuação = 0;
let nivel = 1;
let vidas = 3;

//simulando as rodadas do jogo
for(let rodada = 1; rodada <=8; roda++);{
    let pontosRodada = Math.floor(Math.random()* 101);
}

console.log(`\n--- RODADA${rodada} ---`);
console.log(`Pontos obtidos: ${pontosRodada}`);

// Adicionando pontos à pontuação total
pontuacao += pontosRodada;

// Bônus baseado na performance
if (pontosRodada >=80) {
    consdole.log("🌟EXELENTE! Bônus de 20 pontos!");
    pontuacao += 20;
} else if (pontuacao >= 60) {
    console.log("⭐BOM! Bônus de 10 pontos!");
    pontuacao += 10;
} else if (pontuacao < 30) {
    console.log("😭RUIM! perdeu 1 vida.");
    vidas--;
    if (vidas <= 0) {
        console.log("💀GAME OVER! 💀 Suas vidas acabaram!");
        break;
    }
}

//Sistema de progressão de nível
if (pontuacao >= nivel * 150) {
    nivel++;
    console.log(`🚀SUBIU DE NÍVEL! Agora você está no nível ${nivel}`);
    console.log("💖Vida extra ganha!");
    vidas++;
}

//Exibindo status atual
console.log(`Pontuação total: ${pontuação}`);
console.log(`Nível atual: ${nível}`);
console.log(`Vidas restantes: ${vidas}`);

//Pausa entre as rodadas
console.log("⌛Preparando a próxima rodada...\n")

//Relatório final do jogo
console.log("\n" + "=".repeat(40));
console.log("RELATÓRIO FINAL DO JOGO");
console.log("=".repeat(40));
console.log(`🏆Pontuação Final:${pontuação} pontos`);
console.log(`🚩Nivel Alcançado: ${nivel}`);
console.log(`💓Vidas Restantes: ${vidas}`);

//Sistema de Classificação
let Classificação;
if(pontuação >= 600) {
    Classificação = "🥇 1° LUGAR!";
} else if (pontuação >= 450) {
    Classificação = "🥈 2° LUGAR!";
} else if (pontuação >= 300) {
    Classificação = "🥉 3° LUGAR!";
} else if (pontuação >= 150) {
    Classificação = "🥇 NOVATO";
} else {
    Classificação = "💩 INICIANTE";
}

console.log(`🏅Classificação: ${Classificação}`);

