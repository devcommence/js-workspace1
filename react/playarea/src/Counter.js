import React from 'react'
import Btn from './Btn'
class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Btn text="+" handleClick={this.handleClick} />
            </div>
        )
    }
}
export default Counter