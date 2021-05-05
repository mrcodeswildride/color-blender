let box = document.getElementById(`box`)
let patrioticButton = document.getElementById(`patrioticButton`)
let rainbowButton = document.getElementById(`rainbowButton`)
let colorPicker1 = document.getElementById(`colorPicker1`)
let colorPicker2 = document.getElementById(`colorPicker2`)
let colorPicker3 = document.getElementById(`colorPicker3`)

patrioticButton.addEventListener(`click`, changePatriotic)
rainbowButton.addEventListener(`click`, changeRainbow)
colorPicker1.addEventListener(`input`, changeColor)
colorPicker2.addEventListener(`input`, changeColor)
colorPicker3.addEventListener(`input`, changeColor)

function changePatriotic() {
  box.style.backgroundImage = `linear-gradient(red, white, blue)`
}

function changeRainbow() {
  box.style.backgroundImage = `linear-gradient(red, orange, yellow, green, blue, indigo, violet)`
}

function changeColor() {
  box.style.backgroundImage = `linear-gradient(${colorPicker1.value}, ${colorPicker2.value}, ${colorPicker3.value})`
}
