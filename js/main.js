let titulo =  document.querySelector('.titulo');
titulo.textContent = 'Tiago Nutricionista'

let paciente = document.querySelector('#primeiro-paciente');

let tdPeso = paciente.querySelector('.info-peso');
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector('.info-altura');
let altura = tdAltura.textContent;


console.log(paciente); //tr
console.log(tdPeso); // td que tem o peso
console.log(altura); // obter 100

let imc = peso / (altura*altura);


//Inserindo o IMC dinamicamente
let infoImc = paciente.querySelector('.info-imc');
infoImc.textContent = imc;


