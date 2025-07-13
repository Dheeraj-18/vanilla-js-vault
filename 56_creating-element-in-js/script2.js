const container = document.querySelector('.container')

// const imgContainer = document.createElement('div')
// imgContainer.classList.add('img-container')

// const newImage = document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// const paragraph = document.createElement('p')
// paragraph.innerText = 2

// imgContainer.append(newImage, paragraph)

// container.appendChild(imgContainer)
 
//     <-----------------------------------------------------------------------------------------------------------------------------> 

// for (let i = 1; i < 100; i++) {
//   const imgContainer = document.createElement('div')
//   imgContainer.classList.add('img-container')

//   //   const newImage = document.createElement('img')
//   //   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//   //   const paragraph = document.createElement('p')
//   //   paragraph.innerText = i

//   //   imgContainer.append(newImage, paragraph)

//   //   container.appendChild(imgContainer)

//   //          < -------------------------------------------------->  another way doing the same with short line but not use in practice mostly

//   const myHTML = `<div class="img-container">
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
//           alt=""
//         />
//         <p>${i}</p>
//         `
//   imgContainer.innerHTML = myHTML
//   container.append(imgContainer)
// }   <-- unComment form this line first ---> 

//  <-------------------------------------------------------------------------------------------------------------------------------> 

// also doing some codebase  in Industry this way and yes it most fancy common way 

let myHTML = ``
for (let i = 1; i < 10; i++) {
  myHTML += `<div class="img-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
          alt=""
        />
        <p>${i}</p>
      </div>
    `
}

container.innerHTML = myHTML