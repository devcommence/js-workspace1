import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const user = response.data
                this.setState({ user })
            })
    }

    render() {
        return (
            <div>
                <h2>The user name is {this.state.user.name}</h2>
                <h2>The user email is {this.state.user.email}</h2>
                <h3>The address is {this.state.user.address && this.state.user.address.city}</h3>
                <Link to="/users">Back</Link>
            </div>
        )
    }
}

export default UserShow