import axios from 'axios'
// axios = used to make requests to API and return data from API etc.
import React, { useEffect, useState } from 'react'
// useEffect => Hook => so that React knows that component needs to do something after render
// useState => Hook => allows to have state variables in functional component
// Hook = to use state & co without writing a class

const App = () => {

  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users')
      setUsers(response.data.data)
    } catch (error) {
      setMessage('Sorry, the API responds with: ${error.response.statusText}')
      // Question: error.response.statusText does not seem to work
      // Debugger only works if developer tools open
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  let usersList = users.map((user) => {
    return <li key={user.id}>{user.first_name}</li>
  })

  return (
    <> 
      <h1>Hello World</h1>
      <ul data-cy='users-list'>{usersList}</ul>
      <div data-cy='message'>{message}</div>
    </>
    // <> and </> equivalent to <React.Fragment> => will not be rendered
    // so in a way, better than having a wrapping <div> that will be rendered but no use
  )
}

export default App
