const $boton = document.querySelector('#boton')



$boton.addEventListener('click', function() {
    
const $propina = parseFloat(document.querySelector('#propina').value)
const $monto = parseFloat(document.querySelector('#monto').value)
const $p = document.querySelector('#texto')
    

    let calculo = $monto * ( $propina / 100)
    let resultado;
    resultado = $monto + calculo
    $p.textContent = `monto total es ${resultado.toFixed(2)}`  
    
})