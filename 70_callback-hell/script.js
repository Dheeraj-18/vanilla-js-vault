// 🧩 1. Callback Hell
//      📌 Definition:
//         Callback Hell happens when multiple nested callbacks are used to handle asynchronous operations, leading to:
//            Hard-to-read
//            Hard-to-maintain
//            Error-prone code
//      Also called: "Pyramid of Doom"

// 🔁 2. Inversion of Control (IoC)
//        📌 Definition:
// Inversion of Control occurs when you pass control of your program flow to another function or library, often via callbacks.

// You lose control over:
//      When your callback will run
//      How many times it runs
//       Whether it even runs at all

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })

  xhr.open(method, url)
  xhr.send()
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  makeHttpRequest(
    'GET',
    `https://dummyjson.com/users/${usersData.users[0].id}/posts`,
    (postsData) => {
      makeHttpRequest(
        'GET',
        `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,
        (commentsData) => {
          makeHttpRequest(
            'GET',
            `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
            (userData) => {
              console.log(userData)
            }
          )
        }
      )
    }
  )
})
