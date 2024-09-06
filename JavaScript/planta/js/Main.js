import { Planta } from "./Planta.js";

document.getElementById('formPlanta').addEventListener('submit',function(event) {
   event.preventDefault();//impede o envio do formulario padrão

const tipoPlanta = document.getElementById('tipo').value;
let planta = new Planta(tipoPlanta);
document.getElementById('print').innerHTML=`Nome: ${planta.getNome()}`;
});