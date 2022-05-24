const array_colors = ['blue', 'pink', 'green', 'orange', 'yellow', 'purple']
const color_flip = document.querySelector('.color_flip')
/* const button = document.querySelector(".button")

button.addEventListener("click", function()  {
  // Pegar número aleatório entre 0 e 4 do array "colors"
  const random_number = get_random_number() 
  console.log(random_number)
  document.body.style.backgroundColor = array_colors[random_number]
  color_flip.textContent = array_colors[random_number]

})  */

function change_color() {
  // Pegar número aleatório entre 0 e 4 do array "colors"
  const random_number = get_random_number()
  console.log(random_number)
  document.body.style.backgroundColor = array_colors[random_number]
  color_flip.textContent = array_colors[random_number]
  //document.h2.style.backgroundColor = array_colors[random_number]
}

function get_random_number() {
  return Math.floor(Math.random() * array_colors.length)
}
