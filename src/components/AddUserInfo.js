import React, { useCallback, useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         age: ''
//     }

//     handleClick = async () => {
//         await this.setState({
//             name: `gia huy`
//         })
//         console.log(`My name is ${this.state.name}`)
//     }

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         //console.log(this.state)
//         //
//         this.props.handleAddNewUser({
//             id : Math.floor((Math.random()*100) + 1) + "-random",
//             name : this.state.name,
//             age : parseInt(this.state.age)
//         })
//     }
//     render() {
//         return(
//             <div>
//                 My name is {this.state.name} <br></br>
//                 I am {this.state.age}<br></br>
//                 <button onClick={this.handleClick}>Click me</button>
//                 <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                     <label>Your name: </label>
//                     <input value={this.state.name} type="text" onChange={(event) => {this.handleOnChangeName(event)}}></input>

//                     <br/>

//                     <label>Your age: </label>
//                     <input value={this.state.age} type="text" onChange={(event) => {this.handleOnChangeAge(event)}}></input>

//                     <br/>

//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleClick = () => {
        setName("gia huy")
        console.log(`My name is ${name}`)
    }

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        //console.log(this.state)
        //
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: name,
            age: parseInt(age)
        })
    }

    return (
        <div>
            My name is {name} <br></br>
            I am {age}<br></br>
            <button onClick={() => handleClick()}>Click me</button>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name: </label>
                <input value={name} type="text" onChange={(event) => { handleOnChangeName(event) }}></input>

                <br />

                <label>Your age: </label>
                <input value={age} type="text" onChange={(event) => { handleOnChangeAge(event) }}></input>

                <br />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo;