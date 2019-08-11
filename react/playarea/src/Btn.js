import React from 'react'
function Btn(props) {
    return <button onClick={props.handleClick}>{props.text}</button>
}
export default Btn