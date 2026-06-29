import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    ;(async function () {
      const response = await fetch('api')
      const data = await response.json()
      console.log(data)
    })()
  }, [])

  return <div>App</div>
}

export default App
