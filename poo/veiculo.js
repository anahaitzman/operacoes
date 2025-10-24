//Classe base para veículos
class veículo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; //estado inicial
    }

    //Método para ligar o veículo
    ligar(){
        this.ligado = true;
        console.log(`O carro${this.marca} ${this.modelo}está ligado`);
    }

    //Método para desligar o veículo
    desligar(){
        this.ligado = false;
        console.log(`O carro${this.marca} ${this.modelo}está desligado`);
    }

    //Método para obter informações
    getInfo(){
        return
    }

}