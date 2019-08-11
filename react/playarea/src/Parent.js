import React from 'react'
import Child from './Child'
function Parent(props){
    return(
        <div>
            <Child name="karan"/>
            <Child name="arjun"/>
        </div>
    )
}
export default Parent;