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


let pesoEhValido = true;
let alturaEhValida = true;


//Inserindo o IMC dinamicamente
let infoImc = paciente.querySelector('.info-imc');


if(peso <= 0 || peso >= 1000){
    console.log('Peso invalido');
    pesoEhValido = false;
    infoImc.textContent = `Peso Inválido`;
}

if(altura <= 0 || altura >= 3.00){
    console.log('Altura inválida');
    alturaEhValida = false;
    infoImc.textContent = `altura Inválido`;

}



if(pesoEhValido && alturaEhValida){
    let imc = peso / (altura*altura);
    infoImc.textContent = imc;

}




