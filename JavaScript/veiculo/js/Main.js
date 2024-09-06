import {Carro} from"./Carro.js";
// const carro = new Carro("Fiat Uno","Amarelo",2021);
// console.log(carro.modelo);
// document.getElementById('output').innerHTML = `Modelo: ${carro.modelo},Cor:${carro.cor},Ano:${carro.ano}`;
let carro = new Carro("Fiat Uno","Dourado",2000);
document.getElementById('saida').innerHTML = `Modelo:${carro.getModelo()}`;
document.getElementById('saida1').innerHTML = `Cor: ${carro.getCor()}`;
document.getElementById('saida2').innerHTML = `Ano: ${carro.getAno()}`;