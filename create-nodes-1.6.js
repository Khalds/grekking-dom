const div = document.createElement('div')
const ulForTask = document.createElement('ul')
const liInsta = document.createElement('li')
const liSite = document.createElement('li')
const aInsta = document.createElement('a')
const aSite = document.createElement('a')

aInsta.textContent = 'Наш инстаграм'
aInsta.href = "https://instagram.com/intocode"
aSite.textContent = 'Наш сайт'
aSite.href = "https://intocode.ru"


div.append(ul)

ul.append(liInsta, liSite)

liInsta.append(aInsta)
liSite.append(aSite)

console.log(div);

document.body.append(div)