// Valor inicial do contador = 0
let contador = 0;
// Valor e Botões
const value = document.querySelector("#value");
const button = document.querySelectorAll(".button");

button.forEach(function (BT) {
  BT.addEventListener("click", function (e) {
    const estilo = e.currentTarget.classList;
    // CurrentTarget p/ selecionar alvo de uma classList 
    if (estilo.contains("decrease")) {
      contador--;
    } else if (estilo.contains("increase")) {
      contador++;
    } else {
      contador = 0;
    }

    if (contador > 0) {
      value.style.color = "green";
    }
    if (contador < 0) {
      value.style.color = "red";
    }
    if (contador === 0) {
      value.style.color = "#222";
    }
    value.textContent = contador;
  });
});
