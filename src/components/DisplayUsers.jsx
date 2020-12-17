import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const DisplayUsers = () => {
const dispatch = useDispatch()
const users = useSelector(state => state.users) 
const fetchUsers = async () => {
  let users = await axios.get('https://reqres.in/api/users')
  dispatch({type: "STORE_USERS", payload: users.data.data})
}

useEffect(fetchUsers, [])

  return (
    <>
      {users && users.map(user => {
        return (
          <h2 key={user.id}>{user.first_name}</h2>
        )
      })}
    </>
  )
}

export default DisplayUsers