import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'huy',
        age: 19
    }

    handleClick = async () => {
        await this.setState({
            name: `gia huy`
        })
        console.log(`My name is ${this.state.name}`)
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return(
            <div>
                My name is {this.state.name} <br></br>
                I am {this.state.age}<br></br>
                <button onClick={this.handleClick}>Click me</button>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Your name: </label>
                    <input value={this.state.name} type="text" onChange={this.handleOnChangeName}></input>
                    <button>Submit</button>

                    <br></br>

                    <label>Your age: </label>
                    <input value={this.state.age} type="text" onChange={this.handleOnChangeAge}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;