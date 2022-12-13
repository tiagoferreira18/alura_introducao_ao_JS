let titulo =  document.querySelector('.titulo');
titulo.textContent = 'Tiago Nutricionista'



let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    
    let tdPeso = pacientes[i].querySelector('.info-peso');
    let peso = tdPeso.textContent;
    
    let tdAltura = pacientes[i].querySelector('.info-altura');
    let altura = tdAltura.textContent;
    
    
    
    let pesoEhValido = true;
    let alturaEhValida = true;
    
    
    //Inserindo o IMC dinamicamente
    let infoImc = pacientes[i].querySelector('.info-imc');
    
       
    if(peso <= 0 || peso >= 1000){
        console.log('Peso invalido');
        pesoEhValido = false;
        infoImc.textContent = `Peso Inválido`;
        pacientes[i].classList.add('paciente-invalido');

    }
    
    if(altura <= 0 || altura >= 3.00){
        console.log('Altura inválida');
        alturaEhValida = false;
        infoImc.textContent = `altura Inválido`;
        pacientes[i].classList.add('paciente-invalido');
    
    }
        
    
    if(pesoEhValido && alturaEhValida){
        let imc = peso / (altura*altura);
        infoImc.textContent = imc.toFixed(2);
    
    }    
      
}
    

let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", btn);

function btn(event){
    event.preventDefault()
    console.log('fui clicado, está funcionando');
}