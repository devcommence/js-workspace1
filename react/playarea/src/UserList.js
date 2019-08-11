import React from 'react'
import axios from 'axios'

import UserItem from './UserItem'

class UsersList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data)
                const users = response.data
                this.setState({ users })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h2>List of users-{this.state.users.length}</h2>
                <ul>
                    {this.state.users.map((user) => {
                        return <UserItem key={user.id} id={user.id} name={user.name} email={user.email} />
                    })}
                </ul>
            </div>
        )
    }
}

export default UsersList