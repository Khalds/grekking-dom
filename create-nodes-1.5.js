const red = document.createElement('div')
const green = document.createElement('div')
const blue = document.createElement('div')

red.classList.add('red')
green.classList.add('green')
blue.classList.add('blue')

blue.textContent = 'Я вложен'

red.append(green)
green.append(blue)

console.log(red);