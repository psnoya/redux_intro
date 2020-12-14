import React from 'react'
import {useSelector} from "react-redux";

const App = () => {
  // let message = "Hello World from variable"
  // const [message, setMessage ] = useState({greeting: 'Hello World from hooked state using an object'})
  const greeting = useSelector(state => state.greeting)
  return (
    <>
      <h1>{greeting}</h1>
    </>
  )
}

export default App
