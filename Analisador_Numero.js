function calcular() {
  let numero = document.querySelector('#numero').valueAsNumber
  let resultado = document.querySelector('#resultado')
  
  let soma = 0
  let maior = 0
  let menor = 0
  let media = 0

  var line_break = 

  resultado.textContent = ""

  for (i = 0; i <= numero; i++) {
    keep_number = [i]

    resultado.textContent += `Somando todos os valores, temos: ${keep_number} ${line_break} ` 
  }
  
}

function add() {
  let numero = document.querySelector('#numero').valueAsNumber
  let adicionados = []


}


/* Ao todo, temos & números cadastrados
O maior valor informado: &
O menor valor informado: &
Somando todos os valores, temos: &
A média dos valores digitados é: & */