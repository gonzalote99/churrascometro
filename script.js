let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

calcular = () => {
console.log('calculando');

let adultos = inputAdultos.value;
let criancas = inputCriancas.value;
var duracao = inputDuracao.value;

let carneTotal = (qntddCarne(duracao) * adultos) + ((qntddCarne(duracao) / 2) * criancas);
let cervejaTotal = qntddCerveja(duracao) * adultos;
let bebidaTotal = (qntddBebidas(duracao) * adultos) + ((qntddBebidas(duracao) / 2) * criancas);

console.log(carneTotal);
console.log(cervejaTotal);
console.log(bebidaTotal);

resultado.innerHTML = `<p><strong>${Math.ceil(carneTotal/1000)} kg</strong> de carne</p>`;
resultado.innerHTML += `<p><strong>${Math.ceil(cervejaTotal/260)} latinhas</strong> de cerveja</p>`;
resultado.innerHTML += `<p><strong>${Math.ceil(bebidaTotal/2000)}</strong> refrigerantes 2L</p>`;
}


function qntddCarne(duracao) {
  if(duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function qntddCerveja(duracao) {
  if(duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function qntddBebidas(duracao) {
  if(duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}