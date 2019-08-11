import React from 'react'
import { Link } from 'react-router-dom'
function Posts(props) {
    return (
        <li>
            <Link to={`/posts-show/${props.id}`}>
                {props.title}
            </Link>
            <br />
            {props.body}
        </li>
    )
}
export default Posts