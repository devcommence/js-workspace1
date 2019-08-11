import React from 'react'
import axios from 'axios'
import Author from './Author';
class AuthorList extends React.Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const authors = response.data
                this.setState({ authors })
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.authors.map((author)=>{
                        return <Author key={author.id} name={author.name}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default AuthorList