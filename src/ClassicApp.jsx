import React, { Component } from 'react'
import axios from 'axios'
import User from './User'

class ClassicApp extends Component {

    state = {
        users: [],
        message: ''
    }

    async fetchUsers() {
        try {
            const response = await axios.get('https://reqres.in/api/users')
            // setUsers(response.data.data) => not possible here, we are in class component and not using the Hook
            this.setState({ users: response.data.data })
        } catch (error) {
            // setMessage(`Sorry, the API responds with ${error.response.statusText}`)
            this.setState({ message: `Sorry, the API responds with ${error.response.statusText}` })
        }
    }

    changeMessage(value) {
        this.setState({ message: value })
    }

    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        let usersList = this.state.users.map((user) => {
            return <User key={user.id} user={user} changeMessage={this.changeMessage.bind(this)} />
        })
        return (
            <>
                <h1>Hello World</h1>
                <ul data-cy='users-list'>{usersList}</ul>
                <div data-cy='message'>{this.state.message}</div>
            </>
        )
    }
}

export default ClassicApp
