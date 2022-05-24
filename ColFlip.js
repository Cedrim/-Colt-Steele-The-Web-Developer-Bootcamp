let contador = 0

const valor = document.querySelector('.valor')
const aumenta = document.querySelector('.aumentar')
const diminui = document.querySelector('.diminuir')
const reseta = document.querySelector('.resetar')

/* aumenta.addEventListener("click", function() {
   valor.textContent = e
}) */

function aumentar() {
  if (contador > 0) {
    valor.style.color = 'limegreen'
  }
  // contador > 0 ? valor.textContent = contador++ : false
  valor.textContent = contador++
}

function diminuir() {
  if (contador < 0) {
    valor.style.color = 'lightcoral'
  }
  valor.textContent = contador--
}

function resetar() {
  // contador = valor
  if ((contador = 0)) {
    valor.style.color = 'white'
  }
  valor.textContent = contador
}
