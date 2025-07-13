//          <------------------------------  document.createElement()   --------------------------------->

// 1) createElement() method is only defined on document
// 2) In HTML we can create any name HTML but this display inline and we not write such any named tag in our HTML doc
// 3) in the createElement('') we pass a string like div , p  then it return a element corresponding to tag , and if we give the tag name in any case
//    in convert it own in lowercase
// 4) when we create a element its return a empty element so Best practice is to set innerText before it append



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
