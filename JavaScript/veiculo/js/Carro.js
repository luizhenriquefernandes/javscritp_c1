export class Carro {
    #modelo;
    #cor;
    #ano;
    constructor(modelo,cor,ano) {
        this.#ano = ano;
        this.#cor=cor;
        this.#modelo=modelo;
    }

//Setter
// setModelo(modelo){
//     this.#modelo = modelo;
//     return modelo;
// }
// setCor(cor){
//     this.#cor = cor;
//     return cor;
// }
//getter
getModelo(){
    return this.#modelo;
}
getCor(){
    return this.#cor;
}
getAno(){
    return this.#ano;
}
    
    
}