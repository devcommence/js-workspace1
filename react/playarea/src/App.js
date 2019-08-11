import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Counter from './Counter';
import UsersList from './UserList';
import Parent from './Parent';
import UserShow from './UserShow';

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>{props.title}</h1>
                <Link to="/counter-example">counter example</Link>
                <br />
                <Link to="/users">Users List</Link>
                <br />
                <Link to="/parent">Parent example</Link>
                <br />

                <Route path="/counter-example" component={Counter} />
                <Route path="/users" component={UsersList} />
                <Route path="/parent" component={Parent} />
                <Route path="/users-show/:id" component={UserShow} />
            </div>
        </BrowserRouter>
    )
}
export default App