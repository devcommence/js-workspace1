import React from 'react'
import axios from 'axios'
import Comment from './Comment';
class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            author: {},
            post: {},
            comments: []
        }
    }
    componentDidMount() {
        const postApiId = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${postApiId}`)
            .then(response => {
                const author = response.data
                this.setState({ author })
            })
            .catch(err => console.log(err))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postApiId}`)
            .then(response => {
                const post = (response.data)
                this.setState({ post })
            })
            .catch(err => console.log(err))
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postApiId}`)
            .then(response => {
                const comments = response.data
                console.log(comments)
                this.setState({ comments })
            })
            .catch(err => console.log(err))
    }
    render() {
        const { name } = this.state.author
        const { title, body } = this.state.post
        // const {body}=this.state.comments
        return (
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <h2>{body}</h2>
                <h2>List of comments {this.state.comments.length}</h2>
                <ul>
                    {this.state.comments.map((comment)=>{
                        return <Comment key={comment.id} body={comment.body}/>
                    })}
                </ul>
            </div>
        )
    }
}
export default PostShow 