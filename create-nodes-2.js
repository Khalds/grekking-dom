const wordArr = ['html', 'css', 'js']

let ul = document.createElement('ul')

for (let i = 0; i < wordArr.length; i++) {
  let li = document.createElement('li')
  li.append(wordArr[i])
  ul.append(li)
}

const renderWordArr = (word) => {

  for (let i = 0; i < word.length; i++) {
    let li = document.createElement('li')
    li.append(word[i])
    ul.append(li)
  }
  document.body.append(ul)
  return ul
}

document.body.append(ul)

console.log(renderWordArr(wordArr));



const linkArray = [{
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  }
]

const renderLinkArr = (link) => {
  let ulLink = document.createElement('ul')
  for (let i = 0; i < link.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.textContent = link[i].name
    a.href = link[i].url

    ulLink.append(li)
    li.append(a)
  }
  document.body.append(ulLink)
  return ulLink
}

console.log(renderLinkArr(linkArray));