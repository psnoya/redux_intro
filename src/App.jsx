import React, {useState} from 'react'

const App = () => {
  // let message = "Hello World from variable"
  const [message, setMessage ] = useState({greeting: 'Hello World from hooked state using an object'})
  return (
    <>
      <h1>{message.greeting}</h1>
    </>
  )
}

export default App
