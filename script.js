let box = document.getElementById(`box`)
let colorPicker1 = document.getElementById(`colorPicker1`)
let colorPicker2 = document.getElementById(`colorPicker2`)
let colorPicker3 = document.getElementById(`colorPicker3`)

colorPicker1.addEventListener(`input`, changeColor)
colorPicker2.addEventListener(`input`, changeColor)
colorPicker3.addEventListener(`input`, changeColor)

function changeColor() {
  box.style.background = `linear-gradient(${colorPicker1.value}, ${colorPicker2.value}, ${colorPicker3.value})`
}