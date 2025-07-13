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
for (let i = 1; i < 100; i++) {
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


//__________________________________________________________________________________________________________________________________________________


//  <------------------------------------ remove() vs removeChild() ---------------------------------------------> 

// NOTE-1: removeChild() use on parent not on which element which is to be deleted ,  parentElement.removeChild(myImg)
// NOTE-2: remove() in new and we directly apply on element which we want to delete 
// NOTE-3: There is a catch here when we apply remove() on any element it remove and not appear on DOM or also viewport but in browser memory 
//         there variable hold there value after even remove() and we again use it for append 
//        Solution: is not store in variable while selecting the element which we want to delete direct apply remove() method after selection 
//         OR,      store in let variable so that after remove() set the value null then it free the memory 


let myImg = document.querySelector("body > div > div:nth-child(5)")
myImg.remove()
myImg = null 