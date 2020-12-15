import React from 'react'
import { useSelector } from 'react-redux'

const DisplayGreeting = () => {
  const message = useSelector(state => state.message)
  return (
    <h1 style={{ color: '#F5CDFD' }}>
      {message.greeting}
    </h1>
  )
}

export default DisplayGreeting