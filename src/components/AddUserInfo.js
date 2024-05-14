import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        age: null
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
        //console.log(this.state)
        //
        this.props.handleAddNewUser({
            id : Math.floor((Math.random()*100) + 1) + "-random",
            name : this.state.name,
            age : parseInt(this.state.age)
        })
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

                    <br></br>

                    <label>Your age: </label>
                    <input value={this.state.age} type="text" onChange={this.handleOnChangeAge}></input>

                    <br></br>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo;