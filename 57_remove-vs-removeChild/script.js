const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
// const firstImage = document.querySelector('img')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// for (let i = 2; i < 100; i++) {
//   const newImage = firstImage.cloneNode()
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.appendChild(newImage)
// }

const paragraph = document.createElement('p')
// paragraph.innerText ='Hii I am a paragraph '
// paragraph.classList.add('my-par');
// paragraph.id = 'para'

// container.appendChild(paragraph)

// const createImage = document.createElement('img')
// createImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// container.appendChild(createImage)

for (let i = 1; i < 100; i++) {
  const createImage = document.createElement('img')
  createImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container.appendChild(createImage)
}
