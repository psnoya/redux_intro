import React, {useState} from 'react'

const App = () => {
  // let message = "Hello World from variable"
  const [message, setMessage ] = useState('Hello World from hooked state')
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
