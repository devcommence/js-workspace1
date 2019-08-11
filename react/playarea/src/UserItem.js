import React from 'react'
import { Link } from 'react-router-dom'

function UserItem(props) {
    return (
        <li>
            <Link to={`/users-show/${props.id}`}>{props.name}</Link>{props.email}
            {props.name}{props.email}
        </li>
    )
}
export default UserItem