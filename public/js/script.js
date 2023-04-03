let addCaracteristicas = document.getElementById('addCaracteristicas');
let carateristicasList = document.querySelector('.caracteristicasList');
let carateristicasDiv = document.querySelectorAll('.caracteristicasDiv')[0]; 

addCaracteristicas.addEventListener('click', function(){
  let newCaracteristicas = carateristicasDiv.cloneNode(true);
  let input = newCaracteristicas.getElementsByTagName('input')[0];
  input.value = '';
  carateristicasList.appendChild(newCaracteristicas);
});