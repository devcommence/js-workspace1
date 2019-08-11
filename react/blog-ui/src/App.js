import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import PostList from './Post-List'
import PostShow from './Post-Show';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/postlist">Home</Link>
                <Route path="/postlist" component={PostList} />
                <Route path="/posts-show/:id" component={PostShow} />
            </BrowserRouter>
        </div>
    )
}

export default App