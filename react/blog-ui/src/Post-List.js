import React from 'react'
import axios from 'axios'
import Posts from './Posts';

class PostList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const postData = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(postData)
            .then(response => {
                const posts = response.data
                this.setState({ posts })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <ol>
                    {this.state.posts.map((post) => {
                        return <Posts key={post.id} id={post.id} title={post.title} body={post.body}/>
                    })}
                </ol>
            </div>
        )
    }
}
export default PostList