export class Planta {
    #nome;
    constructor(nome) {
        this.#nome=nome;
    }
    getNome(){
        return `O nome da planta é ${this.#nome}`;
    }
}