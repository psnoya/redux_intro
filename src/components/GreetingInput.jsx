import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const GreetingInput = () => {
  const dispatch = useDispatch()
  const [newMessage, setNewMessage] = useState()
  return (
    <>
      <input placeholder="Type your new greeting here"
      style ={{color: '#3f9db5'}}
        onBlur={(event) => setNewMessage(event.target.value)}
      />
      <button
        style={{ color: '#5e7ca2' }}
        onClick={() => dispatch({ type: "TEST", payload: newMessage })}
      >Change
      </button>
    </>
  )
}

export default GreetingInput  
